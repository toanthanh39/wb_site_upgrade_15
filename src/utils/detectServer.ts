import { Locale } from "@/types/Locale.type";
import { headers } from "next/headers";

export const i18n = {
	defaultLocale: "vi",
	locales: ["en", "vi"],
} as const;

export async function detectLangForServer() {
	const _headers = await headers();

	return (_headers.get("lang") as Locale) || i18n.defaultLocale;
}

export async function detectTimeServer() {
	try {
		const _headers = await headers();
		return Number(_headers.get("executionAt"));
	} catch (error) {
		return 0;
	}
}
