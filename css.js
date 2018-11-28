
const style = document.createElement("style");
style.id = "yuus-trello-suite-styles";
style.textContent = `

/************************************************/
/* Background Colour                            */
/************************************************/

:root {
    --bg-list: #22262a;
    --bg-card: #363e4a;
    --bg-card-hover: #444f60;
    --bg-drawer: #262d36;
    --bg-comment: var(--bg-card);
    --bg-comment-hover: var(--bg-card-hover);
    --bg-button: #667388;
    --bg-button-hover: #7b8ca8;
    --bg-drawer-link-hover: #333e50;
    --bg-composer-hover: transparent;
    --bg-popover: #282f3a;
    --bg-card-edit-button: var(--bg-card);
    --bg-card-edit-button-hover: var(--bg-card-hover);
    --bg-label-black: #000;
    --bg-input: #0003;
    --bg-input-hover: #0004;
    --bg-input-focus: var(--bg-input-hover);
    --bg-member: var(--bg-card);
    --bg-member-hover: var(--bg-card-hover);
    --bg-window: var(--bg-list);
    --bg-button-link: var(--bg-card);
    --bg-button-link-shadow: #171a1e;
    --bg-button-link-hover: var(--bg-card-hover);
    --bg-button-disabled: #272f3c;
    --bg-pre: #0007;
    --bg-code: #0005;
    --bg-progress-bar: #0005;
    --bg-checkbox: #0005;
    --bg-checklist-item-hover: #1c2022;
    --bg-pika: #1c2022;
    --bg-table-head: #151819;
    --bg-table-body: #1c2022;
    --bg-pika-td: #1c2022;
    --bg-pika-button: var(--bg-button-link);
    --bg-pika-button-hover: var(--bg-button-link-hover);
    --bg-directory: var(--bg-list);
    --bg-directory-header: var(--bg-drawer);
    --bg-powerup: #2a3039;
    --bg-powerup-hover: #2e353e;
    --bg-quiet: #0004;
    --bg-quiet-hover: #0002;
    --bg-count: var(--bg-quiet);
    --bg-calendar: #1c2022;
    --bg-calendar-day-cell: transparent;
    --bg-calendar-day: #202831;
    --bg-calendar-day-current-month: #252e38;
    --bg-calendar-day-today: var(--bg-calendar-day-current-month);
    --bg-calendar-day-hover: #2b3546;
    --bg-calendar-day-inactive-hover: var(--bg-calendar-day-hover);
    --bg-notifications-unread: #0003;
    --bg-mark-unread-hover: #0003;
    --bg-notification-action-hover: var(--bg-button-link);
    --bg-archive-banner: var(--bg-card);
    --bg-boards-drawer-header: #0006;
}

.iframe-input, 
input:not([type=file]), 
textarea,
.iframe-input[readonly], 
input[type=email][readonly], 
input[type=password][readonly], 
input[type=text][readonly] {
    background-color: var(--bg-input);
    border-color: transparent !important;
}

.iframe-input:hover, 
input[type=email]:hover, 
input[type=password]:hover, 
input[type=text]:hover, 
textarea:hover {
    background-color: var(--bg-input-hover);
}

.iframe-input.focus, 
input[type=email]:focus, 
input[type=password]:focus, 
input[type=text]:focus, 
textarea:focus,
textarea.mod-card-back-title.is-editing, 
textarea.mod-card-back-title:focus,
.checklist-new-item.focus textarea.checklist-new-item-text, 
.checklist-new-item.focus textarea.checklist-new-item-text:focus, 
.checklist-new-item.focus textarea.checklist-new-item-text:hover {
    background-color: var(--bg-input-focus);
}

.button, 
button, 
.button-link,
input[type=button], 
input[type=submit] {
    background-color: var(--bg-button-link);
    box-shadow: 0 1px 0 0 var(--bg-button-link-shadow);
}

.button:hover, 
button:hover,
.button-link:hover, 
input[type=button]:hover, 
input[type=submit]:hover {
    background-color: var(--bg-button-link-hover);
    box-shadow: 0 1px 0 0 var(--bg-button-link-shadow);
}

.list {
    background-color: var(--bg-list);
}

.list-card {
    background-color: var(--bg-card);
}

.board-menu-tab-content {
    background-color: var(--bg-drawer);
}

.action-comment {
    background-color: var(--bg-comment);
}

.list-card.active-card,
.list-card.ui-sortable-helper .list-card-details{
    background-color: var(--bg-card-hover);
}

.list-card-operation {
    background-color: var(--bg-button);
}

.list-card-operation:hover,
.comment-box-options-item:hover {
    background-color: var(--bg-button-hover);
}

.open-card-composer:hover {
    background-color: var(--bg-composer-hover);
}

.pop-over,
.window.mod-notifications, 
.window.mod-notifications.mod-cards {
    background: var(--bg-popover);
    box-shadow: 0 2px 4px -1px #0008, inset 0 0 0 1px #afe2;
}

.list-card-edit-title, 
.list-card-edit-title:focus, 
.list-card-edit-title:hover {
    background-color: transparent;
}

.quick-card-editor-buttons-item {
    background: var(--bg-card-edit-button);
}

.quick-card-editor-buttons-item:hover {
    background: var(--bg-card-edit-button-hover);
}

.card-label-black {
    background-color: var(--bg-label-black);
}

/* The little "darker" part of labels when hovering over them */
.card-label-black.mod-selectable.selected {
    box-shadow: -8px 0 #000;
}

.quiet-button:hover,
.card-detail-fake-text-area:hover,
a.helper:hover,
.pika-single .pika-next:hover, 
.pika-single .pika-prev:hover,
.pika-single .pika-label:hover,
.show-more:hover,
.directory-sidebar li:not(.directory-categories):hover,
.board-menu-section-header:hover,
.board-menu-navigation-item-link:not(.disabled):hover {
    background-color: var(--bg-drawer-link-hover);
}

.member {
    background-color: var(--bg-member);
}

.member:hover {
    background-color: var(--bg-member-hover);
}

.list-card-composer-textarea,
.list-card-composer-textarea:hover {
    background: transparent;
}

textarea.mod-list-name.is-editing, 
textarea.mod-list-name:focus {
    background: var(--bg-list);
}

.window {
    background-color: var(--bg-window);
}

.comment-box-input {
    background: var(--bg-comment) !important;
}

.comment-frame {
    background: none;
}

.button.disabled, 
.button.disabled.primary:focus, 
.button.disabled:active, 
.button.disabled:focus, 
.button.disabled:hover, 
button.disabled, 
button.disabled.primary:focus, 
button.disabled:active, 
button.disabled:focus, 
button.disabled:hover, 
input[type=button].disabled, 
input[type=button].disabled.primary:focus, 
input[type=button].disabled:active, 
input[type=button].disabled:focus, 
input[type=button].disabled:hover, 
input[type=submit].disabled, 
input[type=submit].disabled.primary:focus, 
input[type=submit].disabled:active, 
input[type=submit].disabled:focus, 
input[type=submit].disabled:hover, 
input[type=submit]:disabled, 
input[type=submit]:disabled:hover,
.calendar-header.month-view .month-button, 
.calendar-header.week-view .week-button, 
.today-button.on-today {
    background: var(--bg-button-disabled);
}

.card-detail-fake-text-area,
a.helper {
    background-color: transparent;
}

.editing .edit .field, 
.editing .edit .field:active {
    background-color: transparent;
    box-shadow: none;    
}

code {
    background-color: var(--bg-code);
    font-family: "Anonymous Pro";
    padding: 4px 6px 4px 8px;
}

pre {
    background-color: var(--bg-pre);
}

pre code {
    background-color: transparent;
}

.board-menu-content input[type=text] {
    background: var(--bg-input);
}

.board-menu-content input[type=text]:focus {
    background: var(--bg-input-focus);
}

.card-label-edit-button:hover {
    background-color: var(--bg-button-link-hover);
}

.card-detail-item-add-button {
    background-color: transparent;
}

.checklist-progress-bar {
    background: var(--bg-progress-bar);
}

.checklist-item-checkbox {
    background: var(--bg-checkbox);
    box-shadow: none;
}

.checklist-item-fade-out .checklist-item-checkbox, .checklist-item-state-complete .checklist-item-checkbox {
    background-color: var(--bg-checkbox-checked);
    box-shadow: none;
}

.checklist-item-checkbox.enabled:hover {
    background-color: transparent;
}

.checklist-item:hover {
    background-color: var(--bg-checklist-item-hover);
}

.card-detail-due-date-badge.is-clickable:not(.is-due-complete) .card-detail-badge-due-date-complete-box:hover {
    background-color: var(--bg-due-date-box-hover);
    box-shadow: inset 0 0 0 2px currentColor;
}

.card-detail-due-date-badge .card-detail-badge-due-date-complete-box {
    background-color: var(--bg-due-date-box);
    box-shadow: inset 0 0 0 2px currentColor;
}

.pika-single {
    background: var(--bg-pika);
}

thead {
    background: var(--bg-table-head);
}

tbody {
    background-color: var(--bg-table-body);
}

.pika-single .pika-table td {
    background-color: var(--bg-pika-td);
}

.pika-single .pika-button {
    background: var(--bg-pika-button);
}

.pika-single .pika-button:hover {
    background: var(--bg-pika-button-hover);
}

.directory-wrapper {
    background: var(--bg-directory);
}

.directory-header {
    background: var(--bg-directory-header);
}

/* these selectors are terrible but i didn't want to select the stupid bullshit class names these elements were using */
:not(.directory-individual-listing) > * > .directory-listing-powerup > * > * > * {
    background: var(--bg-powerup);
}

:not(.directory-individual-listing) > * > .directory-listing-powerup > * > * > *:hover {
    background: var(--bg-powerup-hover);
}

.directory-navigation-power-up-count,
.board-menu-navigation-item-link-count,
.board-menu-navigation-item-link:not(.disabled):hover .board-menu-navigation-item-link-count {
    background-color: var(--bg-count);
}

.product-promo-disable-overlay {
    background-color: var(--bg-drawer);
    opacity: .7;
}

.calendar-wrapper {
    background: var(--bg-calendar);
}

.calendar-day {
    background: var(--bg-calendar-day);
}

.day-cell {
    background: var(--bg-calendar-day-cell);
}

.day-cell.current-month .calendar-day {
    background: var(--bg-calendar-day-current-month);
}

.day-cell.current-month .calendar-day.today,
.calendar-day.today {
    background-color: var(--bg-calendar-day-today);
}

.day-cell.current-month .calendar-day.drop, .day-cell.current-month .calendar-day:not(.active):hover {
    background-color: var(--bg-calendar-day-hover);
}

.calendar-day:not(.active):hover {
    background-color: var(--bg-calendar-day-inactive-hover);
}

.calendar-day .list-card:hover {
    background-color: var(--bg-card-hover);
}

.attachment-thumbnail-preview {
    background-color: var(--bg-quiet);
}

.window.mod-notifications, .window.mod-notifications.mod-cards {
    background-color: var(--bg-popover);
}

.canonical-card > * > a {
    background-color: var(--bg-card);
    box-shadow:  none;
}

.canonical-card > * > a:hover {
    background-color: var(--bg-card-hover);
}

.phenom.mod-is-card.mod-unread .unread-cover, .phenom.mod-is-card .unread-cover, .phenom.mod-is-not-card.mod-unread .unread-cover, .phenom.mod-is-not-card .unread-cover {
    background: var(--bg-notifications-unread);
}

.phenom.mod-is-card .mark-read:hover, .phenom.mod-is-card .mark-unread:hover, .phenom.mod-is-card.mod-unread .mark-read:hover, .phenom.mod-is-card.mod-unread .mark-unread:hover, .phenom.mod-is-not-card .mark-read:hover, .phenom.mod-is-not-card .mark-unread:hover, .phenom.mod-is-not-card.mod-unread .mark-read:hover, .phenom.mod-is-not-card.mod-unread .mark-unread:hover {
    background-color: var(--bg-mark-unread-hover);
}

.phenom.mod-is-card .content-wrapper .phenom-desc .phenom-desc-link:hover~.comment-container .action-comment, .phenom.mod-is-card.mod-unread .content-wrapper .phenom-desc .phenom-desc-link:hover~.comment-container .action-comment, .phenom.mod-is-not-card .content-wrapper .phenom-desc .phenom-desc-link:hover~.comment-container .action-comment, .phenom.mod-is-not-card.mod-unread .content-wrapper .phenom-desc .phenom-desc-link:hover~.comment-container .action-comment {
    background-color: var(--bg-comment-hover);
}

.phenom.mod-is-card.mod-unread .phenom-icon-link:hover, .phenom.mod-is-card .phenom-icon-link:hover, .phenom.mod-is-not-card.mod-unread .phenom-icon-link:hover, .phenom.mod-is-not-card .phenom-icon-link:hover {
    background-color: var(--bg-notification-action-hover);
}

.window-archive-banner {
    background-color: var(--bg-archive-banner);
}

.phenom.mod-comment-type .action-card ~ .comment-container .action-comment:hover {
    background-color: var(--bg-comment-hover);
}

.phenom.mod-highlighted {
    background: var(--bg-quiet);
}

textarea.checklist-new-item-text:hover {
    background-color: var(--bg-checklist-item-hover);
}

textarea.checklist-new-item-text:hover {
    background-color: var(--bg-quiet);
}

.checklist-item-details .checklist-item-menu-wrapper .checklist-item-menu:hover {
    background-color: var(--bg-quiet);
}

.boards-drawer {
    background: var(--bg-popover);
    box-shadow: 0 2px 4px -1px #0008, inset 0 0 0 1px #afe2;
}

.compact-board-tile-fade {
    background: hsla(200deg,10%,10%,.95);
}

.boards-drawer.is-shown.boards-drawer-pinned {
    background: var(--bg-drawer);
    box-shadow: none;
}

.boards-drawer-header {
    background: var(--bg-boards-drawer-header);
}

.compact-board-tile.selected .compact-board-tile-fade {
    background: hsla(200deg,10%,10%,.80);
}

.sidebar-section-header-toggle-icon:hover {
    background-color: var(--bg-quiet);
}

.known-service-link {
    background: var(--bg-quiet);
}

.known-service-link:hover {
    background: var(--bg-quiet-hover);
}

.notice-of-tos-change-container {
    background-color: var(--bg-quiet);
}

.board-menu-navigation-item.mod-power-up-slot .board-menu-navigation-item-link-icon {
    background: var(--bg-quiet);
    border-color: var(--c-quiet);
}

.checklist-item.ui-sortable-helper {
    background-color: var(--bg-quiet) !important;
}



/************************************************/
/* Text Colour                                  */
/************************************************/

:root {
    --c-main: #adb8ca;
    --c-card-title: var(--c-main);
    --c-icon: #9eb3d3;
    --c-icon-hover: #ccdaf3;
    --c-a: #4b91ba;
    --c-a-hover: #3db7ff;
    --c-composer-hover: #ccdaf3;
    --c-member: var(--c-main);
    --c-button-disabled: #4b596f;
    --c-text-hover: var(--c-icon-hover);
    --c-pre-code: #5f9edb;
    --c-count: #cfe4;
    --c-board-button-team: #cfe4;
    --c-quiet: #6b808c;
}

.list-card-title {
    color: var(--c-card-title);
}

body, button, html, input, select, textarea {
    color: var(--c-main);
}

.icon-lg, 
.icon-sm {
    color: var(--c-icon);
}

.dark-hover:hover .icon-lg, 
.dark-hover:hover .icon-sm, 
.icon-lg.dark, 
.icon-lg.dark-hover:hover, 
.icon-sm.dark, 
.icon-sm.dark-hover:hover,
.board-menu-navigation-item-link:not(.disabled):hover .board-menu-navigation-item-link-icon,
.pop-over-header-close-btn:hover,
.pop-over-header-back-btn:hover,
.dark-background-hover:hover .icon-lg, 
.dark-background-hover:hover .icon-sm, 
.icon-lg.dark-background-hover:hover, 
.icon-sm.dark-background-hover:hover,
.button-link:hover .icon-sm,
.comment-box-options-item:hover .icon-sm,
.notifications-title button.dialog-close-button:hover .icon-sm,
.board-menu-section-header:hover .board-menu-section-header-icon,
.checklist-item-details .checklist-item-menu:hover .icon-sm,
.compact-board-tile.selected .compact-board-tile-link-options-star:hover,
.compact-board-tile.selected .compact-board-tile-link-options-star.icon-star-active:hover {
    color: var(--c-icon-hover);
}

a {
    color: var(--c-a);
}

a:hover {
    color: var(--c-a-hover);
}

.open-card-composer:hover {
    color: var(--c-composer-hover);
}

.open-card-composer .icon-add,
.open-card-composer:hover .icon-add {
    color: inherit;
}

.quiet-button:hover {
    color: var(--c-a-hover);
}

.member {
    color: var(--c-member);
}

.button.disabled, 
.button.disabled.primary:focus, 
.button.disabled:active, 
.button.disabled:focus, 
.button.disabled:hover, 
button.disabled, 
button.disabled.primary:focus, 
button.disabled:active, 
button.disabled:focus, 
button.disabled:hover, 
input[type=button].disabled, 
input[type=button].disabled.primary:focus, 
input[type=button].disabled:active, 
input[type=button].disabled:focus, 
input[type=button].disabled:hover, 
input[type=submit].disabled, 
input[type=submit].disabled.primary:focus, 
input[type=submit].disabled:active, 
input[type=submit].disabled:focus, 
input[type=submit].disabled:hover, 
input[type=submit]:disabled, 
input[type=submit]:disabled:hover,
.calendar-header.month-view .month-button, 
.calendar-header.week-view .week-button, 
.today-button.on-today {
    color: var(--c-button-disabled);
}

.card-detail-fake-text-area:hover,
a.helper:hover,
.quiet a:not(.disabled):hover,
.pika-single .pika-next:hover, 
.pika-single .pika-prev:hover,
.pika-single .pika-label:hover {
    color: var(--c-text-hover);
}

pre code {
    color: var(--c-pre-code);
}

.card-label-edit-button:hover {
    color: var(--c-icon-hover);
}

.button-link.setting:hover .label {
    color: var(--c-text-hover);
}

.check-div label, .radio-div label {
    color: inherit;
}

.card-detail-due-date-badge.is-clickable:not(.is-due-complete) .card-detail-badge-due-date-complete-box:hover .card-detail-badge-due-date-complete-icon {
    color: inherit;
}

.button-link {
    color: var(--c-main);
}

.button-link .icon-sm {
    color: inherit;
}

.button-link:hover {
    color: var(--c-text-hover);
}

:not(.directory-individual-listing) > * > .directory-listing-powerup span {
    color: inherit;
}

:not(.directory-individual-listing) > * > .directory-listing-powerup:hover span {
    color: var(--c-text-hover);
}

.directory-individual-listing {
    color: inherit;
}

.directory-individual-listing .category-link :hover {
    color: var(--c-text-hover);
}

.directory-navigation-power-up-count,
.board-menu-navigation-item-link-count {
    color: var(--c-count);
}

.directory-sidebar li:not(.directory-categories):hover a,
.board-menu-section-header:hover {
    color: var(--c-a-hover);
}

.day-cell.current-month h3 {
    color: var(--c-date);
}

.notification-actions button:hover {
    color: var(--c-text-hover);
}

.phenom.mod-is-card, .phenom.mod-is-card.mod-unread, .phenom.mod-is-not-card, .phenom.mod-is-not-card.mod-unread {
    background: var(--bg-quiet);
}

.phenom.mod-is-card .content-wrapper .phenom-desc, .phenom.mod-is-card.mod-unread .content-wrapper .phenom-desc, .phenom.mod-is-not-card .content-wrapper .phenom-desc, .phenom.mod-is-not-card.mod-unread .content-wrapper .phenom-desc {
    color: var(--c-a);
}

.phenom.mod-is-card.mod-unread .phenom-member .member-name, .phenom.mod-is-card .phenom-member .member-name, .phenom.mod-is-not-card.mod-unread .phenom-member .member-name, .phenom.mod-is-not-card .phenom-member .member-name {
    color: var(--c-a);
}

.canonical-card > * > a * {
    color: var(--c-main);
}

.canonical-card > * > a:hover * {
    color: var(--c-text-hover);
}

.list-card.active-card .list-card-title {
    color: var(--c-text-hover);
}

.phenom.mod-is-card .archive-button:hover, .phenom.mod-is-card.mod-unread .archive-button:hover, .phenom.mod-is-not-card .archive-button:hover, .phenom.mod-is-not-card.mod-unread .archive-button:hover {
    color: var(--c-text-hover);
}

.phenom .action-comment {
    color: var(--c-main);
}

.phenom-desc-link:hover ~ * .action-comment {
    color: var(--c-text-hover);
}

.atMention.me {
    color: var(--c-a);
}

.atMention.me:hover {
    color: var(--c-a-hover);
}

.phenom.mod-comment-type .action-card ~ .comment-container .action-comment:hover {
    color: var(--c-text-hover);
}

.checklist-new-item.focus textarea.checklist-new-item-text, 
.checklist-new-item.focus textarea.checklist-new-item-text:focus, 
.checklist-new-item.focus textarea.checklist-new-item-text:hover {
	color: inherit;
}

.compact-board-tile-link-text-sub-name {
    color: var(--c-board-button-team);
}

.sidebar-section-header-title.mod-clickable:hover {
    color: var(--c-text-hover);
}

.board-menu-navigation-item.mod-power-up-slot .board-menu-navigation-item-link {
    color: var(--c-quiet);
}

.board-menu-navigation-item.mod-power-up-slot .board-menu-navigation-item-link.mod-enabled {
    color: var(--c-a);
}

.board-menu-navigation-item.mod-power-up-slot .board-menu-navigation-item-link.mod-enabled:hover {
    color: var(--c-a-hover);
}



/************************************************/
/* Borders                                      */
/************************************************/

:root {
    --b-table: transparent;
    --b-hr: #afe2;
    --b-directory-header: #0006;
    --b-mark-unread: #afe4;
    --b-notification-action: var(--bg-button-link);
}

hr {
    background-color: var(--b-hr);
}

.pop-over-header-title,
.pop-over-list li.divide,
.notifications-title>span {
    border-color: var(--b-hr);
}

table, td, th {
    border-color: var(--b-table);
}

.directory-header {
    border-bottom-color: var(--b-directory-header);
}

.phenom .mark-unread:before {
    border-color: var(--b-mark-unread);
}

.phenom.mod-is-card.mod-unread .phenom-icon, .phenom.mod-is-card .phenom-icon, .phenom.mod-is-not-card.mod-unread .phenom-icon, .phenom.mod-is-not-card .phenom-icon {
    border-color: var(--b-notification-action);
}



/************************************************/
/* Misc                                         */
/************************************************/

:root {
    --bg-scrollbar-track-piece: #141517;
    --bg-scrollbar-thumb: var(--bg-card);
    --bg-scrollbar-thumb-hover: var(--bg-card-hover);
    --bg-scrollbar-card-track-piece: #0003;
    --bg-scrollbar-card-thumb: #89aab544;
    --bg-scrollbar-card-thumb-hover: #94a8bd80;
}

/* scrollbars */
.u-fancy-scrollbar::-webkit-scrollbar-track-piece,
pre::-webkit-scrollbar-track-piece,
.pop-over textarea::-webkit-scrollbar-track-piece,
.directory-body::-webkit-scrollbar-track-piece {
    background: var(--bg-scrollbar-track-piece);
}

.u-fancy-scrollbar::-webkit-scrollbar-thumb:vertical,
.u-fancy-scrollbar::-webkit-scrollbar-thumb:horizontal,
.u-fancy-scrollbar::-webkit-scrollbar-thumb,
pre::-webkit-scrollbar-thumb:vertical,
pre::-webkit-scrollbar-thumb:horizontal,
pre::-webkit-scrollbar-thumb,
.pop-over textarea::-webkit-scrollbar-thumb:vertical,
.pop-over textarea::-webkit-scrollbar-thumb:horizontal,
.pop-over textarea::-webkit-scrollbar-thumb,
.directory-body::-webkit-scrollbar-thumb {
    background: var(--bg-scrollbar-thumb) !important;
}

.u-fancy-scrollbar::-webkit-scrollbar-thumb:vertical:hover,
.u-fancy-scrollbar::-webkit-scrollbar-thumb:horizontal:hover,
.u-fancy-scrollbar::-webkit-scrollbar-thumb:hover,
pre::-webkit-scrollbar-thumb:vertical:hover,
pre::-webkit-scrollbar-thumb:horizontal:hover,
pre::-webkit-scrollbar-thumb:hover,
.pop-over textarea::-webkit-scrollbar-thumb:vertical:hover,
.pop-over textarea::-webkit-scrollbar-thumb:horizontal:hover,
.pop-over textarea::-webkit-scrollbar-thumb:hover,
.directory-body::-webkit-scrollbar-thumb:hover {
    background: var(--bg-scrollbar-thumb-hover) !important;
}

.list-card::-webkit-scrollbar-track-piece {
    background: var(--bg-scrollbar-card-track-piece);
}

.list-card::-webkit-scrollbar-thumb {
    background: var(--bg-scrollbar-card-thumb);
}

.list-card::-webkit-scrollbar-thumb:hover {
    background: var(--bg-scrollbar-card-thumb-hover);
}

.directory-body::-webkit-scrollbar,
.calendar-month::-webkit-scrollbar {
    height: 16px;
    width: 16px;
}

.directory-body::-webkit-scrollbar-track-piece:vertical:start {
    border-radius: 8px 8px 0 0;
}

.directory-body::-webkit-scrollbar-track-piece:vertical:end {
    border-radius: 0 0 8px 8px;
}

.directory-body::-webkit-scrollbar-track-piece:horizontal:start {
    border-radius: 8px 0 0 8px;
}

.directory-body::-webkit-scrollbar-track-piece:horizontal:end {
    border-radius: 0 8px 8px 0;
}

.directory-body::-webkit-scrollbar-thumb:vertical,
.directory-body::-webkit-scrollbar-thumb:horizontal {
    border-radius: 8px;
    display: block;
    height: 48px;
}

.pop-over textarea::-webkit-scrollbar,
.list-card::-webkit-scrollbar {
    height: 8px;
    width: 8px;
}

.pop-over textarea::-webkit-scrollbar-track-piece:vertical:start {
    border-radius: 4px 4px 0 0;
}

.pop-over textarea::-webkit-scrollbar-track-piece:vertical:end {
    border-radius: 0 0 4px 4px;
}

.pop-over textarea::-webkit-scrollbar-track-piece:horizontal:start {
    border-radius: 4px 0 0 4px;
}

.pop-over textarea::-webkit-scrollbar-track-piece:horizontal:end {
    border-radius: 0 4px 4px 0;
}

.pop-over textarea::-webkit-scrollbar-thumb:vertical,
.pop-over textarea::-webkit-scrollbar-thumb:horizontal {
    border-radius: 4px;
    display: block;
    height: 48px;
}

.pop-over textarea::-webkit-scrollbar-corner {
    background: none;
}

/* make the pika-lendar styling a little more consistent */
.pika-single {
    border-radius: 4px
}

.pika-single .is-rtl .pika-next, .pika-single .pika-prev {
    margin-left: 6px;
}

.pika-single .is-rtl .pika-prev, .pika-single .pika-next {
    margin-right: 6px;
}

.pika-lendar {
    padding-bottom: 6px;
}

/* pretty outlines on preview images */
.attachment-image-preview {
	border: none;
}

.directory-individual-listing .directory-listing-content img,
.attachment-image-preview {
    content: "";
    position: relative;
    height: 0;
    width: 100%;
    padding-bottom: calc(100% * var(--ratio));
    display: inline-block;
}

.directory-individual-listing .directory-listing-content img::before,
.attachment-image-preview::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--bg-directory);
    border-radius: 4px;
}

.directory-individual-listing .directory-listing-content img::after,
.attachment-image-preview::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: var(--img);
    background-size: contain;
    box-shadow: inset 0 0 0 1px #fff2;
    border-radius: 4px;
}

/* take out this ruleset if you want curved scrollbars */
::-webkit-scrollbar-track-piece,
::-webkit-scrollbar-thumb {
    border-radius: 0 !important;
}

/* Well styled powerup navigation links */
.directory-sidebar li:not(.directory-categories),
.show-more {
    padding: 6px;
    border-radius: 3px;
    margin: 0;
}

/* fix trello styling the cursor of activity comments based on whether you can edit, when it should just always be pointer (they're links) */
.phenom.mod-comment-type .action-card ~ .comment-container .action-comment {
    cursor: pointer;
}

/* pretty member avatar borders */
.member::after {
    box-shadow: inset 0 0 0 1px #afe2, 0 1px 2px #0007;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 25em;
}

.birds-eye .list-card-members .member::after {
    box-shadow: inset 0 0 0 1px #afe2;
    top: -4px;
}

.list-card-members {
    margin-right: 2px;
}

/* hover effects for notifications — this is really complex but there's not much i can do about it
 * it was designed poorly by trello
 */
.phenom.mod-is-card .content-wrapper, 
.phenom.mod-is-card.mod-unread .content-wrapper, 
.phenom.mod-is-not-card .content-wrapper, 
.phenom.mod-is-not-card.mod-unread .content-wrapper {
    display: grid;
    grid-template-columns: auto 1fr;
}

.notification .phenom-member {
    position: relative;
}

.notification .content-wrapper:hover::before,
.notification .phenom-member:hover::before {
    content: "";
    position: absolute;
    top: -1px;
    left: 3px;
    width: calc(100% - 6px);
    height: calc(100% - 2px);
    background: var(--bg-quiet);
    border-radius: 4px;
    z-index: -5;
}

.notification .phenom-member:hover::before {
    top: 10px;
    height: calc(100% - 11px);
}

.phenom.mod-is-card .archive+.notification .phenom-member:hover::before, 
.phenom.mod-is-card .archive .notification:first-of-type .phenom-member:hover::before, 
.phenom.mod-is-card.mod-unread .archive+.notification .phenom-member:hover::before, 
.phenom.mod-is-card.mod-unread .archive .notification:first-of-type .phenom-member:hover::before, 
.phenom.mod-is-not-card .archive+.notification .phenom-member:hover::before, 
.phenom.mod-is-not-card .archive .notification:first-of-type .phenom-member:hover::before, 
.phenom.mod-is-not-card.mod-unread .archive+.notification .phenom-member:hover::before, 
.phenom.mod-is-not-card.mod-unread .archive .notification:first-of-type .phenom-member:hover::before {
    top: 3px;
    height: calc(100% - 4px);
}

.phenom.mod-is-card .content-wrapper .phenom-spacer, 
.phenom.mod-is-card.mod-unread .content-wrapper .phenom-spacer, 
.phenom.mod-is-not-card .content-wrapper .phenom-spacer, 
.phenom.mod-is-not-card.mod-unread .content-wrapper .phenom-spacer {
    margin-bottom: 0;
    padding-bottom: 11px;
}

.phenom.mod-is-card.mod-unread .phenom-icon, 
.phenom.mod-is-card .phenom-icon, 
.phenom.mod-is-not-card.mod-unread .phenom-icon, 
.phenom.mod-is-not-card .phenom-icon {
    width: 24px;
}

/* list expansion */
.list-wrapper.expanded {
    position: absolute;
    z-index: 500;
    left: 0;
    width: 100%;
}

.list-wrapper.expanded .list-cards {
    display: grid;
    grid-template-columns: repeat(var(--max-list-columns), 1fr);
}

.list-wrapper.expanded .list-card {
    width: calc(100% - 5px);
    max-width: none;
    max-height: 92px;
    overflow: auto;
}

#board.has-expanded-list {
    overflow-x: hidden;
}

.has-expanded-list .list-wrapper:not(.expanded) {
    display: none !important;
}

/* fixes strike through colour in code blocks in checklist items */
.checklist-item-fade-out .checklist-item-details-text code, .checklist-item-state-complete .checklist-item-details-text code {
    text-decoration: line-through;
}

/* Boards menu tweaks: Non-pinned looks like a popover window, fix some colour issues by removing the board button border radius */
.compact-board-tile-background, .compact-board-tile-fade, .compact-board-tile-link-thumbnail {
    border-radius: 0;
}

#boards-drawer .js-board-drawer-buttons {
    margin-right: 4px;
}

.board-drawer-content {
    margin: 0 0 0 12px;
    padding-bottom: 12px;
    padding-top: 12px;
    padding-right: 4px;
}

/* misc */
.calendar-day.today {
    box-shadow: inset 0 0 0 1px #afe2;
}

.known-service-link {
    padding: 4px 7px 7px;
}

.board-menu-navigation-item.mod-power-up-slot .board-menu-navigation-item-link-icon.mod-enabled[style*="github.trello.services"] {
    filter: invert(100%);
    opacity: .7;
}

.board-menu-navigation-item.mod-power-up-slot .board-menu-navigation-item-link.mod-enabled {
    font-weight: bold;
}

/************************************************/
/* List view options                            */
/************************************************/

:root {
    --bg-list-view-options: #22262a99;
}

.list-view-options {
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    width: 50px;
    background: var(--bg-list-view-options);
    z-index: 5000;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    padding: 10px;
    box-sizing: border-box;
}

.list-wrapper {
    position: relative;
    /* prevent a couple pixels of useless vertical scroll */
    height: calc(100% - 2px);
}

.list:hover .list-view-options, .list-wrapper.expanded .list-view-options, .list-wrapper.list-hidden .list-view-options {
    display: block;
}

.list-view-options:hover {
    background: var(--bg-list);
}

.list-view-option {
    display: inline-block;
    width: 35px;
    height: 35px;
    margin-left: -5px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: trellicons;
    font-style: normal;
    font-weight: 400;
    font-size: 12pt;
    line-height: 1;
    text-align: center;
    text-decoration: none;
}

.list-view-option:first-child {
    margin-top: 0;
}

.list-view-option::before {
    margin-left: -2px;
}

.list-view-option-expand::before {
    content: "\\E90B";
}

.list-view-option-expanded-close::before {
    content: "\\E917";
}

.list-view-option-hide::before {
    content: "\\E908";
}

.list-view-option-show::before {
    content: "\\E941";
}

.list-wrapper.expanded .list-view-options {
    left: auto;
    right: 30px;
    background: none;
}

.list-wrapper.expanded .list-view-options button,
.list-wrapper.list-hidden .list-view-options button {
    display: none;
}

.list-view-options span {
    display: none;
}

.list-wrapper.expanded .list-view-options .list-view-option-expanded-close {
    display: block;
    margin-top: -5px;
}

.list-view-options span:hover {
    color: var(--c-icon-hover);
    cursor: pointer;
}

.list-wrapper.list-hidden {
    display: inline-block !important;
    width: 40px;
}

.list-wrapper.list-hidden .list > *:not(.list-header):not(.list-view-options) {
    display: none;
}

.list-wrapper.list-hidden .list-header {
    width: 300px;
    transform-origin: 0% 0%;
    transform: rotate(90deg);
    left: 100%;
    height: 40px;
    box-sizing: border-box;
    background: var(--bg-list);
}

.list-wrapper.list-hidden .list-header > *:not(.list-header-extras) {
    pointer-events: none;
}

.list-wrapper.list-hidden .list-view-options {
    left: 0;
    top: auto;
    top: 220px;
    background: none;
    height: auto;
    width: 40px;
}

.list-wrapper.list-hidden .list-view-option-show {
    display: block;
    margin-left: -5px;
}

/* we have to force the list title textarea to be 1 line because it sizes based on the transformed title for collapsed lists */
.list-header textarea {
    height: 32px !important;
    overflow: hidden !important;
}

/* add a name tooltip for hidden lists (it's kinda hard to read vertical names) */
.list-wrapper.list-hidden:hover {
    z-index: 1000;
    animation: list-show .2s linear 1;
}

@keyframes list-show {
    0% {
        z-index: 999;
    }
    99% {
        z-index: 999;
    }
    100% {
        z-index: 1000;
    }
}

.list-wrapper.list-hidden {
    z-index:999;
    animation: list-hide .2s linear 1;
}

@keyframes list-hide {
    0% {
        z-index: 1000;
    }
    99% {
        z-index: 1000;
    }
    100% {
        z-index: 999;
    }
}

.list-wrapper.list-hidden .list-header-name-assist {
    display: block;
    font-size: inherit;
    transform: rotate(-90deg);
    top: 0px;
    left: 5px;
    position: absolute;
    transform-origin: 0% 0%;
    z-index: 999999;
    background: var(--bg-popover);
    transition: opacity .2s ease-in-out;
    opacity: 0;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid var(--b-popover);
    box-shadow: 0 2px 4px -1px #0008, inset 0 0 0 1px #afe2;
}

.list-wrapper.list-hidden:hover .list-header-name-assist {
    transition: opacity .3s ease-in-out .2s;
    opacity: 1;
}



/************************************************/
/* Birds Eye View                               */
/************************************************/

.birds-eye-button {
     text-decoration: underline;
     padding-right: 8px;
 }

.birds-eye .list-wrapper {
    margin: 0px;
}

.birds-eye .list-cards {
    padding-left: 0;
}

.birds-eye .list {
    border-radius: 0px;
    box-shadow: none !important;
}

.birds-eye .list-card-details {
    padding: 3px 3px 1px 6px;
}

.birds-eye .list-card {
    margin-bottom: 5px;
}

.birds-eye .list-card-labels {
    margin-top: -3px;
    margin-bottom: 4px;
}

.birds-eye .card-label.mod-card-front {
    border-radius: 0;
    margin: 0;
    height: 4px;
}

.birds-eye .badges {
    margin-top: -3px;
    margin-bottom: -3px;
}

.birds-eye .list-card-members .member {
    width: 15px;
    height: 15px;
    background: none;
    margin-bottom: 0;
}

.birds-eye .list-card-members .member-avatar {
    width: 15px;
    height: 15px;
    top: -4px;
    position: relative;
}

.birds-eye .badge {
    margin-bottom: 0;
}



/************************************************/
`;
