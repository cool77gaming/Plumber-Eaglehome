const isGithubActions = process.env.GITHUB_ACTIONS === "true";

// When deployed to GitHub Pages without a custom domain, the site is served
// from https://<user>.github.io/<repo>/ instead of the domain root, so every
// asset/link needs the repo name prefixed. Local dev and a custom-domain
// deploy (see public/CNAME) both want basePath "" — only CI sets it.
let basePath = "";
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repoName = process.env.GITHUB_REPOSITORY.split("/")[1];
  basePath = `/${repoName}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  images: {
    // GitHub Pages has no image-optimization server; ship raw <img> output.
    unoptimized: true,
  },
};

export default nextConfig;
