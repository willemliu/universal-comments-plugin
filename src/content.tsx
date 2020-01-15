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
        hideButtonOverlay: false
    },
    (items: any) => {
        console.log("Universal Comments enabled", items.enable);
        if (items.enable) {
            // Render the read history widget
            const rootEl = document.createElement("section");
            rootEl.setAttribute("class", "universal-comments-extension");
            document.body.appendChild(rootEl);

            const canonical = document.querySelector('link[rel="canonical"]');
            const url = canonical
                ? canonical.getAttribute("href") || "about:blank"
                : window.location.origin +
                  (window.location.pathname.length > 1
                      ? window.location.pathname
                      : "");

            ReactDOM.render(
                <>
                    <GlobalStyle />
                    <App
                        canonical={url}
                        hideButtonOverlay={items.hideButtonOverlay}
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
    z-index: 999;
    background-color: #e6d3c6;
}
`;
