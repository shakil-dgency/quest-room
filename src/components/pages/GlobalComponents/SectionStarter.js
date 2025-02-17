import React from "react";

function SectionStarter({ title1, title, description }) {
	return (
		<div className="max-w-[1330px] mx-auto pb-[50px] px-2.5">
			{title1 ? <h1 className="text-[#EDEDED] text-center">{title1}</h1> : <h2 className="text-[#EDEDED] text-center">{title}</h2>}

			<p className=" body-paragraph_L pt-2.5 text-[#D9D9D9] text-center max-w-[880px] mx-auto">{description}</p>
		</div>
	);
}

export default SectionStarter;
