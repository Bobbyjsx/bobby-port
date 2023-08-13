import Tippy, { TippyProps } from "@tippyjs/react";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";
import { animateFill } from "tippy.js";

const tooltipStyles = cva("text-base p-2 block", {
	defaultVariants: {
		intent: "primary",
	},
	variants: {
		intent: {
			neutral:
				"!bg-indigo-100 [&>*]:!text-indigo-700 [&>.tippy-arrow]:!text-white",
			primary:
				"!bg-purple-600 [&>*]:!text-white [&>.tippy-arrow]:!text-purple-600",
		},
	},
});

interface TooltipProps
	extends TippyProps,
		VariantProps<typeof tooltipStyles> {}

export const Tooltip = ({
	children,
	content,
	className,
	intent,
	disabled,
	...props
}: TooltipProps) => {
	const _className = tooltipStyles({ intent });
	if (disabled) return <>{children}</>;

	return (
		<Tippy
			className={classNames(_className, className)}
			content={content}
      arrow={true}
      animateFill={false}
    plugins={[animateFill]}
			{...props}>
			<div>{children}</div>
		</Tippy>
	);
};
