const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Configure `pageExtensions` to include MDX files
  basePath: process.env.NODE_ENV === "production" ? "/components" : "",
  assetPrefix:
    process.env.NODE_ENV === "production" ? "/components" : undefined,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

module.exports = withMDX(nextConfig);
