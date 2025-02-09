import Image from "next/image";
import React from "react";
import people from "@/../../public/templet/thrillTheme/gameCard/people.svg";
import age from "@/../../public/templet/thrillTheme/gameCard/age.svg";
import duration from "@/../../public/templet/thrillTheme/gameCard/duration.svg";
import VideoComponent from "./VideoComponent";
import SmallButton from "@/components/buttons/SmallButton";

function GameCard({game}) {
	return (
		<div style={{backgroundImage: `url(${game.image})`}} className="relative group h-[580px] max-w-[345px] mx-aut  rounded-lg overflow-hidden  bg-center bg-no-repeat bg-cover ">
			<VideoComponent />

			<div className="absolute top-0 left-0 right-0 z-20 flex gap-3 justify-between text-[11px] 2xs:text-[14px] text-[#D9D9D9] font_roboto  mt-2.5 px-4">
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

			<div className="font_poppins px-[16px] absolute bottom-6 z-20 ">
				<p className="text-[12px] text-[#A3A3A3]">Interactive Horror Adventure</p>
				<p className="text-[24px] font-[600] text-[#EDEDED]">{game.name}</p>
				<p className="text-[14px] text-[#A3A3A3] pt-1 pb-5">
					{game.description}
				</p>
				<div className="flex justify-between">
					<SmallButton > Book now</SmallButton>
					{/* <button className="rounded-sm border-[1px] border-[#D9D9D9] bg-transparent py-2 px-6 2xs:px-10 sm:px-9 text-[#D9D9D9] text-[14px] font-[700]">
						EXPLORE
					</button> */}
                    <SmallButton isOutline={true}> EXPLORE</SmallButton>
				</div>
			</div>
			<div className="w-full h-[230px] absolute bottom-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_15%,rgba(0,0,0,0.8)_40%,rgba(0,0,0,0.95)_100%)]"></div>
			<div className="w-full h-[50px] absolute top-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0.8))]"></div>
		</div>
	);
}

export default GameCard;
