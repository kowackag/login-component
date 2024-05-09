import { type ReactNode } from "react";

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<section className="shadow-md-2 m-auto min-h-[560px] w-4/5 rounded-lg bg-gray-100 px-11 py-10 sm:w-96">
			{children}
		</section>
	);
};
