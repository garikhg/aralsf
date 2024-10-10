/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'aralsf-backend.code-craft.am',
                port: "",
                pathname: "/**",
            },
        ],
    }
};

export default nextConfig;
