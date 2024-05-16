import { type ReactNode } from "react";

export const AuthWrapper = ({ children }: { children: ReactNode }) => {
	return (
		<section className="m-auto min-h-[556px] w-4/5 rounded-lg bg-white px-11 py-10 font-primaryRegular shadow-md-2 sm:w-96">
			{children}
		</section>
	);
};
