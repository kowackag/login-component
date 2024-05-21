import { type ReactNode } from "react";

export const AuthBackground = ({ children }: { children: ReactNode }) => {
	return <div className="flex min-h-screen w-full bg-navy-blue">{children}</div>;
};
