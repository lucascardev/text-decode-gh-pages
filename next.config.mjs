/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS || false

let assetPrefix = ''
let basePath = '/'

const repo = 'text-decode-gh-pages'

if (isGithubActions) {
    // trim off `<owner>/`
    const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  
    assetPrefix = `/${repo}/`
    basePath = `/${repo}`
  }

const nextConfig = {
    assetPrefix: assetPrefix,
    basePath: basePath,
    images: {
        loader: 'imgix',
        path: 'the "domain" of your Imigix source',
      },
};



export default nextConfig;
