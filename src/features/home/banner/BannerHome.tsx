import { SettingConst } from "@/common/constants/setting";
import Slider from "@/components/widgets/Slider";
import { getSettingServer } from "@/services/api/setting/server";
import { BannerHomeData } from "@/types/Home.type";
import { detectTimeServer } from "@/utils/detectServer";
import { checkActiveDate } from "@/utils/utils";
import BannerSlider from "./BannerSlider";

async function customFunction() {
	try {
		const res = await getSettingServer<BannerHomeData[]>(
			SettingConst.home.banner_home
		);

		const timeServer = await detectTimeServer();
		return res.value.filter((i) =>
			checkActiveDate(timeServer, i.from_time, i.to_time)
		);
	} catch (error) {
		console.log("🚀 ~ customFunction ~ error:", error);
		return [];
	}
}

export default async function BannerHome() {
	const data = await customFunction();
	console.log("🚀 ~ BannerHome ~ data:", data);
	return (
		<section className="w-full relative">
			<BannerSlider dataSource={data}></BannerSlider>
		</section>
	);
}
