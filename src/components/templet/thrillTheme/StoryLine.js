import React from "react";

import story1 from "@/../../public/templet/thrillTheme/storyLine/storyLine1.png";
import story2 from "@/../../public/templet/thrillTheme/storyLine/storyLine2.png";
import StoryLineCard from "./allComponents/StoryLineCard";
import Image from "next/image";

const image = [
	{
		storyCategory: "Project Minotaur Storyline",
		title: "A Vacation Gone Horribly Wrong",
		description:
			"You and your friends were searching for adventure—a thrilling escape from the mundane. What started as an exclusive tour of a mysterious ancient temple quickly turned into something far darker. You noticed a heavily guarded military facility nearby. Curious, you strayed from the tour and snuck inside.",
		testimonial:
			"Zach was an amazing actor as the minotaur and chris was a fantastic actor as our professor. Had a great experience and would definitely recommend it to friends who want a thrill.",
		image: story1,
		name: "Bryanna M., Hollywood, LA ",
		button: "will you survive?",
	},
	{
		storyCategory: "Project Minotaur Mission",
		title: "Trapped in the Labyrinth",
		description:
			"Navigate the base, solve puzzles, and evade capture as you uncover the dark secrets of Project Minotaur. Work together to escape before encountering the monstrous experiment. Time is running out, and the Minotaur is on the hunt. Will you survive or fall victim to the labyrinth?",
		testimonial:
			"So much fun, absolutely loved the Red Giant! Extremely immersive and fun puzzles with spooky ambiance. Stunning set design, too. It really feels like playing in a video game!",
		image: story2,
		name: "Lucy X.,Hollywood, LA",
		button: "The Minotaur awaits !",
	},
];

function StoryLine() {
	return (
		<div className="relative pb-[90px] xl:pb-32">
			<div className="pt-[0px] md:pt-[100px] font_poppins px-2.5"></div>
			<div className="mt-14 space-y-[60px] xl:space-y-[150px] ">
				{image.map((item, i) => (
					<StoryLineCard key={i} id={i + 1} item={item} />
				))}
			</div>
			<div className="overflow-hidden h-[80px] sm:h-[120px] 2xl:h-[160px] w-[120px] sm:w-[180] 2xl:w-[230px] absolute right-0 bottom-0">
				<Image src="/templet/thrillTheme/helpme.png" alt="help me" height={196} width={281} className="h-full w-full ml-5 object-cover opacity-[0.7]" />
			</div>
		</div>
	);
}

export default StoryLine;
