import Image from "next/image";
import React from "react";
import SectionStarter from "../GlobalComponents/SectionStarter";
import BigButton from "@/components/buttons/BigButton";

const PARAM_STYLES = {
	'birthday-parties': {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.accent.300/60%)]",
		gradient: "from-accent-900",
	},
	'family-fun-activity': {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.family.300/60%)]",
		gradient: "from-family-900",
	},
	'team-building': {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.team.300/60%)]",
		gradient: "from-team-900",
	},
	'corporate-events': {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.corporate.300/60%)]",
		gradient: "from-corporate-900",
	},
	'bachelor-or-bachelorette-party': {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.bachelor.300/60%)]",
		gradient: "from-bachelor-900",
	},
	'field-trip-or-school-events': {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.school.300/60%)]",
		gradient: "from-school-900",
	},
};


function Hero({param}) {

	const styles = PARAM_STYLES[param] || {};
	
	return (
		<div className="h-[950px] w-full bg-[url('/pages/Event/eventHero.png')] bg-no-repeat bg-cover bg-center relative mb-[200px]">
			{/* <Image src="/pages/Event/eventHero.png" height={950} width={1980} alt="" className="h-full w-full object-cover" /> */}
			<div className=" flex justify-center ">
				<div className="absolute z-10 -bottom-[150px]">
					<SectionStarter
						title1="Epic Escape Room Birthday Party in Hollywood"
						description="Celebrate your special day with an action-packed escape room birthday party in Hollywood, LA! Immersive challenges, thrilling fun, and unforgettable memories await at Quest Room"
						text_shadow= {styles?.textShadow}
					/>
					<div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-[25px]">
						<BigButton title="Packages" hrefBasic="#event_packages" />
						<BigButton title="SEE Games" isOutline={true} hrefOutline="#singlelocation_gamecard" />
					</div>
				</div>
			</div>
			<div className={`absolute bottom-0 h-[600px] w-full bg-gradient-to-t ${styles?.gradient} from-5%  to-transparent to-95% `} ></div>
		</div>
	);
}

export default Hero;
