import { InputField } from "@/components/molecules/InputField";
import { ConfirmButton } from "@/components/atoms/ConfirmButton";

import { RegisterFormType } from "@/pages/RegisterPage";

export const RegisterForm = ({ onSubmit, register, errors }: RegisterFormType) => {
	const {
		name: emailInputName,
		onChange: onEmailInputChange,
		onBlur: onEmailInputBlur,
		ref: emailInputRef,
	} = register("email");
	const {
		name: passwordInputName,
		onChange: onPasswordInputChange,
		onBlur: onPasswordInputBlur,
		ref: passwordInputRef,
	} = register("password");

	return (
		<form onSubmit={onSubmit}>
			<InputField
				name={emailInputName}
				label="Email"
				onChange={onEmailInputChange}
				onBlur={onEmailInputBlur}
				inputRef={emailInputRef}
				error={errors?.email?.message}
			/>
			<InputField
				name={passwordInputName}
				label="Password"
				type="password"
				onChange={onPasswordInputChange}
				onBlur={onPasswordInputBlur}
				inputRef={passwordInputRef}
				error={errors?.password?.message}
			/>
			<ConfirmButton>Sign up</ConfirmButton>
		</form>
	);
};
