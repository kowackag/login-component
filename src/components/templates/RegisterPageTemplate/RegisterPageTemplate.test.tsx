import { expect, it, describe, vi } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { RegisterPageTemplate } from "./RegisterPageTemplate";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { RegisterFieldsTypes } from "@/pages/RegisterPage/RegisterPage";

const changeFn = vi.fn();
const blurFn = vi.fn();
const refFn = vi.fn();

const submitFn = vi.fn();

const mockedUsedNavigate = vi.fn();
vi.mock("react-router-dom", () => ({
	...vi.importActual("react-router-dom"),
	useNavigate: () => mockedUsedNavigate,
}));

describe("RegisterPageTemplate", () => {
	it("RegisterPageTemplate exists", async () => {
		const register: UseFormRegister<RegisterFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});
		render(<RegisterPageTemplate onSubmit={submitFn} register={register} />);
		const signUpForm = screen.getByTestId("register-form");
		expect(signUpForm).toBeInTheDocument();

		const title = screen.getByRole("heading", { level: 1 });
		expect(title).toHaveTextContent("Sign up");
	});

	it("calls useNavigate() and navigate to login page", async () => {
		const register: UseFormRegister<RegisterFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});
		render(<RegisterPageTemplate onSubmit={submitFn} register={register} />);
		const signUpForm = screen.getByTestId("register-form");
		expect(signUpForm).toBeInTheDocument();

		await waitFor(() => {
			const loginBtn = screen.getByTestId("btn-navigate");
			expect(loginBtn).toHaveTextContent(/login/);
			fireEvent.click(loginBtn);
		});
		expect(mockedUsedNavigate).toBeCalled();
		expect(mockedUsedNavigate.mock.lastCall[0]).toEqual("/login");
	});

	it("renders correctly", () => {
		const register: UseFormRegister<RegisterFieldsTypes> = vi.fn((name) => {
			return {
				name: name as FieldValues["name"],
				onChange: changeFn,
				onBlur: blurFn,
				ref: refFn,
			};
		});

		const { container } = render(<RegisterPageTemplate onSubmit={submitFn} register={register} />);

		expect(container).toMatchSnapshot();
	});
});
