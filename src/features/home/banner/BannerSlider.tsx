"use client";
import Slider from "@/components/widgets/Slider";
import { BannerHomeData } from "@/types/Home.type";
import BannerItem from "./BannerItem";

type Props = {
	dataSource: BannerHomeData[];
};
export default function BannerSlider({ dataSource }: Props) {
	const renderItem = (data: BannerHomeData) => {
		return <BannerItem key={data.id} data={data}></BannerItem>;
	};
	return (
		<Slider
			autoplay={false}
			dataSource={dataSource}
			render={renderItem}></Slider>
	);
}
