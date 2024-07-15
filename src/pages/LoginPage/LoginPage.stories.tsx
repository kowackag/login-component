import { Meta, StoryObj } from "@storybook/react";
import  LoginPage  from "./LoginPage";

const meta: Meta<typeof LoginPage> = {
	component: LoginPage,
	render: () => {
		
		return <LoginPage  />;
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
