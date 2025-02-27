"use client";
import React, { useEffect, useState } from "react";
import SectionStarter from "../GlobalComponents/SectionStarter";
import { IoIosArrowDown } from "react-icons/io";
import Form from "./Form";

const pricingData = [
	{
		id: "1",
		title: "SMALL GROUP",
		players: "4 - 10",
		weekendPrice: "$150",
		weekdayPrice: "$120",
	},
	{
		id: "2",
		title: "MEDIUM GROUP",
		players: "11 - 20",
		weekendPrice: "$280",
		weekdayPrice: "$250",
	},
	{
		id: "3",
		title: "LARGE GROUP",
		players: "21+",
		weekendPrice: "$400",
		weekdayPrice: "$350",
	},
];

const PARAM_STYLES = {
	"birthday-parties": {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.accent.300/60%)]",
		bgGradient: "bg-[radial-gradient(89.3%_50%_at_50%_52%,_#001B57_0%,_#000A19_100%)]",
		cardBackground: "bg-accent-700",
		cardBorder: "border-accent-500",
		dropDownColor: "bg-accent-600",
		iconColor: "fill-accent-300",
	},
	"family-fun-activity": {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.family.300/60%)]",
		bgGradient: "bg-[radial-gradient(89.3%_50%_at_50%_52%,_#012D16_0%,_#000F07_100%)]",
		cardBackground: "bg-family-700",
		cardBorder: "border-family-500",
		dropDownColor: "bg-family-600",
		iconColor: "fill-family-300",
	},
	"team-building": {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.team.300/60%)]",
		bgGradient: "bg-[radial-gradient(89.3%_50%_at_50%_52%,_theme(colors.team.700)_0%,_theme(colors.team.900)_100%)]",
		cardBackground: "bg-team-700",
		cardBorder: "border-team-500",
		dropDownColor: "bg-team-600",
		iconColor: "fill-team-300",
	},
	"corporate-events": {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.corporate.300/60%)]",
		bgGradient: "bg-[radial-gradient(89.3%_50%_at_50%_52%,_theme(colors.corporate.700)_0%,_theme(colors.corporate.900)_100%)]",
		cardBackground: "bg-corporate-700",
		cardBorder: "border-corporate-500",
		dropDownColor: "bg-corporate-600",
		iconColor: "fill-corporate-300",
	},
	"bachelor-or-bachelorette-party": {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.bachelor.300/60%)]",
		bgGradient: "bg-[radial-gradient(89.3%_50%_at_50%_52%,_theme(colors.bachelor.700)_0%,_theme(colors.bachelor.900)_100%)]",
		cardBackground: "bg-bachelor-700",
		cardBorder: "border-bachelor-500",
		dropDownColor: "bg-bachelor-600",
		iconColor: "fill-bachelor-300",
	},
	"field-trip-or-school-events": {
		textShadow: "[text-shadow:0px_0px_120px_theme(colors.school.300/60%)]",
		bgGradient: "bg-[radial-gradient(89.3%_50%_at_50%_52%,_theme(colors.school.700)_0%,_theme(colors.school.900)_100%)]",
		cardBackground: "bg-school-700",
		cardBorder: "border-school-500",
		dropDownColor: "bg-school-600",
		iconColor: "fill-school-300",
	},
};

