import Image from "next/image";
import React from "react";

function UspSection() {
	return (
		<div className="g_container--theme grid grid-cols-4 gap-5 pt-5">
			{[...Array(4)].map((item, i) => (
				<div key={i} className="bg-[url('/pages/Event/usp_bg.png')] bg-cover rounded-2xl flex flex-col items-center px-[22px] py-[55px] text-center border-[1px] border-[#0085FF20]">
					<Image src={"/pages/Event/usp_icon1.svg"} height={67} width={48} alt="" className="mb-[30px]" />
					<p className="subtitle_S text-[#D9D9D9] pb-2.5">Unique & immersive escape rooms</p>
					<p className="text-[#BFBFBF] body-paragraph_S">Step into cinematic, story-driven escape rooms that transport you to thrilling, adventure-packed worlds.</p>
				</div>
			))}
		</div>
	);
}

export default UspSection;
