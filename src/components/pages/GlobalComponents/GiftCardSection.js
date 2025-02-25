import BigButton from "@/components/buttons/BigButton";
import Image from "next/image";
import React from "react";

function GiftCardSection() {
	return (
		<div className="g_container--theme py-[100px] flex flex-col-reverse lg:flex-row lg:justify-end items-center flex-shrink-0">
			<div className="text-center h-full lg:text-start max-w-[1017px] pl-5 lg:pl-10 pr-5 lg:pr-[100px] 2xl:pr-[250px] pt-[200px] pb-[40px]  lg:py-[55px] rounded-[14px] border-[1px] border-white/30 shadow-[2px_4px_30px_0px_rgba(0,0,0,0.10)] backdrop-blur-[35px] bg-[linear-gradient(69deg,rgba(255,255,255,0.10)_0.78%,rgba(255,255,255,0.00)_102.79%)]">
				<h2 className="text-text-200 ">Escape Room Gift Cards</h2>
				<p className="body-paragraph_M pt-2.5 text-text-500 max-w-[610px] ">
					Looking for the perfect gift? Give the gift of adventure with a Quest Room Escape Room Gift Card! Perfect for birthdays, holidays, or any
					occasion, these gift cards are the ideal present for friends, family, or colleagues who love a good challenge. 
				</p>
				<div className="pt-[70px] lg:pt-[90px] flex flex-col xl:flex-row justify-center lg:justify-start items-center gap-10 xl:gap-[90px]">
					<div className=" relative">
						<BigButton title={"BUY GIFT CARD NOW"} />
						<Image src={"/global/button_gift.png"} height={139} width={144} alt="" className="h-[110px] lg:h-[135px] w-auto absolute bottom-[-15px] lg:bottom-[-20px] right-[-70px] lg:right-[-90px] hidden sm:block " />
					</div>
					<BigButton title={"Learn More"} isOutline={true} />
				</div>
			</div>
			<Image src={"/global/gift_card.png"} height={597} width={704} alt="" className="-mb-[170px] lg:-mb-0 lg:-ml-[100px] 2xl:-ml-[260px] xs:h-[400px] 2xl:h-[597px] w-auto relative z-10" />
		</div>
	);
}

export default GiftCardSection;
