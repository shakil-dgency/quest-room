import BigButton from "@/components/buttons/BigButton";
import Image from "next/image";
import React from "react";

function GiftCardSection() {
	return (
		<div className="g_container--theme py-[100px] grid grid-cols-2 justify-items-center items-center gap-x-[90px]">
			<div>
				<h2 className="text-[#EDEDED] ">Escape Room Gift Cards</h2>
				<p className="text-[14px] sm:text-[16px] pt-3 text-[#A3A3A3] max-w-[610px] ">
					Looking for the perfect gift? Give the gift of adventure with a Quest Room Escape Room Gift Card! Perfect for birthdays, holidays, or any
					occasion, these gift cards are the ideal present for friends, family, or colleagues who love a good challenge. Choose from a variety of
					denominations and let the recipient choose from 14 immersive escape rooms in LA. From thrilling horror themes to fun mystery puzzles,
					there’s something for everyone to enjoy!
				</p>
				<div className="pt-[90px] flex">
					<div className=" relative">
						<BigButton title={"BUY GIFT CARD NOW"} />
						<Image src={"/global/button_gift.png"} height={139} width={144} alt="" className="absolute left-[90%] -bottom-1.5" />
					</div>
				</div>
			</div>
			<Image src={"/global/gift_card.png"} height={330} width={495} alt="" className="" />
		</div>
	);
}

export default GiftCardSection;
