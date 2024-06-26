import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LineDivider } from "./LineDivider";

describe("LineDivider ", () => {
	it("has two horizontal line", () => {
		render(<LineDivider />);
		const hrLines = screen.getAllByTestId("hrLine");
		expect(hrLines.length).toBe(2);
	});
	it("renders correctly", () => {
		const wrapper = render(<LineDivider />);
		expect(wrapper.container).toMatchSnapshot();
	});
});
