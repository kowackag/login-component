import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
	it("Button displays appropriate text", () => {
		render(<Button text="Login" type="submit" />);

		const button = screen.getByRole("button");
		expect(button).toHaveTextContent("Login");
	});

	it("Button has appropriate type", () => {
		render(<Button text="Login" type="submit" />);

		const button = screen.getByRole("button");
		expect(button).toHaveAttribute("type", "submit");
	});

	it("Button renders correctly", () => {
		const wrapper = render(<Button text="Login" type="submit" />)
		expect(wrapper.container).toMatchSnapshot()
	})
});
