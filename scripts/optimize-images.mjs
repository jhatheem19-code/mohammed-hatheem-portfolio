import sharp from "sharp";
import { existsSync } from "node:fs";

const files = [
  "src/assets/profile.png",
  "src/assets/team/asif.png",
  "src/assets/projects/ai-faq.png",
  "src/assets/projects/ai-studybuddy.png",
  "src/assets/projects/business-ecommerce.png",
  "src/assets/projects/business-landing.png",
];

for (const input of files) {
  if (!existsSync(input)) {
    console.error(`MISSING: ${input}`);
    process.exitCode = 1;
    continue;
  }

  const output = input.replace(/\.png$/i, ".webp");

  const info = await sharp(input)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(output);

  console.log(
    `${output}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`
  );
}