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

export const InputField = ({ name, label, type, register, error }: FormFieldTypes) => {
	return (
		<div className="relative py-3">
			<label className="font-primaryMedium inline-block" htmlFor={name}>
				{label}
			</label>
			<input
				id={name}
				type={type}
				{...register(name)}
				className="w-full rounded-md border-2 border-neutral-300 bg-transparent px-2 leading-9 outline-none"
			/>
			{error ? (
				<p className="font-primaryMedium absolute right-0 text-xs italic text-red-600">{error}</p>
			) : null}
		</div>
	);
};
