import { expect, it, describe } from "vitest";
import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("SocialIconBox", () => {
	it("App component exists", async () => {
		const wrapper = render(
			<BrowserRouter>
				<App />
			</BrowserRouter>,
		);
		expect(wrapper).toBeTruthy();
		expect(wrapper.container).toBeInTheDocument();
	});

	it("renders correctly", () => {
		const { container } = render(
			<BrowserRouter>
				<App />
			</BrowserRouter>,
		);
		expect(container).toMatchSnapshot();
	});
});
