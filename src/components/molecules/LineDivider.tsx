import { HorizontalLine } from "../atoms/HorizontalLine";

export const LineDivider = () => {
	return (
		<div className="my-3 flex items-center">
			<HorizontalLine />
			<p className="rounded-md border-2 text- text-base py-0.5 border-neutral-300 px-1 font-primaryMedium uppercase text-neutral-400">
				or
			</p>
			<HorizontalLine />
		</div>
	);
};
