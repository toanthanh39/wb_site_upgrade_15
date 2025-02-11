import SearchIcon from "@/components/icons/SearchIcon";
import Input from "@/components/ui/Input";

export default function HeaderSearch() {
	return (
		<Input
			icon={<SearchIcon className="mr-2" />}
			variant="border"
			placeholder="Tìm kiếm"></Input>
	);
}
