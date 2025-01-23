import { useEffect, useState,useRef } from "react";
import { ImVolumeMute2 } from "react-icons/im";
import { GoUnmute } from "react-icons/go";
import usePageLoad from "@/hooks/usePageLoad";

const LazyVideo = ({ src, poster, type }) => {

    const isPageLoaded = usePageLoad()
	const videoRef = useRef(null);
	const [isMuted, setIsMuted] = useState(true);

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};

	return (
		<>
			<video
				poster={poster} // Placeholder image before video loads
				ref={videoRef}
                loading="lazy"
				autoPlay
				loop
				muted={isMuted}
				playsInline
				className="h-full w-full object-cover"
			>
				{isPageLoaded && <source src="https://res.cloudinary.com/duvvlysie/video/upload/v1736239911/hero_video_j91do9.mp4" type="video/mp4" />}
				
			</video>
			<button
				onClick={toggleMute}
				className={`animate-pulse flex  absolute z-20 top-[52%] sm:top-[42%] lg:top-[100%] right-3 lg:right-14  lg:-mt-[200px]  justify-center items-center bg-[#0F1A0C]  px-1 py-1 rounded-full after:absolute after:bg-[#0F1A0C80] after:h-10 after:w-10 after:rounded-full before:absolute before:bg-[#0F1A0C90] before:h-8 before:w-8 before:rounded-full `}
			>
				{isMuted ? (
					<ImVolumeMute2 className="relative z-10 text-[15px] text-[#fff]" />
				) : (
					<GoUnmute className="relative z-10 text-[15px] text-[#fff] " />
				)}
			</button>
		</>
	);
};

export default LazyVideo;
