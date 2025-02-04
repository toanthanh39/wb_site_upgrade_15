import client from "@/lib/core/client";
import { StoryFilter, StoryListJson } from "@/types/Story.type";
import Helper from "@/utils/helper";

const url = "/stories/public";
export const getStories = async (filter: StoryFilter) => {
	return client.get<StoryListJson>(url, {
		params: Helper.convertParams(filter),
	});
};
