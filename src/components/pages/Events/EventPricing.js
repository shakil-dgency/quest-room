"use client";
import React, { useEffect, useState } from "react";
import SectionStarter from "../GlobalComponents/SectionStarter";
import { IoIosArrowDown } from "react-icons/io";
import Form from "./Form";

const pricingData = [
	{
		title: "SMALL GROUP",
		players: "2 - 10",
		weekendPrice: "$150",
		weekdayPrice: "$120",
	},
	{
		title: "MEDIUM GROUP",
		players: "11 - 20",
		weekendPrice: "$280",
		weekdayPrice: "$250",
	},
	{
		title: "LARGE GROUP",
		players: "21+",
		weekendPrice: "$400",
		weekdayPrice: "$350",
	},
];

const Card = ({ data, setPricingState }) => {
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
				if (teamSize < 10) {
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

	// useEffect(() => {
	// 	if (state.totalPrice) {
	// 		setPricingState(state);
	// 	}
	// }, [state.totalPrice, state.gameSelect]);

	const playerSize = () => {
		const playerRange = players.split("-").map(Number);
		const playerOptions = Array.from({ length: playerRange[1] - playerRange[0] + 1 }, (_, i) => playerRange[0] + i);

		return playerOptions;
	};

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

	const handleForm =()=>{
		if (state.totalPrice) {
			setPricingState(state);
		}
	}

	return (
		<div className="py-[40px] pl-[30px] pr-5 rounded-[10px] border-[1px] border-[rgba(0,133,255,0.32)] bg-gradient-to-b from-[rgba(0,133,255,0.12)] via-[rgba(0,133,255,0.04)] to-[rgba(0,133,255,0.07)] backdrop-blur-[42px]">
			<div className="flex justify-between items-center">
				<p className="subtitle_S text-[#EDEDED]">{title}</p>
				<p className="body-paragraph_S text-[#ffffff80]">For {players} Players</p>
			</div>
			<div className="my-10 text-center">
				<span className="text-[64px] leading-[1] text-[#D9D9D9]">${state.totalPrice ? state.totalPrice : "???"}</span>
				<span className="subtitle_S text-[#A3A3A3] ml-2.5">${state.totalValue ? state.totalValue : "???"} value</span>
			</div>
			<div className="body-paragraph_S text-[#D9D9D9] flex justify-center items-center gap-2.5">
				<span>WEEKENDS & HOLIDAYS</span>
				{/* ------toggle button-------- */}
				<button
					onClick={() => setIsWeekend((prev) => !prev)}
					className={` ${isWeekend ? "bg-[#525252]" : "bg-[#0085FF] "} w-[48px] h-[22px]  rounded-full relative`}
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
					} rounded-t-[4px] cursor-pointer w-full py-2 pl-[24px] px-[15px] flex justify-between items-center bg-[#002766] text-[#BFBFBF] body-paragraph_M`}
				>
					<p>{state.teamSize ? state.teamSize + " Players" : "Your Team Size"}</p>
					<span>
						<IoIosArrowDown />
					</span>
				</div>
				<div className={`${state.teamToggle ? "max-h-[300px]" : "max-h-0"} transition-all duration-300 overflow-hidden`}>
					<div className={` rounded-b bg-[#002766] py-4 px-8 border-t-[1px] border-t-[#ffffff20]`}>
						{players === "21+" ? (
							<div>
								<input
									type="number"
									placeholder="Write Your Team Size"
									value={error.teamSize}
									onChange={(e) => handleChange(e)}
									className="outline-none px-3 py-1.5 rounded w-full text-[14px] bg-[#01194090] text-[#D9D9D9] border-[1px] border-[#003180]"
								/>
								{error.isError && <p className="text-[#fc7008] mt-1 text-[14px]">{error.isError}</p>}
							</div>
						) : (
							<div className="flex flex-wrap gap-2">
								{playerSize().map((num, i) => (
									<span
										onClick={() => setState((prev) => ({ ...prev, teamSize: num }))}
										key={i}
										className="px-[20px] py-1.5 bg-[#01194090] border-[1px] border-[#003180] text-[#D9D9D9] cursor-pointer"
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
					} rounded-t-[4px] w-full py-2 pl-[24px] px-[15px] cursor-pointer flex justify-between items-center bg-[#002766] text-[#BFBFBF] body-paragraph_M`}
				>
					<p>{state.gameSelect.length !== 0 ? state.gameSelect.length + " Games Selected" : "Choose Your Escape Game"}</p>
					<span>
						<IoIosArrowDown />
					</span>
				</div>
				<div className={`${state.gameToggle ? "max-h-[600px]" : "max-h-0"} duration-300 transition-all overflow-hidden`}>
					<div className={`flex flex-col gap-2 rounded-b bg-[#002766] py-4 px-8 border-t-[1px] border-t-[#ffffff20]`}>
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

function EventPricing() {
	const [pricingState, setPricingState] = useState();

	return (
		<div id="event_packages" className="g_container--theme pt-[150px]">
			<SectionStarter
				title="Get an instant Escape room birthday party quote"
				description="Celebrate with thrilling games, private experiences, and flexible options like group organization and catering. Fun, teamwork, and unforgettable memories await!"
			/>
			<div className="grid grid-cols-3 gap-2.5 mb-16">
				{pricingData.map((data, i) => (
					<Card key={i} data={data} setPricingState={setPricingState} />
				))}
			</div>
			<Form pricingState={pricingState} setPricingState={setPricingState} />
		</div>
	);
}

export default EventPricing;
