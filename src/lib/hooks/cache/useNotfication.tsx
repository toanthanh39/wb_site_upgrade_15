import { NotificationConst } from "@/common/constants/notification";
import { getStories } from "@/services/api/story/client";
import { StoryJson } from "@/types/Story.type";
import { useQueries } from "@tanstack/react-query";

const STALE_TIME = 60 * 1000;
function useNotfication() {
	const queryFilters = [
		NotificationConst.query.new,
		NotificationConst.query.recent,
	];

	const queries = useQueries({
		queries: queryFilters.map((filter) => {
			return {
				queryKey: ["notfications", filter.collection_id],
				queryFn: async () => {
					const c_id = filter.collection_id as string;
					const { data } = await getStories({
						collection_id: c_id,
						page: 1,
						tags: filter.tags,
					});

					return data;
				},
				staleTime: Infinity,
			};
		}),
	});
	const isLoading = queries.some((query) => query.isLoading);
	const refetch = () => {
		queries.forEach((query) => query.refetch());
	};
	const results = {
		new: (queries[0].data?.items || []) as StoryJson[],
		recent: (queries[1].data?.items || []) as StoryJson[],
		total: ((queries[0].data?.total || 0) +
			(queries[1].data?.total || 0)) as number,
	};

	return {
		results,
		isLoading,
		refetch,
	};
}

export default useNotfication;
