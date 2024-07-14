import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
	component: Checkbox,
	decorators: [
		(Story) => (
			<div style={{ width: "360px" }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	args: {
		label: "Save?",
		error: "it is required",
	},
};
