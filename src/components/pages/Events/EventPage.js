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

function EventPage() {
	return (
		<div className="bg-[#000A19] relative">
			<Hero />
			<UspSection />
			<SingleLocationGameCard />
			<AgeGroup />
			<EventPricing />
			<GiftCardSection />
			<div className="mt-20">
				<Testimonial />
			</div>
			<div className="mt-20">
				<Gallery id="los" />
			</div>
			<div className="mt-10">
				<FrequentlyAsked id="los" />
			</div>
		</div>
	);
}

export default EventPage;
