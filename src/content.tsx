import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import { App } from "./components/App";

declare var chrome: any;
declare var browser: any;

const storage =
    typeof browser !== "undefined" ? browser.storage : chrome.storage;

/**
 * Entry point.
 */
storage.sync.get(
    {
        enable: true,
        hideButtonOverlay: false,
        keepUrlParams: false,
        overlayHeight: 50,
    },
    (items: any) => {
        const disabledMeta = document.querySelector('meta[name="uc:disabled"]');
        if (disabledMeta) {
            items.enable = disabledMeta.getAttribute("content") !== "true";
        }
        console.log("Universal Comments enabled", items.enable);

        if (items.enable) {
            console.log(
                "Universal Comments keep URL parameters",
                items.keepUrlParams
            );
            const rootEl = document.createElement("section");
            rootEl.setAttribute("class", "universal-comments-extension");
            document.body.appendChild(rootEl);

            ReactDOM.render(
                <>
                    <GlobalStyle />
                    <App
                        hideButtonOverlay={items.hideButtonOverlay}
                        keepUrlParams={items.keepUrlParams}
                        overlayHeight={items.overlayHeight}
                    />
                </>,
                document.querySelector(".universal-comments-extension")
            );
        }
    }
);

const GlobalStyle = createGlobalStyle`
.universal-comments-extension {
    position: fixed;
    display: inline-block;
    left: 0;
    bottom: 0;
    z-index: 9999;
}
`;
