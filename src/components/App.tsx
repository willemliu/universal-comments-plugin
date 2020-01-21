import { Content } from "./Content";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { lightOrDark } from "../utils/lightOrDark";

declare var chrome: any;
declare var browser: any;

const runtime =
    typeof browser !== "undefined" ? browser.runtime : chrome.runtime;

function getCanonical() {
    const canonical = document.querySelector('link[rel="canonical"]');
    return canonical
        ? canonical.getAttribute("href") || "about:blank"
        : window.location.origin +
              (window.location.pathname.length > 1
                  ? window.location.pathname
                  : "");
}

function App(props: any) {
    const [canonical, setCanonical] = useState(getCanonical());
    const [themeColor, setThemeColor] = useState("#fff");
    const [opened, setOpened] = useState(props.opened || false);

    useEffect(() => {
        if (!canonical) {
            const observer = new MutationObserver((mutationsList, observer) => {
                if (canonical && getCanonical()) {
                    console.log(
                        "URL changed?",
                        canonical != getCanonical(),
                        "canonical: ",
                        canonical,
                        "getCanonical: ",
                        getCanonical()
                    );
                    setCanonical(getCanonical());
                }
            });
            observer.observe(document.body, { childList: true, subtree: true });
        }
    }, [canonical]);

    useEffect(() => {
        let theme = "#fff";
        const themeMeta = document.querySelector('meta[name="theme-color"]');
        if (themeMeta?.getAttribute("content")) {
            theme = themeMeta.getAttribute("content") || "#fff";
            if (lightOrDark(theme) === "dark") {
                theme = "#fff";
            }
        }
        setThemeColor(theme);

        runtime.onMessage.addListener(
            (request: any, sender: any, sendResponse: any) => {
                setOpened((open: boolean) => !open);
                sendResponse({ status: 200 });
            }
        );
    }, []);

    function onCollapsed(collapsed: boolean) {
        setOpened(!collapsed);
    }

    return (
        <>
            <Content
                url={`https://universal-comments.willemliu.now.sh/api/count?canonical=${encodeURI(
                    canonical
                )}`}
                open={opened}
                onCollapsed={onCollapsed}
                hideButtonOverlay={props.hideButtonOverlay}
                themeColor={themeColor}
                overlayHeight={props.overlayHeight}
            >
                <StyledIframe
                    src={`https://universal-comments.willemliu.now.sh?canonical=${encodeURI(
                        canonical
                    )}`}
                />
            </Content>
        </>
    );
}

const StyledIframe = styled.iframe`
    width: 100%;
    height: calc(100% - 30px);
    border: none;
`;

export { App };
