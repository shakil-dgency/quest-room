import React from "react";
import Hero from "../../SpecialIncentive/Hero";
import SingleLocationGameCard from "../../GlobalComponents/SingleLocationGameCard";
import Testimonial from "./Testimonial";
import EventSection from "../../LosAngeles/EventSection";
import GiftCardSection from "../../GlobalComponents/GiftCardSection";
import TestimonialSection from "../../LosAngeles/TestimonialSection";
import Gallery from "@/components/templet/thrillTheme/Gallery";
import FrequentlyAsked from "@/components/templet/thrillTheme/FrequentlyAsked";

function Plano() {
	return (
		<div className="bg-[#000A19]">
			<Hero
				video="https://cdn.gbase.online/55_0fdb1aa0c2.mp4#t=0.1"
				title="newest escape rooms in Plano tx"
				titleTop="Adventure awaits at Quest Room Plano"
				description=" Dive into thrilling games like Bloody Elbow, DaVinci's Challenge, Spellbreakers, Malediction, Cannibal’s Den, and Red Giant. Our facility is located on the second floor."
				buttonBottom="Hollywood, 5517 Santa Monica Blvd, Los Angeles"
			/>
			<SingleLocationGameCard />
			<Testimonial />
			<EventSection />
			<GiftCardSection />
			<TestimonialSection />
			<Gallery id="los" />
			<FrequentlyAsked id="los" />
		</div>
	);
}

export default Plano;
