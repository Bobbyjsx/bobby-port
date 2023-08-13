import * as Yup from 'yup';

export const EmailSchema = Yup.object({
	fullname: Yup.string().required("Required"),
	email: Yup.string().email().required("Required"),
	subject: Yup.string().required("Required"),
	message: Yup.string().required("Required"),
});