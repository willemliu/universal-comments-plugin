import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface Props {
    onCollapsed?: (opened: boolean) => void;
    open?: boolean;
    url: string;
    themeColor?: string;
    [x: string]: any;
}

function Content(props: Props) {
    const [count, setCount] = useState(null);
    const [collapsed, setCollapsed] = useState(!props.open);
    const [hideButton, setHideButton] = useState(
        props.hideButtonOverlay && collapsed
    );

    useEffect(() => {
        if (!hideButton) {
            fetch(props.url, {
                headers: {
                    "Cache-Control": "no-cache"
                }
            })
                .then((res) => res.json())
                .then((json) => {
                    if (json.count) {
                        setCount(json.count);
                    }
                });
        }
    }, []);

    useEffect(() => {
        setHideButton(props.hideButtonOverlay && collapsed);
    }, [props.hideButtonOverlay, collapsed]);

    useEffect(() => {
        setCollapsed(!props.open);
    }, [props.open]);

    /**
     * Callback
     */
    useEffect(() => {
        if (props.onCollapsed) {
            props.onCollapsed(collapsed);
        }
    }, [collapsed]);

    function toggleCollapse() {
        setCollapsed(!collapsed);
    }

    return (
        <>
            {hideButton ? null : (
                <StyledContent
                    collapsed={collapsed}
                    themeColor={props.themeColor}
                >
                    <StyledHeader onClick={toggleCollapse}>
                        Universal Comments{" "}
                        <span>{count ? `(${count})` : ""}</span>
                    </StyledHeader>
                    {!collapsed && props.children}
                </StyledContent>
            )}
        </>
    );
}

const StyledContent = styled.section<{
    collapsed: boolean;
    themeColor?: string;
}>`
    padding: 1rem;
    box-sizing: border-box;
    height: ${(props: any) => (props.collapsed ? "auto" : "50vh")};
    width: ${(props: any) => (props.collapsed ? "auto" : "100vw")};
    background-color: ${(props: any) => props.themeColor};
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
`;

const StyledHeader = styled.h2`
    font-size: 1rem;
    padding: 0.5rem 0;
    margin: 0;
    cursor: pointer;
`;
export { Content };
