const style = document.createElement("style");
style.id = "TrelloListToggle-styles";
style.textContent = `
#list-toggle-buttons-start ~ .board-header-btn {
    padding-right: 7px;
}

#list-toggle-buttons-start ~ .board-header-btn[list-visible="false"] {
    opacity: .5;
}
`;
document.head.appendChild(style);

let isDirty = false;

let cachedList = [];

const maxVisible = 7;
let viewingMore = false;
let needsRefresh = false;

function appendDividerTo(element) {
	divider = document.createElement("span");
	divider.classList.add("board-header-btn-divider");
	divider.id = "list-toggle-buttons-start";
	element.appendChild(divider);
}

function refreshListButtons(data) {

	const boardHeader = document.querySelector(".board-header-btn-text");
	if (!boardHeader) return;

	const board = boardHeader.textContent;

	const boardData = data[board] === undefined ? data[board] = {} : data[board];


	const lists = document.querySelectorAll(".list-header-name-assist");
	if (cachedList.length != lists.length) {
		needsRefresh = true;
	} else {
		for (const listTitle of lists) {
			if (!cachedList.includes(listTitle.textContent)) {
				needsRefresh = true;
				break;
			}
		}
	}


	if (needsRefresh) {
		needsRefresh = false;

		console.log("refreshed");

		const toRemove = document.querySelectorAll("#list-toggle-buttons-start, #list-toggle-buttons-start ~ *");
		for (const element of toRemove) {
			element.remove();
		}

		const buttonContainer = document.querySelector(".board-header-btns.mod-left");
		appendDividerTo(buttonContainer);

		cachedList = [];

		for (const listTitle of lists) {
			cachedList.push(listTitle.textContent);
			const list = listTitle.closest(".list-wrapper");
			if (!list.hasAttribute("list-visible")) {
				list.setAttribute("list-visible", boardData[listTitle.textContent] === undefined ? true : boardData[listTitle.textContent]);
			}

			const toggleButton = document.createElement("a");
			toggleButton.classList.add("board-header-btn", "board-header-btn-without-icon");
			toggleButton.textContent = listTitle.textContent;
			toggleButton.href = "#";
			toggleButton.setAttribute("list-visible", list.getAttribute("list-visible"));

			if (viewingMore || cachedList.length < maxVisible) {
				buttonContainer.appendChild(toggleButton);
			}

			function updateListVisibility(isVisible) {
				toggleButton.setAttribute("list-visible", `${isVisible}`);
				list.setAttribute("list-visible", `${isVisible}`);
				list.style.display = isVisible ? "inline-block" : "none";

				if (boardData[listTitle.textContent] != isVisible) {
					boardData[listTitle.textContent] = isVisible;
					isDirty = true;
				}
			}

			updateListVisibility(JSON.parse(toggleButton.getAttribute("list-visible")));

			toggleButton.addEventListener("click", () => {
				const isVisible = !JSON.parse(toggleButton.getAttribute("list-visible"));
				updateListVisibility(isVisible);
			});
		}

		if (cachedList.length >= maxVisible) {
			appendDividerTo(buttonContainer);

			const toggleMoreButton = document.createElement("a");
			toggleMoreButton.classList.add("board-header-btn", "board-header-btn-without-icon");
			toggleMoreButton.textContent = viewingMore ? "View Less" : "View More";
			toggleMoreButton.href = "#";
			buttonContainer.appendChild(toggleMoreButton);

			toggleMoreButton.addEventListener("click", () => {
				viewingMore = !viewingMore;
				needsRefresh = true;
			});
		}
	}

	if (isDirty) {
		isDirty = false;
		console.log("saved");
		chrome.storage.sync.set({ "TrelloListToggle:data": JSON.stringify(data) });
	}
}

chrome.storage.sync.get("TrelloListToggle:data", (data) => {
	data = JSON.parse(data["TrelloListToggle:data"]);
	setTimeout(() => {
		setInterval(refreshListButtons.bind(undefined, data), 20);
	}, 1000);
});