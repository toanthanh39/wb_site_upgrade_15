import { getProductsServer } from "@/services/api/product";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function getListProductServer() {
	try {
		const products = await getProductsServer({ limit: 10 });

		return products.items;
	} catch (error) {
		notFound();
	}
}

export default async function Page() {
	const products = await getListProductServer();

	return (
		<main className="p-4">
			<h1 className="text-2xl font-bold mb-4">Products</h1>
			<Link href={"/"}>Home</Link>

			<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{products.map((product) => (
					<li key={product.id} className="border p-4 rounded shadow">
						<p className="text-xl font-semibold">{product.name}</p>
						<p className="text-gray-700">{product.description}</p>
						<p className="text-gray-900 font-bold">${product.price}</p>
					</li>
				))}
			</ul>
		</main>
	);
}
