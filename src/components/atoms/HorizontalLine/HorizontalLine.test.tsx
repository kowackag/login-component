import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { HorizontalLine } from "./HorizontalLine";

describe("Horizontal Line ", () => {
	it("is visible", () => {
		render(<HorizontalLine />);
		expect(screen.getByTestId("hrLine")).toBeVisible();
	});
	it("renders correctly", () => {
		const wrapper = render(<HorizontalLine />);
		expect(wrapper.container).toMatchSnapshot();
	});
});
