/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/../../public/templet/thrillTheme/questroom_logo.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { usePathname } from "next/navigation";
import Lock from "@/../../public/templet/thrillTheme/navBar/lock.svg";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

import LocationCard from "./LocationCard";
import RoomsCard from "./roomsCard/RoomsCard";
import SelectLocation from "./SelectLocation";
import LocationWatcher from "./LocationWatcher";
import EventCard from "./eventCard/EventCard";
import Link from "next/link";
import SubLocationGames from "./roomsCard/SubLocationGames";
import { useSelector } from "react-redux";
import MediumButton from "../buttons/MediumButton";

const locationGame = [
	{
		mejorcity: "Los Angeles, CA",
		subcity: [
			{
				name: "Redondo Beach",
				address: "1815 Hawthorne Blvd",
				slug: "redondo-beach",
				games: [
					{
						name: "Warlocked",
						description: "You remember being with your friends, stuck on the side of the road. ",
						image: "",
						slug: "warlocked",
						category: ['comedy', 'family']
					},
					{
						name: "Kablam",
						description: "You remember being with your friends, stuck on the side of the road. ",
						image: "",
						slug: "kablam",
						category: ['comedy', 'adult']
					},
					{
						name: "Resurrection",
						description: "You remember being with your friends, stuck on the side of the road. ",
						image: "",
						slug: "resurrection",
						category: ['horror', 'family']
					},
					{
						name: "Polar Station",
						description: "You remember being with your friends, stuck on the side of the road. ",
						image: "",
						slug: "polar-station",
						category: ['adventure']
					},
				],
			},
			{
				name: "Hollywood",
				address: "5517 Santa Monica Blvd",
				slug: "hollywood",
				games: [
					{
						name: "Project Minotaur",
						description: "You remember being with your friends, stuck on the side of the road. ",
						image: "",
						slug: "project-minotour",
						category: ['comedy', 'family']
					},
					{
						name: "Cannibal's Den 2.0",
						description: "You remember being with your friends, stuck on the side of the road. ",
						image: "",
						slug: "cannibals-den",
						category: ['horror', 'family']
					},
					{
						name: "Perfumer",
						description: "You remember being with your friends, stuck on the side of the road. ",
						image: "",
						slug: "perfumer",
						category: ['horror', 'family']
					},
					{
						name: "Red Giant",
						description: "You remember being with your friends, stuck on the side of the road. ",
						image: "",
						slug: "red-giant",
						category: ['adventure']
					},
					{
						name: "Project Minotaur: Replay",
						description: "You remember being with your friends, stuck on the side of the road. ",
						image: "",
						slug: "project-minotour-replay",
						category: ['horror', 'family']
					},
				],
			},
			{
				name: "Korea Town",
				address: "170 S. Western Ave",
				slug: "korea-town",
				games: [
					{
						name: "Malediction",
						description: "You remember being with your friends, stuck on the side of the road.",
						image: "",
						slug: "malediction",
						category: ['comedy', 'family']
					},
					{
						name: "Spell Breakers",
						description: "You remember being with your friends, stuck on the side of the road.",
						image: "",
						slug: "spell-breakers",
						category: ['adventure']
					},
					{
						name: "Heretics",
						description: "You remember being with your friends, stuck on the side of the road.",
						image: "",
						slug: "heretics",
						category: ['horror', 'family']
					},
					{
						name: "Da Vinci's Challenge",
						description: "You remember being with your friends, stuck on the side of the road.",
						image: "",
						slug: "da-vincis-challenge",
						category: ['comedy', 'adult']
					},
				],
			},
			{
				name: "Culver City",
				address: "5235 W Adams Blvd",
				slug: "culver-city",
				games: [
					{
						name: "Amnesia",
						description: "You remember being with your friends, stuck on the side of the road.",
						image: "",
						slug: "amnesia",
						category: ['horror', 'family']
					},
					{
						name: "Pirates: Wanted!",
						description: "You remember being with your friends, stuck on the side of the road.",
						image: "",
						slug: "pirates-wanted",
						category: ['comedy', 'adult']
					},
					{
						name: "Greedy",
						description: "You remember being with your friends, stuck on the side of the road.",
						image: "",
						slug: "greedy",
						category: ['adventure']
					},
				],
			},
		],
	},
	{
		mejorcity: "Dallas, TX",
		subcity: [
			{
				name: "Plano",
				address: "3420 K Ave Unit 309",
				slug: "plano",
				games: [
					{
						name: "Cannibal's Den",
						description: "You remember being with your friends, stuck on the side of the road. ",
						image: "",
						slug: "canibals-den",
						category: ['horror', 'family']
					},
					{
						name: "Da Vinci's Challenge",
						description: "You remember being with your friends, stuck on the side of the road. ",
						image: "",
						slug: "da-vincis-challenge",
						category: ['adventure']
					},
					{
						name: "Malediction",
						description: "You remember being with your friends, stuck on the side of the road. ",
						image: "",
						slug: "malediction",
						category: ['horror', 'family']
					},
					{
						name: "Red Giant",
						description: "You remember being with your friends, stuck on the side of the road. ",
						image: "",
						slug: "red-giant",
						category: ['adventure']
					},
					{
						name: "Spell Breakers",
						description: "You remember being with your friends, stuck on the side of the road. ",
						image: "",
						slug: "spell-breakers",
						category: ['comedy', 'family']
					},
					{
						name: "Heretics",
						description: "You remember being with your friends, stuck on the side of the road. ",
						image: "",
						slug: "heretics",
						category: ['horror', 'family']
					},
				],
			},
		],
	},
];

