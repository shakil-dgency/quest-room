import React from "react";
import EventCard from "../GlobalComponents/EventCard";

function EventSection() {
	return (
		<div className="  ">
			<div className="max-w-[1330px] mx-auto pb-[75px] px-2.5 pt-[70px]">
				<h2 className="text-[#EDEDED] text-center">Host Unforgettable Escape Room Events and Parties in Los Angeles</h2>
				<p className="text-[14px] sm:text-[16px] pt-3 text-[#A3A3A3] text-center max-w-[680px] mx-auto">
					Make your next event unforgettable with Quest Room! From bachelor parties to corporate team-building, our escape room events in LA offer
					fun, immersive experiences for every occasion.
				</p>
			</div>
			<div className="g_container--theme space-y-[140px] pb-20">
				{[...Array(4)].map((_, i) => (
					<EventCard  key={i} index={i}/>
				))}
			</div>
		</div>
	);
}

export default EventSection;
