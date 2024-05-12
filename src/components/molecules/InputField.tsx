import { IFormValues } from "@/utils/shared.types";
import { Path, UseFormRegister } from "react-hook-form";
import { ErrorMessage } from "../atoms/Error";

type FormFieldTypes = {
	name: Path<IFormValues>;
	label: string;
	type?: HTMLInputElement;
	register: UseFormRegister<Partial<IFormValues>>;
	error: string | undefined;
};

export const InputField = ({ name, label, type, register, error }: FormFieldTypes) => {
	return (
		<div className="relative py-3">
			<label className="inline-block font-primaryMedium" htmlFor={name}>
				{label}
			</label>
			<input
				id={name}
				type={type && "text"}
				{...register(name)}
				className="w-full rounded-md border-2 border-neutral-300 bg-transparent px-2 leading-9 outline-none"
			/>
			{error ? <ErrorMessage message={error} /> : null}
		</div>
	);
};
