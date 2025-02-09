"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import event1 from "@/../../public/templet/thrillTheme/navBar/event1.png";
import event2 from "@/../../public/templet/thrillTheme/navBar/event2.png";
import event3 from "@/../../public/templet/thrillTheme/navBar/event3.png";
import event4 from "@/../../public/templet/thrillTheme/navBar/event4.png";
import Link from "next/link";
import { useSelector } from "react-redux";

const events = [
	{
		name: "Redondo Beach",
		slug: "redondo-beach",
		events: [
			{
				name: "Birthday Parties",
				description: "Ready to break from typical corporate events? ",
				image: event1,
				slug: "birthday-parties",
			},
			{
				name: "Team Building",
				description: "Ready to break from typical corporate events? ",
				image: event4,
				slug: "team-building",
			},
			{
				name: "Corporate Events",
				description: "Ready to break from typical corporate events? ",
				image: event1,
				slug: "corporate-events",
			},
			{
				name: "Bachelor or Bachelorette Party",
				description: "Ready to break from typical corporate events?",
				image: event3,
				slug: "bachelor-or-bachelorette-party",
			},
			{
				name: "Family Fun Activity",
				description: "Ready to break from typical corporate events?",
				image: event2,
				slug: "family-fun-activity",
			},
			{
				name: "Field trip or School Events",
				description: "Ready to break from typical corporate events?",
				image: event4,
				slug: "field-trip-or-school-events",
			},
		],
	},
	{
		name: "Hollywood",
		slug: "hollywood",
		events: [
			{
				name: "Team Building",
				description: "Ready to break from typical corporate events? ",
				image: event4,
				slug: "team-building",
			},
			{
				name: "Birthday Parties",
				description: "Ready to break from typical corporate events? ",
				image: event1,
				slug: "birthday-parties",
			},
			{
				name: "Corporate Events",
				description: "Ready to break from typical corporate events? ",
				image: event1,
				slug: "corporate-events",
			},
			{
				name: "Bachelor or Bachelorette Party",
				description: "Ready to break from typical corporate events?",
				image: event3,
				slug: "bachelor-or-bachelorette-party",
			},
			{
				name: "Family Fun Activity",
				description: "Ready to break from typical corporate events?",
				image: event2,
				slug: "family-fun-activity",
			},
			{
				name: "Field trip or School Events",
				description: "Ready to break from typical corporate events?",
				image: event4,
				slug: "field-trip-or-school-events",
			},
		],
	},
	{
		name: "Korea Town",
		slug: "korea-town",
		events: [
			{
				name: "Birthday Parties",
				description: "Ready to break from typical corporate events? ",
				image: event1,
				slug: "birthday-parties",
			},
			{
				name: "Team Building",
				description: "Ready to break from typical corporate events? ",
				image: event4,
				slug: "team-building",
			},
			{
				name: "Corporate Events",
				description: "Ready to break from typical corporate events? ",
				image: event1,
				slug: "corporate-events",
			},
			{
				name: "Bachelor or Bachelorette Party",
				description: "Ready to break from typical corporate events?",
				image: event3,
				slug: "bachelor-or-bachelorette-party",
			},
			{
				name: "Family Fun Activity",
				description: "Ready to break from typical corporate events?",
				image: event2,
				slug: "family-fun-activity",
			},
			{
				name: "Field trip or School Events",
				description: "Ready to break from typical corporate events?",
				image: event4,
				slug: "field-trip-or-school-events",
			},
		],
	},
	{
		name: "Culver City",
		slug: "culver-city",
		events: [
			{
				name: "Birthday Parties",
				description: "Ready to break from typical corporate events? ",
				image: event1,
				slug: "birthday-parties",
			},
			{
				name: "Corporate Events",
				description: "Ready to break from typical corporate events? ",
				image: event1,
				slug: "corporate-events",
			},
			{
				name: "Team Building",
				description: "Ready to break from typical corporate events? ",
				image: event4,
				slug: "team-building",
			},

			{
				name: "Bachelor or Bachelorette Party",
				description: "Ready to break from typical corporate events?",
				image: event3,
				slug: "bachelor-or-bachelorette-party",
			},
			{
				name: "Family Fun Activity",
				description: "Ready to break from typical corporate events?",
				image: event2,
				slug: "family-fun-activity",
			},
			{
				name: "Field trip or School Events",
				description: "Ready to break from typical corporate events?",
				image: event4,
				slug: "field-trip-or-school-events",
			},
		],
	},

	{
		name: "Plano",
		slug: "plano",
		events: [
			{
				name: "Birthday Parties",
				description: "Ready to break from typical corporate events? ",
				image: event1,
				slug: "birthday-parties",
			},
			{
				name: "Team Building",
				description: "Ready to break from typical corporate events? ",
				image: event4,
				slug: "team-building",
			},
			{
				name: "Corporate Events",
				description: "Ready to break from typical corporate events? ",
				image: event1,
				slug: "corporate-events",
			},
			{
				name: "Bachelor or Bachelorette Party",
				description: "Ready to break from typical corporate events?",
				image: event3,
				slug: "bachelor-or-bachelorette-party",
			},
			{
				name: "Family Fun Activity",
				description: "Ready to break from typical corporate events?",
				image: event2,
				slug: "family-fun-activity",
			},
			{
				name: "Field trip or School Events",
				description: "Ready to break from typical corporate events?",
				image: event4,
				slug: "field-trip-or-school-events",
			},
		],
	},
];

