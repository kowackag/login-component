import { ReactNode } from "react";

export const ConfirmButton = ({ children, ...props }: { children: ReactNode }) => {
	return (
		<button
			className="my-2 w-full rounded-lg bg-bright-rose text-center font-primaryMedium text-sm uppercase leading-10 tracking-widest text-neutral-100 shadow-btn"
			type="submit"
			{...props}
		>
			{children}
		</button>
	);
};
