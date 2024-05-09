import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { schema } from "@/views/authSchema";
import { ConfirmButton } from "@ui/atoms/ConfirmButton";

import { FormDataType } from "@/utils/shared.types";
import { FormField } from "@ui/molecules/FormField";
import { Checkbox } from "../molecules/Checkbox";

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
			saved: false,
		},
	});
	const onSubmit = (data: FormDataType) => console.log(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{/* CredentialsFields */}
			<FormField
				name="email"
				label="Email"
				// type="email"
				register={register}
				error={errors.email?.message}
			/>
			<FormField
				name="password"
				label="Password"
				type="password"
				register={register}
				error={errors.password?.message}
			/>
			<Checkbox name="saved" label="Remember me?" register={register} />
			<ConfirmButton>Login</ConfirmButton>
		</form>
	);
};
