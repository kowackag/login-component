import { ChangeEventHandler, FocusEventHandler, Ref } from "react";
import { Path } from "react-hook-form";

export interface IFormValues {
	email: string;
	password: number;
	toSave: boolean;
}

export type FormFieldTypes = {
	name: Path<IFormValues>;
	label: string;
	type?: HTMLInputElement["type"];
	onChange: ChangeEventHandler;
	onBlur: FocusEventHandler<HTMLInputElement>;
	inputRef: Ref<HTMLInputElement>;
	error: string | undefined;
};

export type CheckboxFieldTypes = {
	name: Path<IFormValues>;
	label: string;
	onChange: ChangeEventHandler;
	onBlur: FocusEventHandler<HTMLInputElement>;
	inputRef: Ref<HTMLInputElement>;
	error: string | undefined;
};

export type FormDataType =
	| {
			email?: string | undefined;
			password?: string | undefined;
	}
	| undefined;
