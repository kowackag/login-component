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
			<div className="my-3 flex items-center">
				<HorizontalLine />
				<p className="font-primaryRegular py-0.5  rounded-md border-2 border-neutral-300 px-1 uppercase text-neutral-400">
					or
				</p>
				<HorizontalLine />
			</div>
			<SocialIconBox />
			<SwitchLoginSignup text="Alredy a user?" linkName="login" path="/login" />
		</>
	);
};
