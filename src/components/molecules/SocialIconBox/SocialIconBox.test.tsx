import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { SocialIconBox } from "./SocialIconBox";

describe("SocialIconBox", () => {
	it("SocialIconBox exists", async () => {
		render(<SocialIconBox />);

		const box = screen.getByTestId("icon-box");
		expect(box).toBeInTheDocument();
	});

	it("has appropriate numbers of children - links ", async () => {
		render(<SocialIconBox />);
		const box = screen.getByTestId("icon-box");
		expect(box.children.length).toBe(3);
		[...box.children].forEach((el) => expect(el).toHaveAttribute("href"));
	});

	it("renders correctly", () => {
		const { container } = render(<SocialIconBox />);
		expect(container).toMatchSnapshot();
	});
});
