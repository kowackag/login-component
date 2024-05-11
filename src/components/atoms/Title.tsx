import { ReactNode } from "react";

export const Title = ({ children }: { children: ReactNode }) => {
	return <h1 className="mb-5 text-lg font-bold uppercase">{children}</h1>;
};
