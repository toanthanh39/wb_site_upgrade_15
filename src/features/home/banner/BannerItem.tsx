"use client";

import CustomImage from "@/components/ui/CustomImage";
import LinkElement from "@/components/ui/Link";
import { BannerHomeData } from "@/types/Home.type";

type Props = {
	data: BannerHomeData;
};
export default function BannerItem({ data }: Props) {
	return (
		<LinkElement className="block" href={data.link} key={data.id}>
			{/* <picture>
				<source
					media="(max-width:767px)"
					srcSet={data.image_mobile + "?format=webp"}
					type="image/webp"
				/>

				<source
					media="(min-width:767px)"
					srcSet={data.image + "?format=webp"}
					type="image/webp"
				/>

			
			</picture> */}
			<CustomImage
				className=" md:hidden"
				alt={data.alt}
				src={data.image_mobile}
				loading="eager"
				height={1}
				width={1}
				layout="responsive"></CustomImage>
			<CustomImage
				className="hidden md:block"
				alt={data.alt}
				src={data.image}
				loading="eager"
				height={52}
				width={100}
				layout="responsive"></CustomImage>
		</LinkElement>
	);
}
