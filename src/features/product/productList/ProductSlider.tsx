"use client";

import Slider from "@/components/widgets/Slider";
import { ProductJson } from "@/types/Product.type";
import { useCallback } from "react";
import ProductCard from "./ProductCard";

type Props = {
	dataSource: ProductJson[];
};
export default function ProductSlider({ dataSource }: Props) {
	const render = (product: ProductJson) => {
		return <ProductCard key={product.id} product={product}></ProductCard>;
	};

	return (
		<aside>
			<Slider
				dataSource={dataSource}
				render={render}
				pagination={false}
				slidesPerView={6}
				updateOnWindowResize={true}
				freeMode={true}
				watchOverflow={false}
				breakpoints={{
					1220: {
						slidesPerView: 6,
						spaceBetween: 16,
					},

					768: {
						slidesPerView: 4,
						spaceBetween: 16,
					},

					413: {
						slidesPerView: 2,
						spaceBetween: 0,
						centeredSlides: true,
						centeredSlidesBounds: true,
					},
					0: {
						slidesPerView: 2,
						spaceBetween: 0,
						centeredSlides: true,
						centeredSlidesBounds: true,
					},
				}}
			/>
		</aside>
	);
}
