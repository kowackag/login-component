import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { IconLink } from "./IconLink.tsx";

describe("IconLink", () => {
	it("link has appropriate attributes", async () => {
		render(<IconLink href="https://www.facebook.com/" name="facebook" />);

		const link = screen.getByLabelText("facebook");
		expect(link).toHaveAttribute("href", "https://www.facebook.com/");
		expect(link).toHaveAttribute("target", "_blank");
	});

	it("has appropriate icon", async () => {
		render(<IconLink href="https://www.linkedin.com/" name="linkedin" />);
		const svgEl = Array.from(screen.getByLabelText("linkedin").children)[0];
		const useEl = Array.from(svgEl.children)[0];
		expect(useEl).toHaveAttribute("href", "/linkedin.svg#linkedin");
	});
	it("renders correctly", () => {
		const wrapper = render(<IconLink href="https://www.facebook.com/" name="facebook" />);
		expect(wrapper.container).toMatchSnapshot();
	});
});
