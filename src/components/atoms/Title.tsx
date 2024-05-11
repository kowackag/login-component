import { ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => {
	return <h1 className="mb-6 text-lg font-bold uppercase">{children}</h1>;
};
