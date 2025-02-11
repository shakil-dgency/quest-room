"use client"
import React, { useRef, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaPlayCircle } from "react-icons/fa";
import { MdPauseCircle } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import usePageLoad from "@/hooks/usePageLoad";

const videoList = [
	{
		description:
			"The thrill, excitement, and fun we had during the escape room were beyond compare. It truly felt like a once-in-a-lifetime adventure that we'll cherish forever. 😄🌟 The intensity of the puzzles, the heart-pounding moments, and the camaraderie we shared as a team made it a truly extraordinary experience. The memories we created together will stay with us for a lifetime! 🚀🗝️",
		short_description: "If we had to sum up our experience in one word, it would be unforgettable! 🎉",
		video: "https://cdn.gbase.online/Project_Minotaur_feedback_27b45dc956.MOV",
		google_link:
			"https://www.google.com/maps/place/QUEST+ROOM+-+Hollywood+Escape+Rooms/@34.0911441,-118.3120851,17z/data=!4m8!3m7!1s0x80c2b8ad41fb1b4b:0xdafb2f036b6bafca!8m2!3d34.0911441!4d-118.3098964!9m1!1b1!16s%2Fg%2F11f3n17vbg?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
		thumbnail: "bg-[url('/templet/thrillTheme/testimonial/video1.png')]",
	},
	{
		description:
			"It was an absolutely mind-blowing experience that exceeded all expectations! 'Amnesia' pushed us to the limits and provided an adrenaline rush like no other! 💥😱 We're still buzzing with excitement! Can't wait for more adventures at Questroom! 🎮🕯️ Thank you for creating such a thrilling and unforgettable gaming experience! 🙌🎉 #QuestroomAdventures #UnforgettableExperience #ThrillingGames #FiveStars #GamingBliss",
		short_description: "Wow, five out of five doesn't even do justice to the amazing time we had! 🌟🌟🌟",
		video: "https://cdn.gbase.online/Amnesia_Reaction_1_7c5bdffd1e.mov",
		google_link:
			"https://www.google.com/maps/place/QUEST+ROOM+-+Redondo+Beach+Escape+Rooms/@33.8717108,-118.3560566,17z/data=!3m2!4b1!5s0x80c2b4f99ff8bd1b:0x663c92cc538c4696!4m6!3m5!1s0x80c2b56425a6dc9f:0x7a414a6be0c41758!8m2!3d33.8717108!4d-118.3560566!16s%2Fg%2F11fl9kpq3s?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
		thumbnail: "bg-[url('/templet/thrillTheme/testimonial/video2.png')]",
	},
	{
		description:
			"The experience was top-notch, and we highly recommend it to anyone looking for an immersive and thrilling escape room adventure! It kept us on our toes and fully engaged throughout the entire game! 😄🧩",
		short_description: "We had an amazing time in Resurrection at Questroom! 🎉",
		video: "https://cdn.gbase.online/Resurrection_Reaction_1_286e1896ca.mov",
		google_link:
			"https://www.google.com/maps/place/QUESTROOM+-+Redondo+Beach+Escape+Rooms+and+Thrill+Theater/@33.8717152,-118.3586315,17z/data=!3m2!4b1!5s0x80c2b4f99ff8bd1b:0x663c92cc538c4696!4m6!3m5!1s0x80c2b56425a6dc9f:0x7a414a6be0c41758!8m2!3d33.8717108!4d-118.3560566!16s%2Fg%2F11fl9kpq3s?shorturl=1",
		thumbnail: "bg-[url('/templet/thrillTheme/testimonial/video3.png')]",
	},
	{
		description:
			"Questroom Review We were definitely feeling the pressure and getting a bit stressed out at times. One of our friends seemed to be overthinking everything, which made things even more intense! But we also knew that she had a lot of knowledge and skills, so we tried to trust her instincts and go with the flow. 🤔",
		short_description: "Oh, man, our first escape room experience was quite an adventure! 😅",
		video: "https://cdn.gbase.online/Bloody_Elbow_reaction_1_d1fec30152.MOV",
		google_link:
			"https://www.google.com/maps/place/QUESTROOM+-+Los+Angeles+Escape+Rooms/@34.0716725,-118.3111623,17z/data=!4m8!3m7!1s0x80c2b8987a4ec7b9:0x28dc8832d51cd56b!8m2!3d34.0716725!4d-118.3089736!9m1!1b1!16s%2Fg%2F11c20cpc82",
		thumbnail: "bg-[url('/templet/thrillTheme/testimonial/video4.png')]",
	},
	{
		description:
			"We had a fantastic time in the escape room, and it was a whole lot of fun! The challenges and puzzles kept us on our toes, and the nerve-wracking moments only added to the excitement! 😱💫 The room was undoubtedly challenging, but we were up for the adventure! Working together as a team, we tackled the obstacles and enjoyed every moment of it! 💪🚀",
		short_description: "Hey, everyone! We just conquered Polar Station, and it was an unforgettable experience! 🎉",
		video: "https://cdn.gbase.online/Polar_Station_Reaction_1_70074289a0.mp4",
		google_link:
			"https://www.google.com/maps/place/QUEST+ROOM+-+Redondo+Beach+Escape+Rooms/@33.8717108,-118.3560566,17z/data=!3m2!4b1!5s0x80c2b4f99ff8bd1b:0x663c92cc538c4696!4m6!3m5!1s0x80c2b56425a6dc9f:0x7a414a6be0c41758!8m2!3d33.8717108!4d-118.3560566!16s%2Fg%2F11fl9kpq3s?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
		thumbnail: "bg-[url('/templet/thrillTheme/testimonial/video5.png')]",
	},
];

