export const IconLink = ({
	href,
	name,
}: {
	href: string;
	name: "facebook" | "linkedin" | "google";
}) => {
	const icons = {
		facebook: "/facebook.svg#facebook",
		google: "/google.svg#google",
		linkedin: "/linkedin.svg#linkedin"
	}
	return (
		<a className="mx-2 my-2" href={href} target="_black" aria-label={name}>
			<svg width="36px" height="36px">
				<use href={icons[name]}></use>
			</svg>
		</a>
	);
};
