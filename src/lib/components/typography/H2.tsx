import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const H2 = forwardRef<HTMLHeadingElement, HeadingProps>(({ children, className, ...props }, ref) => (
	<h2 ref={ref} className={joinCls("font-heading font-bold text-lg", className)} {...props}>
		{children}
	</h2>
));
