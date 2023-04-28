import { joinCls } from "@utilities/text.utils";
import { MouseEvent, forwardRef } from "react";
import { H3, Row } from "@components";

const buttonClass: Record<ButtonVariant, string> = {
	fill: `
    rounded-xl border-2 border-transparent 
    bg-accent text-white fill-white 
    hover:bg-accent/80 hover:border-accent 
    active:bg-accent/90
  `,
	outline: `
    rounded-xl border-2 
    bg-transparent text-accent fill-accent border-accent 
    hover:bg-light-accent/20 
    active:bg-light-accent/40
  `,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ title, disabled = false, variant = "fill", type, LeftItem, RightItem, children, className, onClick = () => {}, ...props }, ref) => {
		const handleClicked = (event: MouseEvent<HTMLButtonElement>) => {
			if (disabled) return;
			onClick!(event);
		};

		return (
			<button
				ref={ref}
				className={joinCls("px-6 py-3 transition-colors duration-300", buttonClass[variant], className, disabled ? "opacity-50" : "")}
				disabled={disabled}
				type={type}
				onClick={handleClicked}
				{...props}
			>
				<Row className="button-layout items-center justify-center gap-2">
					{LeftItem && <LeftItem className="w-6 h-6" />}
					<H3 className="button-text transition-colors duration-0">{children}</H3>
					{RightItem && <RightItem className="w-6 h-6" />}
				</Row>
			</button>
		);
	}
);
