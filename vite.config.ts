import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa"

export default defineConfig({
	// github pages serves the app under /<repo>/, docker serves it at the root
	base: process.env.BASE_PATH ?? "/",
	plugins: [
		react(),
		VitePWA({
			registerType: "autoUpdate",
			includeAssets: ["favicon.ico", "robots.txt"],
			manifest: {
				name: "Puzzle Game",
				short_name: "Puzzle",
				description: "Sliding puzzle game",
				display: "standalone",
				orientation: "portrait",
				theme_color: "#ac7835",
				background_color: "#ffffff",
				icons: [
					{ src: "logo192.png", sizes: "192x192", type: "image/png" },
					{ src: "logo512.png", sizes: "512x512", type: "image/png" },
					{
						src: "logo512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "maskable"
					}
				]
			},
			workbox: {
				globPatterns: ["**/*.{js,css,html,ico,png,jpg,svg,woff2}"]
			}
		})
	],
	// aliases come from the paths in tsconfig.json
	resolve: { tsconfigPaths: true },
	build: { outDir: "build" },
	server: {
		port: 3005,
		host: "0.0.0.0"
	}
})
