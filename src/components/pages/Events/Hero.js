import Image from "next/image";
import React from "react";
import SectionStarter from "../GlobalComponents/SectionStarter";
import BigButton from "@/components/buttons/BigButton";

function Hero() {
	return (
		<div className="h-[950px] relative mb-[200px]">
			<Image src="/pages/event/eventHero.png" height={950} width={1980} alt="" className="h-full w-full object-cover" />
			<div className=" flex justify-center">
				<div className="absolute -bottom-[150px]">
					<SectionStarter
						title1="Epic Escape Room Birthday Party in Hollywood"
						description="Celebrate your special day with an action-packed escape room birthday party in Hollywood, LA! Immersive challenges, thrilling fun, and unforgettable memories await at Quest Room"
					/>
					<div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-[25px]">
						<BigButton title="Packages" hrefBasic="#event_packages" />
						<BigButton title="SEE Games" isOutline={true} hrefOutline="#singlelocation_gamecard" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
