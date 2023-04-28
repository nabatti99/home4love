import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const H1 = forwardRef<HTMLHeadingElement, HeadingProps>(({ children, className, ...props }, ref) => (
	<h1 ref={ref} className={joinCls("font-heading font-bold text-3xl", className)} {...props}>
		{children}
	</h1>
));
