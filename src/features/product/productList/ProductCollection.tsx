import { getProductsServer } from "@/services/api/product/server";
import LinkElement from "@/components/ui/Link";
import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import ProductSlider from "./ProductSlider";
import { ComProps } from "@/types/Component";
import { cn } from "@/utils/utils";
import { Suspense } from "react";
import Flex from "@/components/ui/Flex";
type Props = ComProps & {
	title?: string;
	link?: string;
	more?: {
		title: string;
		link: string;
	};
};

async function getListProductServer() {
	try {
		const products = await getProductsServer({ limit: 10 });

		return products.items;
	} catch (error) {
		return [];
	}
}

export default async function ProductCollection({
	title,
	link,
	more,
	className,
}: Props) {
	const data = await getListProductServer();
	return (
		<section className={cn("relative w-full  ", className)}>
			{title && link && (
				<LinkElement href={link} className="mb-4">
					<Heading className=" " level={1} variant="productCollection">
						{title}
					</Heading>
				</LinkElement>
			)}
			<ProductSlider dataSource={data} />
			{more && (
				<Flex gap={2}>
					<Button className="mx-auto block" variant="default">
						{more.title}
					</Button>

					<Button className="mx-auto block" variant="outline">
						{more.title}
					</Button>
				</Flex>
			)}
		</section>
	);
}