const Card = ({ data, setPricingState, styles }) => {
	const { title, players, weekendPrice, weekdayPrice } = data;
	const [isWeekend, setIsWeekend] = useState(false); // Default to Weekends & Holidays
	const [error, setError] = useState({
		teamSize: "",
		isError: "",
	});

	const [state, setState] = useState({
		teamToggle: false,
		teamSize: "",
		gameToggle: false,
		gameSelect: [],
		totalPrice: "",
		totalValue: "",
	});

	useEffect(() => {
		if (state.teamSize && state.gameSelect.length !== 0) {
			let basePrice = 55;
			let sumPrice;
			let discountPrice;
			let teamSize = parseInt(state.teamSize);

			const calculator = (discountValue) => {
				discountPrice = basePrice - discountValue;
				sumPrice = discountPrice * state.teamSize;
				setState((prev) => ({ ...prev, totalPrice: sumPrice, totalValue: basePrice * state.teamSize }));
			};

			if (isWeekend) {
				if (teamSize <= 10) {
					calculator(5);
				}
				if (teamSize > 10 && teamSize <= 20) {
					calculator(10);
				}
				if (teamSize >= 21) {
					calculator(15);
				}
			} else {
				if (teamSize <= 10) {
					calculator(10);
				}

				if (teamSize > 10 && teamSize <= 20) {
					calculator(15);
				}
				if (teamSize >= 21) {
					calculator(20);
				}
			}
		}
	}, [state.teamSize, state.gameSelect.length, isWeekend]);

	useEffect(() => {
		setState((prev) => ({ ...prev, teamToggle: false, teamSize: "", gameToggle: false, gameSelect: [], totalPrice: "", totalValue: "" }));
	}, [title]);

	const playerSize = () => {
		const playerRange = players.split("-").map(Number);
		const playerOptions = Array.from({ length: playerRange[1] - playerRange[0] + 1 }, (_, i) => playerRange[0] + i);

		return playerOptions;
	};

	//form error handeling for large group
	const handleChange = (e) => {
		setError((prev) => ({ ...prev, teamSize: e.target.value }));

		setTimeout(() => {
			if (Number(e.target.value) < 21) {
				setState((prev) => ({ ...prev, teamSize: "" }));
				if (Number(e.target.value) < 1) {
					setError((prev) => ({ ...prev, isError: "" }));
				} else {
					setError((prev) => ({ ...prev, isError: "Team size cannot be less than 21" }));
				}
			} else {
				setError((prev) => ({ ...prev, isError: "" }));
				setState((prev) => ({ ...prev, teamSize: e.target.value }));
			}
		}, 500);
	};

	const handleForm = () => {
		if (state.totalPrice) {
			setPricingState(state);
		}
	};

	return (
		<div
			className={`py-6 xs:py-[40px] pl-2.5 xs:pl-[30px] pr-2.5 xs:pr-5 rounded-[10px] border-[1px] ${styles.cardBorder} ${styles.cardBackground}  backdrop-blur-[42px]`}
		>
			<div className="flex justify-between items-center">
				<p className="subtitle_S text-[#EDEDED]">{title}</p>
				<p className="body-paragraph_S text-[#ffffff80]">For {players} Players</p>
			</div>
			<div className="my-10 text-center">
				<span className="text-[58px] 3xs:text-[64px] leading-[1] text-[#D9D9D9]">${state.totalPrice ? state.totalPrice : "???"}</span>
				<span className="subtitle_S text-[#A3A3A3] ml-2.5">${state.totalValue ? state.totalValue : "???"} value</span>
			</div>
			<div className="body-paragraph_S text-[#D9D9D9] flex justify-between xs:justify-center items-center gap-2.5">
				<span>WEEKENDS & HOLIDAYS</span>
				{/* ------toggle button-------- */}
				<button
					onClick={() => setIsWeekend((prev) => !prev)}
					className={` ${isWeekend ? "bg-[#525252]" : "bg-[#0085FF] "} w-[48px] h-[22px]  rounded-full relative flex-none`}
				>
					<div
						className={`h-[18px] w-[18px] rounded-full bg-white absolute top-[2px] transition-all duration-500 ${
							isWeekend ? "left-[2px] " : "right-[2px]"
						}`}
					></div>
				</button>
				<span>WEEKDAYS (MON- FRI)</span>
			</div>
			<p className="body-paragraph_S text-[#BFBFBF] text-center mt-[25px] mb-[15px]">Select your team size & escape room to see pricing</p>
			<div onClick={() => players !== "21+" && setState((prev) => ({ ...prev, teamToggle: !state.teamToggle }))} className="">
				<div
					onClick={() => players === "21+" && setState((prev) => ({ ...prev, teamToggle: !state.teamToggle }))}
					className={`${
						state.teamToggle ? "rounded-b-0" : " rounded-b-[4px]"
					} rounded-t-[4px] cursor-pointer w-full py-2 pl-[24px] px-[15px] flex justify-between items-center ${
						styles.dropDownColor
					} text-[#BFBFBF] body-paragraph_M`}
				>
					<p>{state.teamSize ? state.teamSize + " Players" : "Your Team Size"}</p>
					<span>
						<IoIosArrowDown />
					</span>
				</div>
				<div className={`${state.teamToggle ? "max-h-[300px]" : "max-h-0"} transition-all duration-300 overflow-hidden`}>
					<div className={` rounded-b ${styles.dropDownColor} py-4 px-8 border-t-[1px] border-t-[#ffffff20]`}>
						{players === "21+" ? (
							<div>
								<input
									type="number"
									placeholder="Write Your Team Size"
									value={error.teamSize}
									onChange={(e) => handleChange(e)}
									className="outline-none px-3 py-1.5 rounded w-full text-[14px] bg-[#22222280] text-[#D9D9D9] border-[1px] border-[#ffffff20]"
								/>
								{error.isError && <p className="text-[#fc7008] mt-1 text-[14px]">{error.isError}</p>}
							</div>
						) : (
							<div className="flex flex-wrap gap-2">
								{playerSize().map((num, i) => (
									<span
										onClick={() => setState((prev) => ({ ...prev, teamSize: num }))}
										key={i}
										className="px-[20px] py-1.5 bg-[#22222280] mix-blend-screen border-[1px] border-[#ffffff20] text-[#D9D9D9] cursor-pointer"
									>
										{num}
									</span>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="mt-4">
				<div
					onClick={() => setState((prev) => ({ ...prev, gameToggle: !state.gameToggle }))}
					className={`${
						state.gameToggle ? "rounded-b-0" : " rounded-b-[4px]"
					} rounded-t-[4px] w-full py-2 pl-[24px] px-[15px] cursor-pointer flex justify-between items-center ${
						styles.dropDownColor
					} text-[#BFBFBF] body-paragraph_M`}
				>
					<p>{state.gameSelect.length !== 0 ? state.gameSelect.length + " Games Selected" : "Choose Your Escape Game"}</p>
					<span>
						<IoIosArrowDown />
					</span>
				</div>
				<div className={`${state.gameToggle ? "max-h-[600px]" : "max-h-0"} duration-300 transition-all overflow-hidden`}>
					<div className={`flex flex-col gap-2 rounded-b ${styles.dropDownColor} py-4 px-8 border-t-[1px] border-t-[#ffffff20]`}>
						{["Project Minotaur", "Perfumer", "Cannibal's Den 2.0", "Red Giant"].map((game, i) => (
							<span
								onClick={() =>
									setState((prev) => ({
										...prev,
										gameSelect: prev.gameSelect.includes(game)
											? [...prev.gameSelect] // Remove if already selected
											: [...prev.gameSelect, game], // Add if not selected
									}))
								}
								key={i}
								className="px-[20px] py-1.5  text-[#D9D9D9] flex items-center gap-3 cursor-pointer"
							>
								<button
									className={`h-[15px] w-[15px] rounded-full border ${state.gameSelect.includes(game) ? "bg-[#fff]" : "bg-transparent"}`}
								></button>
								{game}
							</span>
						))}
					</div>
				</div>
			</div>
			<button
				onClick={handleForm}
				className={`mt-6 w-full px-[35px] py-[15px] font-[600] uppercase leading-[1] ${
					state.gameSelect.length !== 0 && state.teamSize ? "bg-[#FC7008] text-[#030303]" : "bg-[#525252] text-[#D9D9D9]"
				}  rounded-[4px]`}
			>
				GEt your Quote NOW
			</button>
			<div className="mt-5 pt-5 border-t-[1px] border-t-[#ffffff16]">
				<p className="body-paragraph_M text-[#fff] mb-4">What’s Included:</p>
				<ul className="space-y-4">
					<li className="body-paragraph_S text-[#ffffff80] flex items-center gap-1">
						<span>*</span>
						<span>Your Venue: Quest Room Hollywood</span>
					</li>
					<li className="body-paragraph_S text-[#ffffff80] flex items-center gap-1">
						<span>*</span>
						<span>Every guest enjoys a thrilling 60-minute escape room</span>
					</li>
					<li className="body-paragraph_S text-[#ffffff80] flex items-center gap-1">
						<span>*</span>
						<span>5-8 players per game</span>
					</li>
					<li className="body-paragraph_S text-[#ffffff80] flex items-center gap-1">
						<span>*</span>
						<span>Up to 3 escape rooms run simultaneously</span>
					</li>
					<li className="body-paragraph_S text-[#ffffff80] flex items-center gap-1">
						<span>*</span>
						<span>3-hour party room & kitchen access</span>
					</li>
					<li className="body-paragraph_S text-[#ffffff80] flex items-center gap-1">
						<span>*</span>
						<span>Gift card for guest of honor</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

function EventPricing({ param }) {
	const [pricingState, setPricingState] = useState();
	const [data, setData] = useState();
	const [buttonSelected, setButtonSelected] = useState();
	const [screenSize, setScreenSize] = useState();
	const styles = PARAM_STYLES[param] || {};

	const handleSelectGroup = (id) => {
		const selectedData = pricingData.filter((data) => data.id === id);

		setData(selectedData);
		setButtonSelected(id)
	};

	useEffect(() => {
		//initial load
		setScreenSize(window.innerWidth);

		// Function to update screen size
		const handleResize = () => {
			setScreenSize(window.innerWidth);
		};

		// Initial check
		if (screenSize < 1280) {
			const filterData = pricingData.filter((data) => data.id === "2");

			setData(filterData);
			setButtonSelected('2')
		} else {
			setData(pricingData);
		}

		// Attach event listener
		window.addEventListener("resize", handleResize);

		// Cleanup function to remove event listener
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [screenSize]);

	return (
		<div className={`${styles.bgGradient} xs:pb-20`}>
			<div id="event_packages" className="g_container--theme pt-[150px] ">
				<SectionStarter
					title="Get an instant Escape room birthday party quote"
					description="Celebrate with thrilling games, private experiences, and flexible options like group organization and catering. Fun, teamwork, and unforgettable memories await!"
					text_shadow={styles?.textShadow}
				/>

				<div className="xl:hidden space-x-2 xs:space-x-5 flex justify-center pb-6 xs:pb-10">
					{pricingData.map((data, i) => (
						<button
							key={i}
							onClick={() => handleSelectGroup(data.id)}
							className={`${buttonSelected === data.id ? "text-primary-500": "text-text-500"}  px-2.5 py-1 bg-accent-500 rounded text-[10px] xs:text-[14px] font-medium`}
						>
							{data.title}
						</button>
					))}
				</div>
				<div className="grid xl:grid-cols-3 gap-2.5 max-w-[600px] xl:max-w-none mx-auto relative z-10">
					{data?.map((data, i) => (
						<Card key={i} data={data} setPricingState={setPricingState} styles={styles} />
					))}
				</div>
				<div className="max-w-[1576px] mx-auto grid sm:grid-cols-2 gap-4 sm:gap-8 px-0 sm:px-10 lg:px-[120px] pt-[50px] pb-[44px] rounded-[14px] bg-[linear-gradient(2deg,rgba(255,255,255,0.10)_-43.66%,rgba(255,255,255,0.00)_24.83%)] shadow-[2px_4px_30px_0px_rgba(0,0,0,0.20)] backdrop-blur-[35px]">
					<div className="flex items-start gap-2.5">
						<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className="flex-none">
							<path
								d="M10.273 20.853C9.57925 20.853 8.88617 20.7821 8.19933 20.6405C7.59642 20.5161 7.00133 20.3363 6.43049 20.1059C5.8875 19.8868 5.35995 19.6194 4.86254 19.3111C4.65173 19.1804 4.58675 18.9036 4.71744 18.6928C4.84812 18.482 5.12494 18.417 5.33574 18.5477C5.7896 18.829 6.27102 19.073 6.76655 19.273C7.28745 19.4832 7.83054 19.6473 8.38072 19.7608C9.54095 20 10.7208 20.018 11.8876 19.8141C13.0545 19.6103 14.1584 19.1933 15.1688 18.5748C15.6479 18.2815 16.1032 17.9429 16.5221 17.5686C16.9203 17.2126 17.2905 16.8197 17.6223 16.401C17.9542 15.982 18.252 15.5319 18.5073 15.063C18.7761 14.5695 19.0015 14.0489 19.1775 13.5155C19.5486 12.3903 19.7022 11.2202 19.634 10.0377C19.5657 8.85486 19.2785 7.71013 18.7805 6.63532C18.5442 6.12542 18.2603 5.63411 17.9367 5.17514C17.6289 4.73853 17.2813 4.3256 16.9035 3.94782C16.526 3.57013 16.1131 3.22254 15.6764 2.91464C15.2174 2.59098 14.7262 2.30707 14.2164 2.07071C13.1419 1.57267 11.9973 1.28547 10.8146 1.21712C9.63198 1.1489 8.46187 1.30245 7.33698 1.67362C6.80337 1.84967 6.28279 2.07515 5.78964 2.34385C5.32065 2.59929 4.87049 2.89708 4.45166 3.229C4.03289 3.56084 3.64011 3.93102 3.28421 4.32928C2.90989 4.7481 2.57136 5.20339 2.27811 5.68261C1.65962 6.69307 1.24268 7.79707 1.03888 8.96399C0.834952 10.1311 0.852871 11.3112 1.09215 12.4714C1.20559 13.0216 1.36968 13.5648 1.57986 14.0858C1.77971 14.5812 2.0237 15.0627 2.3051 15.5168C2.43574 15.7276 2.37075 16.0044 2.15995 16.1351C1.94901 16.2658 1.67228 16.2007 1.54164 15.9899C1.23325 15.4923 0.965862 14.9647 0.746885 14.4218C0.516591 13.8509 0.33682 13.2557 0.212467 12.6528C-0.0497129 11.3814 -0.0693382 10.0883 0.154085 8.80946C0.377418 7.53076 0.834278 6.321 1.512 5.21376C1.83337 4.68869 2.20432 4.18975 2.61448 3.73082C3.00447 3.29444 3.43492 2.88877 3.8938 2.52514C4.35277 2.16142 4.84606 1.83512 5.35995 1.5552C5.9003 1.26073 6.47082 1.01359 7.05554 0.820753C8.2882 0.413966 9.57045 0.245691 10.8663 0.32051C12.1624 0.395374 13.4166 0.710097 14.5941 1.25592C15.1527 1.51487 15.6909 1.82595 16.194 2.18065C16.6725 2.51805 17.1249 2.89897 17.5387 3.3128C17.9526 3.72673 18.3335 4.17924 18.6707 4.65765C19.0253 5.16064 19.3364 5.69896 19.5953 6.25768C20.1411 7.43546 20.4558 8.68982 20.5306 9.98599C20.6054 11.2817 20.4371 12.5639 20.0304 13.7969C19.8376 14.3814 19.5905 14.9519 19.2959 15.4926C19.0162 16.0063 18.6899 16.4996 18.3261 16.9588C17.9626 17.4175 17.557 17.848 17.1206 18.2382C16.6616 18.6485 16.1627 19.0194 15.6376 19.3408C14.5304 20.0186 13.3207 20.4755 12.042 20.6989C11.4543 20.8016 10.8634 20.853 10.273 20.853Z"
								className={`${styles.iconColor}`}
							/>
							<path
								d="M3.65146 18.2845C3.54341 18.2845 3.435 18.2457 3.34891 18.1671C3.11843 17.9568 2.89496 17.7333 2.6847 17.5028C2.51755 17.3196 2.53057 17.0355 2.7138 16.8684C2.89699 16.7012 3.18104 16.7142 3.34823 16.8975C3.54008 17.1078 3.74397 17.3117 3.95428 17.5036C4.13751 17.6708 4.15053 17.9548 3.98334 18.138C3.89473 18.2352 3.7733 18.2845 3.65146 18.2845Z"
								className={`${styles.iconColor}`}
							/>
							<path
								d="M8.51651 13.6824C8.09661 13.6824 7.70186 13.5189 7.40497 13.2219L5.94012 11.757C5.76475 11.5816 5.76475 11.2972 5.94012 11.1218C6.11554 10.9465 6.39986 10.9465 6.57523 11.1218L8.04012 12.5868C8.16734 12.7141 8.33656 12.7842 8.51651 12.7842C8.69642 12.7842 8.86559 12.7141 8.99286 12.5868L14.3477 7.23146C14.5231 7.05609 14.8075 7.05604 14.9828 7.23146C15.1582 7.40683 15.1583 7.69119 14.9828 7.86656L9.62855 13.2214C9.33112 13.5189 8.93641 13.6824 8.51651 13.6824Z"
								className={`${styles.iconColor}`}
							/>
						</svg>
						<span className="text-[14px] text-[#A3A3A3]">Bring Your Own Cake & Food – No extra charge (alcohol not permitted)</span>
					</div>
					<div className="flex items-start gap-2.5">
						<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className="flex-none">
							<path
								d="M10.273 20.853C9.57925 20.853 8.88617 20.7821 8.19933 20.6405C7.59642 20.5161 7.00133 20.3363 6.43049 20.1059C5.8875 19.8868 5.35995 19.6194 4.86254 19.3111C4.65173 19.1804 4.58675 18.9036 4.71744 18.6928C4.84812 18.482 5.12494 18.417 5.33574 18.5477C5.7896 18.829 6.27102 19.073 6.76655 19.273C7.28745 19.4832 7.83054 19.6473 8.38072 19.7608C9.54095 20 10.7208 20.018 11.8876 19.8141C13.0545 19.6103 14.1584 19.1933 15.1688 18.5748C15.6479 18.2815 16.1032 17.9429 16.5221 17.5686C16.9203 17.2126 17.2905 16.8197 17.6223 16.401C17.9542 15.982 18.252 15.5319 18.5073 15.063C18.7761 14.5695 19.0015 14.0489 19.1775 13.5155C19.5486 12.3903 19.7022 11.2202 19.634 10.0377C19.5657 8.85486 19.2785 7.71013 18.7805 6.63532C18.5442 6.12542 18.2603 5.63411 17.9367 5.17514C17.6289 4.73853 17.2813 4.3256 16.9035 3.94782C16.526 3.57013 16.1131 3.22254 15.6764 2.91464C15.2174 2.59098 14.7262 2.30707 14.2164 2.07071C13.1419 1.57267 11.9973 1.28547 10.8146 1.21712C9.63198 1.1489 8.46187 1.30245 7.33698 1.67362C6.80337 1.84967 6.28279 2.07515 5.78964 2.34385C5.32065 2.59929 4.87049 2.89708 4.45166 3.229C4.03289 3.56084 3.64011 3.93102 3.28421 4.32928C2.90989 4.7481 2.57136 5.20339 2.27811 5.68261C1.65962 6.69307 1.24268 7.79707 1.03888 8.96399C0.834952 10.1311 0.852871 11.3112 1.09215 12.4714C1.20559 13.0216 1.36968 13.5648 1.57986 14.0858C1.77971 14.5812 2.0237 15.0627 2.3051 15.5168C2.43574 15.7276 2.37075 16.0044 2.15995 16.1351C1.94901 16.2658 1.67228 16.2007 1.54164 15.9899C1.23325 15.4923 0.965862 14.9647 0.746885 14.4218C0.516591 13.8509 0.33682 13.2557 0.212467 12.6528C-0.0497129 11.3814 -0.0693382 10.0883 0.154085 8.80946C0.377418 7.53076 0.834278 6.321 1.512 5.21376C1.83337 4.68869 2.20432 4.18975 2.61448 3.73082C3.00447 3.29444 3.43492 2.88877 3.8938 2.52514C4.35277 2.16142 4.84606 1.83512 5.35995 1.5552C5.9003 1.26073 6.47082 1.01359 7.05554 0.820753C8.2882 0.413966 9.57045 0.245691 10.8663 0.32051C12.1624 0.395374 13.4166 0.710097 14.5941 1.25592C15.1527 1.51487 15.6909 1.82595 16.194 2.18065C16.6725 2.51805 17.1249 2.89897 17.5387 3.3128C17.9526 3.72673 18.3335 4.17924 18.6707 4.65765C19.0253 5.16064 19.3364 5.69896 19.5953 6.25768C20.1411 7.43546 20.4558 8.68982 20.5306 9.98599C20.6054 11.2817 20.4371 12.5639 20.0304 13.7969C19.8376 14.3814 19.5905 14.9519 19.2959 15.4926C19.0162 16.0063 18.6899 16.4996 18.3261 16.9588C17.9626 17.4175 17.557 17.848 17.1206 18.2382C16.6616 18.6485 16.1627 19.0194 15.6376 19.3408C14.5304 20.0186 13.3207 20.4755 12.042 20.6989C11.4543 20.8016 10.8634 20.853 10.273 20.853Z"
								className={`${styles.iconColor}`}
							/>
							<path
								d="M3.65146 18.2845C3.54341 18.2845 3.435 18.2457 3.34891 18.1671C3.11843 17.9568 2.89496 17.7333 2.6847 17.5028C2.51755 17.3196 2.53057 17.0355 2.7138 16.8684C2.89699 16.7012 3.18104 16.7142 3.34823 16.8975C3.54008 17.1078 3.74397 17.3117 3.95428 17.5036C4.13751 17.6708 4.15053 17.9548 3.98334 18.138C3.89473 18.2352 3.7733 18.2845 3.65146 18.2845Z"
								className={`${styles.iconColor}`}
							/>
							<path
								d="M8.51651 13.6824C8.09661 13.6824 7.70186 13.5189 7.40497 13.2219L5.94012 11.757C5.76475 11.5816 5.76475 11.2972 5.94012 11.1218C6.11554 10.9465 6.39986 10.9465 6.57523 11.1218L8.04012 12.5868C8.16734 12.7141 8.33656 12.7842 8.51651 12.7842C8.69642 12.7842 8.86559 12.7141 8.99286 12.5868L14.3477 7.23146C14.5231 7.05609 14.8075 7.05604 14.9828 7.23146C15.1582 7.40683 15.1583 7.69119 14.9828 7.86656L9.62855 13.2214C9.33112 13.5189 8.93641 13.6824 8.51651 13.6824Z"
								className={`${styles.iconColor}`}
							/>
						</svg>
						<span className="text-[14px] text-[#A3A3A3]">Players Under 16 – Must be accompanied by an adult during gameplay.</span>
					</div>
					<div className="flex items-start gap-2.5">
						<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className="flex-none">
							<path
								d="M10.273 20.853C9.57925 20.853 8.88617 20.7821 8.19933 20.6405C7.59642 20.5161 7.00133 20.3363 6.43049 20.1059C5.8875 19.8868 5.35995 19.6194 4.86254 19.3111C4.65173 19.1804 4.58675 18.9036 4.71744 18.6928C4.84812 18.482 5.12494 18.417 5.33574 18.5477C5.7896 18.829 6.27102 19.073 6.76655 19.273C7.28745 19.4832 7.83054 19.6473 8.38072 19.7608C9.54095 20 10.7208 20.018 11.8876 19.8141C13.0545 19.6103 14.1584 19.1933 15.1688 18.5748C15.6479 18.2815 16.1032 17.9429 16.5221 17.5686C16.9203 17.2126 17.2905 16.8197 17.6223 16.401C17.9542 15.982 18.252 15.5319 18.5073 15.063C18.7761 14.5695 19.0015 14.0489 19.1775 13.5155C19.5486 12.3903 19.7022 11.2202 19.634 10.0377C19.5657 8.85486 19.2785 7.71013 18.7805 6.63532C18.5442 6.12542 18.2603 5.63411 17.9367 5.17514C17.6289 4.73853 17.2813 4.3256 16.9035 3.94782C16.526 3.57013 16.1131 3.22254 15.6764 2.91464C15.2174 2.59098 14.7262 2.30707 14.2164 2.07071C13.1419 1.57267 11.9973 1.28547 10.8146 1.21712C9.63198 1.1489 8.46187 1.30245 7.33698 1.67362C6.80337 1.84967 6.28279 2.07515 5.78964 2.34385C5.32065 2.59929 4.87049 2.89708 4.45166 3.229C4.03289 3.56084 3.64011 3.93102 3.28421 4.32928C2.90989 4.7481 2.57136 5.20339 2.27811 5.68261C1.65962 6.69307 1.24268 7.79707 1.03888 8.96399C0.834952 10.1311 0.852871 11.3112 1.09215 12.4714C1.20559 13.0216 1.36968 13.5648 1.57986 14.0858C1.77971 14.5812 2.0237 15.0627 2.3051 15.5168C2.43574 15.7276 2.37075 16.0044 2.15995 16.1351C1.94901 16.2658 1.67228 16.2007 1.54164 15.9899C1.23325 15.4923 0.965862 14.9647 0.746885 14.4218C0.516591 13.8509 0.33682 13.2557 0.212467 12.6528C-0.0497129 11.3814 -0.0693382 10.0883 0.154085 8.80946C0.377418 7.53076 0.834278 6.321 1.512 5.21376C1.83337 4.68869 2.20432 4.18975 2.61448 3.73082C3.00447 3.29444 3.43492 2.88877 3.8938 2.52514C4.35277 2.16142 4.84606 1.83512 5.35995 1.5552C5.9003 1.26073 6.47082 1.01359 7.05554 0.820753C8.2882 0.413966 9.57045 0.245691 10.8663 0.32051C12.1624 0.395374 13.4166 0.710097 14.5941 1.25592C15.1527 1.51487 15.6909 1.82595 16.194 2.18065C16.6725 2.51805 17.1249 2.89897 17.5387 3.3128C17.9526 3.72673 18.3335 4.17924 18.6707 4.65765C19.0253 5.16064 19.3364 5.69896 19.5953 6.25768C20.1411 7.43546 20.4558 8.68982 20.5306 9.98599C20.6054 11.2817 20.4371 12.5639 20.0304 13.7969C19.8376 14.3814 19.5905 14.9519 19.2959 15.4926C19.0162 16.0063 18.6899 16.4996 18.3261 16.9588C17.9626 17.4175 17.557 17.848 17.1206 18.2382C16.6616 18.6485 16.1627 19.0194 15.6376 19.3408C14.5304 20.0186 13.3207 20.4755 12.042 20.6989C11.4543 20.8016 10.8634 20.853 10.273 20.853Z"
								className={`${styles.iconColor}`}
							/>
							<path
								d="M3.65146 18.2845C3.54341 18.2845 3.435 18.2457 3.34891 18.1671C3.11843 17.9568 2.89496 17.7333 2.6847 17.5028C2.51755 17.3196 2.53057 17.0355 2.7138 16.8684C2.89699 16.7012 3.18104 16.7142 3.34823 16.8975C3.54008 17.1078 3.74397 17.3117 3.95428 17.5036C4.13751 17.6708 4.15053 17.9548 3.98334 18.138C3.89473 18.2352 3.7733 18.2845 3.65146 18.2845Z"
								className={`${styles.iconColor}`}
							/>
							<path
								d="M8.51651 13.6824C8.09661 13.6824 7.70186 13.5189 7.40497 13.2219L5.94012 11.757C5.76475 11.5816 5.76475 11.2972 5.94012 11.1218C6.11554 10.9465 6.39986 10.9465 6.57523 11.1218L8.04012 12.5868C8.16734 12.7141 8.33656 12.7842 8.51651 12.7842C8.69642 12.7842 8.86559 12.7141 8.99286 12.5868L14.3477 7.23146C14.5231 7.05609 14.8075 7.05604 14.9828 7.23146C15.1582 7.40683 15.1583 7.69119 14.9828 7.86656L9.62855 13.2214C9.33112 13.5189 8.93641 13.6824 8.51651 13.6824Z"
								className={`${styles.iconColor}`}
							/>
						</svg>
						<span className="text-[14px] text-[#A3A3A3]">
							Friendly Staff Support – Our team will guide you through the adventure & check in on your party.
						</span>
					</div>
					<div className="flex items-start gap-2.5">
						<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className="flex-none">
							<path
								d="M10.273 20.853C9.57925 20.853 8.88617 20.7821 8.19933 20.6405C7.59642 20.5161 7.00133 20.3363 6.43049 20.1059C5.8875 19.8868 5.35995 19.6194 4.86254 19.3111C4.65173 19.1804 4.58675 18.9036 4.71744 18.6928C4.84812 18.482 5.12494 18.417 5.33574 18.5477C5.7896 18.829 6.27102 19.073 6.76655 19.273C7.28745 19.4832 7.83054 19.6473 8.38072 19.7608C9.54095 20 10.7208 20.018 11.8876 19.8141C13.0545 19.6103 14.1584 19.1933 15.1688 18.5748C15.6479 18.2815 16.1032 17.9429 16.5221 17.5686C16.9203 17.2126 17.2905 16.8197 17.6223 16.401C17.9542 15.982 18.252 15.5319 18.5073 15.063C18.7761 14.5695 19.0015 14.0489 19.1775 13.5155C19.5486 12.3903 19.7022 11.2202 19.634 10.0377C19.5657 8.85486 19.2785 7.71013 18.7805 6.63532C18.5442 6.12542 18.2603 5.63411 17.9367 5.17514C17.6289 4.73853 17.2813 4.3256 16.9035 3.94782C16.526 3.57013 16.1131 3.22254 15.6764 2.91464C15.2174 2.59098 14.7262 2.30707 14.2164 2.07071C13.1419 1.57267 11.9973 1.28547 10.8146 1.21712C9.63198 1.1489 8.46187 1.30245 7.33698 1.67362C6.80337 1.84967 6.28279 2.07515 5.78964 2.34385C5.32065 2.59929 4.87049 2.89708 4.45166 3.229C4.03289 3.56084 3.64011 3.93102 3.28421 4.32928C2.90989 4.7481 2.57136 5.20339 2.27811 5.68261C1.65962 6.69307 1.24268 7.79707 1.03888 8.96399C0.834952 10.1311 0.852871 11.3112 1.09215 12.4714C1.20559 13.0216 1.36968 13.5648 1.57986 14.0858C1.77971 14.5812 2.0237 15.0627 2.3051 15.5168C2.43574 15.7276 2.37075 16.0044 2.15995 16.1351C1.94901 16.2658 1.67228 16.2007 1.54164 15.9899C1.23325 15.4923 0.965862 14.9647 0.746885 14.4218C0.516591 13.8509 0.33682 13.2557 0.212467 12.6528C-0.0497129 11.3814 -0.0693382 10.0883 0.154085 8.80946C0.377418 7.53076 0.834278 6.321 1.512 5.21376C1.83337 4.68869 2.20432 4.18975 2.61448 3.73082C3.00447 3.29444 3.43492 2.88877 3.8938 2.52514C4.35277 2.16142 4.84606 1.83512 5.35995 1.5552C5.9003 1.26073 6.47082 1.01359 7.05554 0.820753C8.2882 0.413966 9.57045 0.245691 10.8663 0.32051C12.1624 0.395374 13.4166 0.710097 14.5941 1.25592C15.1527 1.51487 15.6909 1.82595 16.194 2.18065C16.6725 2.51805 17.1249 2.89897 17.5387 3.3128C17.9526 3.72673 18.3335 4.17924 18.6707 4.65765C19.0253 5.16064 19.3364 5.69896 19.5953 6.25768C20.1411 7.43546 20.4558 8.68982 20.5306 9.98599C20.6054 11.2817 20.4371 12.5639 20.0304 13.7969C19.8376 14.3814 19.5905 14.9519 19.2959 15.4926C19.0162 16.0063 18.6899 16.4996 18.3261 16.9588C17.9626 17.4175 17.557 17.848 17.1206 18.2382C16.6616 18.6485 16.1627 19.0194 15.6376 19.3408C14.5304 20.0186 13.3207 20.4755 12.042 20.6989C11.4543 20.8016 10.8634 20.853 10.273 20.853Z"
								className={`${styles.iconColor}`}
							/>
							<path
								d="M3.65146 18.2845C3.54341 18.2845 3.435 18.2457 3.34891 18.1671C3.11843 17.9568 2.89496 17.7333 2.6847 17.5028C2.51755 17.3196 2.53057 17.0355 2.7138 16.8684C2.89699 16.7012 3.18104 16.7142 3.34823 16.8975C3.54008 17.1078 3.74397 17.3117 3.95428 17.5036C4.13751 17.6708 4.15053 17.9548 3.98334 18.138C3.89473 18.2352 3.7733 18.2845 3.65146 18.2845Z"
								className={`${styles.iconColor}`}
							/>
							<path
								d="M8.51651 13.6824C8.09661 13.6824 7.70186 13.5189 7.40497 13.2219L5.94012 11.757C5.76475 11.5816 5.76475 11.2972 5.94012 11.1218C6.11554 10.9465 6.39986 10.9465 6.57523 11.1218L8.04012 12.5868C8.16734 12.7141 8.33656 12.7842 8.51651 12.7842C8.69642 12.7842 8.86559 12.7141 8.99286 12.5868L14.3477 7.23146C14.5231 7.05609 14.8075 7.05604 14.9828 7.23146C15.1582 7.40683 15.1583 7.69119 14.9828 7.86656L9.62855 13.2214C9.33112 13.5189 8.93641 13.6824 8.51651 13.6824Z"
								className={`${styles.iconColor}`}
							/>
						</svg>
						<span className="text-[14px] text-[#A3A3A3]">
							Want More? – Ask us about decorations, themed immersive events, catering, mini-game add-ons, and even full facility buy-outs!
						</span>
					</div>
				</div>
				<Form pricingState={pricingState} setPricingState={setPricingState} />
			</div>
		</div>
	);
}

export default EventPricing;
