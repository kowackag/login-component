import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { LoginTemplate } from "@/components/templates/LoginTemplate";
import { LoginForm } from "@/components/organisms/LoginForm";
import { AuthWrapper } from "@/components/atoms/AuthWrapper";

import { schema } from "@/pages/authSchema";
import { FormDataType } from "@/utils/shared.types";

type LoginFieldsTypes = { email: string; password: string; toSave: boolean };
export type LoginFormType = {
	onSubmit: React.FormEventHandler;
	errors?: FieldErrors<LoginFieldsTypes>;
	register: UseFormRegister<LoginFieldsTypes>;
};

function Login() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<Zod.output<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: "",
			password: "",
			toSave: false,
		},
	});

	return (
		<div className="flex min-h-screen w-full bg-navy-blue">
			<AuthWrapper>
				<LoginTemplate>
					<LoginForm
						onSubmit={handleSubmit((data: FormDataType) => console.log(data))}
						register={register}
						errors={errors}
					/>
				</LoginTemplate>
			</AuthWrapper>
		</div>
	);
}

export default Login;
