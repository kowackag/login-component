import { ErrorMessage } from "@/components/atoms/Error";
import { CheckboxFieldTypes } from "@/utils/shared.types";

export const Checkbox = ({
	name,
	label,
	onChange,
	onBlur,
	inputRef,
	error,
}: CheckboxFieldTypes) => {
	return (
		<div className="justify-beetwen mb-4 flex align-middle">
			<input
				id={name}
				name={name}
				type="checkbox"
				onChange={onChange}
				onBlur={onBlur}
				ref={inputRef}
				className="peer fixed h-5 w-5 opacity-0"
			/>
			<p className="mr-3 inline-block h-5 w-5 rounded-sm border border-neutral-300 p-0 leading-5 text-white peer-checked:border-none peer-checked:bg-bright-rose ">
				<svg width="16px" height="16px">
					<use href="/icons.svg#check"></use>
				</svg>
			</p>
			<label htmlFor={name} className="font-primaryMedium leading-5">
				{label}
			</label>
			{error ? <ErrorMessage message={error} /> : null}
		</div>
	);
};
