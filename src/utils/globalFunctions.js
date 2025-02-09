export const handleToggleButton = (event) => {
	const button = event.target.closest("[data-toggle]");
	if (!button) return;

    console.log(button);
    

	const target = button.nextElementSibling; // Target is the next sibling element
	if (target) {
		target.classList.toggle("hidden");
		
	}
};
