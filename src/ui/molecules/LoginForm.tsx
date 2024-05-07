import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { schema } from "@/views/authSchema";
import { ConfirmButton } from "@ui/atoms/ConfirmButton";

import { FormDataType } from "@/utils/shared.types";
import { FormField } from "@ui/molecules/FormField";

export const LoginForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<Zod.output<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const onSubmit = (data: FormDataType) => console.log(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FormField name="email" label="Email" register={register} error={errors.email?.message} />
			<FormField
				name="password"
				label="Password"
				type="password"
				register={register}
				error={errors.password?.message}
			/>
		
			<ConfirmButton>Login</ConfirmButton>
		</form>
	);
};
