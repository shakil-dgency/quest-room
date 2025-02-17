/* eslint-disable react/no-unescaped-entities */
import MediumButton from "@/components/buttons/MediumButton";
import Image from "next/image";
import React from "react";

function EventCard({ index }) {
	return (
		<div className="max-w-[1349px] mx-auto relative">
			<div className={`max-w-[1030px] ${index % 2 === 0 ? "" : "ml-auto"} pl-[75px] pt-[45px] pb-[50px] rounded-[14px] grid grid-cols-4 relative`} >
				{/* Background Image */}
				<div className={`absolute inset-0 bg-[url('/global/event_card.png')] bg-no-repeat bg-cover ${index % 2 === 0 ? "" : "scale-x-[-1]"} `} />

				<div className={`relative ${index % 2 === 0 ? "col-start-1 col-end-4" : "col-start-2 col-end-5 pl-12"} `}>
					<p className="body-paragraph_L text-[#A3A3A3] pb-[15px]">Escape Room</p>
					<p className="subtitle_L text-[#D9D9D9] font-[700] uppercase">Bachelorette Parties</p>
					<p className="body-paragraph_M text-[#A3A3A3] mt-[10px] max-w-[585px] font_poppins">
						Are you looking for the perfect escape room for a bachelorette/bachelor party? Look no further than Questroom! Take a look at our rooms
						and choose the theme of your night! If you'd like a Hangover experience we'd suggest our game Amnesia, while others may prefer a scarier
						experience like Cannibal's Den or Bloody Elbow. No matter which you choose it will make for an unforgettable night to proceed your MOST
						unforgettable day!
					</p>
					<div className="flex flex-col-reverse sm:flex-row items-center mt-[50px] gap-[30px]">
						<MediumButton title="Inquire now" />
						<MediumButton title="Learn more" isOutline={true} />
					</div>
				</div>
				<div className="">
					
				</div>
			</div>
            <Image src={"/global/bachelor_event.png"} height={528} width={612} alt="" className={`absolute top-[-35px] ${index % 2 === 0 ? "right-0" : "left-0"}  `} />
		</div>
	);
}

export default EventCard;
