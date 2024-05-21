import { Link } from "react-router-dom";

import { RegisterForm } from "@/components/organisms/RegisterForm";
import { SocialIconBox } from "@/components/molecules/SocialIconBox";
import { LineDivider } from "@/components/molecules/LineDivider";
import { Title } from "@/components/atoms/Title";
import { AuthWrapper } from "@/components/atoms/AuthWrapper";
import { AuthBackground } from "@/components/atoms/AuthBackground";

import { RegisterFormType } from "@/pages/RegisterPage";

export const RegisterPageTemplate = ({ onSubmit, register, errors }: RegisterFormType) => {
	return (
		<AuthBackground>
			<AuthWrapper>
				<Title>Sign up</Title>
				<RegisterForm onSubmit={onSubmit} register={register} errors={errors} />
				<LineDivider />
				<SocialIconBox />
				<div className="mb-0 mt-4 flex justify-center font-primaryMedium">
					<p>Already a user?</p>
					<Link className="ml-1 uppercase underline" to="/login">
						login
					</Link>
				</div>
			</AuthWrapper>
		</AuthBackground>
	);
};
