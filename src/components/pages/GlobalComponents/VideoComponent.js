"use client";
import usePageLoad from "@/hooks/usePageLoad";
import React from "react";

function VideoComponent() {
    const isPageLoaded = usePageLoad();
	return (
		<video id="1" autoPlay loop muted playsInline className="hidden group-hover:block h-full w-full object-cover">
			{isPageLoaded && <source src="https://cdn.gbase.online/PROJECT_MINOTAUR_fin_2_d97411cd3d.mp4" type="video/mp4" />}
		</video>
	);
}

export default VideoComponent;
