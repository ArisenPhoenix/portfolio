/** @type {import('next').NextConfig} */

const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {},
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },
};

module.exports = withCss(
  withPurgeCss({
    purgeCssPaths: ["pages/**/*", "Components/**/*"],
  })
);
module.exports = nextConfig;
