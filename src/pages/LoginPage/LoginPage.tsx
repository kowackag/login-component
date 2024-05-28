import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginPageTemplate } from "@/components/templates/LoginPageTemplate/LoginPageTemplate";

import { schema } from "@/pages/authSchema";

type LoginFieldsTypes = { email: string; password: string; toSave: boolean };
export type LoginFormType = {
	onSubmit: React.FormEventHandler;
	errors?: FieldErrors<LoginFieldsTypes>;
	register: UseFormRegister<LoginFieldsTypes>;
};

type LoginFormDataTypes = {
	email: string;
	password: string;
	toSave: boolean;
};
function LoginPage() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<LoginFormDataTypes>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: "",
			password: "",
			toSave: false,
		},
	});

	const onSubmit = handleSubmit((data) => {
		console.log(data);
	});

	return <LoginPageTemplate onSubmit={onSubmit} register={register} errors={errors} />;
}

export default LoginPage;
