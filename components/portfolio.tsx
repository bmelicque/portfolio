import { useEffect, useReducer, useRef, useState } from "react";
import { Heading } from "./headings";

const TEST_ARRAY = [
	{
		background: "blue",
	},
	{
		background: "red",
	},
];

const ACTIONS = {
	DISPLAY_NEXT: "display next",
	DISPLAY_PREV: "display_prev",
};

const reducer = (state, action) => {
	const { current, items } = state;
	switch (action.type) {
		case ACTIONS.DISPLAY_NEXT:
			return current < items.length - 1
				? { ...state, current: current + 1 }
				: state;
		case ACTIONS.DISPLAY_PREV:
			return current ? { ...state, current: current - 1 } : state;
		default:
			return state;
	}
};

export default function Portfolio() {
	const [state, dispatch] = useReducer(reducer, {
		current: 0,
		items: TEST_ARRAY,
	});
	const carouselRef = useRef<HTMLDivElement>();
	const [carouselWidth, setCarouselWidth] = useState<number>(undefined);

	useEffect(() => {
		function handleResize() {
			setCarouselWidth(carouselRef.current.offsetWidth);
		}

		handleResize();
		window.addEventListener("resize", () => handleResize());
		return window.removeEventListener("resize", () => handleResize());
	}, []);

	return (
		<section className="py-16 bg-gray-100">
			<Heading>Mes réalisations</Heading>
			<div className="container mx-auto" ref={carouselRef}>
				<div
					id="carousel"
					className="flex duration-500"
					style={{
						transform: `translateX(-${state.current * carouselWidth}px)`,
					}}
				>
					{TEST_ARRAY.map((item, index) => (
						<div
							key={item.background}
							className="container h-96 shrink-0 duration-500"
							style={{
								...item,
								transform: `scale(${index === state.current ? 1 : 0.95})`,
								opacity: index === state.current ? 1 : 0.6,
							}}
						></div>
					))}
				</div>
				<button
					id="arrow-left"
					className="border-l-2 border-b-2 border-black w-5 h-5 rotate-45"
					onClick={() => dispatch({ type: ACTIONS.DISPLAY_PREV })}
				></button>
				<button
					id="arrow-right"
					className="border-r-2 border-b-2 border-black w-5 h-5 -rotate-45"
					onClick={() => dispatch({ type: ACTIONS.DISPLAY_NEXT })}
				></button>
			</div>
		</section>
	);
}
