/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	basePath: process.env.NODE_ENV === "production" ? "" : undefined,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "pbs.twimg.com",
				port: "",
				pathname: "/**/*",
			},
		],
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
