import type { Meta, StoryObj } from "@storybook/react";

import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
	component: InputField,
	decorators: [
		(Story) => (
			<div style={{ width: "360px" }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
	args: {
		label: "Login",
		error: "it is required",
	},
};
