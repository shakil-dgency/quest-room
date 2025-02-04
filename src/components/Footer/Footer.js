/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/../../public/templet/thrillTheme/questroom_logo.svg";
import location1 from "@/../../public/templet/thrillTheme/footer/location1.png";
import location2 from "@/../../public/templet/thrillTheme/footer/location2.png";
import location3 from "@/../../public/templet/thrillTheme/footer/location3.png";
import location4 from "@/../../public/templet/thrillTheme/footer/location4.png";
import mail from "@/../../public/templet/thrillTheme/footer/mail.svg";
import location from "@/../../public/templet/thrillTheme/footer/location.svg";
import call from "@/../../public/templet/thrillTheme/footer/call.svg";
import direction from "@/../../public/templet/thrillTheme/footer/direction.svg";
import parking from "@/../../public/templet/thrillTheme/footer/parking.svg";
import map1 from "@/../../public/templet/thrillTheme/footer/map1.png";
import map2 from "@/../../public/templet/thrillTheme/footer/map2.png";
import map3 from "@/../../public/templet/thrillTheme/footer/map3.png";
import map4 from "@/../../public/templet/thrillTheme/footer/map4.png";

import FooterCard from "./FooterCard";
import { useSelector } from "react-redux";
import QuickLinks from "./QuickLinks";

const footerLocation = [
	{
		mejorcity: "Los Angeles, CA",
		subcity: [
			{
				name: "Redondo Beach",
				address: "1815 Hawthorne Blvd,Redondo Beach, CA 90278",
				total_game: "04",
				mail: "sbg@questroom.com",
				number: "323-307-2090",
				direction: "",
				parking: "",
			},
			{
				name: "Hollywood",
				address: "5517 Santa Monica Blvd,Los Angeles, CA 90038",
				total_game: "05",
				mail: "hollywood@questroom.com",
				number: "323-880-0221",
				direction: "",
				parking: "",
			},
			{
				name: "Korea Town",
				address: "170 S. Western Ave,Los Angeles, CA 90004",
				total_game: "03",
				mail: "ktown@questroom.com",
				number: "310-707-1240",
				direction: "",
				parking: "",
			},
			{
				name: "Culver City",
				address: "5235 W Adams Blvd",
				total_game: "02",
				mail: "culver@questroom.com",
				number: "323-457-7222",
				direction: "",
				parking: "",
			},
		],
	},
	{
		mejorcity: "Dallas, TX",
		subcity: [
			{
				name: "Plano",
				address: "3420 K Ave Unit 309,Plano, TX 75074",
				total_game: "04",
				mail: "plano@questroom.com",
				number: "945-284-0084",
				direction: "",
				parking: "",
			},
		],
	},
];

function Footer() {
	const [state, setState] = useState({
		dallas: true,
		los_angeles: true,
	});

	const losAngeles = footerLocation.filter((a) => a.mejorcity.toLowerCase().includes("los angeles"))[0];
	const dallas = footerLocation.filter((a) => a.mejorcity.toLowerCase().includes("dallas"))[0];

	const { location, id } = useSelector((state) => state.location);

	useEffect(() => {
		if (id === "dallas" || id === "plano") {
			setState((prev) => ({ ...prev, dallas: true, los_angeles: false }));

			return;
		}

		if (id !== "home") {
			setState((prev) => ({ ...prev, dallas: false, los_angeles: true }));
			return;
		} else {
			setState((prev) => ({ ...prev, dallas: true, los_angeles: true }));
		}


	}, [id]);

	return (
		<div className="bg-[#001433] bg-[url('/footer/footer_bg.png')] bg-repeat bg-cover  px-2.5 ">
			<div
				className={`pt-[60px] pb-16 font_poppins ${
					state.dallas && !state.los_angeles ? " md:flex justify-between gap-[35px] max-w-[1440px] mx-auto" : ""
				}`}
			>
				<div className="bg-[#001e4d] bg-opacity-[0.8] rounded-md pt-[60px] pb-[20px] md:pb-[45px] px-2.5 md:px-5 max-w-[500px] md:max-w-[850px] xl:max-w-[1440px] mx-auto w-full">
					<div className="flex justify-center pb-5 md:pb-[25px]">
						<Image src={logo} alt="logo" height={96} width={496} className="w-[200px] md:w-[300px]" />
					</div>
					<p className="text-[14px] md:text-[16px] text-[#D9D9D9] max-w-[762px] mx-auto text-center ">
						At the core of our project's concept is the desire to provide people with maximum immersion. Each room has a meticulously thought-out
						story, from a detailed script to a cinematic set on par with Hollywood.
					</p>

					{state.los_angeles && (
						<div className="mt-[45px] md:px-8 xl:px-0">
							<p className="text-[32px] font-[700] text-[#D9D9D9] mb-5 md:mb-[28px] leading-[1]">Los Angeles, CA</p>
							<div className=" grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-y-10 xl:gap-y-[25px]  gap-x-3 ">
								{losAngeles?.subcity.map((item, i) => {
									return <FooterCard key={i} item={item} location={location} />;
								})}
							</div>
						</div>
					)}

					{/*------ layout change in Dallas location------*/}
					<div className={`${state.dallas && !state.los_angeles ? "hidden md:block" : ""}`}>
						{state.dallas && !state.los_angeles && <QuickLinks state={state} />}
					</div>
					<div className={`${state.dallas && !state.los_angeles ? "block md:hidden" : ""}`}>
						{state.dallas && !state.los_angeles && (
							<div>
								<p className="text-[32px] font-[700] text-[#D9D9D9] mt-[45px] mb-[22px] ">Dallas, TX</p>
								{dallas?.subcity.map((item, j) => {
									return <FooterCard key={j} item={item} />;
								})}
							</div>
						)}
					</div>
				</div>
				<div
					className={`${
						state.dallas && !state.los_angeles ? "lg:w-[380px] flex-none mt-[35px] md:mt-0" : "mt-[30px]"
					} max-w-[500px] md:max-w-[850px] xl:max-w-[1440px] mx-auto flex flex-col md:flex-row gap-[35px] `}
				>
					{state.dallas === true && (
						<div
							className={`${
								state.dallas && !state.los_angeles ? "hidden md:block" : ""
							} bg-[#001D4D] bg-opacity-[0.8] max-w-[500px] lg:w-[380px] h-full flex-none rounded-md px-2.5 md:px-5 pt-[20px] pb-[20px]`}
						>
							<p className="text-[32px] font-[700] text-[#D9D9D9] mb-[22px] ">Dallas, TX</p>
							{dallas?.subcity.map((item, j) => {
								return <FooterCard key={j} item={item} location={location} />;
							})}
						</div>
					)}
					{state.los_angeles && <QuickLinks state={state} />}

					{state.dallas && !state.los_angeles && (
						<div className={`${state.dallas && !state.los_angeles ? "block md:hidden" : ""}`}>
							<QuickLinks state={state} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default Footer;
