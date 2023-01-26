/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.img.avito.st',
            },
        ],
    },
}

module.exports = nextConfig
