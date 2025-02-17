import React from "react";
import Hero from "./Hero";
import FilterSection from "../GlobalComponents/FilterSection";
import EventSection from "./EventSection";
import GiftCardSection from "../GlobalComponents/GiftCardSection";
import AboutQroomLA from "./AboutQroomLA";
import TestimonialSection from "./TestimonialSection";
import Gallery from "@/components/templet/thrillTheme/Gallery";
import FrequentlyAsked from "@/components/templet/thrillTheme/FrequentlyAsked";


function LosAngeles() {
	return (
		<div className="bg-[#000A19]">
			<Hero />
            <FilterSection />
            <EventSection />
            <GiftCardSection />
            <TestimonialSection />
            <AboutQroomLA />
            <Gallery id="los" />
            <FrequentlyAsked id="los" />
      
		</div>
	);
}

export default LosAngeles;
