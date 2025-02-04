"server-only";

import server from "@/lib/core/server";
import { ProductFilter, ProductListJson } from "@/types/Product.type";
import Helper from "@/utils/helper";

const URL_PUBLIC = process.env.NEXT_PUBLIC_API_BASE_URL_V2 + "/products/public";
const URL_ADMIN = process.env.NEXT_PUBLIC_API_BASE_URL_V2 + "/products/admin";
const TIME_CACHE = 60;

export const getProductsServer = async (filter: ProductFilter) => {
	return server.get<ProductListJson>(URL_PUBLIC, {
		params: Helper.convertParams(filter),
		cache: "force-cache",
		next: {
			revalidate: TIME_CACHE,
		},
	});
};

export const getDetailProductServer = async (
	handle: string,
	filter: Pick<ProductFilter, "parent_id" | "store_id">
) => {
	return server.get<ProductListJson>(`${URL_PUBLIC}/${handle}`, {
		params: Helper.convertParams(filter),
	});
};
