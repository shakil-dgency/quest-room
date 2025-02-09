import FilterSection from "@/components/pages/SpecialIncentive/FilterSection";
import Hero from "@/components/pages/SpecialIncentive/Hero";
import FrequentlyAsked from "@/components/templet/thrillTheme/FrequentlyAsked";
import Gallery from "@/components/templet/thrillTheme/Gallery";
import React from "react";

function page() {
	return (
		<div className="bg-[#000A19]">
			<Hero />
			<FilterSection />
			<div className="pt-5">
				<Gallery />
			</div>
			<FrequentlyAsked />
		</div>
	);
}

export default page;
