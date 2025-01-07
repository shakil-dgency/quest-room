import BookingSection from "@/components/templet/thrillTheme/BookingSection";
import Gallery from "@/components/templet/thrillTheme/Gallery";
import GameDetails from "@/components/templet/thrillTheme/GameDetails";
import Hero from "@/components/templet/thrillTheme/Hero";
import StoryLine from "@/components/templet/thrillTheme/StoryLine";
import Testimonial from "@/components/templet/thrillTheme/Testimonial";
import Trailer from "@/components/templet/thrillTheme/Trailer";
import React from "react";

function page() {
	return (
		<div className="bg-[#0D130A]">
			<Hero description="So, you dare to enter? Bravo! Get ready to experience LA’s #1 scary escape room, where the fear is real, and the actors are part of the thrill!" />
      <GameDetails />
      <StoryLine />
      <Trailer />
      <BookingSection />
      <Testimonial />
      <Gallery />
		</div>
	);
}

export default page;
