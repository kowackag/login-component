import { AuthWrapper } from "@/components/atoms/AuthWrapper";
import { LoginTemplate } from "@/components/templates/LoginTemplate";
import { LoginForm } from "@/components/organisms/LoginForm";
import { FormDataType } from "@/utils/shared.types";
import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/pages/authSchema";

type LoginFieldsTypes = { email: string; password: string; saved: boolean };
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
			saved: false,
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
