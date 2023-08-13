import React, {
	DetailedHTMLProps,
	ForwardedRef,
	forwardRef,
	InputHTMLAttributes,
} from "react";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";

export type InputProps = {
	useTextArea?: boolean;
	label?: string;
	helpText?: string;
	error?: string;
	optional?: boolean;
	leadingIcon?: React.ReactNode;
	trailingIcon?: React.ReactNode;
} & Omit<
	DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	>,
	"size"
>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
	(
		{
			onChange,
			onBlur,
			disabled,
			name,
			label,
			error,
			helpText,
			type,
			placeholder,
			value,
			optional,
			leadingIcon,
			trailingIcon,
			className,
			useTextArea = false,
		},
		ref
	) => {
		return (
			<div>
				{label && (
					<div className="flex justify-between">
						<label
							className="block text-sm font-medium leading-6 text-gray-900"
							htmlFor={name}>
							{label}
						</label>
						{optional && (
							<span
								className="text-sm leading-6 text-gray-500"
								id="optional">
								Optional
							</span>
						)}
					</div>
				)}

				<div className="relative mt-2 rounded-md shadow-sm">
					{leadingIcon && (
						<div className="absolute inset-y-0 left-0 flex items-center pl-3">
							{leadingIcon}
						</div>
					)}
					{!useTextArea ? (
						<input
							className={classNames(
								"block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6",
								{
									"pl-10": leadingIcon,
									"pl-3": !leadingIcon,
									"pr-10": trailingIcon ?? error,
									"pr-3": !trailingIcon && !error,
									"text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-purple-600":
										!error,
									"text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500":
										error,
								},
								className
							)}
							disabled={disabled}
							id={name}
							name={name}
							onBlur={onBlur}
							onChange={onChange}
							placeholder={placeholder}
							ref={ref}
							type={type}
							value={value}
						/>
					) : (
						<textarea
							className={classNames(
								"block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500 disabled:ring-gray-200 sm:text-sm sm:leading-6 max-h-48",
								{
									"pl-10": leadingIcon,
									"pl-3": !leadingIcon,
									"pr-10": trailingIcon ?? error,
									"pr-3": !trailingIcon && !error,
									"text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-purple-600":
										!error,
									"text-red-900 ring-red-300 placeholder:text-red-300 focus:ring-red-500":
										error,
								},
								className
							)}
							disabled={disabled}
							id={name}
							name={name}
							placeholder={placeholder}
							rows={8}
							// ref={ref}
							cols={24}
							value={value}
						/>
					)}
					{error && (
						<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
							<ExclamationCircleIcon
								aria-hidden="true"
								className="h-5 w-5 text-red-500"
							/>
						</div>
					)}
					{trailingIcon && !error && (
						<div className="absolute inset-y-0 right-0 flex items-center pr-3">
							{trailingIcon}
						</div>
					)}
				</div>
				{error && (
					<p
						className="mt-2 text-sm text-red-600"
						id={`${name}-error`}>
						{error}
					</p>
				)}

				{helpText && (
					<p
						className="mt-2 text-sm text-gray-500"
						id={`${name}-description`}>
						{helpText}
					</p>
				)}
			</div>
		);
	}
);

Input.displayName = "Input";
