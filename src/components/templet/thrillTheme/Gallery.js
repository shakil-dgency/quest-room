"use client";
import React from "react";
// import gallery1 from "@/public/templet/thrillTheme/gallery1.png";
// import gallery2 from "../../../public/templet/thrillTheme/gallery/gallery2.jpeg";
// import gallery3 from "../../../public/templet/thrillTheme/gallery/gallery3.jpeg";
// import gallery4 from "../../../public/templet/thrillTheme/gallery/gallery4.jpeg";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper/modules";

function Gallery({id}) {

	return (
		<div className=" pt-10 pb-20">
			{id !== 'los' && <h2 className="g_container--theme font_rusolie text-[#EDEDED] pb-[30px] md:pb-[42px]">Photo Gallery</h2>}

			<Swiper
				// slidesPerView={2.5}
				// spaceBetween={40}
				// centeredSlides={true}
				freeMode={true}

				// loop={true}
				// speed={1000}
				// navigation={true}
				// modules={[ Navigation]}
				slidesPerView={1.3}
				spaceBetween={10}
				centeredSlides={true}
				loop={true}
				speed={1000}
				navigation={true}
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				modules={[Navigation, Pagination]}
				className="thrillTempletGallerySwiper thrillTempletSwiper "
				style={{}}
				breakpoints={{
					1100: {
						slidesPerView: 2.4,
						spaceBetween: 30,
					},
				}}
			>
				<SwiperSlide>
					<Image
						src="/templet/thrillTheme/gallery/gallery1.jpg"
						alt="gallery image"
						height={636}
						width={954}
						quality={60}
						className="w-full h-full object-cover rounded-xl mix-blend-luminosity"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src="/templet/thrillTheme/gallery/gallery2.jpg"
						alt="gallery image"
						height={636}
						width={954}
						quality={60}
						className="w-full h-full object-cover rounded-xl mix-blend-luminosity"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src="/templet/thrillTheme/gallery/gallery3.jpg"
						alt="gallery image"
						height={636}
						width={954}
						quality={60}
						className="w-full h-full  object-cover rounded-xl mix-blend-luminosity"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src="/templet/thrillTheme/gallery/gallery1.jpg"
						alt="gallery image"
						height={636}
						width={954}
						quality={60}
						loading="lazy"
						className="w-full h-full object-cover rounded-xl mix-blend-luminosity"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Image
						src="/templet/thrillTheme/gallery/gallery4.jpg"
						alt="gallery image"
						height={636}
						width={954}
						quality={60}
						priority={true}
						className="w-full h-full object-cover rounded-xl mix-blend-luminosity"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Gallery;
