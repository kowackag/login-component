import { IconLink } from "@/components/atoms/IconLink/IconLink";

export const SocialIconBox = () => {
	return (
		<div data-testid="icon-box" className="flex justify-center">
			<IconLink name="google" href="https://mail.google.com/" />
			<IconLink name="facebook" href="https://www.facebook.com/" />
			<IconLink name="linkedin" href="https://www.linkedin.com/in/malgorzata-kowacka/" />
		</div>
	);
};
