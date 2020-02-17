const browserAction =
    typeof browser !== "undefined"
        ? browser.browserAction
        : chrome.browserAction;

const tabs = typeof browser !== "undefined" ? browser.tabs : chrome.tabs;

browserAction.onClicked.addListener(function(tab) {
    tabs.sendMessage(tab.id, { greeting: "hello" }, function(response) {
        console.log(response);
    });
});

tabs.onActivated.addListener(function(activeTab) {
    getCount(activeTab.tabId);
});

tabs.onUpdated.addListener(getCount);

function getCount(tabId) {
    tabs.get(tabId, function(tab) {
        fetch(
            `https://universal-comments.willemliu.now.sh/api/count?canonical=${encodeURI(
                tab.url.replace(/\/$/, "")
            )}`,
            {
                headers: {
                    "Cache-Control": "no-cache"
                }
            }
        )
            .then((res) => res.json())
            .then((json) => {
                const value = json.count ? json.count : "";
                browserAction.setBadgeText({
                    text: `${value}`
                });
            });
    });
}
