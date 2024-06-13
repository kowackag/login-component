import { Button } from "./Button";
import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";

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
});
