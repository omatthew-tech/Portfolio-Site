import { readFileSync, writeFileSync } from "node:fs";

const design = readFileSync("DESIGN.md", "utf8");
const frontmatter = design.match(/^---\n([\s\S]*?)\n---/)?.[1];

if (!frontmatter) {
  throw new Error("DESIGN.md frontmatter was not found.");
}

function section(name) {
  const match = frontmatter.match(
    new RegExp(`^${name}:\\n([\\s\\S]*?)(?=^\\w|\\Z)`, "m"),
  );
  return match?.[1] ?? "";
}

function flatMap(sectionName) {
  const result = {};
  for (const line of section(sectionName).split("\n")) {
    const match = line.match(
      /^\s{2}"?([\w-]+)"?:\s+(?:"([^"]+)"|([^\s#]+))(?:\s+#.*)?$/,
    );
    if (match) {
      const value = (match[2] ?? match[3]).trim();
      result[match[1]] = /^#[\da-f]{3,8}$/i.test(value)
        ? value.toLowerCase()
        : value;
    }
  }
  return result;
}

function typography() {
  const result = {};
  let current = null;

  for (const line of section("typography").split("\n")) {
    const token = line.match(/^\s{2}([\w-]+):\s*$/);
    if (token) {
      current = token[1];
      result[current] = {};
      continue;
    }

    const prop = line.match(/^\s{4}([\w]+):\s+(.+?)(?:\s+#.*)?$/);
    if (current && prop) {
      result[current][prop[1]] = prop[2].replace(/^"|"$/g, "").trim();
    }
  }

  return result;
}

const colors = flatMap("colors");
const spacing = flatMap("spacing");
const rounded = flatMap("rounded");
const type = typography();

const fontFamily = (value, fallback) => {
  const family = value?.includes(" ") ? `"${value}"` : value;
  return `${family}, ${fallback}`;
};

const css = `@theme {
${Object.entries(colors)
  .map(([name, value]) => `  --color-${name}: ${value};`)
  .join("\n")}

  --font-sans: ${fontFamily(type["body-md"]?.fontFamily ?? "Inter", "system-ui, sans-serif")};
  --font-display: ${fontFamily(type["display-xl"]?.fontFamily ?? "Instrument Serif", "Georgia, serif")};
  --font-mono: "JetBrains Mono", "SFMono-Regular", Consolas, monospace;

${Object.entries(spacing)
  .map(([name, value]) => `  --spacing-${name}: ${value};`)
  .join("\n")}

${Object.entries(rounded)
  .map(([name, value]) => `  --radius-${name}: ${value};`)
  .join("\n")}

  --shadow-elev-1: 0 1px 2px rgba(10, 10, 10, 0.06);
  --shadow-elev-2: 0 8px 24px rgba(10, 10, 10, 0.08);
  --shadow-elev-focus: 0 0 0 3px rgba(0, 107, 117, 0.45);
}
`;

writeFileSync("src/styles/tokens.css", css);
console.log("Wrote src/styles/tokens.css from DESIGN.md");
