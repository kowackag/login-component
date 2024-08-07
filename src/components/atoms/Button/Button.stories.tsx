import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
	component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		text: "sign up",
		type: "submit",
	},
};
