"use client";
import React, { useEffect } from "react";

function GameDetailObserver() {
	useEffect(() => {
		function handleIntersection(entries, observer) {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					console.log("Element is in view:", entry.target);
					entry.target.classList.add("visible_head"); // Example: Add a class for animation
					observer.unobserve(entry.target); // Stop observing if no longer needed
				}
			});

            console.log(entries);
            
		}

        const observer = new IntersectionObserver(handleIntersection, {
            root: null,              // Use the viewport as the root
            rootMargin: '0px',       // Margin around the root
            threshold: 0.7           // Trigger when 70% of the element is visible
          });

		const section = document.querySelector("#game_detail");

		observer.observe(section);
	});

	return <div></div>;
}

export default GameDetailObserver;
