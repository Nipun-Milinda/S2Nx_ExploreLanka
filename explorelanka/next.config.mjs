/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['mui-tel-input'],
  experimental: {
    serverComponentsExternalPackages: ['sequelize'],
  },
};

export default nextConfig;
