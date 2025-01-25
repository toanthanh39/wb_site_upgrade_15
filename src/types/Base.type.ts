type BaseCollectionJson<ModelJson> = {
	items: ModelJson[];
	total: number;
	currentpage: number;
	limit: number;
};

type BaseCollectionNoPagingJson = {
	steps: number;
	approve_name: string;
	approve: boolean;
};

type BaseCollectionFetchingJson<ModelJson> = ModelJson[];

export type {
	BaseCollectionJson,
	BaseCollectionNoPagingJson,
	BaseCollectionFetchingJson,
};
