import React from "react";
import Hero from "./Hero";
import UspSection from "./UspSection";
import SingleLocationGameCard from "../GlobalComponents/SingleLocationGameCard";
import AgeGroup from "./AgeGroup";
import EventPricing from "./EventPricing";
import GiftCardSection from "../GlobalComponents/GiftCardSection";
import Gallery from "@/components/templet/thrillTheme/Gallery";
import FrequentlyAsked from "@/components/templet/thrillTheme/FrequentlyAsked";
import Testimonial from "../Dallas/Plano/Testimonial";


const PARAM_STYLES = {
	'birthday-parties': {
		bgColour:'bg-accent-900'
	},
	'family-fun-activity': {
		bgColour:'bg-family-900'
	},
};


function EventPage({param}) {

	const styles = PARAM_STYLES[param] || {};

	return (
		<div className={`${styles.bgColour} relative`}>
			<Hero param={param} />
			<UspSection />
			<SingleLocationGameCard param={param} />
			<AgeGroup param={param} />
			<EventPricing param={param} />
			<GiftCardSection />
			<div className="mt-20">
				<Testimonial param={param} />
			</div>
			<div className="mt-20">
				<Gallery id="los" />
			</div>
			<div className="mt-10">
				<FrequentlyAsked id="los" param={param} />
			</div>
		</div>
	);
}

export default EventPage;
