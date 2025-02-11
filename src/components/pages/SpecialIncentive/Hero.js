/* eslint-disable react/no-unescaped-entities */
import BigButton from "@/components/buttons/BigButton";
import React from "react";

function Hero({ video, title, description, titleTop, buttonBottom }) {
	return (
		<div className="">
			<div className={`${video?"":"bg-[url('/pages/SpecialIncentive/hero_bg.png')] bg-no-repeat bg-cover bg-[center_top]"}  relative `}>
				{video && <video
					poster={''} // Placeholder image before video loads
					// ref={videoRef}
					loading="lazy"
					autoPlay
					loop
					muted={true}
					playsInline
					className="h-full w-full object-cover absolute "
				>
					<source src={`${video}`} type="video/mp4" />
				</video>}
				<div className="g_container--theme">
					<div className="max-w-[1158px] mx-auto pt-[50px] sm:pt-[70px] lg:pt-[112px] pb-[130px] md:pb-[190px] flex flex-col items-center relative z-10">
						<p className="text-center text-[14px] sm:text-[16px] leading-[1.2] text-[#FC7008] mb-4 bg-[#66666640] px-[20px] xs:px-[35px] py-1 xs:py-2 rounded-full relative before:content-[''] before:absolute before:left-[45%] before:top-[100%]  before:border-[10px] before:border-solid before:border-[#66666640] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
							{titleTop}
						</p>
						<h1 className="text-center text-[#EDEDED]">{title}</h1>
						<p className="g_main-description text-[#D9D9D9] text-center max-w-[868px] mx-auto mt-2 pb-[44px]">
							{description}
						</p>
						<div className="flex flex-col-reverse sm:flex-row items-center gap-[25px]">
							<BigButton title="book games" />
							{video? <BigButton title="book events" isOutline={true} />:<div>
								<div className="flex items-center justify-between gap-5 border-[1px] border-dashed border-[#157009] rounded text-[18px] xs:text-[24px] text-[#F5F5F5] font-[600] uppercase px-[17px] py-[8px] bg-[radial-gradient(381.96%_141.42%_at_0%_0%,#000A19_0%,#001B43_50%,#000A19_100%)]">
									<span>Welcome15</span>
									<button className="text-[14px] xs:text-[16px] bg-[#157009] px-4 py-1.5 leading-[1] rounded-[2px]">COPY</button>
								</div>
							</div>}
						</div>
						<p className="text-[14px] sm:text-[16px] text-center text-[#BFBFBF] mt-[20px] max-w-[668px] mx-auto">
							{video && <span><span>323-880-0221</span><span className="text-[18px] mx-1.5">•</span></span>}{buttonBottom}
						</p>
					</div>
				</div>
				<div className={` ${video?"h-full bg-[#000A1980]":"h-[150px] bg-[linear-gradient(180deg,rgba(0,13,33,0)_21.39%,#000A19_100%)]"} w-full  absolute  bottom-0 z-0 `}></div>
			</div>
			<div className="px-2.5">
				<div className="relative z-10 max-w-[880px] py-[20px] sm:py-[35px] px-[20px] sm:px-[40px] mx-auto -mt-[80px] bg-[url('/pages/SpecialIncentive/state_bg.png')] bg-no-repeat bg-[length:100%_100%] flex flex-row gap-5 justify-between">
					<div className="text-center">
						<p className="text-[#D9D9D9] text-[14px] sm:text-[20px] md:text-[26px] font-[700]">Immersive</p>
						<p className="text-[#BFBFBF] text-[10px] sm:text-[14px] md:text-[20px] font-[400]">Themes and Puzzle</p>
					</div>
					<div className="text-center">
						<p className="text-[#D9D9D9] text-[14px] sm:text-[20px] md:text-[26px] font-[700]">50,000+</p>
						<p className="text-[#BFBFBF] text-[10px] sm:text-[14px] md:text-[20px] font-[400]">Adventurers Served</p>
					</div>
					<div className="text-center">
						<p className="text-[#D9D9D9] text-[14px] sm:text-[20px] md:text-[26px] font-[700]">10000+</p>
						<p className="text-[#BFBFBF] text-[10px] sm:text-[14px] md:text-[20px] font-[400]">Five Star Reviews</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
