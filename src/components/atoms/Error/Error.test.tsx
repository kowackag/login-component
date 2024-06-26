import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ErrorMessage } from "./Error";

describe("Error", () => {
	it("component is visible", () => {
		render(<ErrorMessage message="some error" />);

		const element = screen.getByTestId("error");
		expect(element).toBeVisible();
		expect(element).exist;
	});
	it("Error displays appropriate message", () => {
		render(<ErrorMessage message="some error" />);

		const message = screen.getByTestId("error");
		expect(message).toHaveTextContent("some error");
	});
	it("renders correctly", () => {
		const { container } = render(<ErrorMessage message="some error" />);
		expect(container).toMatchSnapshot();
	});
});
