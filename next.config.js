/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['yt3.googleusercontent.com', 'avatars.githubusercontent.com', 'images.unsplash.com', 'dih6tqxrn8ffv.cloudfront.net', 'i.ytimg.com', 'images.ctfassets.net', 'dl.airtable.com', 'v5.airtableusercontent.com']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  }
}

module.exports = nextConfig
