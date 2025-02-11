import { Locale } from "@/types/Locale.type";
import { headers } from "next/headers";

export const i18n = {
	defaultLocale: "vi",
	locales: ["en", "vi"],
} as const;

export async function detectLangForServer() {
	try {
		const _headers = await headers();
		return (_headers.get("lang") as Locale) || i18n.defaultLocale;
	} catch (error) {
		return i18n.defaultLocale;
	}
}

export async function detectTimeServer() {
	try {
		// const _headers = await headers();
		return Math.floor(Number(Date.now() / 1000));
	} catch (error) {
		return 0;
	}
}
