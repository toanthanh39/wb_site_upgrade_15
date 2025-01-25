import Footer from "@/layouts/footer";
import Header from "@/layouts/header";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
