import { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import LoginPage from "./LoginPage";

const meta: Meta<typeof LoginPage> = {
	component: LoginPage,
	render: () => {
		return <LoginPage />;
	},
	parameters: {
		reactRouter: reactRouterParameters({
			location: {
				path: "/register",
			},
			routing: {
				path: "/register",
			},
		}),
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
