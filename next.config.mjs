/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 开启静态导出
  images: { unoptimized: true }, // 静态模式必须关闭图片优化
};

export default nextConfig;
