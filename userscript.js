let maxListColumns = 0;

setInterval(() => {

	// make sure our stylesheet is the lowest, which means it has the highest priority
	const userStyle = document.querySelector("style[data-source='User JavaScript and CSS extension']");
	if (userStyle && userStyle.parentElement.lastElementChild !== userStyle) {
		userStyle.parentElement.appendChild(userStyle);
	}

	// adds some data to powerup preview images, and removes the src attr so we can do some custom styling  
	const previewElements = document.querySelectorAll(`
		.directory-individual-listing .directory-listing-content img,
		.attachment-image-preview
	`);
	for (const previewElement of previewElements) {
		if (previewElement.naturalWidth && previewElement.hasAttribute("src")) {
			previewElement.style.setProperty("--ratio", `${previewElement.naturalHeight / previewElement.naturalWidth}`);
			previewElement.style.setProperty("--img", `url("${previewElement.getAttribute("src")}")`);
			previewElement.removeAttribute("src");
		}
	}

	document.body.removeEventListener("click", expandCalendarDay);
	document.body.addEventListener("click", expandCalendarDay);

	addExpandListButton();

	const negativeListSpace = document.querySelector(".board-wrapper.is-show-menu") ? 339 : 0;
	const newMaxListColumns = Math.floor((window.outerWidth - negativeListSpace) / 300);
	if (maxListColumns !== newMaxListColumns) {
		document.documentElement.style.setProperty("--max-list-columns", maxListColumns = newMaxListColumns);
	}

}, 100);

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


// adds a button for expanding a list to fill all available space (makes sorting cards easier)
function addExpandListButton() {

	const listExpandButton = document.querySelector(".list-expand-button");
	if (listExpandButton) return;

	const listSubscribeButton = document.querySelector(".js-list-subscribe");
	if (!listSubscribeButton) return;

	const box = document.querySelector(".pop-over").getBoundingClientRect();
	const elementAtListCorner = document.elementFromPoint(box.left, box.top - 1);
	const list = elementAtListCorner && elementAtListCorner.closest(".list-wrapper");

	if (!list) return;

	const a = document.createElement("a");
	a.href = "#";
	a.classList.add("list-expand-button");
	a.textContent = list.classList.contains("expanded") ? "Contract List" : "Expand List";
	a.addEventListener("click", () => {
		expandList(list);
		document.querySelector(".pop-over-header-close-btn").click();
	});

	const li = document.createElement("li");
	li.appendChild(a);
	listSubscribeButton.parentElement.parentElement.appendChild(li);
}

function expandList(list) {
	list.classList.toggle("expanded");
	list.parentElement.classList.toggle("has-expanded-list");
}