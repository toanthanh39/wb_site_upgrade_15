"use client";

import { getProducts, getProductsAdmin } from "@/services/api/product/client";
import { ProductJson } from "@/types/Product.type";
import { useEffect, useState } from "react";

export default function Page() {
	const [p, setP] = useState<ProductJson[]>([]);
	async function getData() {
		try {
			const res = await getProducts({ page: 1, limit: 5 });
			setP(res.items);
		} catch (error) {}
	}
	useEffect(() => {
		getData();
	}, []);
	return (
		<div>
			{p.map((i) => (
				<div key={i.id}>{i.name}</div>
			))}
		</div>
	);
}
