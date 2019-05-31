// @flow
import * as React from "react";
import isHotkey from "is-hotkey";

type HookProps = {
    disabled?: boolean,
    zIndex: number,
    keys?: { [string]: Function }
};

type HocProps = {
    children: React.Node,
    disabled?: boolean,
    zIndex: number,
    keys: { [string]: Function }
};

type State = {
    listenerAttached: boolean,
    zIndex: null | number,
    handlers: Object
};

const state: State = {
    listenerAttached: false,
    zIndex: null,
    handlers: {}
};

function triggerHotkeys(e: Event) {
    if (state.zIndex === null) {
        return;
    }

    const keys = state.handlers[state.zIndex];
    for (let key in keys) {
        if (isHotkey(key, e)) {
            keys[key](e);
            break;
        }
    }
}

function registerZIndex({ zIndex, keys }) {
    if (state.zIndex === null || state.zIndex < zIndex) {
        state.zIndex = zIndex;
    }

    if (!state.handlers[zIndex]) {
        state.handlers[zIndex] = {};
    }

    if (!keys || Object.keys(keys).length === 0) {
        return;
    }

    for (let key in keys) {
        if (key in state.handlers[zIndex]) {
            throw Error(`Shortcut "${key}" already registered on zIndex ${zIndex}.`);
        }
        state.handlers[zIndex][key] = keys[key];
    }

    if (!state.listenerAttached) {
        // $FlowFixMe
        document.body.addEventListener("keydown", triggerHotkeys);
        state.listenerAttached = true;
    }
}

function unregisterZIndex({ zIndex, keys }) {
    if (state.handlers && state.handlers[zIndex]) {
        for (let key in keys) {
            delete state.handlers[zIndex][key];
        }

        if (Object.keys(state.handlers[zIndex]).length === 0) {
            delete state.handlers[zIndex];
        }
    }

    if (Object.keys(state.handlers).length > 0) {
        // Fall back to the highest registered z-index.
        state.zIndex = window.Math.max(...Object.keys(state.handlers));
    } else {
        state.zIndex = null;

        if (state.listenerAttached) {
            // $FlowFixMe
            document.body.removeEventListener("keydown", triggerHotkeys);
            state.listenerAttached = false;
        }
    }
}

const { useEffect, useRef } = React;

export function useHotkeys(props: HookProps) {
    const { disabled, zIndex, keys } = props;

    const prevDisabledRef = useRef();

    useEffect(function() {
        if (prevDisabledRef.current !== disabled) {
            disabled ? unregisterZIndex(props) : registerZIndex(props);
        }

        if (!disabled) {
            Object.assign(state.handlers[zIndex], keys);
        }

        prevDisabledRef.current = disabled;
    });
}

export function Hotkeys({ children, ...props }: HocProps) {
    useHotkeys(props);
    return <>{children}</>;
}
