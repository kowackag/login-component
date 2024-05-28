import { HorizontalLine } from "@/components/atoms/HorizontalLine/HorizontalLine";

export const LineDivider = () => {
	return (
		<div className="my-3 flex items-center">
			<HorizontalLine />
			<p className="rounded-md border-2  border-neutral-300 px-1 py-0.5 font-primaryRegular uppercase text-neutral-400">
				or
			</p>
			<HorizontalLine />
		</div>
	);
};
