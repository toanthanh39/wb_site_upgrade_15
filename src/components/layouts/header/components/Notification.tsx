"use client";
import RingIcon from "@/components/icons/RingIcon";
import Badge from "@/components/ui/Badge";
import CustomImage from "@/components/ui/CustomImage";
import Flex from "@/components/ui/Flex";
import LinkElement from "@/components/ui/Link";
import Text from "@/components/ui/Text";
import useNotfication from "@/lib/hooks/cache/useNotfication";
import { ComProps } from "@/types/Component";
import { cn } from "@/utils/utils";
import Image from "next/image";

export default function Notification({ className }: ComProps) {
	const { isLoading, results } = useNotfication();
	return (
		<div className={cn("relative", className)}>
			<Badge className="group" count={results.total}>
				<RingIcon />
				<Flex
					direction="col"
					className=" hidden absolute left-auto right-0 group-hover:inline-block bg-white z-header border border-colors-gray-2 w-fit">
					<div className="max-h-[70vh] min-w-[380px] p-2">
						<Text.p className="mb-2" variant="secondary">
							Thông báo mới
						</Text.p>
						<Flex direction="col" gap={4} align="start">
							{results.new.map((item, index) => {
								return (
									<LinkElement
										key={item.id}
										href={"/collections/" + item.collections?.[0]?.handle + ""}
										prefetch={false}>
										<Flex key={index}>
											<CustomImage
												width={100}
												height={100}
												src={item.images?.[0]?.url || ""}
												alt={item.handle}></CustomImage>
											<Text.p>{item.title}</Text.p>
										</Flex>
									</LinkElement>
								);
							})}
						</Flex>
					</div>
					<div className="max-h-[70vh] min-w-[380px] p-2">
						<Text.p className="mb-2" variant="secondary">
							Thông báo gần đây
						</Text.p>
						<Flex direction="col" gap={4} align="start">
							{results.recent.map((item) => {
								return (
									<LinkElement
										key={item.id}
										href={"/collections/" + item.collections?.[0]?.handle + ""}
										prefetch={false}>
										<Flex key={item.id} gap={4}>
											<CustomImage
												width={100}
												height={100}
												src={item.images?.[0]?.url || ""}
												alt={item.handle}></CustomImage>
											<Text.p>{item.title}</Text.p>
										</Flex>
									</LinkElement>
								);
							})}
						</Flex>
					</div>
				</Flex>
			</Badge>
		</div>
	);
}
