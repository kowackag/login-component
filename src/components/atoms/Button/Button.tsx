export const Button = ({ text, type }: { text: string; type: HTMLButtonElement["type"] }) => {
	return (
		<button
			className="my-2 w-full rounded-lg bg-bright-rose text-center font-primaryMedium text-sm uppercase leading-10 tracking-widest text-neutral-100 shadow-btn"
			type={type}
		>
			{text}
		</button>
	);
};
