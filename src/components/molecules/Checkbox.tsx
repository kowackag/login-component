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
	// error: string | undefined;
};

export const Checkbox = ({ name, label, register }: FormFieldTypes) => {
	return (
		<div className="justify-beetwen mb-4 flex align-middle">
			<input id={name} type="checkbox" {...register(name)} className="peer fixed opacity-0" />
			<p className="peer-checked:bg-bright-rose mr-3 inline-block h-5 w-5 rounded border border-gray-300 p-0 leading-5 text-gray-100">
				<svg width="16px" height="16px">
					<use href="/icons.svg#check"></use>
				</svg>
			</p>
			<label htmlFor="save-credentials" className="font-semibold leading-4">
				{label}
			</label>
		</div>
	);
};
