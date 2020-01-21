const storage =
    typeof browser !== "undefined" ? browser.storage : chrome.storage;

function preventSubmit() {
    return false;
}

// Saves options to chrome.storage.sync.
function saveOptions() {
    var enable = document.getElementById("enable").checked;
    var hideButtonOverlay = document.getElementById("hideButtonOverlay")
        .checked;
    var overlayHeight = document.getElementById("overlayHeight").value;
    storage.sync.set(
        {
            enable,
            hideButtonOverlay,
            overlayHeight: Math.min(overlayHeight, 100)
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
            enable: true,
            hideButtonOverlay: false,
            overlayHeight: 50
        },
        function(items) {
            document.getElementById("enable").checked = items.enable;
            document.getElementById("hideButtonOverlay").checked =
                items.hideButtonOverlay;
            document.getElementById("overlayHeight").value = Math.min(
                items.overlayHeight,
                100
            );
        }
    );
}

document.addEventListener("DOMContentLoaded", () => {
    restoreOptions();
    document.getElementById("save").addEventListener("click", saveOptions);
    document
        .querySelector("#optionsForm")
        .addEventListener("submit", preventSubmit);
});