function VideoTestimonial() {
	const [isOpen, setIsOpen] = useState();
	const [toggle, setToggle] = useState(false);
	const isPageLoaded = usePageLoad();

	const handleTextExpand = (e, id) => {
		// console.log(e.target.id ,id);

		// if(parseInt (e.target.id) === id){
		// 	setIsOpen(!isOpen);

		// }
		setToggle(!toggle);

		// if (toggle === true) {
		setIsOpen(e.target.id);
	};

	const [playingVideo, setPlayingVideo] = useState(null); // Track currently playing video
	const videoRefs = useRef([]); // Store refs for all videos

	const handlePlayPause = (index) => {
		// Pause and mute the currently playing video if it's different from the clicked one
		if (playingVideo !== null && playingVideo !== index) {
			videoRefs.current[playingVideo].pause();
			videoRefs.current[playingVideo].muted = true;
		}

		if (playingVideo === index) {
			// Toggle play/pause for the same video
			if (videoRefs.current[index].paused) {
				videoRefs.current[index].play();
				videoRefs.current[index].muted = false; // Unmute when playing
			} else {
				videoRefs.current[index].pause();
				videoRefs.current[index].muted = true; // Mute when paused
			}
			setPlayingVideo(videoRefs.current[index].paused ? null : index);
		} else {
			// Play the new video and unmute it
			videoRefs.current[index].play();
			videoRefs.current[index].muted = false;
			setPlayingVideo(index);
		}
	};

	return (
		<div>
			<div className="">
				<Swiper
					slidesPerView={1.1}
					spaceBetween={20}
					loop={false}
					speed={1000}
					pagination={{
						dynamicBullets: true,
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="thrillTempletTestimonialVideoSwiper thrillOnlyTestimonialSwiper thrillTempletSwiper "
					style={{}}
					breakpoints={{
						450: {
							slidesPerView: 1.4,
							spaceBetween: 20,
						},
						600: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						900: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1250: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					}}
				>
					{videoList.map((videoSrc, index) => (
						<SwiperSlide key={index}>
							<div
								className={`group h-[490px] max-w-[345px] mx-auto border-[1px] border-[#111B0D] rounded-lg relative font_poppins ${videoSrc.thumbnail}  bg-center bg-no-repeat bg-cover`}
							>
								{/* <Image src={testimonial} alt="" height={489} width={345} className="h-full w-full object-cover rounded-lg" /> */}
								<video ref={(el) => (videoRefs.current[index] = el)} loop muted playsInline className=" w-full h-full object-cover rounded-lg">
									{isPageLoaded && <source src={videoSrc.video} type="video/mp4" />}
								</video>
								<button
									onClick={() => handlePlayPause(index)}
									className=" absolute bottom-[50%] left-1/2 transform -translate-x-1/2 px-4 py-2 rounded hover:scale-125 duration-300"
								>
									{playingVideo === index && !videoRefs.current[index].paused ? (
										<MdPauseCircle className="hidden group-hover:block text-[37px] text-[#b9b9b9]" />
									) : (
										<FaPlayCircle className="text-[37px] text-[#b9b9b9]" />
									)}
								</button>
								<div
									className={`${
										parseInt(isOpen) === index && toggle ? "top-0 bottom-0 bg-[#03030380] backdrop-blur-sm" : "left-5 right-5 bottom-20"
									}  px-3 py-2 max-w-full absolute z-10  rounded-lg `}
								>
									<div className="testimonial_text h-[calc(100%-64px)] overflow-auto">
										<p className={`text-white text-[15px]  ${parseInt(isOpen) === index && toggle ? "hidden" : "block"}`}>
											{videoSrc.short_description}
										</p>
										<p className={`text-white text-[15px]  ${parseInt(isOpen) === index && toggle ? "block" : "hidden"}`}>{videoSrc.description}</p>
									</div>
								</div>
								<div className="absolute z-0 bottom-0 h-[40%] w-full bg-gradient-to-b from-transparent from-0% to-[#00112cc6] to-70% rounded-lg"></div>
								<div className={`absolute left-0 right-0  z-10  max-w-full bottom-0 h-20  `}>
									<div className="flex justify-between items-center pt-4 px-5">
										<button
											id={index}
											onClick={(Event) => handleTextExpand(Event, index)}
											className="text-[#d9d9d9] px-5 py-1.5 bg-transparent border-[1px] border-[#BFBFBF] text-[14px] font-[400] rounded-md"
										>
											{parseInt(isOpen) === index && toggle ? "Close" : "Full Review"}
										</button>
										<a href={`${videoSrc.google_link}`} target="_blank" className="text-[#d9d9d9] text-[14px] font-[400] flex items-center gap-1.5">
											See Original <BiLinkExternal className=" text-[14px] md:text-[16px]" />
										</a>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default VideoTestimonial;
