/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/../../public/templet/thrillTheme/questroom_logo.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/navigation";
import LA from "@/../../public/templet/thrillTheme/navBar/LA.png";
import dallas from "@/../../public/templet/thrillTheme/navBar/dallas.png";
import dallas_mall from "@/../../public/templet/thrillTheme/navBar/dallas_mall.png";
import Lock from "@/../../public/templet/thrillTheme/navBar/lock.svg";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import location1 from "@/../../public/templet/thrillTheme/footer/location1.png";
import location2 from "@/../../public/templet/thrillTheme/footer/location2.png";
import location3 from "@/../../public/templet/thrillTheme/footer/location3.png";
import location4 from "@/../../public/templet/thrillTheme/footer/location4.png";
import game1 from "@/../../public/templet/thrillTheme/navBar/game1.png";
import game2 from "@/../../public/templet/thrillTheme/navBar/game2.png";
import game3 from "@/../../public/templet/thrillTheme/navBar/game3.png";
import game4 from "@/../../public/templet/thrillTheme/navBar/game4.png";
import game5 from "@/../../public/templet/thrillTheme/navBar/game5.png";
import event1 from "@/../../public/templet/thrillTheme/navBar/event1.png";
import event2 from "@/../../public/templet/thrillTheme/navBar/event2.png";
import event3 from "@/../../public/templet/thrillTheme/navBar/event3.png";
import event4 from "@/../../public/templet/thrillTheme/navBar/event4.png";
import location from "@/../../public/templet/thrillTheme/navBar/locationIcon.svg";

