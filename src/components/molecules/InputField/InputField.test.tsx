import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { InputField } from "./InputField";

describe("InputField", () => {
	it("emailInput", () => {
		const mockFn = vi.fn();
		const { container } = render(
			<InputField
				name="email"
				label="email"
				error=""
				onChange={mockFn}
				onBlur={mockFn}
				inputRef={mockFn}
			/>,
		);

		const emailInput = container.querySelector("#email") as HTMLInputElement;
		fireEvent.change(emailInput, { target: { value: "email@google.com" } });
		expect(emailInput.value).toBe("email@google.com");
	});
	it("passwordInput", () => {
		const mockFn = vi.fn();
		const { container } = render(
			<InputField
				name="password"
				label="password"
				error=""
				type="password"
				onChange={mockFn}
				onBlur={mockFn}
				inputRef={mockFn}
			/>,
		);
		const passwordInput = container.querySelector("#password") as HTMLInputElement;
		fireEvent.change(passwordInput, { target: { value: "own-password" } });

		expect(passwordInput.type).toEqual("password");
	});
	it("input error is shown with correct text", () => {
		const mockFn = vi.fn();
		render(
			<InputField
				name="email"
				label="email"
				error="some error"
				onChange={mockFn}
				onBlur={mockFn}
				inputRef={mockFn}
			/>,
		);
		const errorEl = screen.getByTestId("error");
		expect(errorEl).toBeVisible();
		expect(errorEl).toHaveTextContent("some error");
	});
	it("input error is not rendered", () => {
		const mockFn = vi.fn();
		const { container } = render(
			<InputField
				name="email"
				label="email"
				error=""
				onChange={mockFn}
				onBlur={mockFn}
				inputRef={mockFn}
			/>,
		);
		const emailInput = container.querySelector("#email") as HTMLInputElement;
		expect(emailInput.nextElementSibling).toBe(null);
	});
	it("renders correctly", () => {
		const mockFn = vi.fn();
		const wrapper = render(
			<InputField
				name="email"
				label="email"
				error=""
				onChange={mockFn}
				onBlur={mockFn}
				inputRef={mockFn}
			/>,
		);
		expect(wrapper.container).toMatchSnapshot();
	});
});
