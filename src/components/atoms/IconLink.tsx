export const IconLink = ({ href, link, name }: { href: string; link: string; name: string }) => {
	return (
		<a className="mx-2 my-2" href={link} target="_black" aria-label={name}>
			<svg width="36px" height="36px">
				<use href={href}></use>
			</svg>
		</a>
	);
};
