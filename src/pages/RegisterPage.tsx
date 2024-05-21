import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { RegisterPageTemplate } from "@/components/templates/RegisterPageTemplate";

import { registerShema } from "./authSchema";
import { FormDataType } from "@/utils/shared.types";

export type RegisterFieldsTypes = {
	email: string;
	password: string;
};
export type RegisterFormType = {
	onSubmit: React.FormEventHandler;
	errors?: FieldErrors<RegisterFieldsTypes>;
	register: UseFormRegister<RegisterFieldsTypes>;
};

type RegisterFormDataTypes = {
	email: string;
	password: string;
};

function RegisterPage() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<RegisterFormDataTypes>({
		resolver: zodResolver(registerShema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const onSubmit = handleSubmit((data: FormDataType) => console.log(data));
	return <RegisterPageTemplate onSubmit={onSubmit} register={register} errors={errors} />;
}

export default RegisterPage;
