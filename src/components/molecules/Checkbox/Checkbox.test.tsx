import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

const changeFn = vi.fn();
const blurFn = vi.fn();
const refFn = vi.fn();

describe("Checkbox", () => {
	it("component exist with default unchecked value", () => {
		render(
			<Checkbox
				name="toSave"
				label="Save?"
				error=""
				onChange={changeFn}
				onBlur={blurFn}
				inputRef={refFn}
			/>,
		);

		const checkbox = screen.getByTestId("checkbox-toSave") as HTMLInputElement;
		expect(checkbox).toBeInTheDocument();
		expect(checkbox.checked).toBe(false);
	});
	it("has appropriate type, id and label", () => {
		render(
			<Checkbox
				name="toSave"
				label="Save?"
				error=""
				onChange={changeFn}
				onBlur={blurFn}
				inputRef={refFn}
			/>,
		);
		const checkbox = screen.getByTestId("checkbox-toSave") as HTMLInputElement;

		expect(checkbox.type).toBe("checkbox");
		expect(checkbox).toHaveProperty("id", "toSave");
		expect(checkbox).toHaveAccessibleName("Save?");
	});
	it("changes values", () => {
		render(
			<Checkbox
				name="toSave"
				label="Save?"
				error=""
				onChange={changeFn}
				onBlur={blurFn}
				inputRef={refFn}
			/>,
		);
		const checkbox = screen.getByTestId("checkbox-toSave") as HTMLInputElement;

		fireEvent.click(checkbox);
		expect(changeFn).toBeCalled();
		
		expect(checkbox).toBeChecked();
		fireEvent.click(checkbox);
		expect(checkbox.checked).toBe(false);
	});
	it("checkbox error is shown with correct text", () => {
		render(
			<Checkbox
				name="toSave"
				label="Save?"
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
	it("input error is not rendered", () => {
		const { container } = render(
			<Checkbox
				name="toSave"
				label="Save?"
				error=""
				onChange={changeFn}
				onBlur={blurFn}
				inputRef={refFn}
			/>,
		);

		const error = container.querySelector("[data-testid='error']") as HTMLInputElement;

		expect(error).toBe(null);
		expect(error).not.toBeInTheDocument();
	});
	it("renders correctly", () => {
		const wrapper = render(
			<Checkbox
				name="toSave"
				label="Save?"
				error=""
				onChange={changeFn}
				onBlur={blurFn}
				inputRef={refFn}
			/>,
		);

		expect(wrapper.container).toMatchSnapshot();
	});
});
