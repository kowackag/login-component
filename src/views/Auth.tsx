import { useSearchParams } from "react-router-dom";
import { AuthWrapper } from "@/ui/atoms/AuthWrapper";
import { AuthTemplate } from "@/ui/organisms/AuthTemplate";
import { LoginForm } from "@/ui/organisms/LoginForm";
import { RegisterForm } from "@/ui/organisms/RegisterForm";

function Authentication() {
	const [searchParams] = useSearchParams();
	const authId = searchParams.get("id");

	if (authId !== "login" && authId !== "register") {
		return <p>Not found</p>; // TODO
	}

	return (
		<div className="w-full right-0 flex min-h-screen bg-navy-blue">
			<AuthWrapper>
				<AuthTemplate id={authId}>
					{authId === "login" && <LoginForm />}
					{authId === "register" && <RegisterForm />}
				</AuthTemplate>
			</AuthWrapper>
		</div>
	);
}

export default Authentication;
