import * as React from "react";
import { joinCls } from "@utilities/text.utils";

export const Small = React.forwardRef<HTMLParagraphElement, TextProps>(({ children, className, ...props }, ref) => (
	<p ref={ref} className={joinCls("font-body text-sm", className)} {...props}>
		{children}
	</p>
));
