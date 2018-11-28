let interval = setInterval(() => {
	if (!document.body) return;

	document.head.appendChild(style);

	clearInterval(interval);

	setInterval(refresh, 100);
});

function refresh(data) {
	const style = document.querySelector("#yuus-trello-suite-styles");
	if (style.parentElement.lastElementChild !== style) {
		style.parentElement.appendChild(style);
	}

	for (const state of document.querySelectorAll(".pull-request .pull-request-state .state")) {
		state.closest(".pull-request").classList.toggle("state-open", state.classList.contains("state-open"));
		state.closest(".pull-request").classList.toggle("state-closed", state.classList.contains("state-closed"));
		state.closest(".pull-request").classList.toggle("state-merged", state.classList.contains("state-merged"));
	}
}