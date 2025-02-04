import Main from "@/components/layouts/main";
import Flex from "@/components/ui/Flex";
import { ProductAction, ProductInfor } from "@/features/product/productDetail";
import { getProductsServer } from "@/services/api/product/server";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getListProductServer() {
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
		<Main className="p-4">
			<h1 className="text-2xl font-bold mb-4">Products</h1>
			<Link href={"/"} prefetch={true}>
				Home
			</Link>

			<Flex>
				<ProductInfor></ProductInfor>
				<ProductAction></ProductAction>
			</Flex>
		</Main>
	);
}
