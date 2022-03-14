import { useContext } from "react";
import { NavContext } from "../lib/context/navContext";
import Head from "next/head";
import Banner from "../components/banner";
import Header from "../components/header";
import Portfolio from "../components/portfolio";
import Profile from "../components/profile";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
	const { refs } = useContext(NavContext);

	return (
		<div>
			<Head>
				<title>Bastien Mélicque – Développeur Web</title>
				<meta
					name="description"
					content="Développeur web autonome et rigoureux, sépcialisé Javascript, je peux vous aider à concrétiser vos projets web"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<div ref={refs.banner}>
				<Banner />
			</div>
			<div ref={refs.profile}>
				<Profile />
			</div>
			<div ref={refs.portfolio}>
				<Portfolio />
			</div>
			<div ref={refs.contact}>
				<Contact />
			</div>
			<Footer />
		</div>
	);
}
