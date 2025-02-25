"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { setLocation } from "@/lib/features/locationSlice";

const urlWithLocation = [
	{
		slug: "los-angeles",
		name: "LOS ANGELES",
	},
	{
		slug: "redondo-beach",
		name: "REDONDO BEACH, LA",
	},
	{
		slug: "hollywood",
		name: "HOLLYWOOD, LA",
	},
	{
		slug: "korea-town",
		name: "KOREA TOWN, LA",
	},
	{
		slug: "culver-city",
		name: "CULVER CITY, LA",
	},
	{
		slug: "dallas",
		name: "DALLAS",
	},
	{
		slug: "plano",
		name: "PLANO, TX",
	},
];

export default function LocationWatcher() {
	const dispatch = useDispatch();
	const pathname = usePathname();

	useEffect(() => {
        const locationName = urlWithLocation.filter((ele)=> {
            
           return pathname.includes(ele.slug)
            
        })
		

        if(locationName.length === 0 ){
            // console.log(locationName);
            
            dispatch(setLocation({location:"Choose Your Location",id:'home'}))
            return
        }

        // if url is like /los-angeles/hollywood
        if(locationName.length > 1){
            let secondValue = pathname.split('/').filter(Boolean)[1]

            const secondLocationName = locationName.filter(ele=> secondValue.includes(ele.slug))

            dispatch(setLocation( {location: secondLocationName[0]?.name, id: secondLocationName[0]?.slug.split('-').filter(Boolean)[0] }))

            return

        }
        
       

        dispatch(setLocation( {location: locationName[0]?.name, id: locationName[0]?.slug.split('-').filter(Boolean)[0] }))
		
	},[pathname]); // Runs whenever the URL changes

	return null; // This component doesn't render anything
}
