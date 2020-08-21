# Twilio Studio Chrome Extension

This chrome extension adds some features to Twilio Studio in console such as showing up the reviewer email and adding custom widgets. Note that this extension is an experiment. 

## Setup

After cloning this repository, you need to install the extension. Go to `chrome://extensions/`, click `Load unpacked` and then select your extension folder.

## Features

### Enhance Studio Flow Revision History

After installing the extension, go to [this page](https://www.twilio.com/console/project/users) so the extension can read the list of users. Next, you can go to any Studio Flow Revision History and check out the last column of the table. This column will replace the `User SID` with `User Email`.

### Custom Studio Widget

With this feature, you can add a form to any `Run Function or Make HTTP Request Widgets`. This form can then be sent as a parameter to your function/endpoint.

<p align="center">
    <img src="screenshots/custom_widget.png?raw=true" width="400">
</p>


## TODO

1. Extract form inputs and send them to the function/endpoint.
2. Study a better way to select the necessary divs in the Studio UI.

## Know Issues

1. If the `User SID` is not being replace with `User Email` even after going to [this page](https://www.twilio.com/console/project/users), please reload the page. The same is valid to the `custom widget` form.