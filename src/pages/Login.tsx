import { AuthWrapper } from "@/components/atoms/AuthWrapper";
import { LoginTemplate } from "@/components/templates/LoginTemplate";
import { LoginForm } from "@/components/organisms/LoginForm";

function Login() {
	return (
		<div className="flex min-h-screen w-full bg-navy-blue">
			<AuthWrapper>
				<LoginTemplate>
					<LoginForm />
				</LoginTemplate>
			</AuthWrapper>
		</div>
	);
}

export default Login;
