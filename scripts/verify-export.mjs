import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";

const root = resolve("out");
const basePath = (process.env.SITE_BASE_PATH ?? "").replace(/\/$/, "");
const required = ["index.html", "product/index.html", "architecture/index.html", "security/index.html", "developers/index.html", "about/index.html", "contact/index.html", "robots.txt", "sitemap.xml", "_headers"];
const failures = [];
for (const item of required) if (!existsSync(join(root, item))) failures.push(`Missing export file: ${item}`);

const htmlFiles = [];
function walk(directory) {
  for (const entry of readdirSync(directory)) {
    const path = join(directory, entry);
    if (statSync(path).isDirectory()) walk(path);
    else if (extname(path) === ".html") htmlFiles.push(path);
  }
}
if (existsSync(root)) walk(root);

const links = new Set();
for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  if (!/<title>[^<]+<\/title>/i.test(html)) failures.push(`Missing title: ${file}`);
  if (!/<meta name="description" content="[^"]+"/i.test(html)) failures.push(`Missing description: ${file}`);
  if (/<script[^>]+src="https?:\/\//i.test(html)) failures.push(`External script found: ${file}`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (value.startsWith("/") && !value.startsWith("//")) links.add(value.split(/[?#]/, 1)[0]);
  }
}

function resolves(path) {
  if (basePath && (path === basePath || path.startsWith(`${basePath}/`))) path = path.slice(basePath.length) || "/";
  if (!path || path === "/") return existsSync(join(root, "index.html"));
  const target = join(root, decodeURIComponent(path).replace(/^\//, ""));
  return existsSync(target) || existsSync(join(target, "index.html")) || existsSync(`${target}.html`);
}
for (const link of links) if (!resolves(link)) failures.push(`Broken local export link: ${link}`);

console.log(JSON.stringify({ htmlPages: htmlFiles.length, internalAssetsAndRoutesChecked: links.size, requiredFiles: required.length, failures }, null, 2));
if (failures.length) process.exit(1);
