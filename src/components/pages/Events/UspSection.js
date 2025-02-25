import Image from "next/image";
import React from "react";

function UspSection() {
	return (
		<div className="g_container--theme grid xs:grid-cols-2 md:grid-cols-4 gap-5 pt-5">
			{[...Array(4)].map((item, i) => (
				<div
					key={i}
					className="rounded-[14px] overflow-hidden border-[1px] border-[#ffffff20] bg-[linear-gradient(74deg,rgba(255,255,255,0.02)_4.19%,rgba(255,255,255,0.02)_99.5%)] shadow-[2px_4px_30px_rgba(0,0,0,0.10)] backdrop-blur-[35px] text-center "
				>
					<div className="bg-[url('/pages/Event/usp_bg.png')] bg-no-repeat bg-[length:100%_100%] flex flex-col items-center px-2.5 xl:px-[22px] py-[30px] xl:py-[55px] relative z-10">
						<Image src={"/pages/Event/usp_icon1.svg"} height={67} width={48} alt="" className="mb-[30px]" />
						<p className="subtitle_S text-[#D9D9D9] pb-2.5">Unique & immersive escape rooms</p>
						<p className="text-[#BFBFBF] body-paragraph_S">
							Step into cinematic, story-driven escape rooms that transport you to thrilling, adventure-packed worlds.
						</p>
					</div>
				</div>
			))}
		</div>
	);
}

export default UspSection;
