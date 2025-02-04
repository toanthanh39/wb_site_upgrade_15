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
