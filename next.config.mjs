/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: "/fonts/(.*)",
				headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
			},
		];
	},
};

export default nextConfig;
