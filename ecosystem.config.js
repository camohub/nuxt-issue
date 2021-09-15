module.exports = {
	apps: [
		{
			name: "Development",
			exec_mode: "cluster",
			instances: "max", // Or a number of instances
			cwd: "/var/www/portaldev/current",
			script: "./current/node_modules/nuxt/bin/nuxt.js",
			args: "start",
			env: {
				PORT: 8001,
				NODE_ENV: "development",
			},
		},
		{
			name: "Production",
			exec_mode: "cluster",
			instances: "max", // Or a number of instances
			cwd: "/var/www/portal.lurity.com/current",
			script: "./current/node_modules/nuxt/bin/nuxt.js",
			args: "start",
			env: {
				PORT: 8010,
				NODE_ENV: "production",
			},
		},
	],
};
