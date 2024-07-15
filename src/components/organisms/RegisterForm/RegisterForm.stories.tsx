import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { fn } from "@storybook/test";

import { RegisterForm } from "./RegisterForm";
import { RegisterFormDataTypes, RegisterFormType } from "@/pages/RegisterPage/RegisterPage";

const meta: Meta<typeof RegisterForm> = {
	component: RegisterForm,
	decorators: [
		(Story) => (
			<div style={{ width: "360px" }}>
				<Story />
			</div>
		),
	],
	render: (args: Partial<RegisterFormType>) => {
		const { register } = useForm<RegisterFormDataTypes>();
		return <RegisterForm {...args} onSubmit={onSubmit} register={register} />;
	},
};

export default meta;

type Story = StoryObj<RegisterFormType>;
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
