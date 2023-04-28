import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const H3 = forwardRef<HTMLHeadingElement, HeadingProps>(({ children, className, ...props }, ref) => (
	<h3 ref={ref} className={joinCls("font-heading font-bold text-base", className)} {...props}>
		{children}
	</h3>
));
