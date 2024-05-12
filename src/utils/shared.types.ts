export type FormDataType = {
	email?: string | undefined;
	password?: string | undefined;
} | undefined;


export interface IFormValues {
	email: string;
	password: number;
	saved: boolean;
}
