import { HorizontalLine } from "@/components/atoms/HorizontalLine";

export const OrDividerBox = () => {
	return (
		<div className="my-3 flex items-center">
			<HorizontalLine />
			<p className="leading-2 rounded border-2 border-neutral-300 px-1 font-primaryRegular uppercase text-neutral-400">
				or
			</p>
			<HorizontalLine />
		</div>
	);
};
