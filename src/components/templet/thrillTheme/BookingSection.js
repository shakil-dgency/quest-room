import Image from "next/image";
import React from "react";
import light1 from "@/../../public/templet/thrillTheme/booking/ligh1.png";
import light from "@/../../public/templet/thrillTheme/booking/ligh.png";
import bookingSlot from "@/../../public/templet/thrillTheme/booking/bookingSlot.png";

function BookingSection() {
	return (
		<div className=" pt-[0px] sm:pt-[20px]  sm:overflow-x-hidden xl:overflow-x-visible">
			<div className="bg-[url('/templet/thrillTheme/booking/bookingbg.png')] bg-no-repeat bg-cover pb-20 relative ">
				<div className=" pt-16 sm:pt-[145px] ">
					<div className="relative z-20 max-w-[1236px] pb-20 px-8  mx-auto rounded-lg bg-[#0D130A] shadow-[0px_2px_50px_0px_rgba(210,0,0,0.2)] ">
						{/* <div className="relative flex justify-center "> */}
						<Image
							src={light1}
							alt=""
							height={196}
							width={176}
							className="h-[51px] sm:h-[120px] md:h-[150px] lg:h-[196px] w-auto absolute left-[50%] translate-x-[-50%] top-[-10px] sm:top-[-20px] lg:top-[-40px] animate-pulse"
						/>
						<Image
							src={light}
							alt=""
							height={639}
							width={1269}
							className="h-[168px] sm:h-[inherit] w-auto absolute z-20 top-[-70px] sm:top-[-130px] md:top-[-170px] lg:top-[-220px]  animate_siren"
						/>
						{/* </div> */}
						<h2 className="header_2 text-center pt-14 sm:pt-28 md:pt-[180px] pb-5">BEGIN YOUR JOURNEY TODAY!</h2>
						<Image src={bookingSlot} alt="" height={639} width={1269} className=" " />
					</div>
				</div>
				{/* <Image src={doc} alt="" height={1112} width={488} className="h-[70%] w-auto  absolute bottom-0 right-0 z-20   " /> */}
				<div className=" w-full h-[300px] bg-gradient-to-t from-[#0D130A] to-transparent absolute z-10 bottom-0"></div>
				<div className=" w-full h-[300px] bg-gradient-to-b from-[#0D130A] to-transparent absolute z-10 top-0"></div>
			</div>
		</div>
	);
}

export default BookingSection;
