import { expect, it, describe, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { LoginPageTemplate } from "./LoginPageTemplate";
import { UseFormRegister, FieldValues } from "react-hook-form";

type LoginFieldsTypes = { email: string; password: string; toSave: boolean };

const changeFn = vi.fn();
const blurFn = vi.fn();
const refFn = vi.fn();

const submitFn = vi.fn();

const mockedUsedNavigate = vi.fn();
vi.mock("react-router-dom", () => ({
	...vi.importActual("react-router-dom"),
	useNavigate: () => mockedUsedNavigate,
}));

describe("LoginPageTemplate", () => {
	it("LoginPageTemplate exists", async () => {
		const register: UseFormRegister<LoginFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});
		render(<LoginPageTemplate onSubmit={submitFn} register={register} />);
		const form = screen.getByTestId("login-form");
		expect(form).toBeInTheDocument();
		const title = screen.getByRole("heading", { level: 1 });
		expect(title).toHaveTextContent("Login");
	});

	it("calls useNavigate() and navigate to register page", async () => {
		const register: UseFormRegister<LoginFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});
		render(<LoginPageTemplate onSubmit={submitFn} register={register} />);
		await waitFor(() => {
			const signUpBtn = screen.getByTestId("btn-navigate");
			expect(signUpBtn).toHaveTextContent(/sign up/);
			fireEvent.click(signUpBtn);
		});
		expect(mockedUsedNavigate).toBeCalled();
		expect(mockedUsedNavigate.mock.lastCall[0]).toEqual("/register");
	});

	it("calls useNavigate() and navigate to restore page", async () => {
		const register: UseFormRegister<LoginFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});
		render(<LoginPageTemplate onSubmit={submitFn} register={register} />);

		await waitFor(() => {
			const signUpBtn = screen.getByTestId("btn-restore-password");
			expect(signUpBtn).toHaveTextContent(/Forgot password/);
			fireEvent.click(signUpBtn);
		});
		expect(mockedUsedNavigate.mock.lastCall[0]).toEqual("/restore");
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
		const { container } = render(<LoginPageTemplate onSubmit={submitFn} register={register} />);
		expect(container).toMatchSnapshot();
	});
});
