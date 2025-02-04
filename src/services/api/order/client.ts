import client from "@/lib/core/client";
import { OrderFilter, OrderListJson } from "@/types/Order.type";
import Helper from "@/utils/helper";

const url = "/orders";
export const getOrders = async (filter: OrderFilter) => {
	return client.get<OrderListJson>(url, {
		params: Helper.convertParams(filter),
	});
};
