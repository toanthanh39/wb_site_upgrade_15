// components/Slider.js

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";

import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/effect-fade";

import {
	Pagination,
	Navigation,
	Scrollbar,
	Grid,
	Keyboard,
	Mousewheel,
	Parallax,
	A11y,
	FreeMode,
} from "swiper/modules";
import { SwiperProps } from "swiper/react";

type SliderProps<D> = SwiperProps & {
	dataSource: D[];
	render: (item: D, index: number) => React.ReactNode;
};

export default function Slider<D>({
	dataSource,
	render,
	...props
}: SliderProps<D>) {
	return (
		<Swiper
			modules={[
				Pagination,
				Navigation,
				Scrollbar,
				Grid,
				Keyboard,
				Mousewheel,
				Parallax,
				A11y,
				FreeMode,
			]}
			pagination={{ clickable: true }}
			// onSlideChange={() => console.log("slide change")}
			// onSwiper={(swiper) => console.log(swiper)}
			{...props}>
			{dataSource.map((data, index) => (
				<SwiperSlide key={index}>{render(data, index)}</SwiperSlide>
			))}
		</Swiper>
	);
}
