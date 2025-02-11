"use client";

// import Slider from "@/components/widgets/Slider";
import { ProductJson } from "@/types/Product.type";
import ProductCard from "./ProductCard";
import { ComProps } from "@/types/Component";
import { cn } from "@/utils/utils";
import useIntersectionObserver from "@/lib/hooks/optimization/useIntersectionObserver";
import dynamic from "next/dynamic";
import ProductListSkeleton, {
	ProductSkeletonType,
} from "./ProductListSkeleton";
const SliderDynamic = dynamic(
	() =>
		import("@/components/widgets/Slider").then((mod) => ({
			default: mod.default,
		})),
	{
		ssr: false,
		loading(loadingProps) {
			return (
				<ProductListSkeleton
					className="mb-2 md:mb-4 relative block"
					type={ProductSkeletonType.list}
				/>
			);
		},
	}
);
type Props = ComProps & {
	dataSource: ProductJson[];
};
export default function ProductSlider({ dataSource, className }: Props) {
	const { ref } = useIntersectionObserver({
		processEntry: (entry) => {
			entry.target.classList.add("active");
		},
		options: {
			threshold: 0,
		},
	});

	const render = (product: ProductJson) => {
		return <ProductCard key={product.id} product={product}></ProductCard>;
	};

	return (
		<aside className={cn("", className)}>
			<SliderDynamic
				className="p-c-init"
				useAnimation
				dataSource={dataSource}
				render={render}
				pagination={false}
				slidesPerView={6}
				updateOnWindowResize={true}
				freeMode={true}
				watchOverflow={false}
				breakpoints={{
					1220: {
						slidesPerView: 6,
						spaceBetween: 16,
					},

					768: {
						slidesPerView: 4,
						spaceBetween: 16,
					},

					413: {
						slidesPerView: 2,
						spaceBetween: 0,
						centeredSlides: true,
						centeredSlidesBounds: true,
					},
					0: {
						slidesPerView: 2,
						spaceBetween: 0,
						centeredSlides: true,
						centeredSlidesBounds: true,
					},
				}}
			/>
		</aside>
	);
}
