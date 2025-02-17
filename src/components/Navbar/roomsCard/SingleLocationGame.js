"use client";
import Image from "next/image";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import game1 from "@/../../public/templet/thrillTheme/navBar/game1.png";
import Link from "next/link";

function SingleLocationGame({ game, citySlug }) {
	return (
		<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#00122E] hover:bg-[#001D4D] duration-300  p-4 sm:p-2.5 rounded-lg">
			<div className="relative h-[100px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
				<Image
					src={game.image}
					alt=""
					height={212}
					width={142}
					className="h-[100px] w-full sm:w-[129px] object-cover rounded-lg group-hover:scale-110 duration-700"
				/>
			</div>
			<div>
				<p className="text-[18px] font-[600] text-[#D9D9D9]">{game.name}</p>
				<p className="text-[13px] text-[#A3A3A3] pr-2 pb-2">{game.description} </p>
				<div className="flex">
					<Link href={`/${citySlug}/${game.slug}`} className="group/link text-[14px] text-[#FC7008] pr-2 flex items-center font-[500]">
						Explore <IoMdArrowDropdown className="text-[16px] mt-[1px] -rotate-90 group-hover/link:translate-x-[2.5px] duration-300" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default SingleLocationGame;
