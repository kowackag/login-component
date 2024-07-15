import type { Meta } from "@storybook/react";
import { useForm } from "react-hook-form";
import { fn } from "@storybook/test";

import { RegisterForm } from "./RegisterForm";
import { RegisterFormDataTypes } from "@/pages/RegisterPage/RegisterPage";

const meta: Meta<typeof RegisterForm> = {
	component: RegisterForm,
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
	const { register } = useForm<RegisterFormDataTypes>();

	return <RegisterForm register={register} errors={errors} onSubmit={onSubmit} />;
};
