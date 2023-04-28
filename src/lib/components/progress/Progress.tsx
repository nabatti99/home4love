import { Small, Text } from "@components/typography";
import { joinCls } from "@utilities/text.utils";
import { forwardRef } from "react";

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(({ percent, thumbClassName, className, children, ...props }, ref) => {
	return (
		<div ref={ref} className={joinCls("relative rounded-full h-2 w-full", className)} {...props}>
			<div className={joinCls("absolute rounded-full h-2", thumbClassName)} style={{ width: `${percent * 100}%` }} />
		</div>
	);
});
