"use client";

import CustomImage from "@/components/ui/CustomImage";
import LinkElement from "@/components/ui/Link";
import { BannerHomeData } from "@/types/Home.type";

type Props = {
	data: BannerHomeData;
};
export default function BannerItem({ data }: Props) {
	return (
		<LinkElement href={data.link} key={data.id}>
			<picture>
				<source media="(max-width:767px)" srcSet={data.image_mobile} />

				<source media="(min-width:767px)" srcSet={data.image} />

				<CustomImage
					alt={data.alt}
					src={data.image}
					loading="eager"
					height={52}
					width={100}
					layout="responsive"></CustomImage>
			</picture>
		</LinkElement>
	);
}
