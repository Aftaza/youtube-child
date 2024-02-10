/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "avatars.githubusercontent.com"
            },
            {
                hostname: "i.ytimg.com"
            },
            {
                hostname: "yt3.ggpht.com"
            },
        ]
    }
}

module.exports = nextConfig