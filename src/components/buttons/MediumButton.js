import React from "react";

function MediumButton({title}) {
	return (
		<button className="bg-[#FC7008] hover:bg-[#FD8F3A] duration-700 px-[35px] py-[18px] rounded-md uppercase text-[18px] leading-[1] text-[#030303] font-[600]">
			{title}
		</button>
	);
}

export default MediumButton;
