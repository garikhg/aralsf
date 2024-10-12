/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: process.env.NEXT_PUBLIC_WORDPRESS_HOSTNAME,
                port: "",
                pathname: "/**",
            },
        ],
    }
};

export default nextConfig;
