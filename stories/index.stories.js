import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import HOCExample from "./HOCExample";
import HooksExample from "./HooksExample";

const stories = storiesOf("react-hotkeyz", module);

stories.addDecorator(withKnobs);

stories.add("HOC example", () => <HOCExample />);
stories.add("Hooks example", () => <HooksExample />);
