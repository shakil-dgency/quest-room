"use client"

import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import locationIcon from "@/../../public/templet/thrillTheme/navBar/locationIcon.svg";

import { useSelector } from "react-redux";


function SelectLocation({handleLocationBarOpen}) {
	const {location} = useSelector(state=> state.location);
	


	return (
		<div className="cursor-pointer w-full 2xs:w-[200px] xs:w-[260px] sm:w-[320px]  xl:w-[364px] border-[2px] border-[#FC7008] py-[8px] rounded-full flex relative font_poppins">
			<div
				id="location"
				className="bg-transparent relative outline-none text-[10px] 2xs:text-[11px] sm:text-[16px] font-[500] text-[#F5F5F5] pl-2 pr-1 2xs:pl-2.5 xs:pl-[14px] sm:pl-[20px] sm:pr-0  md:pr-14 appearance-none w-full "
				onClick={handleLocationBarOpen}
			>
				<p className="uppercase flex items-center gap-1.5 2xs:gap-2 sm:gap-2.5 leading-0">
					<Image src={locationIcon} alt="" height={14} width={12} className="-mt-[1px] h-[11px] 2xs:h-[14px] sm:h-[18px] w-auto" />
					<span>{location }</span>{" "}
					<IoIosArrowDown className=" text-[11px] 2xs:text-[13px] xs:text-[16px] absolute z-10 right-1.5 xs:right-2.5 sm:right-[20px]" />
				</p>
			</div>
		</div>
	);
}

export default SelectLocation;
