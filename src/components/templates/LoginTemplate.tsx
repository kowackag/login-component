import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { SocialIconBox } from "@/components/molecules/SocialIconBox";
import { Title } from "@/components/atoms/Title";
import { SwitchLoginSignup } from "@/components/atoms/SwitchLoginSignup";
import { HorizontalLine } from "@/components/atoms/HorizontalLine";

export const LoginTemplate = ({ children,  }: { children: ReactNode }) => {
	return (
		<div>
			<Title>Login</Title>
			{children}
			<Link className="font-primaryRegular block text-end text-neutral-400" to="/">
				Forgot password?
			</Link>
			<div className="my-3 flex items-center">
				<HorizontalLine />
				<p className="font-primaryRegular leading-2 rounded border-2 border-neutral-300 px-1 uppercase text-neutral-400">
					or
				</p>
				<HorizontalLine />
			</div>
			<SocialIconBox />
			<SwitchLoginSignup linkName="sign up" text="Need an account?" path="/register" />
		</div>
	);
};
