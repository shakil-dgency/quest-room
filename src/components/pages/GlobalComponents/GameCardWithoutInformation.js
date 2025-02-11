"use client";
import usePageLoad from "@/hooks/usePageLoad";
import React, { useRef, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import { MdPauseCircle } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

function GameCardWithoutInformation({src,poster, index}) {
	const [playingVideo, setPlayingVideo] = useState(null); // Track currently playing video
	const videoRefs = useRef([]); // Store refs for all videos
	const isPageLoaded = usePageLoad();

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
		<div className="group w-[407px] h-[688px] relative">
			<video
				ref={(el) => (videoRefs.current[index] = el)}
				poster={poster}
				loop
				muted
				playsInline
				className=" w-full h-full object-cover rounded-lg"
			>
				{isPageLoaded && <source src={src} type="video/mp4" />}
			</video>
			<button
				onClick={() => handlePlayPause(index)}
				className=" absolute bg-[#F20000] right-4 bottom-5 h-[25px] w-[25px] rounded-full hover:scale-125 duration-300 flex justify-center items-center"
			>
				{playingVideo === index && !videoRefs.current[index].paused ? (
					<FaPause  className=" text-[15px] text-[#D9D9D9]" />
				) : (
					<FaPlay  className="text-[15px] text-[#D9D9D9] " />
				)}
			</button>
		</div>
	);
}

export default GameCardWithoutInformation;
