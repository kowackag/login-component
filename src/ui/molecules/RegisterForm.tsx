import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { schema } from "@/views/authSchema";
import { ConfirmButton } from "@ui/atoms/ConfirmButton";

import { FormDataType } from "@/utils/shared.types";
import { FormField } from "@ui/molecules/FormField";

export const RegisterForm = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<Zod.output<typeof schema>>({
		resolver: zodResolver(schema),
		defaultValues: {
			email: "",
			password: "",
			saved: false,
		},
	});
	const onSubmit = (data: FormDataType) => {
		console.log(data);
		reset();
	};
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
			<ConfirmButton>Sign up</ConfirmButton>
		</form>
	);
};
