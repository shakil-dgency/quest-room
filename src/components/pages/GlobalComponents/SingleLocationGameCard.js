import React from "react";
import GameCardWithoutInformation from "./GameCardWithoutInformation";
import Image from "next/image";
import people from "@/../../public/global/peopleIcon.svg";
import age from "@/../../public/global/ageIcon.svg";
import duration from "@/../../public/global/timeIcon.svg";
import MediumButton from "@/components/buttons/MediumButton";
const gameData = [
	{
		name: "Red Giant",
		description:
			"The Pink Pyramid. A testament to the civilization who crafted it and surrounded it with glorious cities and streets, bustling with ancient life. You’ve heard stories whispered in taverns about the treasures it may hold though none have ever uncovered more than scraps and most who venture in do not return; those who do are not the same as they were.",
		image: "/templet/thrillTheme/gameCard/RedGiant.png",
		backgroundImage: "/global/games/red_bg.png",
		video: "https://cdn.gbase.online/Red_Giant_Escape_room_fin_2_dba64856ae.mp4",
		slug: "red-giant",
		category: ["adventure", "beginners", "family"],
	},
	{
		name: "Da Vinci's Challenge",
		description:
			"In the 15th Century there is no man, no academic, as well known as Leonardo Da Vinci. In the bustle of Florence many young minds crave nothing more than to work with the master of science and art. They travel from far and wide to see what knowledge he can bestow on them and you yourself are one of such students.",
		image: "/global/games/da_vinchi.png",
		backgroundImage: "/global/games/vinchi_bg.png",
		video: "https://cdn.gbase.online/Da_Vinci_s_Challenge_by_QUESTROOM_COM_fin_online_video_cutter_com_2_2994a810ed.mp4",
		slug: "da-vincis-challenge",
		category: ["family", "experts", "adventure"],
	},
	{
		name: "Malediction",
		description:
			"As you and your fellow adventurers stumble through a mystical wood you find yourselves in front of an old cabin. As you head towards it you begin to hear the echoes of a cursed tale — the story of a malevolent Witch whose wickedness was challenged by a brave and noble Warrior.",
		image: "/global/games/Malediction.png",
		backgroundImage: "/global/games/Malediction_bg.png",
		video: "https://cdn.gbase.online/MALEDITION_FULL_fin_2_a1ed1cabde.mp4",
		slug: "malediction",
		category: ["fantasy", "comedy"],
	},
	{
		name: "Cannibal's Den",
		description:
			"Your head hurts; the world is still fuzzy. You remember being with your friends, stuck on the side of the road. You remember the man who picked you all up to help you to the next town. You remember thinking he was so nice, but the last memory you have is of his smile slowly stretching across his face as you drift off — something about it will haunt you forever. ",
		image: "/templet/thrillTheme/gameCard/Cannibal.jpg",
		backgroundImage: "/global/games/Malediction_bg.png",
		video: "https://cdn.gbase.online/FULL_CANNIBAL_S_DEN_fin_2_6a4bb0b1ec.mp4",
		slug: "canibals-den",
		category: ["horror", "mature", "experts"],
	},

	{
		name: "Spell Breakers",
		description:
			"You and your fellow adventurers find yourselves lost in a magical forest when you stumble upon a mystical cabin. As you get closer you hear whispers and echoes of a cursed tale — the story of an evil Witch who was finally challenged by a brave Warrior. ",
		image: "/global/games/Spell_breakers.png",
		backgroundImage: "/global/games/spell_reakers.png",
		video: "https://cdn.gbase.online/THE_SPELL_BRAKERS_FULL_fin_2_537910dcca.mp4",
		slug: "spell-breakers",
		category: ["comedy", "family"],
	},
	{
		name: "Heretics",
		description:
			"You are in darkness, hooded and forced into a cell. Your ritual was overtaken, and the Holy Inquisitor paraded you through town. You, your friends, your work — treated as a cautionary tale. Now? Nothing but darkness. This is not YOUR darkness though. It doesn’t wrap around you in comfort but it encapsulates you, bars you in promising pain.  ",
		image: "/templet/thrillTheme/gameCard/Heretics.png",
		backgroundImage: "/global/games/heritics_bg.png",
		video: "https://cdn.gbase.online/Bloody_Elbow_Escape_Room_by_QUESTROOM_COM_fin_2_776cdcfa43.mp4",
		slug: "heretics",
		category: ["horror", "family"],
	},
];

