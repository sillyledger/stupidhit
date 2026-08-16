const { Resvg } = require("@resvg/resvg-js");
const fs = require("fs");
const path = require("path");
const pngToIco = require("png-to-ico").default;

const repoRoot = path.join(__dirname, "..");
const svgPath = path.join(repoRoot, "app/icon.svg");
const svg = fs.readFileSync(svgPath, "utf8");

const fontFiles = [
  path.join(repoRoot, "app/fonts/RedditSans-Variable.ttf"),
  path.join(repoRoot, "app/fonts/RedditMono-Variable.ttf"),
];

function render(size, background) {
  const resvg = new Resvg(svg, {
    fitTo: { mode: "width", value: size },
    background,
    font: {
      fontFiles,
      loadSystemFonts: false,
      defaultFontFamily: "Reddit Sans",
    },
  });
  const pngData = resvg.render();
  return pngData.asPng();
}

async function main() {
  const appleIcon = render(180, "#7EE8B8");
  fs.writeFileSync(path.join(repoRoot, "app/apple-icon.png"), appleIcon);
  console.log("wrote app/apple-icon.png", appleIcon.length, "bytes");

  const sizes = [16, 32, 48];
  const pngBuffers = sizes.map((s) => render(s, "rgba(0,0,0,0)"));
  const icoBuffer = await pngToIco(pngBuffers);
  fs.writeFileSync(path.join(repoRoot, "app/favicon.ico"), icoBuffer);
  console.log("wrote app/favicon.ico", icoBuffer.length, "bytes");

  // High-res transparent version for compositing into the OG image
  const ogSeal = render(480, "rgba(0,0,0,0)");
  fs.writeFileSync(path.join(repoRoot, "app/opengraph-seal.png"), ogSeal);
  console.log("wrote app/opengraph-seal.png", ogSeal.length, "bytes");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
