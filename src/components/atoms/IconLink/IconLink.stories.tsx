import type { Meta, StoryObj } from "@storybook/react";

import { IconLink } from "./IconLink";

const meta: Meta<typeof IconLink> = {
	component: IconLink,
};

export default meta;

type Story = StoryObj<typeof IconLink>;

export const Default: Story = {
	args: {
		href: "",
		name: "google",
	},
};
