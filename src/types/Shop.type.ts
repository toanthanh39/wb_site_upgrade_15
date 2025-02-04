export interface SystemSetting extends LanguageSettingJson {
	pagination_limit: number;
	store_id: number;
}

type LanguageSettingJson = {
	key: string;
	label: string;
	url: string;
	lang: string;
	version: string;
};
