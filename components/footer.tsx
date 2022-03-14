export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-zinc-900 text-white py-12">
			<p className="text-center">© {currentYear} – Bastien Mélicque</p>
		</footer>
	);
}
