import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { action } from "@storybook/addon-actions";

import { LoginForm } from "./LoginForm";
import { LoginFormDataTypes } from "@/pages/LoginPage/LoginPage";

import { preventSubmitBeforeAction } from "@/utils";

const meta: Meta<typeof LoginForm> = {
	component: LoginForm,
	decorators: [
		(Story) => (
			<div style={{ width: "360px" }}>
				<Story />
			</div>
		),
	],
	render: (args) => {
		const { register } = useForm<LoginFormDataTypes>();
		return <LoginForm {...args} register={register} />;
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

const errors = {
	email: { message: "it is required", type: "required" },
	password: { message: "some error", type: "required" },
};

export const Default: Story = {
	args: {
		errors,
		onSubmit: preventSubmitBeforeAction(action("onSubmit")),
	},
};
