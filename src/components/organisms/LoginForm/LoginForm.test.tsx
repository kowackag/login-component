import { expect, it, describe, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { LoginForm } from "./LoginForm";
import { FieldErrors, UseFormRegister, FieldValues } from "react-hook-form";
type LoginFieldsTypes = { email: string; password: string; toSave: boolean };

const changeFn = vi.fn();
const blurFn = vi.fn();
const refFn = vi.fn();
const submitFn =vi.fn();
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

	it("shows appropriate error numbers and errors message", async () => {
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
		};
		render(<LoginForm onSubmit={submitFn} register={register} errors={errors} />);
		const errorList = screen.getAllByTestId("error");
		expect(errorList).toHaveLength(1);
		expect(errorList[0]).toHaveTextContent("Invalid email");
	});
	it("has toSave checkbox that is unchecked by default ", async () => {
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

		const checkbox = screen.getByTestId("checkbox-toSave") as HTMLInputElement;
		expect(checkbox).toBeInTheDocument();
		expect(checkbox.checked).toBe(false);
		expect(checkbox).toHaveAttribute("type", "checkbox");
		fireEvent.click(checkbox);
		expect(mockFn).toBeCalled();
		expect(checkbox.checked).toBe(true);
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

		const button = screen.getByRole("button", { name: /login/i });
		expect(button).toHaveAttribute("type", "submit");
		expect(mockFn).toBeCalled();
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
