import { type ReactNode } from "react";

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<section className="font-primaryRegular m-auto min-h-[560px] w-4/5 rounded-lg bg-white px-11 py-10 shadow-md-2 sm:w-96">
			{children}
		</section>
	);
};
