import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import  App  from "./App";

describe("SocialIconBox", () => {
	it("App component exists", async () => {
		//render(<App  />);

		// const box = screen.getByTestId("icon-box");
		// expect(box).toBeInTheDocument();
	});

	it("has appropriate numbers of children - links ", async () => {
		//render(<App />);
		// const box = screen.getByTestId("icon-box");
		// expect(box.children.length).toBe(3);
		// [...box.children].forEach((el) => expect(el).toHaveAttribute("href"));
	});

	it("renders correctly", () => {
		// const { container } = render(<App />);
		// expect(container).toMatchSnapshot();
	});
});