import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

function QuickLinks({state}) {
  return (
    <div className={`${state.dallas && !state.los_angeles ? "pt-[45px] bg-[#001D4D] md:bg-transparent ":"bg-[#001D4D]  pt-[35px] pb-[40px]"} relative bg-opacity-[0.8] rounded-md px-2.5 lg:px-5 w-full`} >
						<p className="text-center text-[32px] font-[700] text-[#D9D9D9] mb-[28px] ">Quick Links</p>
						<div className="max-w-[800px] mx-auto text-[#A3A3A3] font_poppins text-[14px] font-[600] uppercase flex flex-wrap justify-center items-center gap-y-[5px] lg:gap-y-[10px] gap-x-[10px] lg:gap-x-5">
							<span className="cursor-pointer hover:text-[#fff]">Escape Rooms</span>
							<span className="text-[18px]">•</span>
							<span className="cursor-pointer hover:text-[#fff]">Events</span>
							<span className="text-[18px]">•</span>
							<span className="cursor-pointer hover:text-[#fff]">Gift Cards</span>
							<span className="text-[18px]">•</span>
							<span className="cursor-pointer hover:text-[#fff]">Schedule</span>
							<span className="text-[18px]">•</span>
							<span className="cursor-pointer hover:text-[#fff]">promotions</span>
							<span className="text-[18px]">•</span>
							<span className="cursor-pointer hover:text-[#fff]">pricing</span>
							<span className="text-[18px]">•</span>
							<span className="cursor-pointer hover:text-[#fff]">Faq</span>
							<span className="text-[18px]">•</span>
							<span className="cursor-pointer hover:text-[#fff]">About us</span>
							<span className="text-[18px]">•</span>
							<span className="cursor-pointer hover:text-[#fff]">in the news</span>
							<span className="text-[18px]">•</span>
							<span className="cursor-pointer hover:text-[#fff]">Blog</span>
							<span className="text-[18px]">•</span>
							<span className="cursor-pointer hover:text-[#fff]">Safety</span>
						</div>

						<div className={`${state.dallas? !state.los_angeles?"mt-[75px]": "mt-[75px] md:absolute bottom-14":"mt-[75px]"} w-full left-0 `}>
							<div className="border-b-[1px] border-b-[#00318077] mx-4 flex flex-col items-center">
								<p className=" text-[18px] md:text-[28px] font-[700] text-[#A3A3A3]">FOLLOW US ON SOCIAL</p>
								<div className="flex items-center gap-2 md:gap-4 pt-[12px] pb-[26px]">
									<FaFacebookSquare className="text-[25px] md:text-[40px] text-[#A3A3A3]" />
									<FaInstagramSquare className="text-[25px] md:text-[40px] text-[#A3A3A3]" />
									<FaYoutubeSquare className="text-[25px] md:text-[40px] text-[#A3A3A3]" />
								</div>
							</div>
							
							<div className="mt-[25px] flex flex-col items-center">
								<p className="text-[#808080] text-[14px]">© {new Date().getFullYear()} QUESTRoom | All Rights Reserved</p>
								<div className="pt-[2px]  text-[#545454] text-[12px] sm:text-[14px] flex justify-center items-center gap-1.5 sm:gap-3">
									<span className="cursor-pointer hover:text-[#fff]">Privacy Policy</span>
									<span className="text-[18px]">•</span>
									<span className="cursor-pointer hover:text-[#fff]">Terms of Services</span>
									<span className="text-[18px]">•</span>
									<span className="cursor-pointer hover:text-[#fff]">Sitemap</span>
								</div>
							</div>
						</div>
					</div>
  )
}

export default QuickLinks