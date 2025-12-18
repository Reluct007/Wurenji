/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'https://api-kappa-one-58.vercel.app/api/:path*',
			},
		];
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
				port: "",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "randomuser.me",
				port: "",
				pathname: "/**"
			}
		]
	}
};

export default nextConfig;
