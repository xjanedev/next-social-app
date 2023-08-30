"use strict";

/** @type {import('next').NextConfig} */
var nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ["cdn.sanity.io"]
  }
};
module.exports = nextConfig;