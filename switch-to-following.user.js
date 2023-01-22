// ==UserScript==
// @name        Twitter - Switch to Following
// @namespace   twitterScript
// @match       https://twitter.com/*
// @grant       none
// @version     0.8
// @author      Rodziac
// @description Switches Twitter home feed to "Following" automatically when you are at "Home" page.
// ==/UserScript==

let stop = false
setInterval(() => {
	if (window.location.pathname === '/home' && !stop && document.querySelectorAll('a[role="tab"]').length === 2) {
		[...document.querySelectorAll('a[role="tab"]')].pop().click()
		stop = true
	} else if (window.location.pathname !== '/home' && stop) {
		stop = false
	}
}, 1000)
