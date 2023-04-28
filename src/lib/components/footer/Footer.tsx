import { Column, H3, Input, Row } from "@components";
import { joinCls } from "@utilities";
import { forwardRef } from "react";

export const Footer = forwardRef<HTMLDivElement, SkeletonProps>(({ className, children, ...props }, ref) => {
	return (
		<Row ref={ref} className={joinCls("justify-between items-end py-16 border-t border-light-gray", className)} {...props}>
			<Column>
				<Row className="gap-10">
					<H3 className="text-dark-gray">CONTACT</H3>
					<H3 className="text-dark-gray">TERMS OF SERVICES</H3>
					<H3 className="text-dark-gray">SHIPPING AND RETURNS</H3>
				</Row>
				<H3 className="mt-12">
					© 2021 Shelly. <span className="text-dark-gray">Terms of use</span> and <span className="text-dark-gray">privacy policy</span>.
				</H3>
			</Column>
			<Column className="items-end">
				<Input placeholder="Give an email, get the newsletter" icon={<i className="ri-mail-line" />} className="!w-96" />
				<Row className="gap-6 text-dark-gray text-2xl mt-8">
					<i className="ri-linkedin-fill hover:text-accent cursor-pointer" />
					<i className="ri-facebook-fill hover:text-accent cursor-pointer" />
					<i className="ri-instagram-fill hover:text-accent cursor-pointer" />
					<i className="ri-twitter-fill hover:text-accent cursor-pointer" />
				</Row>
			</Column>
		</Row>
	);
});
