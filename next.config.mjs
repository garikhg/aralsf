/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: process.env.WORDPRESS_HOSTNAME || 'aralsf-backend.code-craft.am',
                port: "",
                pathname: "/**",
            },
        ],
    }
};

export default nextConfig;
