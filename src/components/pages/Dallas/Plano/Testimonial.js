/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import coma from "@/../../public/templet/thrillTheme/coma.png";
import google from "@/../../public/templet/thrillTheme/google.svg";
import star from "@/../../public/templet/thrillTheme/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import SectionStarter from "../../GlobalComponents/SectionStarter";

const PARAM_STYLES = {
	"birthday-parties": {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.accent.300/60%)]",
		bgColour:'bg-accent-900'
	},
	"family-fun-activity": {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.family.300/60%)]",
		bgColour:'bg-family-900'
	},
	"team-building": {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.team.300/60%)]",
		bgColour:'bg-team-900'
	},
	"corporate-events": {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.corporate.300/60%)]",
		bgColour:'bg-corporate-900'
	},
	"bachelor-or-bachelorette-party": {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.bachelor.300/60%)]",
		bgColour:'bg-bachelor-900'
	},
	"field-trip-or-school-events": {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.school.300/60%)]",
		bgColour:'bg-school-900'
	},
};

function Testimonial({ param }) {
	const styles = PARAM_STYLES[param] || {};

	return (
		<div>
			<SectionStarter
				title="What Our Adventurers Are Saying"
				description="Hear directly from our guests about why Quest Room is home to the best escape rooms in Los Angeles, and find out what makes our thrilling,
					immersive games an experience you’ll never forget!"
				text_shadow={styles?.textShadow}
			/>

			<div className="max-w-[1440px] mx-auto  relative pb-20">
				<div className=" ">
					<div className="max flex flex-col items-center  absolute top-20 md:top-[140px] left-[50%] translate-x-[-50%] md:translate-x-0  md:left-28 z-10">
						<div className="flex items-center gap-2.5">
							<Image src={google} alt="" height={65} width={65} className="h-[25px] md:h-[65px] w-auto" />
							<div>
								<Image src={star} alt="" height={16} width={110} className=" h-[12px] md:h-[16px] w-auto" />
								<p className="hidden md:block text-[12px] text-[#D9D9D9] pt-2 font_poppins">5.0 based on 3,080 reviews</p>
							</div>
						</div>
						<p className=" md:hidden text-[12px] text-[#D9D9D9] pt-2 font_poppins w-[300px] text-center">5.0 based on 3,080 reviews</p>
					</div>
					<div className="hidden md:block font_poppins absolute  md:top-[140px] right-0 md:right-28 z-10">
						<button className="px-4 py-[5px]  flex items-center border-[1px] border-[#D9D9D9] rounded text-[#D9D9D9]">Read more reviews</button>
					</div>
					<div className={` `}>
						<Swiper
							slidesPerView={1}
							spaceBetween={50}
							loop={false}
							speed={1000}
							pagination={{
								dynamicBullets: true,
								clickable: true,
							}}
							navigation={true}
							modules={[Pagination, Navigation]}
							className={`thrillTempletTestimonialSwiper thrillOnlyTestimonialSwiper thrillTempletSwiper planoTestimonial ${styles.bgColour ? styles.bgColour : "bg-accent-900"}`}
							style={{ paddingTop: "50px"}}
						>
							<div className="testimonial-bg"></div>
							<SwiperSlide>
								<div className="font_poppins ">
									<div className="max-w-[950px] pt-[50px] md:pt-[100px] ml-4 md:ml-28 mr-4 md:mr-20 ">
										<p className="relative uppercase text-[24px] md:text-[38px]  text-[#EDEDED] text-center md:text-start leading-[1.2] font_rusolie pt-[110px] md:pt-[140px] pb-[15px] md:pb-[25px]">
											There were challenges for the puzzle experts
										</p>
										<div className="relative ">
											<p className={`relative text-[15px] sm:text-[16px] md:text-[18px] italic text-center md:text-start text-[#D9D9D9]`}>
												We've done a lot of escape rooms and Warlocked has good production value in addition to the interesting puzzles and actor
												interaction scaling the difficulty to keep things fun Steve was really great, the kids had a blast (the 7 year old couldn't
												stop asking questions/talking about it after, the youngest was confused at times but still had lots to do and was not scared)
												having an actor was so fun. There were challenges for the puzzle experts and more kid friendly help the forest animals / find
												stuff kind of things
											</p>
										</div>
										<p className="mt-[24px] sm:mt-[34px] text-[14px] font_poppins text-[#BFBFBF] text-center md:text-start">— J L., Hollywood, LA </p>
										<div className="mt-[10px] sm:mt-[25px] flex md:block justify-center text-[16px] font-[500] pb-0 md:pb-20">
											<button className="text-[#BFBFBF] flex items-center gap-1.5 ">
												See Original <BiLinkExternal className=" text-[18px] md:text-[20px]" />
											</button>
										</div>
										<div className="flex md:hidden font_poppins pt-[25px]  justify-center">
											<button className=" px-5 py-[4px] text-[14px]  flex items-center border-[1px] border-[#D9D9D9] rounded text-[#D9D9D9]">
												Read more reviews
											</button>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="font_poppins ">
									<div className="max-w-[950px] pt-[50px] md:pt-[100px] ml-4 md:ml-28 mr-4 md:mr-20 ">
										<p className="relative uppercase text-[24px] md:text-[38px]  text-[#CAFFBC] text-center md:text-start leading-[1.2] font_rusolie pt-[110px] md:pt-[140px] pb-[15px] md:pb-[25px]">
											The best escape rooms I’ve ever done out of my entire life!
										</p>
										<div className="relative ">
											<p className={`relative text-[15px] sm:text-[16px] md:text-[18px] italic text-center md:text-start text-[#8CA482]`}>
												Awesome! Just awesome. Worth every minutes and penny. We played many of their games and they are all very high-end and
												immersive. The Perfumer was more immersive than any other room we've done before, and we've done a lot! The Game Master John
												was masterful. It really felt like you were in historic Paris! The puzzles were engaging and non-linear. We would HIGHLY
												recommend this game and this venue!
											</p>
										</div>
										<p className="mt-[24px] sm:mt-[34px] text-[14px] font_poppins text-[#8CA482] text-center md:text-start">
											— Bryanna M., Hollywood, LA{" "}
										</p>
										<div className="mt-[10px] sm:mt-[25px] flex md:block justify-center text-[16px] font-[500] pb-0 md:pb-20">
											<button className="text-[#8CA482] flex items-center gap-1.5 ">
												See Original <BiLinkExternal className=" text-[18px] md:text-[20px]" />
											</button>
										</div>
										<div className="flex md:hidden font_poppins pt-[25px]  justify-center">
											<button className=" px-5 py-[4px] text-[14px]  flex items-center border-[1px] border-[#8CA482] rounded text-[#CAFFBC]">
												Read more reviews
											</button>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
				<Image
					src={coma}
					alt=""
					height={93}
					width={121}
					className=" h-[40px] sm:h-[60px] lg:h-[93px] w-auto object-cover absolute top-5 md:top-0 left-0 opacity-[0.3] mix-blend-luminosity"
				/>
				<Image
					src={coma}
					alt=""
					height={93}
					width={121}
					className=" h-[40px] sm:h-[60px] lg:h-[93px] w-auto object-cover absolute  bottom-0 right-0 rotate-180 opacity-[0.3] mix-blend-luminosity"
				/>
			</div>
		</div>
	);
}

export default Testimonial;
