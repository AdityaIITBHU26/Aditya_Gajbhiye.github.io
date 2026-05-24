import nextMDX from '@next/mdx';

import { recmaPlugins } from './src/mdx/recma.mjs';
import { rehypePlugins } from './src/mdx/rehype.mjs';
import { remarkPlugins } from './src/mdx/remark.mjs';

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],

  // Updated image config — works on Vercel
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  experimental: {
    scrollRestoration: true,
  },

  // Suppress specific build warnings that are harmless
  typescript: {
    // Set to false if you want build to fail on TS errors
    ignoreBuildErrors: false,
  },

  eslint: {
    // Set to false if you want build to fail on lint errors  
    ignoreDuringBuilds: true,
  },
};

export default withMDX(nextConfig);
