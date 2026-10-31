import sharp from "sharp";

const input = "src/assets/profile.webp";
const output = "public/og-image.jpg";

const info = await sharp(input)
  .resize(1200, 630, { fit: "cover", position: sharp.strategy.attention })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(output);

console.log(`${output}  ${info.width}x${info.height}  ${Math.round(info.size / 1024)} KB`);
