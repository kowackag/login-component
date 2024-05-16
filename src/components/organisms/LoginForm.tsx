import { ConfirmButton } from "@/components/atoms/ConfirmButton";
import { FormCheckbox } from "@/components/molecules/FormCheckbox";
import { LoginFormType } from "@/pages/Login";
import { FormInput } from "../molecules/FormInput";

export const LoginForm = ({ onSubmit, errors, register }: LoginFormType) => {
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
				register={register}
				type="password"
				error={errors?.password?.message}
			/>
			<FormCheckbox id="saved" name="saved" label="Remember me?" register={register} />
			<ConfirmButton>Login</ConfirmButton>
		</form>
	);
};
