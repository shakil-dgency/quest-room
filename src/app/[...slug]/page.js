import { notFound, redirect } from "next/navigation";
import dynamic from "next/dynamic";
const ProjectMinotour = dynamic(() => import("@/components/pages/ProjectMinotour/ProjectMinotour"));
const LosAngeles = dynamic(() => import("@/components/pages/LosAngeles/LosAngeles"));
const Plano = dynamic(() => import("@/components/pages/Dallas/Plano/Plano"));
const EventPage = dynamic(() => import("@/components/pages/Events/EventPage"));

// Dynamic imports for all games
const gamesMap = {
	"project-minotour": ProjectMinotour,
	// Add remaining 13 games here...
};

// Dynamic imports for locations
const locationsMap = {
	"los-angeles": LosAngeles,
	"plano": Plano,
	// Add remaining 3 locations here...
};

// Dynamic imports for events
const eventsMap = {
	"birthday-parties": EventPage,
	"family-fun-activity": EventPage,
	"team-building": EventPage,
	"corporate-events": EventPage,
	"bachelor-or-bachelorette-party": EventPage,
	"field-trip-or-school-events": EventPage,
	// Add remaining 3 events here...
};

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
	const slug = params?.slug; // slug will be an array of URL segments

	if (!slug || slug.length === 0) return notFound();

	if (slug.length === 1) {
		const Component = locationsMap[slug[0]];

		return Component ? (
			<Component />
		) : (
			<div className="h-[100vh] pt-5 pl-5">
				<h1>SubLocation: {decodeURIComponent(slug)} </h1>
			</div>
		);
	}

	if (slug.length === 2) {
		const [location, secondParam] = slug;

		const Component = gamesMap[secondParam] || locationsMap[secondParam] || eventsMap[secondParam];
		return Component ? (
			<Component param={secondParam} />
		) : (
			<div className="h-[100vh] pt-5 pl-5">
				<h1>
					SubLocation: {decodeURIComponent(secondParam)} in {decodeURIComponent(location)}
				</h1>
			</div>
		);
	}

	return notFound(); // If URL length exceeds 2, return 404
}
