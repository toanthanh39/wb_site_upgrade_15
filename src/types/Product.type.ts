import { BaseCollectionJson } from "./Base.type";
import { Filter } from "./Filter.type";

export type ProductJson = {
	name: string;
	id: number;
	price: number;
	sku: number;
	description: string;
};

export type ProductFilter = Filter & {
	list_product_id?: string;
	parent_id?: number;
	store_id?: number;
	show_promotion_price?: IsShowPromotionPrice;
};

export enum IsShowPromotionPrice {
	hide,
	show,
}

export type ProductListJson = BaseCollectionJson<ProductJson>;
