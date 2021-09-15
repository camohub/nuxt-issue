export default {
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "nuxt",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},
	server: {
		port: process.env.PORT, // default: 3000
		host: process.env.HOST, // default: localhost
	},
	modern: true,

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		"@nuxtjs/eslint-module",
		"@nuxtjs/composition-api/module"
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		"@nuxtjs/axios",
		
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		proxy: true,
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		transpile: ["vuex-stores"]
	},
};
