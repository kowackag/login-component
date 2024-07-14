export const ErrorMessage = ({ message }: { message: string }) => {
	return (
		<p
			data-testid="error"
			className="absolute right-0 font-primaryMedium text-xs italic text-red-600"
		>
			{message}
		</p>
	);
};
