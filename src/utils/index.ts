import { HandlerFunction } from "@storybook/addon-actions";

export const preventSubmitBeforeAction =
	(actionHandler: HandlerFunction) => (event: React.FormEvent) => {
		event.preventDefault();
		actionHandler(event);
	};