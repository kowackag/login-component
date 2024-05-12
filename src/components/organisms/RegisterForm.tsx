import { ConfirmButton } from "@/components/atoms/ConfirmButton";

import { InputField } from "@/components/molecules/InputField";
import { RegisterFormType } from "@/pages/Register";

export const RegisterForm = ({ onSubmit, register, errors }: RegisterFormType) => {
	return (
		<form onSubmit={onSubmit}>
			<InputField
				name="email"
				label="Email"
				register={register}
				error={errors?.email?.message}
				// handleInput={handleEmail}
			/>
			<InputField
				name="password"
				label="Password"
				type="password"
				register={register}
				// handleInput={handlePassword}
				error={errors?.password?.message}
			/>
			<ConfirmButton>Sign up</ConfirmButton>
		</form>
	);
};
