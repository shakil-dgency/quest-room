import React from "react";
import SectionStarter from "../GlobalComponents/SectionStarter";
import Image from "next/image";

function AgeGroup() {
	return (
		<div className="g_container--theme">
			<h2 className="text-[#EDEDED] text-center">Exciting Escape Rooms For A Thrilling Birthday Party</h2>
			<div className="flex mt-[60px] items-center gap-5">
				<div className="space-y-32">
					<div className="px-10 py-8 bg-[url('/pages/Event/Age_card.png')] bg-no-repeat bg-[length:100%_100%] max-w-[427px] rotate-[10deg] ">
						<p className="subtitle_M text-[#D9D9D9]">Kids (6-12 Years)</p>
						<p className="body-paragraph_S text-[#BFBFBF] mt-2.5">
							A playful, puzzle-filled adventure that sparks curiosity, teamwork, and unforgettable birthday excitement!
						</p>
					</div>
					<div className="px-10 py-8 bg-[url('/pages/Event/Age_card.png')] bg-no-repeat bg-[length:100%_100%] max-w-[427px] rotate-[-10deg] ">
						<p className="subtitle_M text-[#D9D9D9]">Kids (6-12 Years)</p>
						<p className="body-paragraph_S text-[#BFBFBF] mt-2.5">
							A playful, puzzle-filled adventure that sparks curiosity, teamwork, and unforgettable birthday excitement!
						</p>
					</div>
				</div>
				<div className="">
					<Image src="/pages/Event/age_group.png" height={400} width={560} alt="" className="" />
				</div>
				<div className="space-y-32">
					<div className="px-10 py-8 bg-[url('/pages/Event/Age_card.png')] bg-no-repeat bg-[length:100%_100%] max-w-[427px] rotate-[-10deg] ">
						<p className="subtitle_M text-[#D9D9D9]">Kids (6-12 Years)</p>
						<p className="body-paragraph_S text-[#BFBFBF] mt-2.5">
							A playful, puzzle-filled adventure that sparks curiosity, teamwork, and unforgettable birthday excitement!
						</p>
					</div>
					<div className="px-10 py-8 bg-[url('/pages/Event/Age_card.png')] bg-no-repeat bg-[length:100%_100%] max-w-[427px] rotate-[10deg] ">
						<p className="subtitle_M text-[#D9D9D9]">Kids (6-12 Years)</p>
						<p className="body-paragraph_S text-[#BFBFBF] mt-2.5">
							A playful, puzzle-filled adventure that sparks curiosity, teamwork, and unforgettable birthday excitement!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AgeGroup;