function SingleLocationGameCard() {
	return (
		<div className="g_container--theme pt-[150px] pb-[150px]">
			<div className="max-w-[1330px] mx-auto pb-[75px] px-2.5 ">
				<h2 className="text-[#EDEDED] text-center">Exciting Escape Rooms For A Thrilling Birthday Party</h2>
				<p className="text-[14px] sm:text-[16px] pt-3 text-[#A3A3A3] text-center max-w-[680px] mx-auto">
					Host the ultimate escape room birthday party in LA with immersive games, mind-bending puzzles, and non-stop fun!
				</p>
			</div>
			<div className="flex flex-col items-center space-y-[70px]">
				{gameData.map((game, i) => (
					<div className="flex items-center" key={i}>
						<GameCardWithoutInformation src={game.video} poster={game.image} index={i} />
						<div
							style={{ backgroundImage: `url(${game.backgroundImage})` }}
							className="max-w-[810px] px-[60px] pt-[55px] pb-[80px] bg-no-repeat bg-cover -ml-2.5"
						>
							<p className="text-[32px] font-[700] text-[#EDEDED] leading-[1]">{game.name}</p>
							<div className=" flex gap-[30px]  text-[11px] 2xs:text-[14px] text-[#D9D9D9] font_roboto  mt-[24px] mb-[30px] ">
								<div className="flex items-center gap-1.5">
									<Image src={people} alt="" height={15} width={15} className="h-[12px] sm:h-[15px] w-auto" />
									<span className="">Team: 2-6</span>
								</div>
								<div className="flex items-center gap-1.5">
									<Image src={age} alt="" height={15} width={15} className="h-[12px] sm:h-[15px] w-auto" />
									<span className="">Age: 18+</span>
								</div>
								<div className="flex items-center gap-1.5">
									<Image src={duration} alt="" height={15} width={15} className="h-[12px] sm:h-[15px] w-auto" />
									<span className="">Time: 100 min</span>
								</div>
							</div>
							<div className="flex flex-wrap gap-2.5">
								<button className="bg-[#011940] px-5 py-2.5 text-[#D9D9D9] leading-[1] border-[1px] border-[#003180] ">Beginners</button>
								<button className="bg-[#011940] px-5 py-2.5 text-[#D9D9D9] leading-[1] border-[1px] border-[#003180] ">Not Scary</button>
								<button className="bg-[#011940] px-5 py-2.5 text-[#D9D9D9] leading-[1] border-[1px] border-[#003180] ">Historical</button>
								<button className="bg-[#011940] px-5 py-2.5 text-[#D9D9D9] leading-[1] border-[1px] border-[#003180] ">Couples</button>
								<button className="bg-[#011940] px-5 py-2.5 text-[#D9D9D9] leading-[1] border-[1px] border-[#003180] ">Large Groups</button>
								<button className="bg-[#011940] px-5 py-2.5 text-[#D9D9D9] leading-[1] border-[1px] border-[#003180] ">Large Groups</button>
								<button className="bg-[#011940] px-5 py-2.5 text-[#D9D9D9] leading-[1] border-[1px] border-[#003180] ">Group Photo</button>
								<button className="bg-[#011940] px-5 py-2.5 text-[#D9D9D9] leading-[1] border-[1px] border-[#003180] ">Post-game Wrap-up</button>
							</div>
							<p className="text-[#A3A3A3] mb-[90px] mt-5">{game.description}</p>
							<div className="flex gap-6">
								<MediumButton title=" Book now" />
								<MediumButton isOutline={true} title="EXPLORE" />
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default SingleLocationGameCard;
