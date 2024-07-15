import type { Meta, StoryObj } from "@storybook/react";

import { HorizontalLine } from "./HorizontalLine";

const meta: Meta<typeof HorizontalLine> = {
	component: HorizontalLine,
      decorators: [
		(Story) => (
			<div style={{ display:"flex", width: "360px" }}>
				<Story />
			</div>
		),
	],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
