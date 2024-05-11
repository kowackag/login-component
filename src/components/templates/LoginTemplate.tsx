import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { SocialIconBox } from "@/components/molecules/SocialIconBox";
import { Title } from "@/components/atoms/Title";
import { SwitchLoginSignup } from "@/components/atoms/SwitchLoginSignup";
import { HorizontalLine } from "@/components/atoms/HorizontalLine";

export const LoginTemplate = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Title>Login</Title>
			{children}
			<Link className="block text-end font-semibold" to="/">
				Forgot password?
			</Link>
			<div className="my-4 flex items-center">
				<HorizontalLine />
				<p className="rounded border border-gray-300 px-1 uppercase text-gray-300">or</p>
				<HorizontalLine />
			</div>
			<SocialIconBox />
			<SwitchLoginSignup linkName="sign up" text="Need an account?" path="/register" />
		</div>
	);
};
