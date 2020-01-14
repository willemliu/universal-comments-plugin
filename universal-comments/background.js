const browserAction =
    typeof browser !== "undefined"
        ? browser.browserAction
        : chrome.browserAction;

const tabs = typeof browser !== "undefined" ? browser.tabs : chrome.tabs;

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.sendMessage(tab.id, { greeting: "hello" }, function(response) {
        console.log(JSON.stringify(response));
    });
});
