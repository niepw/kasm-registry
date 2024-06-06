/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'My Kasm Registry',
    description: 'My list of Kasm workspaces.',
    icon: 'https://niepw.github.io/kasm-registry/1.0/favicon.ico',
    listUrl: 'https://niepw.github.io/kasm-registry/',
    contactUrl: 'https://github.com/niepw/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
