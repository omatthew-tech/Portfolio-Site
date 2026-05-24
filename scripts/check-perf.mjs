import { spawnSync } from "node:child_process";

const result = spawnSync("lhci", ["autorun", "--config=./lighthouserc.json"], {
  shell: true,
  stdio: "inherit",
});

if (result.error) {
  console.error("Unable to start Lighthouse CI:", result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
