import { ErrorMessage } from "@/components/atoms/Error";
import { FormFieldTypes } from "@/utils/shared.types";

export const InputField = ({
	name,
	label,
	type = "text",
	onChange,
	onBlur,
	inputRef,
	error,
}: FormFieldTypes) => {
	return (
		<div className="relative py-3">
			<label className="inline-block font-primaryMedium" htmlFor={name}>
				{label}
			</label>
			<input
				name={name}
				type={type}
				onChange={onChange}
				onBlur={onBlur}
				ref={inputRef}
				className="w-full rounded-md border-2 border-neutral-300 bg-transparent px-2 leading-9 outline-none"
			/>
			{error ? <ErrorMessage message={error} /> : null}
		</div>
	);
};
