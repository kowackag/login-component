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
			<div className="justify-beetwen mb-4 flex align-middle">
				<input
					{...register("saved")}
					type="checkbox"
					id="saved"
					name="saved"
					className="peer fixed opacity-0"
				/>
				<p className="peer-checked:bg-bright-rose mr-3 inline-block h-5 w-5 rounded-md border border-gray-300 leading-5"></p>
				<label htmlFor="save-credentials" className="font-semibold leading-4">
					Remember me?
				</label>
			</div>
			<ConfirmButton>Login</ConfirmButton>
		</form>
	);
};
