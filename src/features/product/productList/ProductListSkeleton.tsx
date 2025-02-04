import { CardSkeleton } from "@/components/ui/Card";
import Flex from "@/components/ui/Flex";
import Skeleton from "@/components/ui/Skeleton";

export default function ProductListSkeleton() {
	return (
		<div className="w-full">
			<Flex className="mb-[18px]" justify="between">
				<Skeleton className="w-20"></Skeleton>
				<Skeleton className="w-10"></Skeleton>
			</Flex>

			<div className="hidden lg:grid grid-cols-6 gap-4 px-[15px]">
				{Array(6)
					.fill(0)
					.map((item, index) => {
						return <CardSkeleton key={index} />;
					})}
			</div>
			<div className="hidden md:grid lg:hidden grid-cols-4 gap-4 px-[15px]">
				{Array(4)
					.fill(0)
					.map((item, index) => {
						return <CardSkeleton key={index} />;
					})}
			</div>
			<div className="grid md:hidden grid-cols-2">
				{Array(2)
					.fill(0)
					.map((item, index) => {
						return <CardSkeleton key={index} />;
					})}
			</div>
		</div>
	);
}
