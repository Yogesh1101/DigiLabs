/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

withPWA({
  dest: "public",
});

const nextConfig = {};

export default withPWA(nextConfig);
