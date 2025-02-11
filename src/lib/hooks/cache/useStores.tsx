import { getListStore } from "@/services/api/store/client";
import BaseApi from "@/services/axios/BaseApi";
import { HookCacheProps } from "@/types/Component";
import { StoreFilter } from "@/types/Store.type";
import { useQuery } from "@tanstack/react-query";

const STALE_TIME = 60 * 1000;

type Props = HookCacheProps & {
	filters: StoreFilter;
};
function useStores({ filters, staleTime, enabled = true }: Props) {
	return useQuery({
		queryKey: ["stores"],
		queryFn: async () => {
			try {
				return await getListStore(filters);
			} catch (error) {
				throw BaseApi.handleError(error);
			}
		},
		staleTime: staleTime ?? STALE_TIME,
		enabled: enabled,
	});
}

export default useStores;
