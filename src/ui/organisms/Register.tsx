import { useSearchParams } from "react-router-dom";

import { Title } from "@ui/atoms/Title";
import { RegisterForm } from "@ui/molecules/RegisterForm";

export const Register = () => {
	const [_, setSearchParams] = useSearchParams();
	return (
		<div>
			<Title>Sign up</Title>
			<RegisterForm />
			<button onClick={() => setSearchParams({ id: "register" })}>change</button>
		</div>
	);
};
