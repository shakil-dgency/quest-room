import Image from "next/image";
import React from "react";
import SubLocationGames from "./SubLocationGames";


function GlobalRoomsCard({ locationGame,id }) {
	return (
		<div className={`w-full grid gap-5 ${id === 'home'?"grid-cols-4": ""}`} >
			{locationGame.map((data, i) => (
				<div key={i} className={`${i === 0 ? "col-span-3" : ""} ${data.mejorcity.toLowerCase().includes(id)?"": id === 'home'?"": "hidden"}`}>
					<p className="text-[#D9D9D9] text-[32px] font-[700]">{data.mejorcity}</p>
					<div className={`${i === 0 ? "grid grid-cols-2 gap-x-[20px] gap-y-[35px]" : ""} pt-[25px] `}>
						{data.subcity?.map((city, j) => (
							<SubLocationGames city={city}  key={j}/>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

export default GlobalRoomsCard;
