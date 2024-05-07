import { useSearchParams } from "react-router-dom";
import { LoginForm } from "@ui/molecules/LoginForm";
import { Title } from "@ui/atoms/Title";

export const Login = () => {
	const [_, setSearchParams] = useSearchParams();
	return (
		<div>
			<Title>Login</Title>
			<LoginForm />
			<button onClick={() => setSearchParams({ id: "register" })}>change</button>
		</div>
	);
};
