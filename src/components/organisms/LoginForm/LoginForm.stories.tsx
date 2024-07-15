import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { fn } from "@storybook/test";

import { LoginForm } from "./LoginForm";
import { LoginFormDataTypes, LoginFormType } from "@/pages/LoginPage/LoginPage";

const meta: Meta<typeof LoginForm> = {
	component: LoginForm,
	decorators: [
		(Story) => (
			<div style={{ width: "360px" }}>
				<Story />
			</div>
		),
	],
	render: (args: Partial<LoginFormType>) => {
		const { register } = useForm<LoginFormDataTypes>();
		return <LoginForm {...args} onSubmit={onSubmit} register={register} />;
	},
};

export default meta;

type Story = StoryObj<LoginFormType>;
const onSubmit = fn();
const errors = {
	email: { message: "it is required", type: "required" },
	password: { message: "some error", type: "required" },
};

export const Default: Story = {
	args: {
		errors,
	},
};
