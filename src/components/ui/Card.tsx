import { cva, VariantProps } from "class-variance-authority";
import CustomImage from "./CustomImage";
import { CustomImageProps } from "./CustomImage";
import { cn } from "@/utils/utils";
import Skeleton from "./Skeleton";
import { imageConst } from "@/common/constants/image";

const Card = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("relative flex flex-col p-3", className)} {...props} />
);
Card.displayName = "Card";
////////////////////////////////////////////////////
interface CardImageProps
	extends Pick<
		CustomImageProps,
		"alt" | "src" | "width" | "className" | "height" | "layout"
	> {}
const CardImage = ({ className, ...props }: CardImageProps) => (
	<CustomImage
		className={cn("", className)}
		{...props}
		loading="lazy"
		placeholder="blur"
		blurDataURL={imageConst.blur_url}
	/>
);
CardImage.displayName = "CardImage";

const CardContent = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("", className)} {...props} />
);
CardContent.displayName = "CardContent";

////////////////////////////////////////////////////
const bagdeVariants = cva("absolute z-2 w-fit flex flex-col gap-1", {
	variants: {
		position: {
			top_left: "top-0 left-0",
			top_right: "top-0 right-0",

			bottom_left: "bottom-0 left-0",
			bottom_right: "bottom-0 right-0",
		},
	},
	defaultVariants: {
		position: "top_left",
	},
});

interface CardBagdeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof bagdeVariants> {}
const CardBagde = ({ className, position, ...props }: CardBagdeProps) =>
	props.children ? (
		<div className={cn(bagdeVariants({ position, className }))} {...props}>
			{props.children}
		</div>
	) : null;
CardBagde.displayName = "CardBagde";
////////////////////////////////////////////////////

const CardSkeleton = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn("", className)} {...props}>
		<Skeleton className="h-[183px] md:h-[176px]"></Skeleton>
		<Skeleton className="h-5 mt-2"></Skeleton>
		<Skeleton className="h-3 w-2/3 mt-1"></Skeleton>
		<Skeleton className="h-3 w-1/2 mt-1"></Skeleton>
	</div>
);
CardSkeleton.displayName = "CardSkeleton";

export { Card, CardImage, CardContent, CardBagde, CardSkeleton };
