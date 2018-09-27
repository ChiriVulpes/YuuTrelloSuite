let interval = setInterval(() => {
	if (!document.body) return;

	document.head.appendChild(style);
	extension();

	clearInterval(interval);
});


function extension() {

	////////////////////////////////////
	// Fixes a trello bug that causes calendar days to sometimes not be openable
	//

	document.body.addEventListener("click", (event) => {
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
	});



	////////////////////////////////////
	// Util/vars
	//

	let isDirty = false;

	let needsRefresh = false;
	let cachedList = [];
	let maxListColumns = 0;



	////////////////////////////////////
	// Our main loop
	//

	function refresh(data) {
		const style = document.querySelector("#yuus-trello-suite-styles");
		if (style.parentElement.lastElementChild !== style) {
			style.parentElement.appendChild(style);
		}

		////////////////////////////////////
		// Click "Show More Labels" Automatically
		//

		const showMoreLabelsButton = document.querySelector(".js-add-label + .js-show-more:not(.hide)");
		if (showMoreLabelsButton) {
			showMoreLabelsButton.click();
		}

		////////////////////////////////////
		// Prettier preview images
		// Adds some data to powerup preview images, and removes the src attr so we can do some custom styling
		//

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



		////////////////////////////////////
		// If we're not in a board, we don't do anything else
		//

		const boardHeader = document.querySelector(".board-header-btn-text");
		if (!boardHeader) return;

		const boardName = boardHeader.textContent;

		const boardData = data[boardName] === undefined ? data[boardName] = {} : data[boardName];


		////////////////////////////////////
		// We cache the names of all the visible lists, if one changes, we need to refresh
		//

		const lists = [...document.querySelectorAll(".list-header-name-assist")].map(list => list.textContent);
		if (cachedList.length != lists.length) {
			needsRefresh = true;
		} else {
			for (const listTitle of lists) {
				if (!cachedList.includes(listTitle)) {
					needsRefresh = true;
					break;
				}
			}
		}
		cachedList = lists;


		if (needsRefresh) {
			needsRefresh = false;

			console.log("refreshed");

			for (const list of document.querySelectorAll(".list")) {

				let options = list.querySelector(".list-view-options");
				if (options) {
					options.remove();
				}

				options = document.createElement("div");
				options.classList.add("list-view-options");
				list.appendChild(options);



				////////////////////////////////////
				// Adds a button for expanding a list to fill all available space (makes sorting cards easier)
				//

				function expandList(list) {
					list.classList.toggle("expanded");
					list.parentElement.classList.toggle("has-expanded-list");
				}

				const expand = document.createElement("button");
				expand.classList.add("list-view-option", "list-view-option-expand");
				options.appendChild(expand);
				expand.addEventListener("click", () => {
					expandList(list.parentElement);
				});

				const closeListExpansion = document.createElement("span");
				closeListExpansion.classList.add("icon-lg", "list-view-option-expanded-close");
				options.appendChild(closeListExpansion);
				closeListExpansion.addEventListener("click", () => {
					expandList(list.parentElement);
				});



				////////////////////////////////////
				// Adds a button for collapsing a list
				//
				const listName = list.querySelector(".list-header-name-assist").textContent;

				list.parentElement.classList.toggle("list-hidden", boardData[listName] === undefined ? false : !boardData[listName]);

				function toggleList() {
					list.parentElement.classList.toggle("list-hidden");

					const isVisible = !list.parentElement.classList.contains("list-hidden");
					if (boardData[listName] != isVisible) {
						boardData[listName] = isVisible;
						isDirty = true;

						console.log(`Set "${listName}" to ${isVisible ? "visible" : "hidden"}`);
					}
				}

				const hide = document.createElement("button");
				hide.classList.add("list-view-option", "list-view-option-hide");
				options.appendChild(hide);
				hide.addEventListener("click", toggleList);

				const show = document.createElement("span");
				show.classList.add("icon-lg", "list-view-option-show");
				options.appendChild(show);
				show.addEventListener("click", toggleList);
			}
		}



		////////////////////////////////////
		// Set the number of list columns that could be visible at one time
		//

		const board = document.querySelector("#board");
		if (board) {
			const newMaxListColumns = Math.floor(board.getBoundingClientRect().width / 280);
			if (maxListColumns !== newMaxListColumns) {
				document.documentElement.style.setProperty("--max-list-columns", maxListColumns = newMaxListColumns);
			}
		}



		////////////////////////////////////
		// Birds Eye Button
		//

		let birdsEyeButton = document.querySelector(".birds-eye-button");
		if (!birdsEyeButton) {
			const buttonContainerRight = document.querySelector(".board-header-btns.mod-right");
			const birdsEyeButton = document.createElement("a");
			birdsEyeButton.classList.add("board-header-btn", "board-header-btn-without-icon", "birds-eye-button");
			birdsEyeButton.textContent = boardData.__isBirdsEye === true ? "Normal Size" : "Compressed Size";
			birdsEyeButton.href = "#";
			buttonContainerRight.insertBefore(birdsEyeButton, document.querySelector(".board-header-btns.mod-right > .js-plugin-header-btns"));

			document.body.classList.toggle("birds-eye", boardData.__isBirdsEye === true);
			birdsEyeButton.addEventListener("click", () => {
				document.body.classList.toggle("birds-eye");
				isDirty = true;
				boardData.__isBirdsEye = document.body.classList.contains("birds-eye");
				birdsEyeButton.textContent = boardData.__isBirdsEye === true ? "Normal Size" : "Compressed Size";
			});
		}



		////////////////////////////////////
		// Save extension data
		//

		if (isDirty) {
			isDirty = false;
			chrome.storage.sync.set({ "TrelloListToggle:data": JSON.stringify(data) }, () => {
				console.log("saved");
			});
		}
	}

	////////////////////////////////////
	// Get the data, wait one second, then refresh every 20ms
	//

	chrome.storage.sync.get("TrelloListToggle:data", (data) => {
		data = data["TrelloListToggle:data"];
		data = data ? JSON.parse(data) : {};
		setInterval(refresh.bind(null, data), 20);
	});
}