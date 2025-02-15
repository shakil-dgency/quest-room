import { notFound, redirect } from "next/navigation";
import dynamic from "next/dynamic";
import LosAngeles from "@/components/pages/LosAngeles/LosAngeles";
import Plano from "@/components/pages/Dallas/Plano/Plano";
const ProjectMinotour = dynamic(() => import("@/components/pages/ProjectMinotour/ProjectMinotour"));




export async function generateStaticParams() {
    return [
        { slug: ["los-angeles"] },
        { slug: ["dallas"] },
        { slug: ["los-angeles", "hollywood"] },
        { slug: ["dallas", "plano"] },
        { slug: ["hollywood", "project-minotour"] },
    ];
}

export const revalidate = 60; // Revalidate every 60 seconds (ISR)



export default function DynamicPage({ params }) {
	const  slug  = params?.slug; // slug will be an array of URL segments

	console.log(slug[0]);
	


	if (!slug || slug.length === 0) return notFound();

	if (slug.length === 1) {


		if (slug[0] === "los-angeles") {
			return <LosAngeles />;
		}

		return (
			<div className="h-[100vh] pt-5 pl-5">
				<h1>SubLocation: {decodeURIComponent(slug)} </h1>
			</div>
		);
	}

	if (slug.length === 2) {
		const [location, secondParam] = slug;

		if (secondParam === "project-minotour") {
			return <ProjectMinotour />;
		}

		if (secondParam === "plano") {
			return <Plano/>;
		}

		return (
			<div className="h-[100vh] pt-5 pl-5">
				<h1>SubLocation: {decodeURIComponent(secondParam)} in {decodeURIComponent(location)}</h1>
			</div>
		);
	}

	return notFound(); // If URL length exceeds 2, return 404
}