function NavBar() {
	const [openIndex, setOpenIndex] = useState(null);
	const [toggle, setToggle] = useState(false);
	const [escape, setEscape] = useState(false);
	const [event, setEvent] = useState(false);
	const [isLocationOpen, setIsLocationOpen] = useState(false);
	const [resize, setResize] = useState();
	const [escapePopUp, setEscapePopUp] = useState(false);
	const [eventPopUp, setEventPopUp] = useState(false);
	const [mobileViewEvent, setMobileViewEvent] = useState({
		los_angeles: null,
		dallas: null,
	});
	const [mobileRooms, setMobileRooms] = useState({
		rooms: null,
		isSingleLocation: false,
	});

	const { location, id } = useSelector((state) => state.location);

	const pathname = usePathname();

	const handleNavSidebar = () => {
		setToggle(!toggle);

		setEscape(false);
		setEvent(false);
		setIsLocationOpen(false);
	};
	const handleescapeBar = () => {
		setEscape(!escape);
		setEvent(false);
		setToggle(false);
	};
	const handleEventBar = () => {
		setEvent(!event);
		setEscape(false);
		setToggle(false);
	};

	const handleLocationBarOpen = () => {
		setIsLocationOpen(true);
		setToggle(false);

		document.documentElement.style.overflowY = "hidden"; // For the <html> element
		document.body.style.overflowY = "hidden";
	};

	const handleLocationBarClose = () => {
		const location = document.getElementById("locationbar");
		setIsLocationOpen(false);
		setToggle(false);

		document.documentElement.style.overflowY = "visible"; // For the <html> element
		document.body.style.overflowY = "visible";
	};

	useEffect(() => {
		let hamburg = document.querySelector(".hamburg");
		console.log(toggle);

		if (toggle === false) {
			hamburg.classList.remove("active");
			if (window.innerWidth < 1024) {
				// document.documentElement.style.overflow = "visible"; // For the <html> element
				document.body.style.overflow = "visible";
			}
		} else {
			hamburg.classList.add("active");
			if (window.innerWidth < 1024) {
				// document.documentElement.style.overflow = "hidden"; // For the <html> element
				document.body.style.overflow = "hidden";
			}
		}
	}, [toggle]);

	useEffect(() => {
		const navbar = document.getElementById("navbar");
		const rooms = document.getElementById("roomsNavbar");
		const roomsButton = document.getElementById("roomsButton");
		const eventDropdown = document.getElementById("eventDropdown");
		const eventButton = document.getElementById("eventButton");
		const hamburgMenu = document.getElementById("hamburgMenu");
		const hamburgButton = document.getElementById("hamburgButton");
		// Navbar OnScroll functionality

		var lastScrollTop = 0;

		window.addEventListener("scroll", function () {
			let scrollTop = window.scrollY || document.documentElement.scrollTop;

			if (this.window.innerWidth < 768) {
				if (scrollTop > 100) {
					if (scrollTop > lastScrollTop) {
						navbar.style.top = "-60px";
					} else if (lastScrollTop > scrollTop + 20) {
						navbar.style.top = "0";
					} else if (scrollTop === 0) {
						navbar.style.top = "0";
					}
				}

				lastScrollTop = scrollTop;
			}
		});

		// window.addEventListener("resize", () => {
		// 	// console.log(window.innerWidth);
		// 	setResize(window.innerWidth);
		// });

		window.addEventListener("click", (e) => {
			if (!rooms.contains(e.target) && !roomsButton.contains(e.target)) {
				setEscape(false);
			}

			if (!eventDropdown.contains(e.target) && !eventButton.contains(e.target)) {
				setEvent(false);
			}
			if (!hamburgMenu.contains(e.target) && !hamburgButton.contains(e.target)) {
				setToggle(false);
			}
		});
	}, []);

	useEffect(() => {
		handleLocationBarClose();
		setEscape(false);
		setEvent(false);
	}, [pathname]);

	const handleToggleButton = (index) => {
		setOpenIndex(openIndex === index ? null : index); // Toggle open/close
	};

	// this useEffect workes for mobile view escaperoom and event functionality.Data filtered based on location

	useEffect(() => {
		if (id === "home") {
			setMobileRooms((prev) => ({ ...prev, rooms: locationGame, isSingleLocation: false }));
		} else if (id === "los" || id === "dallas") {
			// Find the Mejorcity object matching the selected location
			const cityData = locationGame.find((city) => city.mejorcity.toLowerCase().includes(location?.toLowerCase()));
			setMobileRooms((prev) => ({ ...prev, rooms: [cityData], isSingleLocation: false }));
			return;
		} else {
			const subLocationData = locationGame
				.map((item) => {
					const foundSubcity = item.subcity.find((city) => location?.toLowerCase().includes(city.name.toLowerCase()));
					return foundSubcity ? { mejorcity: item.mejorcity, subcity: [foundSubcity] } : null;
				})
				.filter((item) => item !== null); // Remove null values (cities with no matching subcity)

			setMobileRooms((prev) => ({ ...prev, rooms: subLocationData, isSingleLocation: true }));
		}
	}, [id]);

	console.log(mobileViewEvent.dallas);

	return (
		<div id="navbar" className="w-full z-50 sticky  top-0 duration-300">
			<div className="bg-[#000A19] pt-2.5 md:py-[14px] relative z-40 sm:z-50 ">
				<div className="g_container--theme flex justify-between items-center gap-2 ">
					{/* Logo */}
					<Link href={"/"} className="flex-none">
						<Image src={logo} alt="logo" height={44} width={227} className="h-[16px] 2xs:h-[20px] xs:h-[22px] sm:h-[35px] w-auto" />{" "}
					</Link>

					{/* Dropdown */}
					<SelectLocation handleLocationBarOpen={handleLocationBarOpen} />

					{/* Navigation Links */}
					<div className="flex gap-5">
						<div className="hidden md:flex text-[14px] gap-5 items-center text-[#f5f5f5] font_poppins">
							<div
								id="roomsButton"
								onClick={handleescapeBar}
								className={`${escape ? "text-[#FC7008] " : ""} hidden lg:flex cursor-pointer items-center gap-1`}
							>
								ESCAPE ROOMS <IoMdArrowDropdown className={`text-[18px] duration-300 ${escape ? "rotate-180 " : ""}`} />
							</div>
							<div
								id="eventButton"
								onClick={handleEventBar}
								className={`${event ? "text-[#FC7008] " : ""} hidden lg:flex items-center gap-1 cursor-pointer`}
							>
								EVENTS <IoMdArrowDropdown className={`text-[18px] duration-300 ${event ? "rotate-180" : ""}`} />
							</div>
							<a
								href="#bookingSlot"
								className="hidden md:block uppercase rounded-[2px] text-[#030303] text-[13px] lg:text-[15px] px-2.5 lg:px-[20px] xl:px-[35px] py-[10px] font-[600] bg-[#FC7008] "
							>
								BOOK GAMES
							</a>
							{/* <MediumButton title="book games" /> */}
						</div>

						{/* <div
							id="hamburgButton"
							onClick={handleNavSidebar}
							className="hamburg cursor-pointer h-[30px] 2xs:h-[40px] w-[30px] 2xs:w-[40px] px-1 py-1.5 2xs:px-[7px] 2xs:py-[11px] bg-[#FC700833] space-y-1 flex flex-col justify-center overflow-hidden"
						>
							<div className="top h-[3px] w-full rounded-2xl bg-[linear-gradient(90deg,_#F37F09,_#E7660F,_#D60200)]"></div>
							<div className="middle h-[3px] w-full rounded-2xl bg-[linear-gradient(90deg,_#F37F09,_#E7660F,_#D60200)]"></div>
							<div className="bottom h-[3px] w-full rounded-2xl bg-[linear-gradient(90deg,_#F37F09,_#E7660F,_#D60200)]"></div>
						</div> */}
						<div
							id="hamburgButton"
							onClick={handleNavSidebar}
							className="hamburg cursor-pointer h-[30px] 2xs:h-[40px] w-[30px] 2xs:w-[40px] px-1 py-1.5 2xs:px-[7px] 2xs:py-[11px] bg-[#001433] space-y-1 flex flex-col justify-center overflow-hidden"
						>
							<div className="top h-[3px] w-full rounded-2xl bg-[#BFBFBF]"></div>
							<div className="middle h-[3px] w-full rounded-2xl bg-[#BFBFBF]"></div>
							<div className="bottom h-[3px] w-full rounded-2xl bg-[#BFBFBF]"></div>
						</div>
					</div>
				</div>

				{/* <div className="flex justify-center w-full"> */}
				<a
					href="#bookingSlot"
					className="flex justify-center md:hidden mt-2 uppercase w-full py-[7px] bg-[#D60200] font-[600] text-white font_poppins "
				>
					Book this game
				</a>
				{/* </div> */}
			</div>

			{/* ----------all pop up card------ */}

			{/* ---location--- */}

			<LocationCard isLocationOpen={isLocationOpen} handleLocationBarClose={handleLocationBarClose} />
			<div
				id="hamburgMenu"
				className={`${
					toggle ? " top-[50px] sm:top-[80px] md:top-[50px] flex flex-col lg:grid lg:grid-cols-2" : "hidden md:grid md:grid-cols-2 md:top-[-200%]"
				}  duration-300  overflow-y-auto h-[100vh] lg:h-auto w-full sm:w-[480px] sm:border-[1px] border-[#3f3f3f70] fixed right-0 2xl:right-[calc((100%-1440px)/2)] z-40 pr-4 pl-6 2xs:pl-8 2xs:pr-8 py-10 bg-[#000A19] text-[#D9D9D9] font_poppins  gap-4 sm:gap-8`}
			>
				<ul className=" space-y-4 flex-none">
					<li className="block lg:hidden">
						<span
							// onClick={() => {
							// 	setEscapePopUp(!escapePopUp);
							// 	setEventPopUp(false);
							// }}
							className="flex items-center gap-1 cursor-pointer"
						>
							ESCAPE ROOMS
						</span>
						<div className={`ml-2.5  `}>
							{mobileRooms.rooms?.map((item, i) => {
								return (
									<div key={i}>
										{!mobileRooms.isSingleLocation && (
											<p onClick={() => handleToggleButton(i)} className="mt-3 flex items-center gap-1 text-[16px] text-[#A3A3A3] font-[600]">
												{item?.mejorcity} <IoMdArrowDropdown className={`text-[16px] duration-300 ${openIndex === i ? "rotate-180" : "rotate-0"}`} />
											</p>
										)}
										<div
											className={`${
												!mobileRooms.isSingleLocation && (openIndex === i ? "max-h-[850px]" : "max-h-0")
											} ml-2.5 space-y-4 overflow-hidden transition-all duration-300`}
										>
											{item.subcity.map((city, j) => {
												return <SubLocationGames city={city} key={j} id={j} />;
											})}
										</div>
									</div>
								);
							})}
						</div>
					</li>
					<li className="block lg:hidden">
						<span
							// onClick={() => {
							// 	setEventPopUp(!eventPopUp);
							// 	setEscapePopUp(false);
							// }}
							className="flex items-center gap-1 cursor-pointer"
						>
							EVENTS
						</span>
						<div className={`ml-1.5 mt-2 text-[14px] text-[#A3A3A3] overflow-hidden duration-300 `}>
							{mobileViewEvent.los_angeles?.length !== 0 && <p className="text-[16px] font-[600] text-[#545454]">LOS ANGELES</p>}
							<div className=" mt-2 ml-2.5 space-y-2.5">
								{mobileViewEvent.los_angeles?.map((item, i) => {
									return (
										<div key={i}>
											{!mobileRooms.isSingleLocation && (
												<p
													onClick={() => handleToggleButton(i + "Los")}
													className="mt-3 mb-2 flex items-center gap-1 text-[16px] text-[#A3A3A3] font-[600]"
												>
													{item?.name}{" "}
													<IoMdArrowDropdown className={`text-[16px] duration-300 ${openIndex === i + "Los" ? "rotate-180" : "rotate-0"}`} />
												</p>
											)}
											<div
												className={`${
													!mobileRooms.isSingleLocation && (openIndex === i + "Los" ? "max-h-[450px]" : "max-h-0")
												} ml-4 space-y-4 overflow-hidden transition-all duration-300`}
											>
												{item?.events.map((singleEvent, j) => {
													return (
														<div key={j}>
															<p className="text-[14px] text-[#BFBFBF]">{singleEvent.name}</p>
														</div>
													);
												})}
											</div>
										</div>
									);
								})}
							</div>
							{mobileViewEvent.dallas?.length !== 0 && <p className=" text-[16px] font-[600] text-[#545454] ">DALLAS</p>}
							<div className="mt-2 ml-2.5">
								{mobileViewEvent.dallas?.map((item, i) => {
									return (
										<div key={i}>
											{!mobileRooms.isSingleLocation && (
												<p
													onClick={() => handleToggleButton(i + "dallas")}
													className="mt-3 mb-2 flex items-center gap-1 text-[16px] text-[#A3A3A3] font-[600]"
												>
													{item?.name}{" "}
													<IoMdArrowDropdown className={`text-[16px] duration-300 ${openIndex === i + "dallas" ? "rotate-180" : "rotate-0"}`} />
												</p>
											)}
											<div
												className={`${
													!mobileRooms.isSingleLocation && (openIndex === i + "dallas" ? "max-h-[450px]" : "max-h-0")
												} ml-4 space-y-4 overflow-hidden transition-all duration-300`}
											>
												{item?.events.map((singleEvent, j) => {
													return (
														<div key={j}>
															<p className="text-[14px] text-[#BFBFBF]">{singleEvent.name}</p>
														</div>
													);
												})}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</li>
					<li>SCHEDULE</li>
					<li>BLOG</li>
					<li>PRICING</li>
					<li>LOCATIONS</li>
					<li>IN THE NEWS</li>
					<li>SAFETY</li>
				</ul>
				<ul className="space-y-4 pb-8 sm:pb-0">
					<li>GIFT CARDS</li>
					<li>PROMOTIONS</li>

					<li>FAQ</li>
					<li>
						<Link href={"/contact"}>ABOUT US</Link>
					</li>
				</ul>
			</div>

			{/* -------escaperoom------ */}
			<RoomsCard escape={escape} locationGame={locationGame} />

			{/* -------event------ */}
			<EventCard event={event} setMobileViewEvent={setMobileViewEvent} />

			{/* --------breadcrum------ */}
			<LocationWatcher />
		</div>
	);
}

export default NavBar;
