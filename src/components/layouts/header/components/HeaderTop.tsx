import { translations } from "@/lib/data/locales";
import { getMultiSettingServer } from "@/services/api/setting/server";
import { mapKeysToSettingValues } from "@/utils/detectSetting";
import { notFound } from "next/navigation";
import HeaderTopLeft from "./HeaderTopLeft";
import HeaderTopRignt from "./HeaderTopRignt";

const keyTranslates = [...Object.values(translations.header.top)];

async function getDataServer() {
	const keys = keyTranslates.join(",");
	try {
		const data = await getMultiSettingServer<string>(keys);

		return data.items;
	} catch (error) {
		notFound();
	}
}
export default async function HeaderTop() {
	const data = await getDataServer();

	const t = mapKeysToSettingValues(keyTranslates, data);
	return (
		<section className="bg-white  py-2 border-b border-b-colors-gray-2">
			<div className="container flex ">
				<HeaderTopLeft
					data={[t.header_top_left_1, t.header_top_left_2]}></HeaderTopLeft>
				<HeaderTopRignt title={t.order_tracking} />
			</div>
		</section>
	);
}
