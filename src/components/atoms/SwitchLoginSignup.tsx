import { Link } from "react-router-dom";

export const SwitchLoginSignup = ({
	text,
	linkName,
	path,
}: {
	text: string;
	linkName: string;
	path: string;
}) => {
	return (
		<div className="my-4 flex justify-center font-semibold">
			<p>
				{text}
				<span>
					<Link className="uppercase underline" to={path}>
						{linkName}
					</Link>
				</span>
			</p>
		</div>
	);
};
