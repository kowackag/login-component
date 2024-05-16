import { ReactNode } from "react";

import { SocialIconBox } from "@/components/molecules/SocialIconBox";
import { LineDivider } from "@/components/molecules/LineDivider";
import { Title } from "@/components/atoms/Title";
import { SwitchLoginSignup } from "@/components/atoms/SwitchLoginSignup";

export const RegisterTemplate = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Title>Sign up</Title>
			{children}
			<LineDivider />
			<SocialIconBox />
			<SwitchLoginSignup text="Already a user?" linkName="login" path="/login" />
		</>
	);
};
