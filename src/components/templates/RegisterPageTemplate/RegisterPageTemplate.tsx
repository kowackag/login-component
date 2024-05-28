import { Link } from "react-router-dom";

import { RegisterForm } from "@/components/organisms/RegisterForm/RegisterForm";
import { SocialIconBox } from "@/components/molecules/SocialIconBox/SocialIconBox";
import { LineDivider } from "@/components/molecules/LineDivider/LineDivider";
import { Title } from "@/components/atoms/Title/Title";

import { RegisterFormType } from "@/pages/RegisterPage/RegisterPage";

export const RegisterPageTemplate = ({ onSubmit, register, errors }: RegisterFormType) => {
	return (
		<div className="flex min-h-screen w-full bg-navy-blue">
			<section className="m-auto min-h-[556px] w-4/5 rounded-lg bg-white px-11 py-10 font-primaryRegular shadow-md-2 sm:w-96">
				<Title text="Sign up" level="h1" />
				<RegisterForm onSubmit={onSubmit} register={register} errors={errors} />
				<LineDivider />
				<SocialIconBox />
				<div className="mb-0 mt-4 flex justify-center font-primaryMedium">
					<p>Already a user?</p>
					<Link className="ml-1 uppercase underline" to="/login">
						login
					</Link>
				</div>
			</section>
		</div>
	);
};
