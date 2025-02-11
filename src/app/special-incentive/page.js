import FilterSection from "@/components/pages/GlobalComponents/FilterSection";
import Hero from "@/components/pages/SpecialIncentive/Hero";
import FrequentlyAsked from "@/components/templet/thrillTheme/FrequentlyAsked";
import Gallery from "@/components/templet/thrillTheme/Gallery";
import React from "react";

function page() {
	return (
		<div className="bg-[#000A19]">
			<Hero
				title="Quest Room Offers the Most Thrilling and Immersive Escape Rooms in LA"
				titleTop="Quest Room vs. Others: What Sets Us Apart?"
				description=' "I have played many escape rooms in Los Angeles, but after visiting Quest Room, I’m totally hooked! The immersive games here are truly the best escape rooms in LA! From live actors to interactive themes, intricate puzzles, and spine-chilling adventures—Quest Room has it all! There’s really something for everyone!" — Sarah L., Los Angeles'
				buttonBottom="Exclusive $15 Discount on escape room games! Available ONLY on this page — don’t miss out, claim your offer TODAY!"
			/>

			<FilterSection />
			<div className="pt-5">
				<Gallery />
			</div>
			<FrequentlyAsked />
		</div>
	);
}

export default page;
