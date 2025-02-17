import SmallButton from "@/components/buttons/SmallButton";
import React from "react";

function Form({ pricingState,setPricingState }) {
    const handleClose = ()=>{
        setPricingState(null)
    }
	return (
		<div className={`${pricingState?"block":"hidden"} bg-[#131313] bg-opacity-[0.9] h-full w-full absolute z-20 top-0 left-0`} >
			<div className=" bg-[url('/pages/Event/form_bg.png')] bg-[length:100%_100%] max-w-[900px] px-[100px] pt-[60px] pb-[65px] sticky top-[50%] left-[50%] translate-y-[-45%] translate-x-[-50%] z-20 ">
                <p onClick={handleClose} className="flex justify-center items-center cursor-pointer text-[#EDEDED] rotate-45 -mt-5 border rounded-full h-[20px] w-[20px] text-[18px] absolute right-14">+</p>
				<p className="subtitle_S text-[#EDEDED]">Your Estimated Quote </p>
				<p className="text-[14px] text-white/80">
					For <b>Group Size:</b> {pricingState?.teamSize} Person | <b>Number of Games:</b> {pricingState?.gameSelect.length}
				</p>
				<div className="mt-[27px] mb-[30px] ">
					<span className="text-[64px] leading-[1] font-[600] text-[#D9D9D9]">${pricingState?.totalPrice}</span>
					<span className="subtitle_S text-[#A3A3A3] ml-2.5">${pricingState?.totalValue} value</span>
				</div>
				<p className="subtitle_L text-[#D9D9D9]">Submit Your Reservation Request</p>
				<p className="body-paragraph_S text-white/80 mt-2.5">
					Our team Email/Call you to confirm your reservation request and send invoice to collect the payment. Your reservation will be confirmed upon
					availability and the moment you pay the invoice.
				</p>
				<div className="mt-[28px] text-[#EDEDED]">
					<form action="" className="space-y-[25px]">
						<input
							type="text"
							placeholder="Your Name"
							className="w-full text-[15px] px-[14px] py-3 leading-[1] outline-none rounded-[5px] border border-white/20 bg-white/5"
						/>
						<div className="flex gap-[24px]">
							<input
								type="number"
                                placeholder="Phone Number"
								className="w-full text-[15px] px-[14px] py-3 leading-[1] outline-none rounded-[5px] border border-white/20 bg-white/5"
							/>
							<input
								type="email"
                                placeholder="Email"
								className="w-full text-[15px] px-[14px] py-3 leading-[1] outline-none rounded-[5px] border border-white/20 bg-white/5"
							/>
						</div>
						<div className="flex gap-[24px]">
							<input
								type="date"
								className="w-full text-[15px] px-[14px] py-3 leading-[1] outline-none rounded-[5px] border border-white/20 bg-white/5"
							/>
							<input
								type="time"
								className="w-full text-[15px] px-[14px] py-3 leading-[1] outline-none rounded-[5px] border border-white/20 bg-white/5"
							/>
						</div>
						<textarea
							placeholder="Message"
                            rows="6"
                            cols="20"
							className="w-full text-[15px] px-[14px] py-3 leading-[1] outline-none rounded-[5px] border border-white/20 bg-white/5"
						/>
						<div className="flex justify-end">
							<SmallButton>submit</SmallButton>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Form;
