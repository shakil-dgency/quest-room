import React from "react";

function BigButton({ title, isOutline,hrefOutline, hrefBasic }) {
	return (
		<>
			{isOutline ? (
				<a href={`${hrefOutline? hrefOutline : ""}`} className="bg-transparent border-[#D9D9D9] hover:border-[#FC7008] border-[2px]  duration-700 px-[35px] py-[18px] xs:py-[22px] rounded-md uppercase text-[18px] lg:text-[24px] leading-[1] text-[#D9D9D9] hover:text-[#FC7008] font-[600]">
					{title}
				</a>
			) : (
				<a href={`${hrefBasic? hrefBasic : ""}`} className="bg-[#FC7008] hover:bg-[#FD8F3A] duration-700 px-[35px] py-[18px] xs:py-[22px] rounded-md uppercase text-[18px] lg:text-[24px] leading-[1] text-[#030303] font-[600]">
					{title}
				</a>
			)}
		</>
	);
}

export default BigButton;
