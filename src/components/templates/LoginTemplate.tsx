import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { SocialIconBox } from "@/components/molecules/SocialIconBox";
import { LineDivider } from "@/components/molecules/LineDivider";
import { Title } from "@/components/atoms/Title";
import { SwitchLoginSignup } from "@/components/atoms/SwitchLoginSignup";

export const LoginTemplate = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Title>Login</Title>
			{children}
			<Link className="block text-end font-primaryRegular text-neutral-400" to="/">
				Forgot password?
			</Link>
			<LineDivider />
			<SocialIconBox />
			<SwitchLoginSignup linkName="sign up" text="Need an account?" path="/register" />
		</div>
	);
};
