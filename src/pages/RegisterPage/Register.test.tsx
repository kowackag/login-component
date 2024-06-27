import { expect, it, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import RegisterPage from "./RegisterPage";
import { BrowserRouter } from "react-router-dom";

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
		const button = screen.getByRole("button");
		expect(button).toHaveTextContent("sign up");

		fireEvent.click(button);

		const errorList = await screen.findAllByTestId("error");
		expect(errorList).toHaveLength(2);
		expect(errorList[0]).toHaveTextContent("Invalid email address");
		expect(errorList[1]).toHaveTextContent("Invalid password");
	});
	it("hides error after filling form correctly", async () => {
		const { container } = render(
			<BrowserRouter>
				<RegisterPage />
			</BrowserRouter>,
		);
		const button = screen.getByRole("button");
		expect(button).toHaveTextContent("sign up");

		fireEvent.click(button);

		const errorList = await screen.findAllByTestId("error");
		expect(errorList).toHaveLength(2);

		const passwordInput = container.querySelector("#password") as HTMLInputElement;

		fireEvent.change(passwordInput, { target: { value: "own-password" } });
		expect(passwordInput.value).toBe("own-password");

		fireEvent.click(button);
		const newErrorList = await screen.findAllByTestId("error");
		// ??????
		console.log(newErrorList);
		expect(newErrorList).toHaveLength(2);
	});

	it("is reset after processing form", async () => {
		const { container } = render(
			<BrowserRouter>
				<RegisterPage />
			</BrowserRouter>,
		);
		const button = screen.getByRole("button");
		expect(button).toHaveTextContent("sign up");

		const passwordInput = container.querySelector("#password") as HTMLInputElement;

		fireEvent.change(passwordInput, { target: { value: "own-password" } });

		const emailInput = container.querySelector("#email") as HTMLInputElement;
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
