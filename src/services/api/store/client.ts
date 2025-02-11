import client from "@/lib/core/client";
import { StoreFilter, StoreListJson } from "@/types/Store.type";
import Helper from "@/utils/helper";

const URL_PUBLIC = "/stores/public";

export const getListStore = async (filter: StoreFilter) => {
	return client.get<StoreListJson>(URL_PUBLIC, {
		params: Helper.convertParams(filter),
	});
};
