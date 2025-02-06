import client from "@/lib/core/client";
import { ProductFilter, ProductListJson } from "@/types/Product.type";
import Helper from "@/utils/helper";

const URL_PUBLIC = process.env.NEXT_PUBLIC_API_BASE_URL_V2 + "/products/public";
const URL_ADMIN = process.env.NEXT_PUBLIC_API_BASE_URL_V2 + "/products/admin";

export const getProducts = async (filter: ProductFilter) => {
	return client.get<ProductListJson>(URL_PUBLIC, {
		params: Helper.convertParams(filter),
	});
};

export const getProductsAdmin = async (filter: ProductFilter) => {
	return client.get<ProductListJson>(URL_ADMIN, {
		params: Helper.convertParams(filter),
	});
};

export const createProductsAdmin = async (filter: ProductFilter) => {
	return client.post<ProductListJson>(URL_ADMIN, {});
};
