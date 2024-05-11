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
		<div className="mt-4 mb-0 flex justify-center font-primaryMedium">
			<p>
				{text}
				<span className="ml-1">
					<Link className="uppercase underline" to={path}>
						{linkName}
					</Link>
				</span>
			</p>
		</div>
	);
};
