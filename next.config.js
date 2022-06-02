const path = require('path')


/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    MONGO_URL: "mongodb+srv://mahesh2885858:8096723745-Aa@cluster0.7fcuy.mongodb.net/storage1?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
