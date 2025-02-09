import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import GameCard from "./GameCard";

function GameCardWithCarusel({ data }) {
	return (
		<Swiper
			slidesPerView={1.1}
			spaceBetween={20}
			loop={false}
			speed={1000}
			pagination={{
				dynamicBullets: true,
				clickable: true,
			}}
			navigation={true}
			modules={[Pagination, Navigation]}
			className="thrillGameSwiper thrillTempletSwiper "
			style={{}}
			breakpoints={{
				520: {
					slidesPerView: 1.5,
					spaceBetween: 30,
				},
				740: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				905: {
					slidesPerView: 2.5,
					spaceBetween: 20,
				},
				1088: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
				1365: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
			}}
		>
			{data?.map((item, i) => (
				<SwiperSlide key={i}>
					<GameCard game={item} />
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export default GameCardWithCarusel;
