import { expect, it, describe, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { LoginForm } from "./LoginForm";
import { FieldErrors, UseFormRegister, FieldValues } from "react-hook-form";
type LoginFieldsTypes = { email: string; password: string; toSave: boolean };

describe("LoginForm", () => {
	it("LoginForm exists", async () => {
		const mockFn = vi.fn();
		const register: UseFormRegister<LoginFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: mockFn,
				onBlur: mockFn,
				ref: mockFn,
			};
		});
		render(<LoginForm onSubmit={mockFn} register={register} />);

		const form = screen.getByTestId("login-form");
		expect(form).toBeInTheDocument();
	});

	it("has appropriate numbers of children", async () => {
		const mockFn = vi.fn();
		const register: UseFormRegister<LoginFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: mockFn,
				onBlur: mockFn,
				ref: mockFn,
			};
		});
		render(<LoginForm onSubmit={mockFn} register={register} />);
		const form = screen.getByTestId("login-form");
		expect(form.children.length).toBe(4);
	});

	it("shows appropriate error numbers and errors message", async () => {
		const mockFn = vi.fn();
		const register: UseFormRegister<LoginFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: mockFn,
				onBlur: mockFn,
				ref: mockFn,
			};
		});
		const errors: FieldErrors<LoginFieldsTypes> = {
			email: {
				message: "Invalid email",
				type: "invalid form",
			},
		};
		render(<LoginForm onSubmit={mockFn} register={register} errors={errors} />);
		const errorList = screen.getAllByTestId("error");
		expect(errorList).toHaveLength(1);
		expect(errorList[0]).toHaveTextContent("Invalid email");
	});
	it("has toSave checkbox that isunchecked by default ", async () => {
		const mockFn = vi.fn();
		const register: UseFormRegister<LoginFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: mockFn,
				onBlur: mockFn,
				ref: mockFn,
			};
		});
		const { container } = render(<LoginForm onSubmit={mockFn} register={register} />);

		const checkbox = container.querySelector("input[data-testid='checkbox']") as HTMLInputElement;
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
				onChange: mockFn,
				onBlur: mockFn,
				ref: mockFn,
			};
		});
		render(<LoginForm onSubmit={mockFn} register={register} />);

		const button = screen.getByRole("button", { name: /login/i });
		expect(button).toHaveAttribute("type", "submit");
	});

	it("renders correctly", () => {
		const mockFn = vi.fn();
		const register: UseFormRegister<LoginFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: mockFn,
				onBlur: mockFn,
				ref: mockFn,
			};
		});
		const { container } = render(<LoginForm onSubmit={mockFn} register={register} />);
		expect(container).toMatchSnapshot();
	});
});
