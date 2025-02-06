import { ProductFilter } from "./Product.type";

export type SectionJson = {
	type: string;
	id: number;
	handle: string;
	title: string;
	title_more: string;
	link: string;
	link_more: string;
	from_time: number;
	to_time: number;
	dataSource?: SectionCollectionInfor;
};

export type SectionCollectionInfor = {
	params: ProductFilter;
};

export type BannerHomeData = {
	id: number;
	image: string;
	image_mobile: string;
	title: string;
	link: string;
	width: number;
	height: number;
	alt: string;
	from_time?: number;
	to_time?: number;
};
