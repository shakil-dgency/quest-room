export const handleToggleButton = (event) => {
	const button = event.target.closest("[data-toggle]");
	if (!button) return;

	console.log(button);

	const target = button.nextElementSibling; // Target is the next sibling element
	if (target) {
		target.classList.toggle("hidden");
	}
};

//Camel case converter

export function toCamelCase(str) {
	return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
