import { Small, Text } from "@components/typography";
import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const Tag = forwardRef<HTMLDivElement, TagProps>(({ textClassName, className, children, ...props }, ref) => {
	return (
		<div ref={ref} className={joinCls("rounded-full overflow-hidden px-4 py-2", className)} {...props}>
			<Small className={joinCls("font-bold", textClassName)}>{children}</Small>
		</div>
	);
});
