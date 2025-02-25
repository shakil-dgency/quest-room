"use client"
import { filterByLocation } from "@/lib/features/gameSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const mejorcity = ["los angeles","dallas"];

const LocationFilter = () => {
	const dispatch = useDispatch();
    const {location} = useSelector((state)=> state.location)

	useEffect(() => {

        //Check if the location is mejor city or not
		const isMejorCity = mejorcity.filter((city)=> location?.toLowerCase().includes(city?.toLowerCase()))

		if(isMejorCity.length !== 0 ){
			dispatch(filterByLocation({majorCity: location}))
		}else{
			dispatch(filterByLocation({subCity: location}))
		}
        
	}, [ location]);

	return null; // This component doesn't render anything, it just triggers filtering
};

export default LocationFilter;