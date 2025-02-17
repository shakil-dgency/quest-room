import React from "react";
import VideoTestimonial from "../GlobalComponents/VideoTestimonial";
import SectionStarter from "../GlobalComponents/SectionStarter";

function TestimonialSection() {
	return (
		<div className="pt-[70px]">
			<SectionStarter title="What Our Adventurers Are Saying" description="Hear directly from our guests about why Quest Room is home to the best escape rooms in Los Angeles, and find out what makes our thrilling, immersive games an experience you’ll never forget!" />
			<div className="g_container--theme pb-20">
				<VideoTestimonial />
			</div>
		</div>
	);
}

export default TestimonialSection;
