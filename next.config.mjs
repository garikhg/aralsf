/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: process.env.PROTOCOL || "https",
                hostname: process.env.NEXT_PUBLIC_WORDPRESS_HOSTNAME,
                port: "",
                pathname: "/**",
            },
        ],
    }
};

export default nextConfig;
