import Anouncement from "./components/Anouncement";
import HeaderMid from "./components/HeaderMid";
import HeaderTop from "./components/HeaderTop";

export default function Header() {
	return (
		<header className=" w-screen">
			<Anouncement />
			<HeaderTop />
			<HeaderMid />
		</header>
	);
}
