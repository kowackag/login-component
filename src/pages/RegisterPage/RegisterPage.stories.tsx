import { Meta, StoryObj } from "@storybook/react";
import  RegisterPage  from "./RegisterPage";

const meta: Meta<typeof RegisterPage> = {
	component: RegisterPage,
	render: () => {
		
		return <RegisterPage  />;
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
