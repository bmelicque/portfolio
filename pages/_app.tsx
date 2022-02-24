import NavProvider from "../lib/context/navContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<NavProvider>
			<Component {...pageProps} />
		</NavProvider>
	);
}

export default MyApp;
