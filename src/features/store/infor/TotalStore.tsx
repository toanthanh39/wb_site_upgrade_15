"use client";

import StoreIcon from "@/components/icons/StoreIcon";
import Flex from "@/components/ui/Flex";
import Text from "@/components/ui/Text";
import useStores from "@/lib/hooks/cache/useStores";
import { SHOW_WEB } from "@/types/Store.type";

export default function TotalStore() {
	const { data, isLoading } = useStores({
		filters: { show_web: SHOW_WEB.show },
	});
	return (
		<Flex align="center" gap={4}>
			<StoreIcon />
			{data && (
				<>
					<Text.span>{data.total}</Text.span>
				</>
			)}
			<Text.span>Cửa hàng toàn quốc</Text.span>
		</Flex>
	);
}
