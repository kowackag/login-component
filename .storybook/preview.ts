import type { Preview } from "@storybook/react";
import { withRouter, reactRouterParameters } from "storybook-addon-remix-react-router";
import "../src/index.css";

const preview: Preview = {
	decorators: [withRouter],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		//reactRouter: reactRouterParameters({
			// location: {
			// 	pathParams: {},
			// 	searchParams: {},
			// 	state: {},
			// },
			// routing: {
			// 	path: "",
			// 	handle: "",
			// },
		//}),
	},
	args: {},
};

export default preview;
