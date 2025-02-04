"use client";

import Text from "@/components/ui/Text";
import Slider from "@/components/widgets/Slider";
import { useCallback } from "react";

export default function HeaderTopLeft({ data }: { data: string[] }) {
	const renderItem = useCallback(
		(text: string) => {
			return <Text.p>{text}</Text.p>;
		},
		[data]
	);
	return (
		<div className="w-1/2">
			<Slider
				dataSource={data}
				effect="fade"
				render={renderItem}
				slidesPerView={1}
				spaceBetween={30}
				navigation={false}
				allowTouchMove={false}
				fadeEffect={{ crossFade: true }}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
					waitForTransition: true,
				}}
				pagination={false}></Slider>
		</div>
	);
}
