import { Content } from "./Content";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

declare var chrome: any;
declare var browser: any;

const runtime =
    typeof browser !== "undefined" ? browser.runtime : chrome.runtime;

function App(props: any) {
    const [opened, setOpened] = useState(props.opened || false);

    useEffect(() => {
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
                    props.canonical
                )}`}
                open={opened}
                onCollapsed={onCollapsed}
                hideButtonOverlay={props.hideButtonOverlay}
                themeColor={props.themeColor}
            >
                <StyledIframe
                    src={`https://universal-comments.willemliu.now.sh?canonical=${encodeURI(
                        props.canonical
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
