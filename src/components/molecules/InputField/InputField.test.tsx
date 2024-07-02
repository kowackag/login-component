import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { InputField } from "./InputField";

const changeFn = vi.fn();
const blurFn = vi.fn();
const refFn = vi.fn();

describe("InputField", () => {
	it("emailInput exist with appropriate params", () => {
		render(
			<InputField
				name="email"
				label="email"
				error=""
				onChange={changeFn}
				onBlur={blurFn}
				inputRef={refFn}
			/>,
		);

		const emailInput = screen.getByTestId("email-input");
		expect(emailInput).toBeInTheDocument();
		expect(emailInput).toHaveAccessibleName("email");
		expect(emailInput).toHaveAttribute("id", "email");
	});
	it("emailInput change value", () => {
		render(
			<InputField
				name="email"
				label="email"
				error=""
				onChange={changeFn}
				onBlur={blurFn}
				inputRef={refFn}
			/>,
		);

		const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
		fireEvent.change(emailInput, { target: { value: "email@google.com" } });
		expect(changeFn).toBeCalled();
		expect(emailInput.value).toBe("email@google.com");
	});

	it("passwordInput  exist with appropriate params", () => {
		render(
			<InputField
				name="password"
				label="password"
				error=""
				type="password"
				onChange={changeFn}
				onBlur={blurFn}
				inputRef={refFn}
			/>,
		);
		const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;
		expect(passwordInput).toBeInTheDocument();
		expect(passwordInput).toHaveAccessibleName("password");
		expect(passwordInput).toHaveAttribute("id", "password");
		expect(passwordInput.type).toEqual("password");
	});
	it("passwordInput change value", async () => {
		render(
			<InputField
				name="password"
				label="password"
				error=""
				type="password"
				onChange={changeFn}
				onBlur={blurFn}
				inputRef={refFn}
			/>,
		);
		const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;
		fireEvent.change(passwordInput, { target: { value: "own-password" } });
		expect(passwordInput).toHaveValue("own-password");
	});
	it("input error is shown with correct text", () => {
		render(
			<InputField
				name="email"
				label="email"
				error="some error"
				onChange={changeFn}
				onBlur={blurFn}
				inputRef={refFn}
			/>,
		);
		const errorEl = screen.getByTestId("error");
		expect(errorEl).toBeVisible();
		expect(errorEl).toHaveTextContent("some error");
	});
	it("error is not rendered", () => {
		const { container } = render(
			<InputField
				name="email"
				label="email"
				error=""
				onChange={changeFn}
				onBlur={blurFn}
				inputRef={refFn}
			/>,
		);
		const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
		expect(emailInput.nextElementSibling).toBe(null);
		expect(container.querySelector('[data-testid="error"]')).not.toBeInTheDocument();
	});
	it("renders correctly", () => {
		const wrapper = render(
			<InputField
				name="email"
				label="email"
				error=""
				onChange={changeFn}
				onBlur={blurFn}
				inputRef={refFn}
			/>,
		);
		expect(wrapper.container).toMatchSnapshot();
	});
});
