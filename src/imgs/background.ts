const BACK_GROUND_IMAGES_PORTRAIT: string[] = [
	"wallpaper/background1.jpg",
	"wallpaper/background2.jpg",
	"wallpaper/background3.jpg",
	"wallpaper/background4.jpg",
	"wallpaper/background5.jpg",
	"wallpaper/background6.jpg",
	"wallpaper/background7.jpg",
	"wallpaper/background8.jpg",
	"wallpaper/background9.jpg"
]

const IMAGE_URLS = import.meta.glob<string>("./wallpaper/*.jpg", {
	eager: true,
	import: "default"
})

const getImageUrl = (path: string | null) =>
	path ? IMAGE_URLS[`./${path}`] : undefined

export { BACK_GROUND_IMAGES_PORTRAIT, getImageUrl }
