export const ErrorMessage = ({ message }: { message: string }) => {
	return (
		<p data-testid="error" data-  className="absolute right-0 font-primaryMedium text-xs italic text-red-600">{message}</p>
	);
};
