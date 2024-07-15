import type { Meta } from "@storybook/react";
import { useForm } from "react-hook-form";
import { fn } from "@storybook/test";

import { LoginForm } from "./LoginForm";
import { LoginFormDataTypes } from "@/pages/LoginPage/LoginPage";

const meta: Meta<typeof LoginForm> = {
	component: LoginForm,
	decorators: [
		(Story) => (
			<div style={{ width: "360px" }}>
				<Story />
			</div>
		),
	],
};

export default meta;

const onSubmit = fn();
const errors = {
	email: { message: "it is required", type: "required" },
	password: { message: "some error", type: "required" },
};

export const Default = () => {
	const { register } = useForm<LoginFormDataTypes>();

	return <LoginForm onSubmit={onSubmit} register={register} errors={errors} />;
};
