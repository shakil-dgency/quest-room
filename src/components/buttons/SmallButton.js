import React from "react";

function SmallButton({ children, isOutline }) {
	return (
		<>
			{isOutline ? (
				<button className="bg-transparent  duration-700 border-[2px] border-[#D9D9D9] hover:border-[#FC7008] flex gap-2.5 items-center px-[20px] 3xs:px-[30px] py-[10px] rounded-[2px] uppercase text-[16px] leading-[1] text-[#D9D9D9] hover:text-[#FC7008] font-[600]">{children}</button>
			) : (
				<button className="bg-[#FC7008] hover:bg-[#FD8F3A] duration-700 flex gap-2.5 items-center px-[20px] 3xs:px-[30px] py-[10px] rounded-[2px] uppercase text-[16px] leading-[1] text-[#030303] font-[600]">
					{children}
				</button>
			)}
		</>
	);
}

export default SmallButton;
