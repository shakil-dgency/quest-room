import React from "react";

function SectionStarter({ title1, title, description, text_shadow }) {
	return (
		<div className="max-w-[1330px] mx-auto pb-[50px] px-2.5">
			{title1 ? (
				<h1 className={`text-text-200 text-center ${text_shadow ? text_shadow : "[text-shadow:0px_0px_120px_theme(colors.accent.300/60%)]"}`}>
					{title1}
				</h1>
			) : (
				<h2 className={`text-text-200 text-center ${text_shadow ? text_shadow : "[text-shadow:0px_0px_120px_theme(colors.accent.300/60%)]"}`}>{title}</h2>
			)}

			<p className=" body-paragraph_L pt-2.5 text-text-200 text-center max-w-[880px] mx-auto">{description}</p>
		</div>
	);
}

export default SectionStarter;
