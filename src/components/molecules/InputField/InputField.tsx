import { ChangeEventHandler, FocusEventHandler, Ref } from "react";
import { Path } from "react-hook-form";

import { ErrorMessage } from "@/components/atoms/Error/Error";

export interface IFormValues {
	email: string;
	password: number;
	toSave: boolean;
}

export type InputFieldTypes = {
	name: Path<IFormValues>;
	label: string;
	type?: HTMLInputElement["type"];
	onChange: ChangeEventHandler;
	onBlur: FocusEventHandler<HTMLInputElement>;
	inputRef: Ref<HTMLInputElement>;
	error: string | undefined;
};

export const InputField = ({
	name,
	label,
	type = "text",
	onChange,
	onBlur,
	inputRef,
	error,
}: InputFieldTypes) => {
	return (
		<div className="relative py-3">
			<label className="inline-block font-primaryMedium" htmlFor={name}>
				{label}
			</label>
			<input
				id={name}
				name={name}
				type={type}
				onChange={onChange}
				onBlur={onBlur}
				ref={inputRef}
				data-testid={`${name}-input`}
				className="w-full rounded-md border-2 border-neutral-300 bg-transparent px-2 leading-9 outline-none"
			/>
			{error ? <ErrorMessage message={error} /> : null}
		</div>
	);
};
