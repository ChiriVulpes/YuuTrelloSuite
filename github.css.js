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

.commit:hover,
.pull-request:hover,
.issue:hover,
.branch:hover {
    background-color: var(--bg-quiet);
}

.pull-request .ref,
.branch .ref {
    background: var(--bg-quiet);
}

.branch .commit {
    background: none;
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
    --c-pr-merged: #765bd7;
    --c-pr-closed: #d81700;
    --c-pr-open: #71e13f;
}

body {
    color: var(--c-quiet);
}

a, 
.commit-icon,
.issue-icon,
.issue .title {
    color: var(--c-a);
}

a:hover,
.commit:hover .commit-details a,
.commit:hover .commit-icon,
.issue:hover .title,
.issue:hover .issue-icon {
    color: var(--c-a-hover);
}

.u-quiet,
.pull-request .quiet {
    color: var(--c-quiet);
}

.pull-request.state-merged {
    --pr-color: var(--c-pr-merged);
} 

.pull-request.state-closed {
    --pr-color: #b05278;
} 

.pull-request.state-open {
    --pr-color: #54be89;
} 

.pull-request .title,
.pull-request .title:hover,
.pull-request .pull-request-state .state .octicon {
    color: var(--pr-color);
    opacity: .7;
}

.pull-request:hover .title,
.pull-request:hover .pull-request-state .state .octicon {
    opacity: 1;
}

.commit .comments,
.pull-request .comments,
.pull-request .comments .octicon,
.issue .comments {
    color: var(--c-quiet);
}

.pull-request .ref {
    color: var(--c-a-hover);
}

.branch .ref {
    color: var(--c-a);
}

.branch:hover .ref {
    color: var(--c-a-hover);
}



/************************************************/
/* Misc                                         */
/************************************************/

.commit-icon, 
.issue-icon,
.branch-icon {
    margin-top: 2px;
}

.pull-request {
    padding-left: 10px;
    padding-top: 6px;
    padding-bottom: 3px;
}

.branch .ref {
    padding: 2px 4px 3px;
}

.branch .commit {
    margin-top: 4px;
    margin-bottom: 6px;
}

.branch:hover .ref {
    text-decoration: underline;
}

/************************************************/
`;