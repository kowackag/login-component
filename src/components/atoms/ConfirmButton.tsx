import { ReactNode } from "react";

export const ConfirmButton = ({ children, ...props }: { children: ReactNode }) => {
	return (
		<button
			className="bg-bright-rose w-full rounded-lg text-center text-sm font-semibold uppercase leading-10 tracking-wide text-gray-100 shadow-lg"
			type="submit"
			{...props}
		>
			{children}
		</button>
	);
};
