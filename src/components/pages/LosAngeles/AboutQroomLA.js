/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function AboutQroomLA() {
	return (
		<div className="g_container--theme pt-20 pb-[100px]">
			<div className="grid grid-cols-2 gap-x-20 max-w-[1233px] mx-auto pt-[204px] pb-[180px] pl-[85px] pr-[60px] bg-[url('/pages/LosAngeles/about_la.png')] bg-no-repeat bg-cover">
				<div className="flex flex-col items-center">
					<p className="text-[32px] text-[#D9D9D9] font-[700]">About Quest Room LA</p>
					<p className="text-[18px] text-[#A3A3A3] text-center py-[35px]">
						Quest Room offers the best escape room experiences in Los Angeles with 14 immersive games across 4 locations. Our interactive, challenging
						adventures are perfect for friends, families, and team-building events. Ready to escape the ordinary? Join us today!
					</p>
					<div className="flex">
						<Link href={`/`} className="group/link text-[18px] text-[#FC7008] pr-2 flex items-center leading-[1]">
							Learn more <IoIosArrowForward className="text-[16px] mt-[2px] group-hover/link:translate-x-[2.5px] duration-300" />
						</Link>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<p className="text-[32px] text-[#D9D9D9] font-[700]">WHAT IS AN ESCAPE ROOM</p>
					<p className="text-[18px] text-[#A3A3A3] text-center py-[35px]">
					An escape room is an interactive adventure game where players solve puzzles, uncover clues, and complete challenges to "escape" from a themed room within a set time limit. It’s a thrilling and immersive experience for friends, families, and teams!
					</p>
					<div className="flex">
						<Link href={`/`} className="group/link text-[18px] text-[#FC7008] pr-2 flex items-center leading-[1]">
							Learn more <IoIosArrowForward className="text-[16px] mt-[2px] group-hover/link:translate-x-[2.5px] duration-300" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutQroomLA;
