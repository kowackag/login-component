import { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { reactRouterParameters } from "storybook-addon-remix-react-router";
import { action } from "@storybook/addon-actions";

import { RegisterPageTemplate } from "./RegisterPageTemplate";
import { RegisterFormDataTypes, RegisterFormType } from "@/pages/RegisterPage/RegisterPage";
import { preventSubmitBeforeAction } from "@/utils";


const meta: Meta<typeof RegisterPageTemplate> = {
	component: RegisterPageTemplate,
	render: (args) => {
		const { register } = useForm<RegisterFormDataTypes>();
		return <RegisterPageTemplate {...args} register={register} />;
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

type Story = StoryObj<RegisterFormType>;

const errors = {
	email: { message: "it is required", type: "required" },
};
export const Default: Story = {
	args: {
		errors,
		onSubmit: preventSubmitBeforeAction(action("onSubmit")),
	},
};
