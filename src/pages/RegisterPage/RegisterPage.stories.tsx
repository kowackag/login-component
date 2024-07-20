import { Meta, StoryObj } from "@storybook/react";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import RegisterPage from "./RegisterPage";

const meta: Meta<typeof RegisterPage> = {
	component: RegisterPage,
	render: () => {
		return <RegisterPage />;
	},
	parameters: {
		reactRouter: reactRouterParameters({
			location: {
				path: "/login",
			},
			routing: {
				path: "/login",
				handle: "",
			},
		}),
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
