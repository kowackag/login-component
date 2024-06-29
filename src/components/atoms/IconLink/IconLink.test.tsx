import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { IconLink } from "./IconLink.tsx";

describe("IconLink", () => {
	it("link exists with appropraite label", async () => {
		render(<IconLink href="https://www.facebook.com/" name="facebook" />);

		const link = screen. getByTestId('link');
		expect(link).toBeInTheDocument();
		expect(link).toBeVisible();
		expect(link).toHaveAccessibleName('facebook')
	});
	it("link has appropriate attributes", async () => {
		render(<IconLink href="https://www.facebook.com/" name="facebook" />);

		const link = screen. getByTestId('link');
		expect(link).toHaveAttribute("href", "https://www.facebook.com/");
		expect(link).toHaveAttribute("target", "_blank");
	});

	it("link has appropriate description", async () => {
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
