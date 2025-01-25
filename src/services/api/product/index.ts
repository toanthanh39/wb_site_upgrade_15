import client from "@/lib/core/client";
import server from "@/lib/core/server";
import { ProductFilter, ProductListJson } from "@/types/Product.type";
import Helper from "@/utils/helper";

const URL_PUBLIC = process.env.NEXT_PUBLIC_API_BASE_URL_V2 + "/products/public";
const URL_ADMIN = process.env.NEXT_PUBLIC_API_BASE_URL_V2 + "/products/admin";

// client
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

// server
export const getProductsServer = async (filter: ProductFilter) => {
	return server.get<ProductListJson>(URL_PUBLIC, {
		params: Helper.convertParams(filter),
	});
};

export const getDetailProductServer = async (
	handle: string,
	filter: Pick<ProductFilter, "parent_id" | "store_id">
) => {
	return client.get<ProductListJson>(`${URL_PUBLIC}/${handle}`, {
		params: Helper.convertParams(filter),
	});
};