function NavBar() {
	const [toggle, setToggle] = useState(false);
	const [escape, setEscape] = useState(false);
	const [event, setEvent] = useState(false);
	const [isLocationOpen, setIsLocationOpen] = useState(false);
	const [resize, setResize] = useState();
	const [escapePopUp, setEscapePopUp] = useState(false);
	const [eventPopUp, setEventPopUp] = useState(false);
	const router = useRouter();

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
		console.log("click");

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
		if (toggle === false) {
			hamburg.classList.remove("active");
			if (window.innerWidth < 768) {
				// document.documentElement.style.overflow = "visible"; // For the <html> element
				document.body.style.overflow = "visible";
			}
		} else {
			hamburg.classList.add("active");
			if (window.innerWidth < 768) {
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
						navbar.style.top = "-50px";
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

	return (
		<div id="navbar" className="w-full z-50 sticky  top-0 duration-300">
			<div className="bg-[#000A19] pt-2.5 md:py-[14px] relative z-40 sm:z-50 ">
				<div className="g_container--theme flex justify-between items-center gap-2 ">
					{/* Logo */}
					<div className="flex-none">
						<Image src={logo} alt="logo" height={44} width={227} className="h-[16px] 2xs:h-[20px] xs:h-[22px] sm:h-[35px] w-auto" />{" "}
					</div>

					{/* Dropdown */}
					<div className="cursor-pointer w-full 2xs:w-[200px] xs:w-[260px] sm:w-[320px]  xl:w-[364px] border-[2px] border-[#FC7008] py-[8px] rounded-full flex relative font_poppins">
						<div
							id="location"
							className="bg-transparent relative outline-none text-[10px] 2xs:text-[11px] sm:text-[16px] font-[500] text-[#F5F5F5] pl-2 pr-1 2xs:pl-2.5 xs:pl-[14px] sm:pl-[20px] sm:pr-0  md:pr-14 appearance-none w-full "
							onClick={handleLocationBarOpen}
						>
							<p className="uppercase flex items-center gap-1.5 2xs:gap-2 sm:gap-2.5 leading-0">
								<Image src={location} alt="" height={14} width={12} className="-mt-[1px] h-[11px] 2xs:h-[14px] sm:h-[18px] w-auto" />
								<span>Hollyood, LA</span>{" "}
								<IoIosArrowDown className=" text-[11px] 2xs:text-[13px] xs:text-[16px] absolute z-10 right-1.5 xs:right-2.5 sm:right-[20px]" />
							</p>
						</div>
					</div>

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
								className="hidden md:block uppercase text-[13px] lg:text-[15px] px-2.5 lg:px-[14px] py-[10px] font-[600] bg-[#D60200] "
							>
								Book this game
							</a>
						</div>
						{/* <Image
							onClick={handleNavSidebar}
							src={hamburg}
							alt="menu"
							height={41}
							width={41}
							className="h-[35px] xl:h-[40px] w-auto cursor-pointer"
						/> */}
						<div
							id="hamburgButton"
							onClick={handleNavSidebar}
							className="hamburg cursor-pointer h-[30px] 2xs:h-[40px] w-[30px] 2xs:w-[40px] px-1 py-1.5 2xs:px-[7px] 2xs:py-[11px] bg-[#FC700833] space-y-1 flex flex-col justify-center overflow-hidden"
						>
							<div className="top h-[3px] w-full rounded-2xl bg-[linear-gradient(90deg,_#F37F09,_#E7660F,_#D60200)]"></div>
							<div className="middle h-[3px] w-full rounded-2xl bg-[linear-gradient(90deg,_#F37F09,_#E7660F,_#D60200)]"></div>
							<div className="bottom h-[3px] w-full rounded-2xl bg-[linear-gradient(90deg,_#F37F09,_#E7660F,_#D60200)]"></div>
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
			<div
				id="locationbar"
				className={`w-full h-[100vh] overflow-y-auto pb-28 xs:pb-20 bg-[rgba(11,29,75)] backdrop-blur-[5px] font_poppins fixed z-50 duration-300 ${
					isLocationOpen ? "top-0" : "-top-[200%] "
				}  `}
			>
				<div className="relative">
					<p
						onClick={handleLocationBarClose}
						className="text-white text-lg xs:text-2xl absolute right-4 xs:right-6 top-3 rotate-45 border-[1px] px-2 rounded-full cursor-pointer"
					>
						+
					</p>
				</div>
				<p className="text-[28px] xs:text-[36px] md:text-[48px] leading-10 uppercase font-[700] text-[#FC7008] text-center pt-14 pb-[20px] xs:pb-[30px]">
					Choose your location
				</p>

				<div className=" md:grid  md:justify-items-start md:grid-cols-2 gap-y-16 gap-x-5 lg:gap-x-[88px] mx-2.5">
					<div className="max-w-[455px] mx-auto md:mx-[inherit]  lg:justify-self-end pb-16 md:pb-0 ">
						<div className="group h-[200px] xs:h-[250px] relative rounded-lg overflow-hidden ">
							<Image src={LA} alt="" height={250} width={457} className="h-full w-full object-cover group-hover:scale-110 duration-700 " />
							<div className="h-full w-full absolute top-0 bg-gradient-to-t from-[#0B1D4B] to-transparent mix-blend-multiply"></div>
							<div className="flex items-center gap-2.5 absolute bottom-[30px] lg:bottom-[17px] left-[20px]">
								<svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 15 22" fill="none">
									<path
										d="M7.49958 0.858398C3.63147 0.858398 0.484375 4.00549 0.484375 7.87361C0.484375 9.03481 0.774697 10.1862 1.32661 11.2074L7.11595 21.6779C7.19303 21.8175 7.33989 21.904 7.49958 21.904C7.65927 21.904 7.80614 21.8175 7.88321 21.6779L13.6747 11.2039C14.2245 10.1862 14.5148 9.03477 14.5148 7.87357C14.5148 4.00549 11.3677 0.858398 7.49958 0.858398ZM7.49958 11.3812C5.56553 11.3812 3.992 9.80766 3.992 7.87361C3.992 5.93955 5.56553 4.36602 7.49958 4.36602C9.43364 4.36602 11.0072 5.93955 11.0072 7.87361C11.0072 9.80766 9.43364 11.3812 7.49958 11.3812Z"
										fill="white"
									/>
								</svg>
								<p className="text-[24px] font-[700] uppercase text-[#fff]">Los Angeles, CA</p>
							</div>
							<p className="text-[12px] xs:text-[11px] mt-[2px] xs:mt-0 text-white absolute bottom-4 lg:bottom-[20px] left-[45px] lg:left-[inherit] lg:right-[20px]">
								16 Games | 4 Locations{" "}
							</p>
						</div>
						<div className="sm:pl-4 mt-[25px] space-y-[15px]">
							<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-white hover:bg-[#dbedff] p-4 sm:p-2.5 rounded-lg">
								<div className="relative h-[78px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
									<Image
										src={location1}
										alt=""
										height={78}
										width={138}
										className="h-[78px] w-full sm:w-auto object-cover rounded-lg group-hover:scale-110 duration-700"
									/>
									<div className="h-full w-full absolute top-0 bg-gradient-to-t from-[#0B1D4B] to-transparent mix-blend-multiply"></div>
									<p className="absolute bottom-2.5 right-2 text-white text-[12px] xs:text-[11px]">4 games</p>
								</div>
								<div>
									<p className="text-[18px] font-[600] text-[#0B1D4B]">Redondo Beach</p>
									<p className="text-[14px] text-[rgba(11,29,75,0.60)] pr-2">170 S. Western Ave, Los Angeles, CA 90004</p>
								</div>
							</div>
							<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-white hover:bg-[#dbedff] p-4 sm:p-2.5 rounded-lg">
								<div className="relative h-[78px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
									<Image
										src={location2}
										alt=""
										height={78}
										width={138}
										className="h-[78px] w-full sm:w-auto object-cover rounded-lg group-hover:scale-110 duration-700"
									/>
									<div className="h-full w-full absolute top-0 bg-gradient-to-t from-[#0B1D4B] to-transparent mix-blend-multiply"></div>
									<p className="absolute bottom-2.5 right-2 text-white text-[12px] xs:text-[11px]">5 games</p>
								</div>
								<div>
									<p className="text-[18px] font-[600] text-[#0B1D4B]">Hollywood</p>
									<p className="text-[14px] text-[rgba(11,29,75,0.60)] pr-2">5517 Santa Monica Blvd, Los Angeles, CA 90038</p>
								</div>
							</div>
							<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-white hover:bg-[#dbedff] p-4 sm:p-2.5 rounded-lg">
								<div className="relative h-[78px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
									<Image
										src={location3}
										alt=""
										height={78}
										width={138}
										className="h-[78px] w-full sm:w-auto object-cover rounded-lg group-hover:scale-110 duration-700"
									/>
									<div className="h-full w-full absolute top-0 bg-gradient-to-t from-[#0B1D4B] to-transparent mix-blend-multiply"></div>
									<p className="absolute bottom-2.5 right-2 text-white text-[12px] xs:text-[11px]">4 games</p>
								</div>
								<div>
									<p className="text-[18px] font-[600] text-[#0B1D4B]">Korea Town</p>
									<p className="text-[14px] text-[rgba(11,29,75,0.60)] pr-2">170 S. Western Ave, Los Angeles, CA 90004</p>
								</div>
							</div>
							<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-white hover:bg-[#dbedff] p-4 sm:p-2.5 rounded-lg">
								<div className="relative h-[78px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
									<Image
										src={location4}
										alt=""
										height={78}
										width={138}
										className="h-[78px] w-full sm:w-auto object-cover rounded-lg group-hover:scale-110 duration-700"
									/>
									<div className="h-full w-full absolute top-0 bg-gradient-to-t from-[#0B1D4B] to-transparent mix-blend-multiply"></div>
									<p className="absolute bottom-2.5 right-2 text-white text-[12px] xs:text-[11px]">3 games</p>
								</div>
								<div>
									<p className="text-[18px] font-[600] text-[#0B1D4B]">Culver City</p>
									<p className="text-[14px] text-[rgba(11,29,75,0.60)] pr-2">5235 W Adams Blvd, Los Angeles, CA 90016</p>
								</div>
							</div>
						</div>
					</div>
					<div className="max-w-[455px] mx-auto md:mx-[inherit] ">
						<div className="group h-[200px] xs:h-[250px] relative rounded-lg overflow-hidden ">
							<Image src={dallas} alt="" height={250} width={457} className="h-full w-full object-cover group-hover:scale-110 duration-700" />
							<div className="h-full w-full absolute top-0 bg-gradient-to-t from-[#0B1D4B] to-transparent mix-blend-multiply"></div>
							<div className="flex items-center gap-2.5 absolute bottom-[30px] lg:bottom-[17px] left-[20px]">
								<svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 15 22" fill="none">
									<path
										d="M7.49958 0.858398C3.63147 0.858398 0.484375 4.00549 0.484375 7.87361C0.484375 9.03481 0.774697 10.1862 1.32661 11.2074L7.11595 21.6779C7.19303 21.8175 7.33989 21.904 7.49958 21.904C7.65927 21.904 7.80614 21.8175 7.88321 21.6779L13.6747 11.2039C14.2245 10.1862 14.5148 9.03477 14.5148 7.87357C14.5148 4.00549 11.3677 0.858398 7.49958 0.858398ZM7.49958 11.3812C5.56553 11.3812 3.992 9.80766 3.992 7.87361C3.992 5.93955 5.56553 4.36602 7.49958 4.36602C9.43364 4.36602 11.0072 5.93955 11.0072 7.87361C11.0072 9.80766 9.43364 11.3812 7.49958 11.3812Z"
										fill="white"
									/>
								</svg>
								<p className="text-[24px] font-[700] uppercase text-[#fff]">Dallas, TX</p>
							</div>
							<p className="text-[12px] xs:text-[11px] mt-[2px] xs:mt-0 text-white absolute bottom-4 lg:bottom-[20px] left-[45px] lg:left-[inherit] lg:right-[20px]">
								6 Games | 1 Location{" "}
							</p>
						</div>
						<div className="sm:pl-4 mt-[25px] space-y-[15px]">
							<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-white hover:bg-[#dbedff] p-4 sm:p-2.5 rounded-lg">
								<div className="relative h-[78px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
									<Image
										src={dallas_mall}
										alt=""
										height={78}
										width={138}
										className="h-[78px] w-full sm:w-auto object-cover rounded-lg group-hover:scale-110 duration-700"
									/>
									<div className="h-full w-full absolute top-0 bg-gradient-to-t from-[#0B1D4B] to-transparent mix-blend-multiply"></div>
									<p className="absolute bottom-2.5 right-2 text-white text-[12px] xs:text-[11px]">6 games</p>
								</div>
								<div>
									<p className="text-[18px] font-[600] text-[#0B1D4B]">Plano</p>
									<p className="text-[14px] text-[rgba(11,29,75,0.60)] pr-2">3420 K Ave Unit 309, Plano, TX 75074</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
			id="hamburgMenu"
				className={`${
					toggle ? " top-[50px] sm:top-[80px] md:top-[50px] flex flex-col sm:grid sm:grid-cols-2" : "hidden md:grid md:grid-cols-2 md:top-[-200%]"
				}  duration-300  overflow-y-auto h-[100vh] sm:h-auto w-full sm:w-[480px] sm:border-[1px] border-[#3f3f3f70] fixed right-0 2xl:right-[calc((100%-1440px)/2)] z-40 px-8 py-10 bg-[#000A19] text-[#D9D9D9] font_poppins  gap-4 sm:gap-8`}
			>
				<ul className=" space-y-4 flex-none">
					<li className="block lg:hidden">
						<span
							onClick={() => {
								setEscapePopUp(!escapePopUp);
								setEventPopUp(false);
							}}
							className="flex items-center gap-1 cursor-pointer"
						>
							ESCAPE ROOMS <IoMdArrowDropdown className="text-[18px]" />
						</span>
						<div
							className={`ml-2.5 text-[14px] text-[#A3A3A3] space-y-[10px] overflow-hidden duration-300 ${
								escapePopUp ? "h-auto pb-2.5 pt-1" : "h-0 "
							}`}
						>
							<p className="flex items-center gap-1.5">
								<Image src={Lock} alt="" height={14} width={12} />
								Warlocked
							</p>
							<p className="flex items-center gap-1.5">
								<Image src={Lock} alt="" height={14} width={12} />
								Kablam
							</p>
							<p className="flex items-center gap-1.5">
								<Image src={Lock} alt="" height={14} width={12} />
								Resurrection
							</p>
							<p className="flex items-center gap-1.5">
								<Image src={Lock} alt="" height={14} width={12} />
								Polar Station
							</p>
							<p className="flex items-center gap-1.5">
								<Image src={Lock} alt="" height={14} width={12} />
								Da Vinci's Challenge
							</p>
						</div>
					</li>
					<li className="block lg:hidden">
						<span
							onClick={() => {
								setEventPopUp(!eventPopUp);
								setEscapePopUp(false);
							}}
							className="flex items-center gap-1 cursor-pointer"
						>
							EVENTS <IoMdArrowDropdown className="text-[18px]" />
						</span>
						<div
							className={`ml-2.5 text-[14px] text-[#A3A3A3] space-y-[10px] overflow-hidden duration-300 ${
								eventPopUp ? "h-auto pb-2.5 pt-1" : "h-0 "
							}`}
						>
							<p className="flex items-center gap-1.5">
								<Image src={Lock} alt="" height={14} width={12} />
								Birthday Parties
							</p>
							<p className="flex items-center gap-1.5">
								<Image src={Lock} alt="" height={14} width={12} />
								Family Bonding
							</p>
							<p className="flex items-center gap-1.5">
								<Image src={Lock} alt="" height={14} width={12} />
								Bachelorette Parties
							</p>
							<p className="flex items-center gap-1.5">
								<Image src={Lock} alt="" height={14} width={12} />
								Team Building
							</p>
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
					<li>ABOUT US</li>
				</ul>
			</div>

			{/* -------escaperoom------ */}
			<div
				id="roomsNavbar"
				className={`${
					escape ? "top-[48px]" : "-top-[300%]"
				} duration-300 bg-[#000A19] border-[1px] border-[#3f3f3f70] rounded-lg w-[1110px] px-[34px] py-[40px] fixed z-30  right-0 2xl:right-[calc((100%-1440px)/2)] `}
			>
				<p className="text_strokenav font_poppins uppercase text-center text-[28px] font-[900]">Hollywood Questrooms</p>
				<div className="font_poppins grid grid-cols-2 gap-y-5 gap-x-10 mt-5">
					<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#00122E]  p-4 sm:p-2.5 rounded-lg">
						<div className="relative h-[100px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
							<Image
								src={game1}
								alt=""
								height={212}
								width={142}
								className="h-[100px] w-full sm:w-[129px] object-cover rounded-lg group-hover:scale-110 duration-700"
							/>
						</div>
						<div>
							<p className="text-[18px] font-[600] text-[#D9D9D9]">Project Minotaur</p>
							<p className="text-[13px] text-[#A3A3A3] pr-2 pb-2">You were having a wonderful vacation when you and your friends decided..... </p>
							<p className="text-[14px] text-[#FC7008] pr-2 flex items-center font-[500]">
								Explore <IoMdArrowDropdown className="text-[16px] mt-[1px] -rotate-90" />
							</p>
						</div>
					</div>
					<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#00122E]  p-4 sm:p-2.5 rounded-lg">
						<div className="relative h-[100px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
							<Image
								src={game2}
								alt=""
								height={78}
								width={138}
								className="h-[100px] w-full sm:w-[129px] object-cover rounded-lg group-hover:scale-110 duration-700"
							/>
						</div>
						<div>
							<p className="text-[18px] font-[600] text-[#D9D9D9]">Perfumer</p>
							<p className="text-[13px] text-[#A3A3A3] pr-2 pb-2">
								The greatest perfumer in the world has been executed. The scents he crafted..... 
							</p>
							<p className="text-[14px] text-[#FC7008] pr-2 flex items-center font-[500]">
								Explore <IoMdArrowDropdown className="text-[16px] mt-[1px] -rotate-90" />
							</p>
						</div>
					</div>
					<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#00122E]  p-4 sm:p-2.5 rounded-lg">
						<div className="relative h-[100px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
							<Image
								src={game3}
								alt=""
								height={212}
								width={400}
								className="h-[100px] w-full sm:w-[129px] object-cover rounded-lg group-hover:scale-110 duration-700"
							/>
						</div>
						<div>
							<p className="text-[18px] font-[600] text-[#D9D9D9]">Project Minotaur: Replay</p>
							<p className="text-[13px] text-[#A3A3A3] pr-2 pb-2">You were having a wonderful vacation when you and your friends decided to..... </p>
							<p className="text-[14px] text-[#FC7008] pr-2 flex items-center font-[500]">
								Explore <IoMdArrowDropdown className="text-[16px] mt-[1px] -rotate-90" />
							</p>
						</div>
					</div>
					<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#00122E]  p-4 sm:p-2.5 rounded-lg">
						<div className="relative h-[100px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
							<Image
								src={game4}
								alt=""
								height={78}
								width={138}
								className="h-[100px] w-full sm:w-[129px] object-cover rounded-lg group-hover:scale-110 duration-700"
							/>
						</div>
						<div>
							<p className="text-[18px] font-[600] text-[#D9D9D9]">Cannibal's Den 2.0</p>
							<p className="text-[13px] text-[#A3A3A3] pr-2 pb-2">
								Your head hurts; the world is still fuzzy. You remember being with your friends..... 
							</p>
							<p className="text-[14px] text-[#FC7008] pr-2 flex items-center font-[500]">
								Explore <IoMdArrowDropdown className="text-[16px] mt-[1px] -rotate-90" />
							</p>
						</div>
					</div>
					<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#00122E]  p-4 sm:p-2.5 rounded-lg">
						<div className="relative h-[100px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
							<Image
								src={game5}
								alt=""
								height={78}
								width={138}
								className="h-[100px] w-full sm:w-[129px] object-cover rounded-lg group-hover:scale-110 duration-700"
							/>
						</div>
						<div>
							<p className="text-[18px] font-[600] text-[#D9D9D9]">Red Giant</p>
							<p className="text-[13px] text-[#A3A3A3] pr-2 pb-2">The Pink Pyramid. A testament to the civilization who crafted it..... </p>
							<p className="text-[14px] text-[#FC7008] pr-2 flex items-center font-[500]">
								Explore <IoMdArrowDropdown className="text-[16px] mt-[1px] -rotate-90" />
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* -------event------ */}
			<div
				id="eventDropdown"
				className={`${
					event ? "top-[48px]" : "-top-[200%]"
				} duration-300 bg-[#000A19] border-[1px] border-[#3f3f3f70] rounded-lg w-[1110px] px-[34px] py-[40px] fixed z-30  right-0 2xl:right-[calc((100%-1440px)/2)] `}
			>
				<p className="text_strokenav font_poppins uppercase text-center text-[28px] font-[900]">parties and Events in Los angeles, ca</p>
				<div className="font_poppins grid grid-cols-2 gap-y-5 gap-x-10 mt-5">
					<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#00122E]  p-4 sm:p-2.5 rounded-lg">
						<div className="relative h-[100px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
							<Image
								src={event1}
								alt=""
								height={78}
								width={138}
								className="h-[100px] w-full sm:w-[129px] object-cover rounded-lg group-hover:scale-110 duration-700"
							/>
						</div>
						<div>
							<p className="text-[18px] font-[600] text-[#D9D9D9]">Birthday Parties</p>
							<p className="text-[13px] text-[#A3A3A3] pr-2 pb-2">
								Questroom is ideal for birthday parties of all ages, from kids to teens to adults! 
							</p>
							<p className="text-[14px] text-[#FC7008] pr-2 flex items-center font-[500]">
								Explore <IoMdArrowDropdown className="text-[16px] mt-[1px] -rotate-90" />
							</p>
						</div>
					</div>
					<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#00122E]  p-4 sm:p-2.5 rounded-lg">
						<div className="relative h-[100px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
							<Image
								src={event3}
								alt=""
								height={78}
								width={138}
								className="h-[100px] w-full sm:w-[129px] object-cover rounded-lg group-hover:scale-110 duration-700"
							/>
						</div>
						<div>
							<p className="text-[18px] font-[600] text-[#D9D9D9]">Bachelorette Parties</p>
							<p className="text-[13px] text-[#A3A3A3] pr-2 pb-2">Are you looking for the perfect escape room for a bachelorette/bachelor party? </p>
							<p className="text-[14px] text-[#FC7008] pr-2 flex items-center font-[500]">
								Explore <IoMdArrowDropdown className="text-[16px] mt-[1px] -rotate-90" />
							</p>
						</div>
					</div>
					<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#00122E]  p-4 sm:p-2.5 rounded-lg">
						<div className="relative h-[100px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
							<Image
								src={event2}
								alt=""
								height={78}
								width={138}
								className="h-[100px] w-full sm:w-[129px] object-cover rounded-lg group-hover:scale-110 duration-700"
							/>
						</div>
						<div>
							<p className="text-[18px] font-[600] text-[#D9D9D9]">Family Bonding</p>
							<p className="text-[13px] text-[#A3A3A3] pr-2 pb-2">Make family memories to last a lifetime! Celebrate with us. </p>
							<p className="text-[14px] text-[#FC7008] pr-2 flex items-center font-[500]">
								Explore <IoMdArrowDropdown className="text-[16px] mt-[1px] -rotate-90" />
							</p>
						</div>
					</div>
					<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#00122E]  p-4 sm:p-2.5 rounded-lg">
						<div className="relative h-[100px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
							<Image
								src={event4}
								alt=""
								height={78}
								width={138}
								className="h-[100px] w-full sm:w-[129px] object-cover rounded-lg group-hover:scale-110 duration-700"
							/>
						</div>
						<div>
							<p className="text-[18px] font-[600] text-[#D9D9D9]">Team Building</p>
							<p className="text-[13px] text-[#A3A3A3] pr-2 pb-2">Ready to break from typical corporate events? </p>
							<p className="text-[14px] text-[#FC7008] pr-2 flex items-center font-[500]">
								Explore <IoMdArrowDropdown className="text-[16px] mt-[1px] -rotate-90" />
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* --------breadcrum------ */}
		</div>
	);
}

export default NavBar;
