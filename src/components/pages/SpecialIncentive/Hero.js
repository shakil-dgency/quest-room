/* eslint-disable react/no-unescaped-entities */
import BigButton from "@/components/buttons/BigButton";
import React from "react";

function Hero() {
	return (
		<div className="">
			<div className="bg-[url('/pages/SpecialIncentive/hero_bg.png')] bg-no-repeat bg-cover bg-[center_top] relative ">
				<div className="g_container--theme">
					<div className="max-w-[1158px] mx-auto pt-[112px] pb-[190px] flex flex-col items-center">
						<p className="text-center text-[#FC7008] mb-4">Quest Room vs. Others: What Sets Us Apart?</p>
						<h1 className="text-center text-[#EDEDED]">Quest Room Offers the Most Thrilling and Immersive Escape Rooms in LA</h1>
						<p className="g_main-description text-[#D9D9D9] text-center max-w-[868px] mx-auto mt-2 pb-[44px]">
							"I've played many escape rooms in Los Angeles, but after visiting Quest Room, I’m totally hooked! The immersive games here are truly the
							best escape rooms in LA! From live actors to interactive themes, intricate puzzles, and spine-chilling adventures—Quest Room has it all!
							There’s really something for everyone!" — Sarah L., Los Angeles
						</p>
						<div className="flex items-center gap-[25px]">
							<BigButton title="book games" />
							<div>
								<div className="flex items-center justify-between gap-5 border-[1px] border-dashed border-[#157009] rounded  text-[24px] text-[#F5F5F5] font-[600] uppercase px-[17px] py-[8px] bg-[radial-gradient(381.96%_141.42%_at_0%_0%,#000A19_0%,#001B43_50%,#000A19_100%)]">
									<span>Welcome15</span>
									<button className="text-[16px] bg-[#157009] px-4 py-1.5 leading-[1] rounded-[2px]">COPY</button>
								</div>
							</div>
						</div>
						<p className="text-[16px] text-center text-[#BFBFBF] mt-[20px]">
							Exclusive $15 Discount on escape room games! Available ONLY on this <br /> page — don’t miss out, claim your offer TODAY!
						</p>
					</div>
				</div>
				<div className="w-full h-[150px] absolute bg-[linear-gradient(180deg,rgba(0,13,33,0)_21.39%,#000A19_100%)] bottom-0 z-0 "></div>
			</div>

			<div className="relative z-10 max-w-[880px] py-[35px] px-[40px] mx-auto -mt-[80px] bg-[url('/pages/SpecialIncentive/state_bg.png')] bg-no-repeat bg-[length:100%_100%] flex justify-between">
				<div className="text-center">
					<p className="text-[#D9D9D9] text-[26px] font-[700]">Immersive</p>
					<p className="text-[#BFBFBF] text-[20px] font-[400]">Themes and Puzzle</p>
				</div>
				<div className="text-center">
					<p className="text-[#D9D9D9] text-[26px] font-[700]">50,000+</p>
					<p className="text-[#BFBFBF] text-[20px] font-[400]">Adventurers Served</p>
				</div>
				<div className="text-center">
					<p className="text-[#D9D9D9] text-[26px] font-[700]">10000+</p>
					<p className="text-[#BFBFBF] text-[20px] font-[400]">Five Star Reviews</p>
				</div>
			</div>
		</div>
	);
}

export default Hero;
