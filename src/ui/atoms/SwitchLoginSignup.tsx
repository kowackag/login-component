import { Link } from "react-router-dom";

export const SwitchLoginSignup = ({ id }: { id: string }) => {
	return (
		<div className="my-4 flex justify-center font-semibold">
			<p>
				{id === "login" ? "Need an account? " : "Alredy a user? "}
				<span>
					<Link
						className="uppercase underline"
						to={`/auth?id=${id === "login" ? "register" : "login"}`}
					>
						{id === "login" ? "sign up" : "login"}
					</Link>
				</span>
			</p>
		</div>
	);
};
