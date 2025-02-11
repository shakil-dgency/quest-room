import Image from "next/image";
import React from "react";
import location1 from "@/../../public/templet/thrillTheme/footer/location1.png";
import location2 from "@/../../public/templet/thrillTheme/footer/location2.png";
import location3 from "@/../../public/templet/thrillTheme/footer/location3.png";
import location4 from "@/../../public/templet/thrillTheme/footer/location4.png";
import LA from "@/../../public/templet/thrillTheme/navBar/LA.png";
import dallas from "@/../../public/templet/thrillTheme/navBar/dallas.png";
import dallas_mall from "@/../../public/templet/thrillTheme/navBar/dallas_mall.png";
import Link from "next/link";

function LocationCard({ isLocationOpen, handleLocationBarClose }) {
	return (
		<>
			<div
				id="locationbar"
				className={`bg-[url('/NavBar/nav_location_card.png')] bg-no-repeat bg-[length:auto_100%] w-full h-[100vh] overflow-y-auto pb-28 xs:pb-20 bg-navcard_bg backdrop-blur-[5px] font_poppins fixed z-50 duration-300 ${
					isLocationOpen ? "top-0" : "-top-[200%] "
				}  `}
			>
				<div className="relative">
					<p
						onClick={handleLocationBarClose}
						className="text-white text-lg xs:text-2xl absolute right-4 xs:right-6 top-3 rotate-45 border-[1px] px-2 rounded-full cursor-pointer"
					>
						+
					</p>
				</div>
				<p className="text-[28px] xs:text-[36px] md:text-[48px] leading-10 uppercase font-[700] text-[#FC7008] text-center pt-14 pb-[20px] xs:pb-[30px]">
					Choose your location
				</p>

				<div className=" md:grid  md:justify-items-start md:grid-cols-2 gap-y-16 gap-x-5 lg:gap-x-[88px] mx-2.5">
					<div className="max-w-[455px] mx-auto md:mx-[inherit]  lg:justify-self-end pb-16 md:pb-0 ">
						<Link href={"/los-angeles"}>
							<div className="group h-[200px] xs:h-[250px] relative rounded-lg overflow-hidden ">
								<Image src={LA} alt="" height={250} width={457} className="h-full w-full object-cover group-hover:scale-110 duration-700 " />
								<div className="h-full w-full absolute top-0 bg-gradient-to-t from-[#0B1D4B] to-transparent mix-blend-multiply"></div>
								<div className="flex items-center gap-2.5 absolute bottom-[30px] lg:bottom-[17px] left-[20px]">
									<svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 15 22" fill="none">
										<path
											d="M7.49958 0.858398C3.63147 0.858398 0.484375 4.00549 0.484375 7.87361C0.484375 9.03481 0.774697 10.1862 1.32661 11.2074L7.11595 21.6779C7.19303 21.8175 7.33989 21.904 7.49958 21.904C7.65927 21.904 7.80614 21.8175 7.88321 21.6779L13.6747 11.2039C14.2245 10.1862 14.5148 9.03477 14.5148 7.87357C14.5148 4.00549 11.3677 0.858398 7.49958 0.858398ZM7.49958 11.3812C5.56553 11.3812 3.992 9.80766 3.992 7.87361C3.992 5.93955 5.56553 4.36602 7.49958 4.36602C9.43364 4.36602 11.0072 5.93955 11.0072 7.87361C11.0072 9.80766 9.43364 11.3812 7.49958 11.3812Z"
											fill="white"
										/>
									</svg>
									<p className="text-[24px] font-[700] uppercase text-[#fff]">Los Angeles, CA</p>
								</div>
								<p className="text-[12px] xs:text-[11px] mt-[2px] xs:mt-0 text-white absolute bottom-4 lg:bottom-[20px] left-[45px] lg:left-[inherit] lg:right-[20px]">
									16 Games | 4 Locations{" "}
								</p>
							</div>
						</Link>
						<div className="sm:pl-4 mt-[25px] flex flex-col space-y-[15px]">
							<Link href={"/los-angeles/redondo-beach"}>
								<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#00122E] hover:bg-[#001D4D] p-4 sm:p-2.5 rounded-lg">
									<div className="relative h-[78px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
										<Image
											src={location1}
											alt=""
											height={78}
											width={138}
											className="h-[78px] w-full sm:w-auto object-cover rounded-lg group-hover:scale-110 duration-700"
										/>
										<div className="h-full w-full absolute top-0 bg-gradient-to-t from-[#0B1D4B] to-transparent mix-blend-multiply"></div>
										<p className="absolute bottom-2.5 right-2 text-white text-[12px] xs:text-[11px]">4 games</p>
									</div>
									<div>
										<p className="text-[18px] font-[600] text-[#D9D9D9]">Redondo Beach</p>
										<p className="text-[14px] text-[#A3A3A3] pr-2">170 S. Western Ave, Los Angeles, CA 90004</p>
									</div>
								</div>
							</Link>
							<Link href={"/los-angeles/hollywood"}>
								<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#00122E] hover:bg-[#001D4D] p-4 sm:p-2.5 rounded-lg">
									<div className="relative h-[78px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
										<Image
											src={location2}
											alt=""
											height={78}
											width={138}
											className="h-[78px] w-full sm:w-auto object-cover rounded-lg group-hover:scale-110 duration-700"
										/>
										<div className="h-full w-full absolute top-0 bg-gradient-to-t from-[#0B1D4B] to-transparent mix-blend-multiply"></div>
										<p className="absolute bottom-2.5 right-2 text-white text-[12px] xs:text-[11px]">5 games</p>
									</div>
									<div>
										<p className="text-[18px] font-[600] text-[#D9D9D9]">Hollywood</p>
										<p className="text-[14px] text-[#A3A3A3] pr-2">5517 Santa Monica Blvd, Los Angeles, CA 90038</p>
									</div>
								</div>
							</Link>
							<Link href={"/los-angeles/korea-town"}>
								<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#00122E] hover:bg-[#001D4D] p-4 sm:p-2.5 rounded-lg">
									<div className="relative h-[78px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
										<Image
											src={location3}
											alt=""
											height={78}
											width={138}
											className="h-[78px] w-full sm:w-auto object-cover rounded-lg group-hover:scale-110 duration-700"
										/>
										<div className="h-full w-full absolute top-0 bg-gradient-to-t from-[#0B1D4B] to-transparent mix-blend-multiply"></div>
										<p className="absolute bottom-2.5 right-2 text-white text-[12px] xs:text-[11px]">4 games</p>
									</div>
									<div>
										<p className="text-[18px] font-[600] text-[#D9D9D9]">Korea Town</p>
										<p className="text-[14px] text-[#A3A3A3] pr-2">170 S. Western Ave, Los Angeles, CA 90004</p>
									</div>
								</div>
							</Link>
							<Link href={"/los-angeles/culver-city"}>
								<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#00122E] hover:bg-[#001D4D] p-4 sm:p-2.5 rounded-lg">
									<div className="relative h-[78px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
										<Image
											src={location4}
											alt=""
											height={78}
											width={138}
											className="h-[78px] w-full sm:w-auto object-cover rounded-lg group-hover:scale-110 duration-700"
										/>
										<div className="h-full w-full absolute top-0 bg-gradient-to-t from-[#0B1D4B] to-transparent mix-blend-multiply"></div>
										<p className="absolute bottom-2.5 right-2 text-white text-[12px] xs:text-[11px]">3 games</p>
									</div>
									<div>
										<p className="text-[18px] font-[600] text-[#D9D9D9]">Culver City</p>
										<p className="text-[14px] text-[#A3A3A3] pr-2">5235 W Adams Blvd, Los Angeles, CA 90016</p>
									</div>
								</div>
							</Link>
						</div>
					</div>
					<div className="max-w-[455px] mx-auto md:mx-[inherit] ">
						<Link href={"/dallas"}>
							<div className="group h-[200px] xs:h-[250px] relative rounded-lg overflow-hidden ">
								<Image src={dallas} alt="" height={250} width={457} className="h-full w-full object-cover group-hover:scale-110 duration-700" />
								<div className="h-full w-full absolute top-0 bg-gradient-to-t from-[#0B1D4B] to-transparent mix-blend-multiply"></div>
								<div className="flex items-center gap-2.5 absolute bottom-[30px] lg:bottom-[17px] left-[20px]">
									<svg xmlns="http://www.w3.org/2000/svg" width="15" height="22" viewBox="0 0 15 22" fill="none">
										<path
											d="M7.49958 0.858398C3.63147 0.858398 0.484375 4.00549 0.484375 7.87361C0.484375 9.03481 0.774697 10.1862 1.32661 11.2074L7.11595 21.6779C7.19303 21.8175 7.33989 21.904 7.49958 21.904C7.65927 21.904 7.80614 21.8175 7.88321 21.6779L13.6747 11.2039C14.2245 10.1862 14.5148 9.03477 14.5148 7.87357C14.5148 4.00549 11.3677 0.858398 7.49958 0.858398ZM7.49958 11.3812C5.56553 11.3812 3.992 9.80766 3.992 7.87361C3.992 5.93955 5.56553 4.36602 7.49958 4.36602C9.43364 4.36602 11.0072 5.93955 11.0072 7.87361C11.0072 9.80766 9.43364 11.3812 7.49958 11.3812Z"
											fill="white"
										/>
									</svg>
									<p className="text-[24px] font-[700] uppercase text-[#fff]">Dallas, TX</p>
								</div>
								<p className="text-[12px] xs:text-[11px] mt-[2px] xs:mt-0 text-white absolute bottom-4 lg:bottom-[20px] left-[45px] lg:left-[inherit] lg:right-[20px]">
									6 Games | 1 Location{" "}
								</p>
							</div>
						</Link>
						<Link href={"/dallas/plano"}>
							<div className="sm:pl-4 mt-[25px] space-y-[15px]">
								<div className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 bg-[#00122E] hover:bg-[#001D4D] p-4 sm:p-2.5 rounded-lg">
									<div className="relative h-[78px] w-full sm:w-auto rounded-lg flex-none overflow-hidden">
										<Image
											src={dallas_mall}
											alt=""
											height={78}
											width={138}
											className="h-[78px] w-full sm:w-auto object-cover rounded-lg group-hover:scale-110 duration-700"
										/>
										<div className="h-full w-full absolute top-0 bg-gradient-to-t from-[#0B1D4B] to-transparent mix-blend-multiply"></div>
										<p className="absolute bottom-2.5 right-2 text-white text-[12px] xs:text-[11px]">6 games</p>
									</div>
									<div>
										<p className="text-[18px] font-[600] text-[#D9D9D9]">Plano</p>
										<p className="text-[14px] text-[#A3A3A3] pr-2">3420 K Ave Unit 309, Plano, TX 75074</p>
									</div>
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default LocationCard;
