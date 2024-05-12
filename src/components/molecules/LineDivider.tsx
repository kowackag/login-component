import { HorizontalLine } from "../atoms/HorizontalLine";

export const LineDivider = () => {
	return (
		<div className="my-3 flex items-center">
			<HorizontalLine />
			<p className="font-primaryRegular rounded-md  border-2 border-neutral-300 px-1 py-0.5 uppercase text-neutral-400">
				or
			</p>
			<HorizontalLine />
		</div>
	);
};
