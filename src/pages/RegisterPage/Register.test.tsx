import { expect, it, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";
import { BrowserRouter } from "react-router-dom";

function flushPromises() {
	return new Promise((resolve) => setImmediate(resolve));
}

describe("RegisterPage", () => {
	it("component exists", () => {
		const wrapper = render(
			<BrowserRouter>
				<RegisterPage />
			</BrowserRouter>,
		);
		expect(wrapper).toBeTruthy();
		expect(wrapper.container).toBeInTheDocument();
	});

	it("render appropriate title and form", () => {
		render(
			<BrowserRouter>
				<RegisterPage />
			</BrowserRouter>,
		);
		const form = screen.getByTestId("register-form");
		expect(form).toBeInTheDocument();
		const title = screen.getByRole("heading", { name: "Sign up" });
		expect(title).toBeInTheDocument();
	});
	it("renders correct errors when email/password does not meet requirements", async () => {
		render(
			<BrowserRouter>
				<RegisterPage />
			</BrowserRouter>,
		);
		const button = screen.getByTestId("btn-submit");
		expect(button).toHaveTextContent("sign up");

		fireEvent.click(button);

		const errorList = await screen.findAllByTestId("error");
		expect(errorList).toHaveLength(2);
		expect(errorList[0]).toHaveTextContent("Invalid email address");
		expect(errorList[1]).toHaveTextContent("Invalid password");
	});
	it("hides error after filling form correctly", async () => {
		render(
			<BrowserRouter>
				<RegisterPage />
			</BrowserRouter>,
		);
		const button = screen.getByTestId("btn-submit");
		expect(button).toHaveTextContent("sign up");

		fireEvent.click(button);

		const errorList = await screen.findAllByTestId("error");
		expect(errorList).toHaveLength(2);

		const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;

		fireEvent.change(passwordInput, { target: { value: "own-password" } });
		expect(passwordInput.value).toBe("own-password");

		fireEvent.click(button);
		await flushPromises();
		const newErrorList = await screen.findAllByTestId("error");
		expect(newErrorList).toHaveLength(1);
	});

	it("is reset after processing form", async () => {
		render(
			<BrowserRouter>
				<RegisterPage />
			</BrowserRouter>,
		);
		const button = screen.getByTestId("btn-submit");
		expect(button).toHaveTextContent("sign up");

		const passwordInput = screen.getByLabelText("Password") as HTMLInputElement;

		fireEvent.change(passwordInput, { target: { value: "own-password" } });

		const emailInput = screen.getByLabelText("Email") as HTMLInputElement;

		fireEvent.change(emailInput, { target: { value: "someone@wp.pl" } });

		expect(passwordInput.value).toBe("own-password");
		expect(emailInput.value).toBe("someone@wp.pl");

		fireEvent.click(button);

		expect(passwordInput.innerHTML).toBe("");
		expect(emailInput.innerHTML).toBe("");
	});

	it("renders correctly", () => {
		const { container } = render(
			<BrowserRouter>
				<RegisterPage />
			</BrowserRouter>,
		);
		expect(container).toMatchSnapshot();
	});
});
