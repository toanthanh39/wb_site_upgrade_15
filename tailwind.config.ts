import type { Config } from "tailwindcss";

export default {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/features/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			zIndex: {
				header: "1001",
				footer: "1001",
				modal: "3001",
				tooltip: "4001",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				colors: {
					gray: {
						1: "#f6e9e9",
						2: "#f7f7f7",
						3: "#d8d7d8",
						4: "#898889",
						5: "#3a393a",
					},
					red: {
						5: "#d72229",
					},
					blue: {
						5: "#004b8f",
					},
				},
			},
			fontFamily: {
				inter: ["Inter", "sans-serif"],
				noto: ["Noto Serif Display", "serif"],
			},
			fontSize: {
				base: "14px",
				sm: "12px",
			},

			keyframes: {
				"modal-up": {
					"0%": { transform: "translate(-50%,-50%)", opacity: "1" },
					"100%": { transform: "translate(-50% , -100%)", opacity: "0" },
				},
				"modal-down": {
					"0%": { transform: "translate(-50% , -100%)", opacity: "0" },
					"100%": { transform: "translate(-50% , -50%)", opacity: "1" },
				},

				"drawer-up": {
					"0%": { transform: "translate(-50% , -0%)", opacity: "0" },
					"100%": { transform: "translate(-50% , -0%)", opacity: "1" },
				},
				"drawer-down": {
					"0%": { transform: "translate(-50%,-0%)", opacity: "1" },
					"100%": { transform: "translate(-50% , -0%)", opacity: "0" },
				},

				fade: {
					"0%": { opacity: "0" },
					"100%": { opacity: "1" },
				},
				fadeOut: {
					"0%": { opacity: "1" },
					"100%": { opacity: "0" },
				},

				fadeInUp: {
					"0%": { opacity: "0", transform: "translateY(60px)" },
					"100%": { opacity: "1", transform: "translateY(0)" },
				},
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"modal-up": "modal-up 0.3s   ",
				"modal-down": "modal-down 0.3s ",
				"drawer-up": "drawer-up 0.3s   ",
				"drawer-down": "drawer-down 0.3s ",
				fade: "fade 0.3s ease-in-out forwards",
				fadeOut: "fadeOut 0.3s ease-in-out forwards",
				fadeInUp: "fadeInUp 0.3s linear forwards",
			},
		},
		container: {
			center: true,
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1280px", // Ghi đè giá trị cho '2xl'
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		function ({ addUtilities }: { addUtilities: any }) {
			addUtilities({
				".hide-scroll-bar": {
					/* Ẩn thanh cuộn cho trình duyệt Webkit (Chrome/Safari) */
					"::-webkit-scrollbar": {
						display: "none",
					},
					/* Firefox */
					"scrollbar-width": "none",
					/* IE và Edge */
					"-ms-overflow-style": "none",
				},
			});
		},
	],
} satisfies Config;
