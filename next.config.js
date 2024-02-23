/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true}
}

module.exports = nextConfig

module.exports = {
    images: {
      domains: ['res.cloudinary.com', 'blog.awm-global.org', 'flowbite.s3.amazonaws.com'],
    },
  };