import { InputField } from "@/components/molecules/InputField";
import { Checkbox } from "@/components/molecules/Checkbox";
import { ConfirmButton } from "@/components/atoms/ConfirmButton";

import { LoginFormType } from "@/pages/Login";

export const LoginForm = ({ onSubmit, errors, register }: LoginFormType) => {
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
	const {
		name: checkboxName,
		onChange: onCheckboxChange,
		onBlur: onCheckboxBlur,
		ref: checkboxRef,
	} = register("toSave");
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
			<Checkbox
				name={checkboxName}
				label="Remember me?"
				onChange={onCheckboxChange}
				onBlur={onCheckboxBlur}
				inputRef={checkboxRef}
				error={errors?.email?.message}
			/>
			<ConfirmButton>Login</ConfirmButton>
		</form>
	);
};
