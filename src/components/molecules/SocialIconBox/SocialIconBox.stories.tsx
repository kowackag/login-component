import type { Meta, StoryObj } from "@storybook/react";

import { SocialIconBox } from "./SocialIconBox";

const meta: Meta<typeof SocialIconBox> = {
	component: SocialIconBox,
};

export default meta;

type Story = StoryObj<typeof SocialIconBox>;

export const Default: Story = {
	args: {},
};
