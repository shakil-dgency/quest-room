import Image from "next/image";
import React from "react";
import mail from "@/../../public/templet/thrillTheme/footer/mail.svg";
import location from "@/../../public/templet/thrillTheme/footer/location.svg";
import call from "@/../../public/templet/thrillTheme/footer/call.svg";
import direction from "@/../../public/templet/thrillTheme/footer/direction.svg";
import parking from "@/../../public/templet/thrillTheme/footer/parking.svg";
import parkingInfo from "@/../../public/footer/parkingInfo.svg";
import map1 from "@/../../public/templet/thrillTheme/footer/map1.png";
import location1 from "@/../../public/templet/thrillTheme/footer/location1.png";
import star from "@/../../public/templet/thrillTheme/star.svg";
import yelp from "@/../../public/footer/yelp.svg";
import tripAdvisor from "@/../../public/footer/trip_advisor.svg";

function FooterCard() {
	return (
		<div className="max-w-[310px] mx-auto bg-[#00112C] border-[#062352] border-[1px] rounded-[10px] overflow-hidden">
			<div className="relative">
				<Image src={location1} alt="" height={287} width={571} className="h-[165px] w-full object-cover" />
				<div className="w-full flex justify-between px-2.5 absolute bottom-3 z-10">
					<div>
						<Image src={star} alt="" height={16} width={110} className="h-[11px] w-auto" />
						<p className="text-[11px] text-[#ffffff] pt-1 ">5.0 based on 755 reviews</p>
					</div>
					<div className="flex gap-2.5">
						<Image src={yelp} alt="" height={30} width={30} className=" " />
						<Image src={tripAdvisor} alt="" height={30} width={30} className="" />
					</div>
				</div>
				<div className="absolute z-0 bottom-0 h-[40%] w-full bg-gradient-to-b from-transparent from-20% to-[#000000d5] to-80% "></div>
			</div>
			<div className=" px-3 sm:px-[27px] pt-[25px] pb-[30px] sm:pb-[24px]  ">
				<div className="text-[#BFBFBF]">
					<p className="text-[#A3A3A3] text-[14px] pb-2.5">04 Games</p>
					<p className="text-[24px] font-[700] uppercase leading-[1]">Redondo Beach</p>
					<div className="mt-[20px] space-y-[14px]">
						<div className="group flex gap-2.5 items-center text-[14px] ">
							<Image src={mail} alt="" height={10} width={13} className="flex-none object-cover" />
							<a href="mailto:sbg@questroom.com" className="group-hover:text-[#0085FF]">
								sbg@questroom.com
							</a>
						</div>
						<div className=" group flex gap-2.5 items-start text-[14px]">
							<Image src={location} alt="" height={15} width={11} className="flex-none object-cover mt-[2px]" />
							<a href="https://maps.app.goo.gl/SLEhWwkZK8z7bHSy7" target="__blank" className="group-hover:text-[#0085FF]">
								1815 Hawthorne Blvd, Redondo Beach, CA 90278
							</a>
						</div>
						<div className="group flex gap-2.5 items-center text-[14px]">
							<Image src={call} alt="" height={11} width={11} className="flex-none object-cover" />
							<a href="tel:323-307-2090" className="group-hover:text-[#0085FF]">
								323-307-2090
							</a>
						</div>
						<div className="flex justify-center pt-5">
							<a href="#" className="text-[14px] uppercase text-[#00112C] font-[600] bg-[#FC7008] flex gap-2.5 py-2.5 px-5 rounded-[6px]">
								<Image src={direction} alt="" height={20} width={20} className="w-[20px] h-auto " />
								<span>Get Directions</span>
							</a>
						</div>
						<div className="flex justify-center">
							<a href="#" className="relative text-[14px] uppercase text-[#BFBFBF] font-[600] border-[1px] border-[#BFBFBF] flex gap-2.5 py-2.5 px-5 rounded-[6px]">
								<Image src={parking} alt="" height={20} width={20} className="w-[20px] h-auto " />
								<span>Parking instructions</span>
								<Image src={parkingInfo} alt="" height={20} width={20} className="w-[15px] h-auto absolute -top-1.5 -right-1.5" />
							</a>
						</div>

						
					</div>
				</div>
				{/* <a href="https://maps.app.goo.gl/SLEhWwkZK8z7bHSy7" target="__blank" className="w-full">
					<Image src={map1} alt="" height={250} width={240} className="pt-4 sm:pt-0 h-[180px] sm:h-[250px] w-full object-cover rounded" />
				</a> */}
			</div>
		</div>
	);
}

export default FooterCard;
