import BreadCum from "@/components/templet/thrillTheme/allComponents/BreadCum";
import BookingSection from "@/components/templet/thrillTheme/BookingSection";
import Footer from "@/components/templet/thrillTheme/Footer";
import FrequentlyAsked from "@/components/templet/thrillTheme/FrequentlyAsked";
import Gallery from "@/components/templet/thrillTheme/Gallery";
import GameDetails from "@/components/templet/thrillTheme/GameDetails";
import Hero from "@/components/templet/thrillTheme/Hero";
import OtherGames from "@/components/templet/thrillTheme/OtherGames";
import StoryLine from "@/components/templet/thrillTheme/StoryLine";
import Testimonial from "@/components/templet/thrillTheme/Testimonial";
import Trailer from "@/components/templet/thrillTheme/Trailer";
import React from "react";

function page() {
	return (
		<div className="bg-[#0D130A] scrollable_container">
			<BreadCum />
			<Hero description="So, you dare to enter? Bravo! Get ready to experience LA’s #1 scary escape room, where the fear is real, and the actors are part of the thrill!" />
			<GameDetails />
			<StoryLine />
			<Trailer />
			<BookingSection />
			<Testimonial />
			<Gallery />
			<FrequentlyAsked />
			<OtherGames />
			<Footer />
		</div>
	);
}

export default page;
