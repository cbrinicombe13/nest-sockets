const nextConfig = {
    async rewrites() {
        return [
            // Rewrite everything else to use `pages/index`
            {
                source: '/:path*',
                destination: '/',
            },
        ];
    },
}

module.exports = nextConfig
