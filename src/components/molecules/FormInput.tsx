import { UseFormRegister, Path } from "react-hook-form";
import { InputField, InputFieldTypes } from "./InputField";

type FormInputTypes<TFormValues> = {
	name: Path<TFormValues>;
	register?: UseFormRegister<TFormValues>;
} & Omit<InputFieldTypes, "name">;

export const FormInput = <TFormValues extends Record<string, unknown>>({
	register,
	id,
	name,
	error,
	...props
}: FormInputTypes<TFormValues>): JSX.Element => {
	return (
		<InputField id={id} name={name} error={error} {...props} {...(register && register(name))} />
	);
};
