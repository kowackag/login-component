import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { InputField } from "./InputField";

describe("InputField", () => {
	it("emailInput", () => {
		const { container } = render(<InputField name="email" label="email" error=""  />);

		const emailInput = container.querySelector("#email") as HTMLInputElement;
		fireEvent.change(emailInput, { target: { value: "email@google.com" } });
		expect(emailInput.value).toBe("email@google.com");
	});
	it("passwordInput", () => {
		const { container } = render(
			<InputField name="password" label="password" error="" type="password" />,
		);
		const passwordInput = container.querySelector("#password") as HTMLInputElement;
		fireEvent.change(passwordInput, { target: { value: "password" } });

		expect(passwordInput.value).toHaveDisplayValue;
	});
	it("input error is shown", () => {
		render(<InputField name="email" label="email" error="some error" />);
		const errorEl = screen.getByTestId("error");
		expect(errorEl).toBeVisible();
            
		//expect(errorEl.children).toBe("some error");
	});
	it("input error is not rendered", () => {
		const { container } = render(<InputField name="email" label="email" error="" />);
		const emailInput = container.querySelector("#email") as HTMLInputElement;
		expect(emailInput.nextElementSibling).toBe(null);
	});
});
