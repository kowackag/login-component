type TitleTypes = {
	text: string;
	level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};
export const Title = ({ text, level }: TitleTypes) => {
	const TitleLevel = level;
	return <TitleLevel className="mb-4 text-lg font-bold uppercase">{text}</TitleLevel>;
};
