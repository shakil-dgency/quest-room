"use client";
import React from "react";
import { filterByCategory } from "@/lib/features/gameSlice";
import { useDispatch, useSelector } from "react-redux";
import locationIcon from "@/../../public/templet/thrillTheme/footer/location.svg";
import Image from "next/image";
import GameCard from "../GlobalComponents/GameCard";
import GameCardWithCarusel from "../GlobalComponents/GameCardWithCarusel";

function FilterSection() {
	const dispatch = useDispatch();
	const { filteredGames } = useSelector((state) => state.games);

	const handleFilter = (category, e) => {
		dispatch(filterByCategory(category));

		// Remove 'underline' class from all buttons
		document.querySelectorAll(".underline").forEach((btn) => {
			btn.classList.remove("underline");
			btn.classList.remove("text-[#F5F5F5]");
		});

		// Add 'eventActive' class to the clicked button
		e.target.classList.add("underline");
		e.target.classList.add("text-[#F5F5F5]");
	};
	return (
		<div className="pt-[80px] pb-[80px] bg-[url('/pages/SpecialIncentive/special_incentive_bg.png')] bg-repeat relative ">
			<div className="max-w-[1330px] mx-auto pb-[64px]">
				<p className="text-[#D9D9D9] text-center mb-2.5 text-[20px] font-[500]">04 Nearby Locations | 14 Games</p>
				<h2 className="text-[#EDEDED]">Explore The #1 Escape Rooms in Los Angeles</h2>
				<p className="text-[16px] text-[#A3A3A3] text-center max-w-[950px] mx-auto">
					No other escape rooms in Los Angeles are as immersive, challenging, and fun as the ones at Quest Room! With themes like comedy, horror, and
					filters for all skill levels, families, and big groups, there’s something for everyone!
				</p>
			</div>

			{/* ---------Filter part-------- */}
			<div className="g_container--theme h-full">
				<button className="text-[14px] cursor-default flex items-center gap-2 text-[#A3A3A3] px-[18px] py-[16px] bg-[#001A43] leading-[1] -mb-1.5 rounded-t-lg">
					<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
						<path
							d="M17.5781 14.9569C17.5782 15.0684 17.5562 15.1787 17.5136 15.2816C17.471 15.3846 17.4085 15.4781 17.3297 15.5569C17.2509 15.6357 17.1574 15.6981 17.0545 15.7408C16.9515 15.7834 16.8412 15.8053 16.7298 15.8053L8.9384 15.8053C8.76553 16.301 8.44272 16.7306 8.01472 17.0347C7.58671 17.3387 7.07473 17.502 6.54973 17.502C6.02474 17.502 5.51275 17.3387 5.08475 17.0347C4.65675 16.7306 4.33393 16.301 4.16106 15.8053H1.45967C1.23467 15.8053 1.0189 15.7159 0.859801 15.5568C0.700706 15.3977 0.611328 15.1819 0.611328 14.9569C0.611328 14.7319 0.700706 14.5162 0.859801 14.3571C1.0189 14.198 1.23467 14.1086 1.45967 14.1086H4.16101C4.3339 13.6129 4.65673 13.1833 5.08473 12.8793C5.51274 12.5752 6.02472 12.4119 6.54971 12.4119C7.07469 12.4119 7.58668 12.5752 8.01468 12.8793C8.44269 13.1833 8.76551 13.6129 8.9384 14.1086L16.7298 14.1086C16.8412 14.1086 16.9515 14.1305 17.0545 14.1731C17.1574 14.2157 17.2509 14.2782 17.3297 14.357C17.4085 14.4358 17.471 14.5293 17.5136 14.6323C17.5562 14.7352 17.5782 14.8455 17.5781 14.9569ZM16.7298 8.17022H14.8768C14.7039 7.67452 14.3811 7.24488 13.9531 6.94087C13.5251 6.63686 13.0131 6.47354 12.4881 6.47354C11.9631 6.47354 11.4511 6.63686 11.0231 6.94087C10.5951 7.24488 10.2723 7.67452 10.0994 8.17022H1.45967C1.23467 8.17022 1.0189 8.2596 0.859801 8.41869C0.700706 8.57779 0.611328 8.79357 0.611328 9.01856C0.611328 9.24356 0.700706 9.45933 0.859801 9.61843C1.0189 9.77752 1.23467 9.8669 1.45967 9.8669H10.0994C10.2723 10.3626 10.5951 10.7923 11.0231 11.0963C11.4511 11.4003 11.9631 11.5637 12.4881 11.5637C13.0131 11.5637 13.5251 11.4003 13.9531 11.0963C14.3811 10.7923 14.7039 10.3626 14.8768 9.8669L16.7298 9.8669C16.9548 9.8669 17.1706 9.77752 17.3297 9.61843C17.4887 9.45933 17.5781 9.24356 17.5781 9.01856C17.5781 8.79357 17.4887 8.57779 17.3297 8.41869C17.1706 8.2596 16.9548 8.17022 16.7298 8.17022ZM1.45967 3.92852L5.85774 3.92852C6.03061 4.42424 6.35343 4.85389 6.78143 5.15792C7.20943 5.46194 7.72142 5.62527 8.24641 5.62527C8.77141 5.62527 9.28339 5.46194 9.7114 5.15792C10.1394 4.85389 10.4622 4.42424 10.6351 3.92852L16.7298 3.92852C16.9548 3.92852 17.1706 3.83914 17.3297 3.68005C17.4887 3.52095 17.5781 3.30518 17.5781 3.08018C17.5781 2.85519 17.4887 2.63941 17.3297 2.48032C17.1706 2.32122 16.9548 2.23184 16.7298 2.23184H10.6351C10.4622 1.73614 10.1394 1.30651 9.71136 1.00249C9.28336 0.698483 8.77137 0.535156 8.24639 0.535156C7.7214 0.535156 7.20942 0.698483 6.78141 1.00249C6.35341 1.30651 6.03058 1.73614 5.85769 2.23184H1.45967C1.23467 2.23184 1.0189 2.32122 0.859801 2.48032C0.700706 2.63941 0.611328 2.85519 0.611328 3.08018C0.611328 3.30518 0.700706 3.52095 0.859801 3.68005C1.0189 3.83914 1.23467 3.92852 1.45967 3.92852Z"
							fill="#A3A3A3"
						/>
					</svg>
					<span>FILTER</span>
				</button>
				<div className="bg-[#001A43] rounded-lg px-5 py-[15px] flex justify-between mb-[70px] w-full sticky top-[70px] z-40 ">
					<div className="bg-[#00112C] rounded-lg pl-5 pr-14 pt-[15px] pb-5 text-[#808080]">
						<p className="text-[#FC7008]">ESCAPE ROOMS</p>
						<p
							className="text-[#F5F5F5] hover:text-[#F5F5F5] underline decoration-[#FC7008] underline-offset-[6px] pt-5 text-center cursor-pointer"
							onClick={(e) => handleFilter("allgames", e)}
						>
							All Games
						</p>
					</div>
					<div className="bg-[#00112C] rounded-lg pl-5 pr-14 pt-[15px] pb-5 ">
						<p className="text-[#FC7008] uppercase">Game Themes</p>
						<div className="flex gap-[60px] ml-4">
							<p
								className="text-[#808080] hover:text-[#F5F5F5] decoration-[#FC7008] underline-offset-[6px] pt-5 text-center cursor-pointer"
								onClick={(e) => handleFilter("comedy", e)}
							>
								Comedy
							</p>
							<p
								className="text-[#808080] hover:text-[#F5F5F5] decoration-[#FC7008] underline-offset-[6px] pt-5 text-center cursor-pointer"
								onClick={(e) => handleFilter("fantasy", e)}
							>
								Fantasy
							</p>
							<p
								className="text-[#808080] hover:text-[#F5F5F5] decoration-[#FC7008] underline-offset-[6px] pt-5 text-center cursor-pointer"
								onClick={(e) => handleFilter("horror", e)}
							>
								Horror
							</p>
							<p
								className="text-[#808080] hover:text-[#F5F5F5] decoration-[#FC7008] underline-offset-[6px] pt-5 text-center cursor-pointer"
								onClick={(e) => handleFilter("family", e)}
							>
								Family
							</p>
							<p
								className="text-[#808080] hover:text-[#F5F5F5] decoration-[#FC7008] underline-offset-[6px] pt-5 text-center cursor-pointer"
								onClick={(e) => handleFilter("adventure", e)}
							>
								Adventure
							</p>
						</div>
					</div>
					<div className="bg-[#00112C] rounded-lg pl-5 pr-8 pt-[15px] pb-5 ">
						<p className="text-[#FC7008] uppercase">recommended for</p>
						<div className="flex gap-[40px] ml-2">
							<p
								className="text-[#808080] hover:text-[#F5F5F5] decoration-[#FC7008] underline-offset-[6px] pt-5 text-center cursor-pointer"
								onClick={(e) => handleFilter("beginners", e)}
							>
								Beginners
							</p>
							<p
								className="text-[#808080] hover:text-[#F5F5F5] decoration-[#FC7008] underline-offset-[6px] pt-5 text-center cursor-pointer"
								onClick={(e) => handleFilter("mature", e)}
							>
								Mature
							</p>
							<p
								className="text-[#808080] hover:text-[#F5F5F5] decoration-[#FC7008] underline-offset-[6px] pt-5 text-center cursor-pointer"
								onClick={(e) => handleFilter("experts", e)}
							>
								Experts
							</p>
							<p
								className="text-[#808080] hover:text-[#F5F5F5] decoration-[#FC7008] underline-offset-[6px] pt-5 text-center cursor-pointer"
								onClick={(e) => handleFilter("big groups", e)}
							>
								Big Group
							</p>
						</div>
					</div>
				</div>
				{filteredGames?.map((item, i) => (
					<div key={i}>
						<p className="text-[18px] leading-[1] text-[#A3A3A3]">{item.games.length} games</p>
						<p className="text-[#D9D9D9] text-[40px] uppercase font-[700]">{item.name} Escape Rooms</p>
						<div className=" group flex gap-2.5 items-center mb-[50px]">
							<Image src={locationIcon} alt="" height={15} width={11} className="flex-none object-cover " />
							<p className="text-[#A3A3A3] text-[13px]">{item.address}</p>
						</div>

						<GameCardWithCarusel data={item.games} />
					</div>
				))}
			</div>
			<div className="w-full h-[150px] absolute bg-[linear-gradient(180deg,rgba(0,13,33,0)_21.39%,#000A19_100%)] bottom-0 z-0 "></div>
		</div>
	);
}

export default FilterSection;
