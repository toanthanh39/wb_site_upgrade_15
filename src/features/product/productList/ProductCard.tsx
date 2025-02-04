import { productConst } from "@/common/constants/product";
import { Card, CardBagde, CardContent, CardImage } from "@/components/ui/Card";
import CustomImage from "@/components/ui/CustomImage";
import LinkElement from "@/components/ui/Link";
import Money from "@/components/ui/Money";
import Tag from "@/components/ui/Tag";
import Text from "@/components/ui/Text";
import { ProductJson } from "@/types/Product.type";

type Props = {
	product: ProductJson;
};
export default function ProductCard({ product }: Props) {
	return (
		<div className="w-fit">
			<Card>
				<CardImage
					alt={product.name}
					src={product.images?.[0].url}
					height={productConst.image.card_image_mobile}
					width={productConst.image.card_image_mobile}></CardImage>
				<CardContent>
					<LinkElement
						className="uppercase"
						weight="bold"
						variant="default"
						size="sm"
						href={`/blogs/thuong-hieu-nuoc-hoa/${product.brand?.handle}`}>
						{product.brand?.title}
					</LinkElement>

					<Text.p variant="default" size="sm" className="line-clamp-2">
						{product.full_name}
					</Text.p>

					<Money value={product.price}></Money>
				</CardContent>

				<CardBagde position="top_left">
					<Tag label="limited Edition" />
					<Tag variant="primary" label="New" />
				</CardBagde>

				<CardBagde position="top_right"></CardBagde>
			</Card>
		</div>
	);
}
