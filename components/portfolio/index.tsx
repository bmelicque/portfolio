import { useEffect, useReducer, useRef, useState } from "react";
import { Project, PROJECTS } from "../../lib/data/projects";
import { Heading } from "../headings";
import ArrowButton from "./arrowButton";
import ProjectCard from "./projectCard";

const SCALE = {
	FOCUS: 1,
	BLUR: 0.95,
};
const OPACITY = {
	FOCUS: 1,
	BLUR: 0.6,
};

export enum ACTIONS {
	DISPLAY_NEXT = "NEXT",
	DISPLAY_PREV = "PREV",
}

interface Action {
	type: ACTIONS;
}

interface State {
	current: number;
	items: Project[];
}

const reducer = (state: State, action: Action) => {
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
	const projects = PROJECTS;
	const [state, dispatch] = useReducer(reducer, {
		current: 0,
		items: projects,
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
			<div className="container mx-auto relative" ref={carouselRef}>
				<div
					id="carousel"
					className="flex duration-300"
					style={{
						transform: `translateX(-${state.current * carouselWidth}px)`,
					}}
				>
					{projects.map((project, index) => (
						<div
							key={index}
							className="container shrink-0 duration-300"
							style={{
								transform: `scale(${
									index === state.current ? SCALE.FOCUS : SCALE.BLUR
								})`,
								opacity: index === state.current ? OPACITY.FOCUS : OPACITY.BLUR,
							}}
						>
							<ProjectCard project={project} />
						</div>
					))}
				</div>
				<ArrowButton type="left" onClick={dispatch} />
				<ArrowButton type="right" onClick={dispatch} />
			</div>
		</section>
	);
}
