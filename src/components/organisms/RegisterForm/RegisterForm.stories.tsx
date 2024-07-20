import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { action } from "@storybook/addon-actions";

import { RegisterForm } from "./RegisterForm";
import { RegisterFormDataTypes } from "@/pages/RegisterPage/RegisterPage";

import { preventSubmitBeforeAction } from "@/utils";

const meta: Meta<typeof RegisterForm> = {
	component: RegisterForm,
	decorators: [
		(Story) => (
			<div style={{ width: "360px" }}>
				<Story />
			</div>
		),
	],
	render: (args) => {
		const { register } = useForm<RegisterFormDataTypes>();
		return <RegisterForm {...args} register={register} />;
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
