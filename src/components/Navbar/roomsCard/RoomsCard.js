/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import game1 from "@/../../public/templet/thrillTheme/navBar/game1.png";
import game2 from "@/../../public/templet/thrillTheme/navBar/game2.png";
import game3 from "@/../../public/templet/thrillTheme/navBar/game3.png";
import game4 from "@/../../public/templet/thrillTheme/navBar/game4.png";
import game5 from "@/../../public/templet/thrillTheme/navBar/game5.png";
import GlobalRoomsCard from "./GlobalRoomsCard";
import SingleLocationGame from "./SingleLocationGame";
import { useSelector } from "react-redux";

function RoomsCard({ escape, locationGame }) {
	const { location: selectedLocation,id } = useSelector((state) => state.location);
	const [game, setGame] = useState();

	useEffect(() => {
		const singleLocation = locationGame.flatMap((element) =>
			element.subcity.filter((location) => selectedLocation?.toLowerCase().includes(location.name.toLowerCase()))
		);

		setGame(singleLocation);
	}, [selectedLocation]);

	

	

	return (
		<div
			id="roomsNavbar"
			className={`${
				escape ? "-top-[300%] lg:top-[48px]" : "-top-[300%]"
			} duration-300 bg-[#000A19] border-[1px] border-[#3f3f3f70] rounded-lg max-w-full px-[34px] py-[40px] fixed z-30 right-0 ${id === 'dallas'? "2xl:right-[calc((100%-1040px)/2)]":" 2xl:right-[calc((100%-1440px)/2)]"}   `}
		>
			{["home", "los", "dallas"].includes(id) ? (
				<GlobalRoomsCard locationGame={locationGame} id={id} />
			) : (
				<div>
					<p className="text_strokenav font_poppins uppercase text-center text-[28px] font-[900]">{game && game[0]?.name} Questrooms</p>
					<div className="font_poppins grid grid-cols-2 gap-y-5 gap-x-10 mt-5">
						{game &&
							game[0]?.games.map((newGame, i) => {
								return <SingleLocationGame game={newGame} citySlug={game && game[0].slug} key={i} />;
							})}
					</div>
				</div>
			)}
		</div>
	);
}

export default RoomsCard;
