import { ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => {
	return <h1 className="mb-4 text-lg font-bold uppercase">{children}</h1>;
};
