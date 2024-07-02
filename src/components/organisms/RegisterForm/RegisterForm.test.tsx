import { expect, it, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { RegisterForm } from "./RegisterForm";
import { FieldErrors, UseFormRegister, FieldValues } from "react-hook-form";
type RegisterFieldsTypes = { email: string; password: string };

const changeFn = vi.fn();
const blurFn = vi.fn();
const refFn = vi.fn();

const submitFn = vi.fn();

describe("RegisterForm", () => {
	it("RegisterForm exists", async () => {
		const register: UseFormRegister<RegisterFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});
		render(<RegisterForm onSubmit={submitFn} register={register} />);

		const form = screen.getByTestId("register-form");
		expect(form).toBeInTheDocument();
	});

	it("has appropriate numbers of children", async () => {
		const register: UseFormRegister<RegisterFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});
		render(<RegisterForm onSubmit={submitFn} register={register} />);
		const form = screen.getByTestId("register-form");
		expect(form.children.length).toBe(3);
	});

	it("shows appropriate error numbers and errors message", async () => {
		const register: UseFormRegister<RegisterFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});
		const errors: FieldErrors<RegisterFieldsTypes> = {
			email: {
				message: "Invalid email",
				type: "invalid form",
			},
			password: {
				message: "Invalid password",
				type: "invalid form",
			},
		};
		render(<RegisterForm onSubmit={submitFn} register={register} errors={errors} />);
		const errorList = screen.getAllByTestId("error");
		expect(errorList).toHaveLength(2);
		expect(errorList[0]).toHaveTextContent("Invalid email");
		expect(errorList[1]).toHaveTextContent("Invalid password");
	});
	it("has button type submit", async () => {
		const register: UseFormRegister<RegisterFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});
		render(<RegisterForm onSubmit={submitFn} register={register} />);
		const button = screen.getByTestId("btn-submit");

		expect(button).toHaveAttribute("type", "submit");
	});

	it("renders correctly", () => {
		const mockFn = vi.fn();
		const register: UseFormRegister<RegisterFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: mockFn,
				onBlur: mockFn,
				ref: mockFn,
			};
		});
		const { container } = render(<RegisterForm onSubmit={mockFn} register={register} />);
		expect(container).toMatchSnapshot();
	});
});
