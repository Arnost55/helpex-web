import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

process.env.NEXT_TELEMETRY_DISABLED = "1";
const nextBin = resolve("node_modules/next/dist/bin/next");
const result = spawnSync(process.execPath, [nextBin, "build"], { stdio: "inherit", env: process.env });
process.exit(result.status ?? 1);
