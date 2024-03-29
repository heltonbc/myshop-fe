/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["https://myshop-be-production.up.railway.app"],
    },
};

module.exports = nextConfig;
