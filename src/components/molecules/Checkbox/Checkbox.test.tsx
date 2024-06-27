import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
	it("component exist", () => {
		const mockFn = vi.fn();
		const { container } = render(
			<Checkbox
				name="toSave"
				label="Save?"
				error=""
				onChange={mockFn}
				onBlur={mockFn}
				inputRef={mockFn}
			/>,
		);

		const checkbox = container.querySelector("#toSave") as HTMLInputElement;
		expect(checkbox).toBeInTheDocument();
	});
	it("has appropriate type", () => {
		const mockFn = vi.fn();
		const { container } = render(
			<Checkbox
				name="toSave"
				label="Save?"
				error=""
				onChange={mockFn}
				onBlur={mockFn}
				inputRef={mockFn}
			/>,
		);

		const checkbox = container.querySelector("#toSave") as HTMLInputElement;
		expect(checkbox.type).toBe("checkbox");
	});
	it("changes if is selected", () => {
		const mockFn = vi.fn();
		const { container } = render(
			<Checkbox
				name="toSave"
				label="Save?"
				error=""
				onChange={mockFn}
				onBlur={mockFn}
				inputRef={mockFn}
			/>,
		);
		const checkbox = [...container.querySelectorAll("#toSave")][0] as HTMLInputElement;

		fireEvent.click(checkbox);
		expect(mockFn).toBeCalled();
		expect(checkbox.checked).toBe(true);
	});
	it("checkbox error is shown with correct text", () => {
		const mockFn = vi.fn();
		render(
			<Checkbox
				name="toSave"
				label="Save?"
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
			<Checkbox
				name="toSave"
				label="Save?"
				error=""
				onChange={mockFn}
				onBlur={mockFn}
				inputRef={mockFn}
			/>,
		);
		const error = container.querySelector("[data-testid='error']") as HTMLInputElement;

		expect(error).toBe(null);
	});
	it("renders correctly", () => {
		const mockFn = vi.fn();
		const wrapper = render(
			<Checkbox
				name="toSave"
				label="Save?"
				error=""
				onChange={mockFn}
				onBlur={mockFn}
				inputRef={mockFn}
			/>,
		);
		expect(wrapper.container).toMatchSnapshot();
	});
});
