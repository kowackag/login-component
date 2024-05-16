import { UseFormRegister, Path } from "react-hook-form";
import { Checkbox, CheckboxTypes } from "./Checkbox";

type FormCheckboxTypes<TFormValues> = {
	name: Path<TFormValues>;
	register?: UseFormRegister<TFormValues>;
} & Omit<CheckboxTypes, "name">;

export const FormCheckbox = <TFormValues extends Record<string, unknown>>({
	register,
	id,
	name,
	...props
}: FormCheckboxTypes<TFormValues>): JSX.Element => {
	return <Checkbox id={id} name={name} {...props} {...(register && register(name))} />;
};
