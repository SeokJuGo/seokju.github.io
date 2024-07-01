/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: "export",
    images: {
        loader: "akamai",
        path: "",
    },
    assetPrefix: "/seokju.github.io/",
};

export default nextConfig;
