import { Title } from "@ui/atoms/Title";
import { ReactNode } from "react";
import { SwitchLoginSignup } from "@ui/atoms/SwitchLoginSignup";
import { SocialIconBox } from "@ui/molecules/SocialIconBox";
import { Link } from "react-router-dom";

export const AuthTemplate = ({ id, children }: { id: string; children: ReactNode }) => {
	return (
		<div>
			<Title>{id === "login" ? "Login" : "Sign up"}</Title>
			{children}
			<div className="my-4 flex items-center">
				<span className="flex-grow border border-b border-b-gray-300"></span>
				<p className="rounded border border-gray-300 px-1 uppercase text-gray-300">or</p>
				<span className="flex-grow border border-b border-b-gray-300"></span>
			</div>
            {id === "login" ?? <Link to="/">Forgot password</Link>}
			<SocialIconBox />
			<SwitchLoginSignup id={id} />
		</div>
	);
};
