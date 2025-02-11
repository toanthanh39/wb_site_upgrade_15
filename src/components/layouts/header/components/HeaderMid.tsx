import Flex from "@/components/ui/Flex";
import HeaderSearch from "./HeaderSearch";
import Namperfume from "./Namperfume";
import TotalStore from "@/features/store/infor/TotalStore";

export default function HeaderMid() {
	return (
		<Flex className="container py-2" align="center" gap={32}>
			<Namperfume />
			<HeaderSearch />
			<TotalStore />
		</Flex>
	);
}
