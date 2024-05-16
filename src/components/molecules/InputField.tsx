import { ErrorMessage } from "@/components/atoms/Error";
import { FC, forwardRef, DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputFieldTypes = {
	id: string;
	name: string;
	label: string;
	// type?: HTMLInputElement;
	type?: string;
	className?: string;
	error: string | undefined;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const InputField: FC<InputFieldTypes> = forwardRef<HTMLInputElement, InputFieldTypes>(
	({ id, name, label, type = "text", error, className, ...props }, ref) => {
		return (
			<div className="relative py-3">
				<label className="inline-block font-primaryMedium" htmlFor={name}>
					{label}
				</label>
				<input
					id={id}
					ref={ref}
					name={name}
					aria-label={label}
					type={type}
					className={`w-full rounded-md border-2 border-neutral-300 bg-transparent px-2 leading-9 outline-none ${className || ""}`}
					{...props}
				/>
				{error ? <ErrorMessage message={error} /> : null}
			</div>
		);
	},
);
