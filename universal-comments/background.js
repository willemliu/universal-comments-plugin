const browserAction =
    typeof browser !== "undefined"
        ? browser.browserAction
        : chrome.browserAction;

const tabs = typeof browser !== "undefined" ? browser.tabs : chrome.tabs;

browserAction.onClicked.addListener(function(tab) {
    tabs.sendMessage(tab.id, { greeting: "hello" }, function(response) {
        console.log(JSON.stringify(response));
    });
});
