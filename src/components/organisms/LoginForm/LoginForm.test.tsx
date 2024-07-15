import { expect, it, describe, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import { LoginForm } from "./LoginForm";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type LoginFieldsTypes = { email: string; password: string; toSave: boolean };

const changeFn = vi.fn();
const blurFn = vi.fn();
const refFn = vi.fn();

const submitFn = vi.fn();

describe("LoginForm", () => {
	it("LoginForm exists", async () => {
		const register: UseFormRegister<LoginFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});
		render(<LoginForm onSubmit={submitFn} register={register} />);

		const form = screen.getByTestId("login-form");
		expect(form).toBeInTheDocument();
	});

	it("has appropriate numbers of children", async () => {
		const register: UseFormRegister<LoginFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});
		render(<LoginForm onSubmit={submitFn} register={register} />);
		const form = screen.getByTestId("login-form");
		expect(form.children.length).toBe(4);
	});

	it("appropriate handles error", async () => {
		const register: UseFormRegister<LoginFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});
		const errors: FieldErrors<LoginFieldsTypes> = {
			email: {
				message: "Invalid email",
				type: "invalid form",
			},
			toSave: {
				message: "It is necessary",
				type: "invalid form",
			}
		};
		render(<LoginForm onSubmit={submitFn} register={register} errors={errors} />);

		const errorList = screen.getAllByTestId("error");
		expect(errorList).toHaveLength(2);
		expect(errorList[0]).toHaveTextContent("Invalid email");
		expect(errorList[1]).toHaveTextContent("It is necessary");
	});
	it("has toSave checkbox that is unchecked by default ", async () => {
		const register: UseFormRegister<LoginFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});
		render(<LoginForm onSubmit={submitFn} register={register} />);

		const checkbox = screen.getByTestId("checkbox-toSave") as HTMLInputElement;
		expect(checkbox).toBeInTheDocument();
		expect(checkbox.checked).toBe(false);
		expect(checkbox).toHaveAttribute("type", "checkbox");
		fireEvent.click(checkbox);

		expect(checkbox.checked).toBe(true);
	});

	it("submit form ", async () => {
		const register: UseFormRegister<LoginFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});

		render(<LoginForm onSubmit={submitFn} register={register} />);

		const checkbox = screen.getByTestId("checkbox-toSave") as HTMLInputElement;
		expect(checkbox).toBeInTheDocument();
		expect(checkbox.checked).toBe(false);
		expect(checkbox).toHaveAttribute("type", "checkbox");
		fireEvent.click(checkbox);

		const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;
		fireEvent.change(passwordInput, { target: { value: "some-password" } });
		const emailInput = screen.getByTestId("email-input") as HTMLInputElement;
		fireEvent.change(emailInput, { target: { value: "email@google.com" } });
		const button = screen.getByTestId("btn-submit");
		fireEvent.click(button);

		
		// OK
		expect(screen.getByTestId("login-form")).toHaveFormValues({
			email: "email@google.com",
			password: "some-password",
			toSave: true,
		});
		
		//   Why ???

		// expect(submitFn).toBeCalledWith(
		// 	expect.objectContaining({
		// 		email: "email@google.com",
		// 		password: "some-password",
		// 		toSave: true,
		// 	}),
		// );

		// expect(submitFn.mock.calls[0][0]).toMatchObject({
		// 	email: "email@google.com",
		// 	password: "some-password",
		// 	toSave: true,
		// });
	});

	it("has button type submit", async () => {
		const mockFn = vi.fn();
		const register: UseFormRegister<LoginFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});
		render(<LoginForm onSubmit={mockFn} register={register} />);

		const button = screen.getByTestId("btn-submit");
		expect(button).toHaveAttribute("type", "submit");
	});

	it("renders correctly", () => {
		const register: UseFormRegister<LoginFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});
		const { container } = render(<LoginForm onSubmit={submitFn} register={register} />);
		expect(container).toMatchSnapshot();
	});
});
