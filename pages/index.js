import Head from "next/head";
import Nav from ".././pages/components/Navbar";
import Hero from ".././pages/components/Hero";
import About from ".././pages/components/About";
import Doghousecard from "./components/Doghousecard";
import Scroll from "./components/Scroll";
import Donation from "./components/Donation";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<div className="flex flex-col bg-gray-50 min-h-screen">
			<Head>
				<title>Dog House</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<Hero />
			<About />
			<Doghousecard />
			<Scroll />
			<Donation />
			<Footer />
		</div>
	);
}
