import { type ReactNode } from "react";

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div className="shadow-md-2 m-auto min-h-[560px] min-w-96 rounded-lg bg-gray-100 px-11 py-10">
			{children}
		</div>
	);
};
