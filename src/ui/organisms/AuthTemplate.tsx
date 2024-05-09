import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { SocialIconBox } from "@ui/molecules/SocialIconBox";
import { Title } from "@ui/atoms/Title";
import { SwitchLoginSignup } from "@ui/atoms/SwitchLoginSignup";
import { HorizontalLine } from "@ui/atoms/HorizontalLine";

export const AuthTemplate = ({ id, children }: { id: string; children: ReactNode }) => {
	return (
		<div>
			<Title>{id === "login" ? "Login" : "Sign up"}</Title>
			{children}
			{id === "login" && (
				<Link className="block text-end font-semibold" to="/">
					Forgot password?
				</Link>
			)}
			<div className="my-4 flex items-center">
				<HorizontalLine />
				<p className="rounded border border-gray-300 px-1 uppercase text-gray-300">or</p>
				<HorizontalLine />
			</div>
			<SocialIconBox />
			<SwitchLoginSignup id={id} />
		</div>
	);
};
