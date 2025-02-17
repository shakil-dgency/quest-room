import React from "react";
import EventCard from "../GlobalComponents/EventCard";
import SectionStarter from "../GlobalComponents/SectionStarter";

function EventSection() {
	return (
		<div className="pt-[70px]  ">
			<SectionStarter
				title="Host Unforgettable Escape Room Events and Parties in Los Angeles"
				description="Make your next event unforgettable with Quest Room! From bachelor parties to corporate team-building, our escape room events in LA offer
					fun, immersive experiences for every occasion."
			/>
			<div className="g_container--theme space-y-[140px] pb-20 pt-[40px]">
				{[...Array(4)].map((_, i) => (
					<EventCard key={i} index={i} />
				))}
			</div>
		</div>
	);
}

export default EventSection;
