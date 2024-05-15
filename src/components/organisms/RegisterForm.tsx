import { ConfirmButton } from "@/components/atoms/ConfirmButton";

import { RegisterFormType } from "@/pages/Register";
import { FormInput } from "../molecules/FormInput";

export const RegisterForm = ({ onSubmit, register, errors }: RegisterFormType) => {
	return (
		<form onSubmit={onSubmit}>
			<FormInput
				id="email"
				name="email"
				label="Email"
				register={register}
				error={errors?.email?.message}
			/>
			<FormInput
				id="password"
				name="password"
				label="Password"
				type="password"
				register={register}
				error={errors?.password?.message}
			/>
			<ConfirmButton>Sign up</ConfirmButton>
		</form>
	);
};
