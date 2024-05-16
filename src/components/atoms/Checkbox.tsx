import { FC, forwardRef, DetailedHTMLProps, InputHTMLAttributes } from "react";

export type CheckboxTypes = {
	id: string;
	name: string;
	label: string;
	// type?: HTMLInputElement;
	className?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Checkbox: FC<CheckboxTypes> = forwardRef<HTMLInputElement, CheckboxTypes>(
	({ id, name, label, className, ...props }, ref) => {
		return (
			<div className="justify-beetwen mb-4 flex align-middle">
				<input
					id={id}
					ref={ref}
					name={name}
					type="checkbox"
					className={`peer fixed h-5 w-5 opacity-0 ${className ?? ""}`}
					{...props}
				/>
				<p className="mr-3 inline-block h-5 w-5 rounded-sm border border-neutral-300 p-0 leading-5 text-white peer-checked:border-none peer-checked:bg-bright-rose ">
					<svg width="16px" height="16px">
						<use href="/icons.svg#check"></use>
					</svg>
				</p>
				<label className="font-primaryMedium leading-5" htmlFor={name}>
					{label}
				</label>
			</div>
		);
	},
);
