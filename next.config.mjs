/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: process.env.BASE_URL,
        ESTABLISHMENT: process.env.ESTABLISHMENT
    }
};

export default nextConfig;
