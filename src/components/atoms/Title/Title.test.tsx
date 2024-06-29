import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Title } from "./Title";

describe("Title", () => {
	it("Title component displays appropriate text and has correct role", () => {
		render(<Title text="Login page" level="h2" />);

		const title = screen.getByTestId('title');
		expect(title).toBeVisible();
		expect(title).toHaveRole('heading');
		expect(title).toHaveTextContent('Login page');
	});

	it("Title component displays correct heading level", () => {
		render(<Title text="Login page" level="h4" />);

		const title = screen.getByRole("heading", { level: 4 });
		expect(title).toBeVisible();	
	});

	it("renders correctly", () => {
		const wrapper = render(<Title text="Login page" level="h2" />);
		expect(wrapper.container).toMatchSnapshot();
	});
});
