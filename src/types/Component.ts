export interface ComProps {
	className?: string;
	children?: React.ReactNode;
}

export interface ComDataSource<D> {
	dataSource: D;
}

export interface HookCacheProps {
	enabled?: boolean;
	staleTime?: number | typeof Infinity;
}
