import { AuthWrapper } from "@/components/atoms/AuthWrapper";
import { RegisterTemplate } from "@/components/templates/RegisterTemplate";
import { RegisterForm } from "@/components/organisms/RegisterForm";
import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

function Register() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<Zod.output<typeof registerShema>>({
		resolver: zodResolver(registerShema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const onSubmit = handleSubmit((data: FormDataType) => console.log(data));
	return (
		<div className="font-body right-0 flex min-h-screen w-full bg-navy-blue">
			<AuthWrapper>
				<RegisterTemplate>
					<RegisterForm onSubmit={onSubmit} register={register} errors={errors} />
				</RegisterTemplate>
			</AuthWrapper>
		</div>
	);
}

export default Register;
