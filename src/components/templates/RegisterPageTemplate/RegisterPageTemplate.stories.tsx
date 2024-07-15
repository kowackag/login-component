import { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { fn } from "@storybook/test";

import { RegisterPageTemplate } from "./RegisterPageTemplate";
import { RegisterFormDataTypes, RegisterFormType } from "@/pages/RegisterPage/RegisterPage";

const meta: Meta<typeof RegisterPageTemplate> = {
	component: RegisterPageTemplate,
	render: (args: Partial<RegisterFormType>) => {
		const { register } = useForm<RegisterFormDataTypes>();
		return <RegisterPageTemplate {...args} onSubmit={onSubmit} register={register} />;
	},
};

export default meta;

type Story = StoryObj<RegisterFormType>;
const onSubmit = fn();
const errors = {
	email: { message: "it is required", type: "required" },
};
export const Default: Story = {
	args: {
		errors,
	},
};
