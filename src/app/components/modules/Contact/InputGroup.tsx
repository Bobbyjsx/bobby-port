"use client"
import { useRef } from "react";
import { FiSend } from "react-icons/fi";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { Input } from "@/app/components/common/Input";
import { Button } from "@/app/components/common/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailSchema } from "@/app/components/modules/Contact/EmailSchema";
import toast from "react-hot-toast";

type FormData = {
	fullname: string;
	email: string;
	subject: string;
	message: string;
};
const InputGroup = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<FormData>({
		defaultValues: {
			fullname: "",
			email: "",
			subject: "",
			message: "",
		},
		resolver: yupResolver(EmailSchema),
	});
	// const storedData = JSON.parse(
	// 	window?.localStorage.getItem("email_values") || "null"
	// );

	const form = useRef<HTMLFormElement>(null);

	const onSubmit: SubmitHandler<FormData> = async (data) => {
		// window?.localStorage.setItem(
		// 	"email_values",
		// 	JSON.stringify(data)
		// );

		try {
			const formElement = form.current;
			if (formElement) {
				const response: EmailJSResponseStatus =
					await emailjs.sendForm(
						"service_xbyozb5",
						"template_kswozqb",
						formElement,
						"d8pPaXCkXe-1rURA8"
					);
			}
		} catch (error) {
			console.error("Error sending email:", error);
		}

		// send mails twice with a delay of 5seconds to avoid leaks
		setTimeout(async () => {
			try {
				const formElement = form.current;
				if (formElement) {
					const response: EmailJSResponseStatus =
						await emailjs.sendForm(
							"service_xbyozb5",
							"template_kswozqb",
							formElement,
							"d8pPaXCkXe-1rURA8"
						);
				
					reset();
					toast.success('Mail sent')
				
				}
			} catch (error) {
				console.error("Error sending Second email:", error);
				toast.error("Error sending Second email");
			}
		}, 1000);
	};
	return (
		<form
			ref={form}
			onSubmit={handleSubmit(onSubmit)}
			className="md:w-96 w-full flex flex-col justify-center items-center gap-5 h-full max-h-max ">
			<h3 className="font-sans  font-bold text-base capitalize text-black flex w-full  items-center gap-x-5">
				<span>
					{" "}
					<FiSend className="text-indigo-600 w-5 h-5" />
				</span>
				write me your project
			</h3>
			<div className="flex flex-col flex-1 w-72 max-w-7xl h-1/2">
				<Input
					type="text"
					className="rounded-r-full rounded-l-full w-full h-12"
					label="FullName"
					placeholder="Your name"
					error={errors?.fullname?.message}
					disabled={isSubmitting}
					{...register("fullname")}
				/>
				<Input
					type="email"
					className="rounded-r-full rounded-l-full w-full h-12"
					label="E-mail"
					placeholder="Your email address"
					error={errors?.email?.message}
					disabled={isSubmitting}
					{...register("email")}
				/>
				<Input
					type="text"
					className="rounded-r-full rounded-l-full w-full h-12"
					label="Subject"
					placeholder="Subject of this mail"
					error={errors?.subject?.message}
					disabled={isSubmitting}
					{...register("subject")}
				/>
				<Input
					type="text"
					className="h-24"
					label="Message"
					placeholder="Message of this mail"
					error={errors?.message?.message}
					disabled={isSubmitting}
					{...register("message")}
				/>
			</div>
			<Button
				type="submit"
				className="font-bold flex justify-center items-center "
				isLoading={isSubmitting}
				intent={"neutral"}>
				<div className="flex items-center justify p-2 gap-x-2">
					<p className="">Send Message</p>
					{!isSubmitting && (
						<div className="flex flex-col items-center justify-center  h-full rounded-full ">
							<FiSend className="text-indigo-600 w-5 h-5" />
						</div>
					)}
				</div>
			</Button>
		</form>
	);
};

export default InputGroup;
