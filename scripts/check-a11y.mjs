import { spawnSync } from "node:child_process";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const axeCli = resolve(
  root,
  "node_modules",
  ".pnpm",
  "@axe-core+cli@4.11.3",
  "node_modules",
  "@axe-core",
  "cli",
  "dist",
  "src",
  "bin",
  "cli.js",
);
const chromedriver = resolve(
  root,
  "node_modules",
  "chromedriver",
  "lib",
  "chromedriver",
  process.platform === "win32" ? "chromedriver.exe" : "chromedriver",
);

const urls =
  process.argv.slice(2).length > 0
    ? process.argv.slice(2)
    : [
        "http://127.0.0.1:4321/",
        "http://127.0.0.1:4321/work/test4test/",
      ];

const chromeOptions = [
  "--headless=new",
  "--disable-gpu",
  "--no-sandbox",
  "--disable-dev-shm-usage",
  "--disable-crash-reporter",
  "--disable-features=Crashpad",
  `--user-data-dir=${resolve(root, ".axe-chrome")}`,
].join(" ");

const result = spawnSync(
  process.execPath,
  [
    axeCli,
    ...urls,
    "--exit",
    "--chromedriver-path",
    chromedriver,
    `--chrome-options=${chromeOptions}`,
  ],
  {
    stdio: "inherit",
  },
);

if (result.error) {
  console.error(result.error.message);
  process.exit(1);
}

process.exit(result.status ?? 1);
