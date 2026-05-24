import { spawnSync } from "node:child_process";

const [command, ...args] = process.argv.slice(2);

if (!command) {
  console.error("Usage: node scripts/run.mjs <command> [...args]");
  process.exit(1);
}

const result = spawnSync(command, args, {
  env: {
    ...process.env,
    ASTRO_TELEMETRY_DISABLED: "1",
  },
  shell: process.platform === "win32",
  stdio: "inherit",
});

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
