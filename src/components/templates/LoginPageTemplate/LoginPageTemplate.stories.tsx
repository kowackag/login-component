import { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { action } from "@storybook/addon-actions";
import { reactRouterParameters } from "storybook-addon-remix-react-router";

import { LoginPageTemplate } from "./LoginPageTemplate";
import { LoginFormDataTypes } from "@/pages/LoginPage/LoginPage";
import { preventSubmitBeforeAction } from "@/utils";

const meta: Meta<typeof LoginPageTemplate> = {
	component: LoginPageTemplate,
	render: (args) => {
		const { register } = useForm<LoginFormDataTypes>();
		return <LoginPageTemplate {...args} register={register} />;
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

const errors = {
	email: { message: "it is required", type: "required" },
	password: { message: "some error", type: "required" },
};
export const Default: Story = {
	args: {
		onSubmit: preventSubmitBeforeAction(action("onSubmit")),
		errors,
	},
};
