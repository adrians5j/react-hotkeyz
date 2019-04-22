// @flow
import React from "react";
import Story from "./Story";
import { Hotkeys } from "./../src";

type Props = {};
type State = {
    currentZIndex: number
};

class HOCExample extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = { currentZIndex: 0 };
    }

    decrementZIndex = () => {
        this.setState({ currentZIndex: this.state.currentZIndex - 1 });
    };

    incrementZIndex = () => {
        this.setState({ currentZIndex: this.state.currentZIndex + 1 });
    };

    render() {
        const { currentZIndex } = this.state;

        return (
            <Story>
                <title>Higher order component (HOC) example</title>
                <description>
                    Pressing escape on different z-indexes closes different elements.
                </description>
                <example>
                    Current z-index: {this.state.currentZIndex}
                    <div>
                        <button disabled={currentZIndex !== 0} onClick={this.incrementZIndex}>
                            Go to z-index 1
                        </button>
                    </div>
                    {this.state.currentZIndex >= 1 && (
                        <Hotkeys
                            zIndex={1}
                            keys={{
                                esc: e => {
                                    this.decrementZIndex();
                                    e.stopPropagation();
                                }
                            }}
                        >
                            <div>
                                <button
                                    disabled={currentZIndex !== 1}
                                    onClick={this.incrementZIndex}
                                >
                                    Go to z-index 2
                                </button>
                            </div>
                        </Hotkeys>
                    )}
                    {this.state.currentZIndex >= 2 && (
                        <Hotkeys
                            zIndex={2}
                            keys={{
                                esc: e => {
                                    this.decrementZIndex();
                                    e.stopPropagation();
                                }
                            }}
                        >
                            <div>
                                <button
                                    disabled={currentZIndex !== 2}
                                    onClick={this.incrementZIndex}
                                >
                                    Go to z-index 3
                                </button>
                            </div>
                        </Hotkeys>
                    )}
                    {this.state.currentZIndex >= 3 && (
                        <Hotkeys
                            zIndex={3}
                            keys={{
                                esc: e => {
                                    this.decrementZIndex();
                                    e.stopPropagation();
                                }
                            }}
                        >
                            <div>Now try pressing &quot;Esc&quot; key</div>
                        </Hotkeys>
                    )}
                </example>
                <code>{code()}</code>
            </Story>
        );
    }
}

const code = () => /* React */ "";

export default HOCExample;
