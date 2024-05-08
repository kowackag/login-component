import { useSearchParams } from "react-router-dom";
import { AuthWrapper } from "@/ui/atoms/AuthWrapper";

import { Login } from "@/ui/organisms/Login";
import { Register } from "@/ui/organisms/Register";

function Authentication() {
	const [searchParams] = useSearchParams();
	const authId = searchParams.get("id") || "register";
	return (
		<div className="w-100% right-0 flex min-h-screen bg-navy-blue">
			<AuthWrapper>
				{authId === "login" && <Login />}
				{authId === "register" && <Register />}
			</AuthWrapper>
		</div>
	);
}

export default Authentication;
