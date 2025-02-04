import { BaseCollectionJson } from "./Base.type";
import { Locale } from "./Locale.type";

export type SettingJson<V> = {
	key: string;
	value: V;
	id: number;
	group: string;
	lang: Locale;
};

export type SettingCollectionJson<V> = BaseCollectionJson<SettingJson<V>>;