function EventCard({ event, setMobileViewEvent }) {
	const [newEvents, setNewEvents] = useState();

	const { location, id } = useSelector((state) => state.location);

	const handleSelectLocation = (locationEvents, e) => {
		setNewEvents(locationEvents);

		// Remove 'eventActive' class from all buttons
		document.querySelectorAll(".eventActive").forEach((btn) => {
			btn.classList.remove("eventActive");
		});

		// Add 'eventActive' class to the clicked button
		e.target.classList.add("eventActive");
	};

	useEffect(() => {
		if (window.innerWidth > 1024) {
			if (id === "dallas") {
				const dallasEvent = events.filter((item) => {
					return item.name.toLowerCase().includes("plano");
				});

				setNewEvents(dallasEvent[0]);
			} else {
				const otherEvents = events.filter((item) => {
					return location?.toLowerCase().includes(item.name.toLowerCase());
				});

				setNewEvents(otherEvents[0]);
			}
		} else {
			//for mobile view
			const dallasEvent = events.filter((item) => {
				return item.name.toLowerCase().includes("plano");
			});

			const otherEvents = events.filter((item) => {
				return item.name.toLowerCase() !== "plano";
			});

			// event render based on location
			setMobileViewEvent((prev) => {
				if (id === "los") {
					return { ...prev, los_angeles: otherEvents, dallas: [] };
				}

				if (id === "dallas") {
					return { ...prev, los_angeles: [], dallas: dallasEvent };
				}

				if (id === "home") {
					return { ...prev, los_angeles: otherEvents, dallas: dallasEvent };
				}

				return {
					...prev,
					los_angeles: otherEvents.filter((item) => location?.toLowerCase().includes(item.name.toLowerCase())),
					dallas: dallasEvent.filter((item) => location?.toLowerCase().includes(item.name.toLowerCase())),
				};
			});
		}
	}, [id]);



	return (
		<div
			id="eventDropdown"
			className={`${
				event ? "top-[48px]" : "-top-[200%]"
			} duration-300 bg-[#000A19] border-[1px] border-[#3f3f3f70] rounded-lg w-[1210px] px-[34px] py-[40px] fixed z-30  right-0 2xl:right-[calc((100%-1440px)/2)] `}
		>
			<p className="text_strokenav font_poppins uppercase text-center text-[28px] font-[900] ">
				parties and Events in {id === "home" ? "QuestRoom" : location}
			</p>

			<div className="flex gap-5 justify-center">
				{events
					?.filter((Item) => (id === "los" ? Item.name.toLowerCase() !== "plano" : id === "home" ? Item : null))
					.map((locationItem, j) => {
						return (
							<button
								onClick={(e) => handleSelectLocation(locationItem, e)}
								key={j}
								className={`group flex items-center justify-center gap-1.5 text-[18px] bg-[#7F828933] hover:bg-[#FC70081A] hover:text-[#FC7008] border-[1px] border-transparent duration-500 px-2.5 py-1.5 rounded-md text-[#5f5f5f] w-[221px] mt-[34px] `}
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="9" height="13" viewBox="0 0 15 22" fill="none">
									<path
										d="M7.49958 0.858398C3.63147 0.858398 0.484375 4.00549 0.484375 7.87361C0.484375 9.03481 0.774697 10.1862 1.32661 11.2074L7.11595 21.6779C7.19303 21.8175 7.33989 21.904 7.49958 21.904C7.65927 21.904 7.80614 21.8175 7.88321 21.6779L13.6747 11.2039C14.2245 10.1862 14.5148 9.03477 14.5148 7.87357C14.5148 4.00549 11.3677 0.858398 7.49958 0.858398ZM7.49958 11.3812C5.56553 11.3812 3.992 9.80766 3.992 7.87361C3.992 5.93955 5.56553 4.36602 7.49958 4.36602C9.43364 4.36602 11.0072 5.93955 11.0072 7.87361C11.0072 9.80766 9.43364 11.3812 7.49958 11.3812Z"
										fill=""
										className="group-hover:fill-[#FC7008] fill-[#5f5f5f]"
									/>
								</svg>
								{locationItem.name}
							</button>
						);
					})}
			</div>

			<div className="font_poppins grid grid-cols-3 gap-y-5 gap-x-5 pt-[32px] ">
				{newEvents?.events?.map((item, j) => {
					return (
						<div
							key={j}
							className="group flex flex-col sm:flex-row sm:items-center gap-3 bg-[#00122E] hover:bg-[#FC70081A] duration-300 p-4 sm:p-2 rounded-lg"
						>
							<div className="relative h-[100px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
								<Image
									src={item.image}
									alt=""
									height={78}
									width={138}
									className="h-[100px] w-[100px] object-cover rounded-lg group-hover:scale-110 duration-700"
								/>
							</div>
							<div>
								<p className="text-[16px] leading-[1.1] font-[600] text-[#D9D9D9]">{item.name}</p>
								<p className="text-[12px] leading-[1.2] pt-1.5 text-[#A3A3A3] pr-2 pb-2">{item.description}</p>
								<div className="flex">
									<Link href={`/${newEvents?.slug}/${item.slug}`} className="group/link text-[14px] text-[#FC7008] pr-2 flex items-center font-[500]">
										Explore <IoMdArrowDropdown className="text-[16px] mt-[1px] -rotate-90 group-hover/link:translate-x-[2.5px] duration-300" />
									</Link>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			{!newEvents && <p className="text-center text-xl text-[#A3A3A3] pt-5">Please Choose a Location 🎯</p>}
		</div>
	);
}

export default EventCard;
