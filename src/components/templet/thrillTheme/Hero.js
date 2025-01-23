"use client";
import { useRef, useState } from "react";
import { ImVolumeMute2 } from "react-icons/im";
import { GoUnmute } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import buttonLeft from "@/../../public/templet/thrillTheme/hero/button_left.svg";
import buttonRight from "@/../../public/templet/thrillTheme/hero/button_right.svg";
import sticker from "@/../../public/templet/thrillTheme/hero/stiker.svg";
import gif from "@/../../public/templet/thrillTheme/hero/hero.gif";
import LazyVideo from "./allComponents/LazyVideo";

function Hero({ description }) {
	// const videoRef = useRef(null);
	// const [isMuted, setIsMuted] = useState(true);

	// const toggleMute = () => {
	// 	if (videoRef.current) {
	// 		videoRef.current.muted = !isMuted;
	// 		setIsMuted(!isMuted);
	// 	}
	// };
	return (
		<div className="h-[100vh] w-full relative pb-[250px] md:pb-0 bg-[#0D130A]">
			<div className="xl:left-[2%] 2xl:left-[calc((100%-1440px)/2)] absolute z-10 top-2.5 flex font_poppins ">
				<Link
					// onClick={backToPreviousPage}
					href="#"
					className="text-[#F5F5F5]  text-center text-[12px] md:text-[14px] flex items-center decoration-  underline underline-offset-4 "
				>
					<BiChevronLeft className="text-xl" /> See all rooms of this location
				</Link>
			</div>
			<LazyVideo poster={'/templet/thrillTheme/hero/hero_poster.jpg'} />
		
			<div className="flex justify-center ">
				<div className="absolute z-20 bottom-5 flex flex-col items-center px-2.5">
					<h1 className="font_rusolie heading_1  text-[#CAFFBC] text-center text-[40px] sm:text-[60px] lg:text-[90px] leading-[46px] sm:leading-[70px] lg:leading-[90px] ">
						PROJECT MINOTAUR <br /> ESCAPE ROOM
					</h1>
					<p className="max-w-[770px] mx-auto text-base md:text-lg text-[#8CA482] text-center mt-0 mb-[40px] font_poppins">{description}</p>
					<a href="#bookingSlot" className="box box-b py-[15px] md:py-[20px] px-[55px] md:px-[65px] font_bandex text-[#FFFFFF] text-[26px] bg-[#FF050535] relative">
						<Image src={buttonLeft} alt="" height={71} width={9} className="h-full w-auto absolute left-[-5px] top-0" />
						<Image src={buttonRight} alt="" height={71} width={9} className="h-full w-auto absolute right-[-5px] top-0" />
						BOOK THIS GAME
					</a>
				</div>
			</div>
			<div className="absolute z-10 top-3 md:top-10 right-3 md:right-10">
				<Image src={sticker} alt=" " height={40} width={78} className="h-[30px] sm:h-[inherit] w-auto" />
				<div className="text-[#CAFFBC] font_poppins mt-1.5 sm:mt-2.5 relative">
					<Image src={gif} alt=" " height={30} width={50} className=" h-[45px] sm:h-[48px] w-auto absolute -left-9 sm:-left-10 -top-1 sm:top-0" />
					<p className="text-[10px] sm:text-[16px] font-[500] uppercase leading-[1]">
						Live Experience <br /> <span className="text-[8px] sm:text-[12px] font-[500] lowercase">with multiple actors</span>
					</p>
				</div>
			</div>
			<div className="absolute bottom-56 md:bottom-0 h-[600px] w-full bg-gradient-to-t from-[#0D130A] from-5%  to-transparent to-95%  "></div>
		</div>
	);
}

export default Hero;
