import type { Meta, StoryObj } from "@storybook/react";

import { ErrorMessage } from "./Error";

const meta: Meta<typeof ErrorMessage> = {
	component: ErrorMessage,
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
	args: {
		message: "some error",
	},
};
