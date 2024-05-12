import { Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
	email: string;
	password: number;
	saved: boolean;
}
type FormFieldTypes = {
	name: Path<IFormValues>;
	label: string;
	type?: HTMLInputElement;
	register: UseFormRegister<FormFieldTypes>;
};

export const Checkbox = ({ name, label, register }: FormFieldTypes) => {
	return (
		<div className="justify-beetwen mb-4 flex align-middle">
			<input
				id={name}
				type="checkbox"
				{...register(name)}
				className="peer fixed h-5 w-5 opacity-0"
			/>
			<p className="mr-3 inline-block h-5 w-5 rounded-sm border border-neutral-300 p-0 leading-5 text-white peer-checked:border-none peer-checked:bg-bright-rose ">
				<svg width="16px" height="16px">
					<use href="/icons.svg#check"></use>
				</svg>
			</p>
			<label htmlFor="save-credentials" className="font-primaryMedium leading-5">
				{label}
			</label>
		</div>
	);
};
