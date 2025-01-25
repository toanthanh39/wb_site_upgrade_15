import { BaseCollectionJson } from "./Base.type";
import { PromotionJson } from "./Promotion.type";
import { ProductJson } from "./Product.type";

export type OrderId = string | number;

export interface OrderFilter {
	code?: string;
	page?: number;
	limit?: number;
	status?: ORDER_STATUS;
	type?: ORDER_TYPE;
	store_id?: number;
	seller_id?: number;
	seller?: number;
	customer_id?: number;
	is_pos?: boolean;
}

export type OrderJson = {
	company_id: number;
	creator_id: number;
	id: OrderId;
	code: string;
	store_id: number;
	customer_id: number;
	customer_token: string;
	coupons?: any[];
	cancel_reason: number;
	price_sell: number;
	price_shipping: number;
	price_discount: number;
	price_discount_coupon: number;
	price_final: number;
	price_cost: number;
	price_deposit: number;
	price_debt: number;
	price_tax: number;
	promotion_id: number;
	promotions: OrderPromotion[];
	contact_email: string;
	billing_fullname: string;
	billing_phone: string;
	billing_email: string;
	billing_address: string;
	billing_ward: number;
	billing_district: number;
	billing_province: number;
	billing_country: number;
	billing_company: string;
	billing_sub_sub_region_id: number;
	billing_sub_region_id: number;
	billing_region_id: number;
	shipping_fullname: string;
	shipping_phone: string;
	shipping_address: string;
	shipping_ward: number;
	shipping_district: number;
	shipping_province: number;
	shipping_country: number;
	shipping_company: string;
	shipping_full_address?: string;
	warehouse_id: number;
	shipping_carrier: number;
	product_receipt_id_list: number[];
	cashflow_receipt_id_list: number[];
	tax_invoice_id: number;
	quantity: number;
	note: string;
	cod_amount: number;
	status: ORDER_STATUS;
	vnpay_status: boolean;
	tag: string;
	ecom_platform_id: number;
	ecom_platform_type: number;
	ecom_platform_order_id: string;
	ecom_platform_invoice_id: string;
	date_arrived: number;
	date_created: number;
	date_modified: number;
	payment_method: number;
	resource_type: number;
	resource_id: string;
	resource_number: string;
	order_detail: string;
	order_description: string;
	kiotviet_code: string;
	details: {
		data: CartOrderJson[];
		total: number;
	};
	total_payment: number;
	debt: number;
	payments: any[];
	has_invoice: boolean;
	order_custom_discount: number;
	order_custom_value: number;

	// InvoiceJson properties
	billing_firstname: string;
	billing_lastname: string;
	coupondetail: any[] | null;
	date_completed: number;
	date_deleted: number;
	deposit: number;
	ipaddress: number;
	is_deleted: number;
	kiotviet_id: string;
	note_invoice: any;
	promotion_detail: PromotionJson[];
	shipping_firstname: string;
	shipping_lastname: string;
	type: number;
	delivery_detail: any[];

	order_id: number;
	item_discount: number;
	order_discount: number;
	order_custom_type: ORDER_DISCOUNT_TYPE;
	delivery_lits_id: string;
	item_total: number;

	service_type: SERVICE_TYPE;
	seller_id: number;
	// Field custom
	label_seller: string;
};

export type CartOrderJson = {
	order_id: OrderId;
	product_id: number;
	id: number;
	is_use: IsUse;
	item_title: string;
	item_quantity: number;
	item_unit_price_original: number;
	item_unit_price: number;
	item_date_deleted: number;
	price_unit_final: number;
	// promotion_id: number;
	promotions: OrderPromotion[];
	price_final: number;
	price_discount: number;
	product_json: ProductJson;
	discount_percent: number;
	item_total: number;
};

export type OrderPromotion = {
	promotion_id: number; // id của loại chường trình promotion
	sale_promotion_id: number; // id của điều kiện promotion
	product_id?: number | string; // id của product nào phát sinh ra promotion (điều kiện)
	item_quantity?: number; // sô lượng sản phẩm
	is_use: IsUse; // có sài cái promotion này không , nếu sài để 1 không sài để 0
	promotion_detail: PromotionJson;
	discount: number;
	code: string;
	id?: number;
};

export enum IsUse {
	USE = 1,
	NOT_USE = 0,
}

export enum SERVICE_TYPE {
	NONE,
	PURTCHASE_METHOD_IN_STORE,
	PURTCHASE_METHOD_DELIVERY,
}

export enum ORDER_DISCOUNT_TYPE {
	ORDER_DISCOUNT_TYPE_PRECENT = 1,
	ORDER_DISCOUNT_TYPE_AMOUNT = 2,
}

export enum ORDER_TYPE {
	ORDER_STATUS,
	INVOICE,
}

export enum ORDER_STATUS {
	NEW = 12,
	OPEN = 13,
	CONFIRM = 14,
	PROCESSING = 15,

	SHIPPING = 16,
	SHIPPED = 17,
	RETURNING = 18,
	COMPLETE = 19,
	CANCEL = 21,
}

export type DiscountType = "amount" | "percent";

export type OrderListJson = BaseCollectionJson<OrderJson>;
