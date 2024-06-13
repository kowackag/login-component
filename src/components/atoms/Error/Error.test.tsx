import { expect, test } from 'vitest'
import { render, screen } from "@testing-library/react";
import { ErrorMessage } from './Error';

test("Error displays appropriate message", () => {
	render(<ErrorMessage message="some error"/>);

	const message = screen.getByText("some error");
	expect(message).toHaveTextContent("some error");
});