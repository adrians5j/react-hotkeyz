// @flow
import React, { useState } from "react";
import Story from "./Story";
import { useHotkeys } from "./../src";

function HooksExample() {
    const [currentZIndex, setCurrentZIndex] = useState(0);

    const decrementZIndex = () => {
        setCurrentZIndex(currentZIndex - 1);
    };

    const incrementZIndex = () => {
        setCurrentZIndex(currentZIndex + 1);
    };

    useHotkeys({
        zIndex: 1,
        keys: {
            esc: e => {
                e.stopPropagation();
                decrementZIndex();
            }
        },
        disabled: currentZIndex !== 1
    });
    useHotkeys({
        zIndex: 2,
        keys: {
            esc: e => {
                e.stopPropagation();
                decrementZIndex();
            }
        },
        disabled: currentZIndex !== 2
    });
    useHotkeys({
        zIndex: 3,
        keys: {
            esc: e => {
                e.stopPropagation();
                decrementZIndex();
            }
        },
        disabled: currentZIndex !== 3
    });

    return (
        <Story>
            <title>Hook example</title>
            <description>
                Pressing escape on different z-indexes closes different elements.
            </description>
            <example>
                Current z-index: {currentZIndex}
                <div>
                    <button disabled={currentZIndex !== 0} onClick={incrementZIndex}>
                        Go to z-index 1
                    </button>
                </div>
                {currentZIndex >= 1 && (
                    <div>
                        <button disabled={currentZIndex !== 1} onClick={incrementZIndex}>
                            Go to z-index 2
                        </button>
                    </div>
                )}
                {currentZIndex >= 2 && (
                    <div>
                        <button disabled={currentZIndex !== 2} onClick={incrementZIndex}>
                            Go to z-index 3
                        </button>
                    </div>
                )}
                {currentZIndex >= 3 && <div>Now try pressing &quot;Esc&quot; key</div>}
            </example>
            <code>{code()}</code>
        </Story>
    );
}

const code = () => /* React */ "";

export default HooksExample;
