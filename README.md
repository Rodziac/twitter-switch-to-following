# Twitter - Switch to Following
## What
Whenever you are at Twitter "Home" page, this script will make sure you are set to "Following" by default.
## Prerequisites
- Computer (Sorry, this one isn't for mobile apps)
- Browser (Firefox or Chrome preferably, but anything that TM or GM supports should work)
- Userscript loader extension ([Tampermonkey](https://www.tampermonkey.net/) or [Greasemonkey](https://www.greasespot.net/)) installed
## Use
- Navigate to [raw script page](https://github.com/Rodziac/twitter-switch-to-following/raw/main/switch-to-following.user.js)
- When your userscript loader opens the script installation page, install the script
- Use Twitter
## How
- Script will check which page you are at
	- If you are at Home
		- It will check if the script already changed the tab on this session. Continue if not
		- It will check if tabs are rendered
			- If all the conditions match
				- It will switch tab to "Following"
				- It will wait until you navigate away before automatically switching tabs again
					- This will allow you to change to "For you" if you want to for any reason
	- If you are not at Home
		- It will know to set the tab to Following when you are at Home
## Data
Code is open source and pretty easy to read. This script does not do anything other than checking your page URL and clicking the tab on the page. It does not collect or send any kind of data.
