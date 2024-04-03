/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["wefit-react-web-test.s3.amazonaws.com"],
  },
};

export default nextConfig;
