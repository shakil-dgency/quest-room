import { notFound, redirect } from "next/navigation";
import dynamic from "next/dynamic";
const ProjectMinotour = dynamic(() => import("@/components/pages/ProjectMinotour/ProjectMinotour"));

export default function DynamicPage({ params }) {
	const  slug  = params && params.slug; // slug will be an array of URL segments


	if (!slug || slug.length === 0) return notFound();

	if (slug.length === 1) {
		return (
			<div className="h-[100vh] pt-5 pl-5">
				<h1>Location: {decodeURIComponent(slug[0])}</h1>
			</div>
		);
	}

	if (slug.length === 2) {
		const [location, secondParam] = slug;

		if (secondParam === "project-minotour") {
			return <ProjectMinotour />;
		}

		return (
			<div className="h-[100vh] pt-5 pl-5">
				<h1>SubLocation: {decodeURIComponent(secondParam)} in {decodeURIComponent(location)}</h1>
			</div>
		);
	}

	return notFound(); // If URL length exceeds 2, return 404
}
