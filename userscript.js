setInterval(() => {

	// make sure our stylesheet is the lowest, which means it has the highest priority
	const userStyle = document.querySelector("style[data-source='User JavaScript and CSS extension']");
	if (userStyle && userStyle.parentElement.lastElementChild !== userStyle) {
		userStyle.parentElement.appendChild(userStyle);
	}

	// adds some data to powerup preview images, and removes the src attr so we can do some custom styling  
	const previewElements = document.querySelectorAll(".directory-individual-listing .directory-listing-content img");
	for (const previewElement of previewElements) {
		if (previewElement.naturalWidth && previewElement.hasAttribute("src")) {
			previewElement.style.setProperty("--ratio", `${previewElement.naturalHeight / previewElement.naturalWidth}`);
			previewElement.style.setProperty("--img", `url("${previewElement.getAttribute("src")}")`);
			previewElement.removeAttribute("src");
		}
	}


	// fixes a trello bug that causes calendar days to sometimes not be openable 
	function expandCalendarDay(event) {
		if (event.target) {
			const day = event.target.closest(".calendar-day");
			if (day) {
				const activeDays = document.querySelectorAll(".calendar-day.active");
				for (const activeDay of activeDays) activeDay.classList.remove("active");

				day.classList.add("active");
			}

			const closeButton = event.target.closest(".close-button");
			if (closeButton) day.classList.remove("active");
		}
	}

	document.body.removeEventListener("click", expandCalendarDay);
	document.body.addEventListener("click", expandCalendarDay);

}, 100);