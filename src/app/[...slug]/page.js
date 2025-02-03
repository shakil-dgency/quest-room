import ProjectMinotour from "@/components/pages/ProjectMinotour/ProjectMinotour";
import { notFound, redirect } from "next/navigation";

export default async function DynamicPage({ params }) {
	const { slug } = await params; // slug will be an array of URL segments

	// console.log(slug);

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
