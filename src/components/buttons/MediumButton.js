import React from "react";

function MediumButton({ title, isOutline }) {
	return (
		<>
			{isOutline ? (
				<button className="bg-transparent border-[#D9D9D9] hover:border-[#FC7008] border-[1px] duration-700 px-[35px] py-[18px] rounded-md uppercase text-[18px] leading-[1] text-[#D9D9D9] hover:text-[#FC7008] font-[600]">
					{title}
				</button>
			) : (
				<button className="bg-[#FC7008] hover:bg-[#FD8F3A] duration-700 px-[35px] py-[18px] rounded-md uppercase text-[18px] leading-[1] text-[#030303] font-[600]">
					{title}
				</button>
			)}
		</>
	);
}

export default MediumButton;
