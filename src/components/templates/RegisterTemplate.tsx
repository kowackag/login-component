import { ReactNode } from "react";

import { SocialIconBox } from "@/components/molecules/SocialIconBox";
import { Title } from "@/components/atoms/Title";
import { SwitchLoginSignup } from "@/components/atoms/SwitchLoginSignup";
import { HorizontalLine } from "@/components/atoms/HorizontalLine";

export const RegisterTemplate = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Title>Sign up</Title>
			{children}
			<div className="my-4 flex items-center">
				<HorizontalLine />
				<p className="rounded border border-gray-300 px-1 uppercase text-gray-300">or</p>
				<HorizontalLine />
			</div>
			<SocialIconBox />
			<SwitchLoginSignup text="Alredy a user?" linkName="login" path="/login" />
		</>
	);
};
