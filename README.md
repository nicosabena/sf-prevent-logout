# Salesforce Prevent Idp Logout

Chrome extension to keep Salesforce from redirecting to the upstream identity provider logout endpoint. Because that's not cool.

This can probably be fixed on Salesforce by configuration, so this is just a dirty hack until the configuration is updated.

### How do I use the extension?

 **To install in Google Chrome:**

* Clone this repository to a folder on your machine
* Navigate to `chrome://extensions/` in Chrome
* Ensure that "Developer Mode" is toggled in the upper right-hand corner
* Click the "Load Unpacked" button on the left-hand side of the screen
* Select the folder containing the cloned repository

> **Note:** To update the extension in Chrome after making code changes (or pulling the latest changes from the repo), go to the extension settings page, toggle the "On" switch for the extension, and then refresh any open Salesforce Support Center tabs.

### How does it work?

It detects and blocks requests to `https://auth0corp.auth0.com/logout` when the referrer is `https://auth0.my.salesforce.com/` (which means that you can still log out manually if you want to by navigating to the logout URL).

### Contributing

Anyone is welcome to contribute. But hopefully this extension won't be needed for long.
