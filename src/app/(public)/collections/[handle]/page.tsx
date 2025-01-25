async function customFunction() {
	return [];
}

type Props = { handle: string };

export default async function Page({ handle }: Props) {
	const data = await customFunction();
	return <main></main>;
}
