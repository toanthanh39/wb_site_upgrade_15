"server-only";
import server, { Config } from "@/lib/core/server";
import { SettingCollectionJson, SettingJson } from "@/types/Setting.type";
import { detectLangForServer } from "@/utils/detectServer";
import Helper from "@/utils/helper";

const URL_PUBLIC = process.env.NEXT_PUBLIC_API_BASE_URL + "/settings/public";
const DOMAIN = process.env.NEXT_PUBLIC_API_BASE_DOMAIN;
const TIME_CACHE = 60;

// server
export const getSettingServer = async <D>(key: string, config?: Config) => {
	const lang = await detectLangForServer();
	const params = {
		domain: DOMAIN,
		lang: lang,
	};
	return server.get<SettingJson<D>>(URL_PUBLIC + "/" + key, {
		...config,
		cache: "force-cache",
		next: {
			revalidate: TIME_CACHE,
		},
		params: { ...Helper.convertParams(params) },
	});
};

export async function getMultiSettingServer<V>(
	keys: string,
	config?: Config,
	isRoot?: boolean
) {
	const langServer = !isRoot ? await detectLangForServer() : undefined;
	const params = {
		domain: DOMAIN,
		keys: keys,
		lang: langServer,
	};
	return server.get<SettingCollectionJson<V>>(URL_PUBLIC, {
		...config,
		cache: "force-cache",
		next: {
			revalidate: TIME_CACHE,
		},
		params: { ...Helper.convertParams(params) },
	});
}
