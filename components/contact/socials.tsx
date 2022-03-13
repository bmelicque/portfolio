import Image from "next/image";
import { SOCIALS } from "../../lib/data/socials";

const ICON_SIZE = 32;

export default function Socials() {
	return (
		<div className="flex justify-center gap-2 mt-12">
			{SOCIALS.map((social) => (
				<a key={social.name} href={social.url} title={social.name} className="p-2 hover:scale-110 hover:opacity-90 duration-200">
					<Image
						width={ICON_SIZE}
						height={ICON_SIZE}
						src={social.logoUrl}
						alt=""
					/>
				</a>
			))}
		</div>
	);
}
