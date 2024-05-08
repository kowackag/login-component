import { Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
	email: string;
	password: number;
	saved: boolean;
}
type FormFieldTypes = {
	name: Path<IFormValues>;
	label: string;
	type?: "text" | "password" | "email";
	register: UseFormRegister<{ email: string; password: string; saved: boolean }>;
	error: string | undefined;
};

export const FormField = ({ name, label, type, register, error }: FormFieldTypes) => {
	return (
		<div className="relative pb-6">
			<label className="font-semibold" htmlFor={name}>
				{label}
			</label>
			<input
				id={name}
				type={type}
				{...register(name)}
				className="w-full rounded-lg border border-gray-300 bg-transparent px-2 leading-10 outline-none"
			/>
			{error ? <p className="absolute text-xs font-semibold italic text-red-600">{error}</p> : null}
		</div>
	);
};
