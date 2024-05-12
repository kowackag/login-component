import { ConfirmButton } from "@/components/atoms/ConfirmButton";

import { InputField } from "@/components/molecules/InputField";
import { Checkbox } from "@/components/molecules/Checkbox";
import { LoginFormType } from "@/pages/Login";

export const LoginForm = ({ onSubmit, errors, register }: LoginFormType) => {
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
				error={errors?.password?.message}
				// handleInput={handlePassword}
			/>
			<Checkbox name="saved" label="Remember me?" register={register} />
			<ConfirmButton>Login</ConfirmButton>
		</form>
	);
};
