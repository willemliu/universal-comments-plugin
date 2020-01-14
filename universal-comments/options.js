const storage =
    typeof browser !== "undefined" ? browser.storage : chrome.storage;

// Saves options to chrome.storage.sync.
function saveOptions() {
    var enable = document.getElementById("enable").checked;
    storage.sync.set(
        {
            enable: enable
        },
        function() {
            // Update status to let user know options were saved.
            var status = document.getElementById("status");
            status.textContent = "Options saved.";
            setTimeout(function() {
                status.textContent = "";
            }, 750);
        }
    );
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
    storage.sync.get(
        {
            enable: true
        },
        function(items) {
            document.getElementById("enable").checked = items.enable;
        }
    );
}
document.addEventListener("DOMContentLoaded", restoreOptions);
document.getElementById("save").addEventListener("click", saveOptions);
