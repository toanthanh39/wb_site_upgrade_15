import { getProductsServer } from "@/services/api/product/server";
import LinkElement from "@/components/ui/Link";
import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import ProductSlider from "./ProductSlider";

// const ProductSlider = dynamic(() => import("./ProductSlider"), {
// 	loading(loadingProps) {
// 		return <div className="fl"> Đang tải</div>;
// 	},
// });

type Props = {
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

export default async function ProductCollection({ title, link, more }: Props) {
	const data = await getListProductServer();
	return (
		<section className="relative w-full">
			{title && link && (
				<LinkElement href={link} className="mb-4">
					<Heading level={1} variant="productCollection">
						{title}
					</Heading>
				</LinkElement>
			)}

			<ProductSlider dataSource={data} />

			{more && (
				<Button className="mx-auto block" variant="outline">
					{more.title}
				</Button>
			)}
		</section>
	);
}
