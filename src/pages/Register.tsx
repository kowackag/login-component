import { AuthWrapper } from "@/components/atoms/AuthWrapper";
import { RegisterTemplate } from "@/components/templates/RegisterTemplate";
import { RegisterForm } from "@/components/organisms/RegisterForm";

function Register() {
	return (
		<div className="right-0 flex min-h-screen w-full bg-navy-blue">
			<AuthWrapper>
				<RegisterTemplate>
					<RegisterForm />
				</RegisterTemplate>
			</AuthWrapper>
		</div>
	);
}

export default Register;
