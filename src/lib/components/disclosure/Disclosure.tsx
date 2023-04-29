import { H3 } from "@components";
import { Disclosure as BaseDisclosure, Transition } from "@headlessui/react";
import { joinCls } from "@utilities";
import { forwardRef } from "react";

export const Disclosure = forwardRef<HTMLDivElement, DisclosureProps>(({ title, className, children, ...props }, ref) => {
	return (
		<BaseDisclosure ref={ref} as="div" className={joinCls("", className)} {...props}>
			{({ open }) => (
				<>
					<BaseDisclosure.Button className={joinCls("flex justify-between gap-10 w-full bg-light-gray rounded-lg px-4 py-1", className)}>
						<div className="grow text-start">
							<H3>{title}</H3>
						</div>
						<div className={joinCls("shrink-0", open && "rotate-180")}>
							<i className="ri-arrow-down-s-line" />
						</div>
					</BaseDisclosure.Button>

					<Transition
						enter="transition duration-100 ease-out"
						enterFrom="transform scale-95 opacity-0"
						enterTo="transform scale-100 opacity-100"
						leave="transition duration-75 ease-out"
						leaveFrom="transform scale-100 opacity-100"
						leaveTo="transform scale-95 opacity-0"
					/>
					<BaseDisclosure.Panel className="px-4 py-2">{children}</BaseDisclosure.Panel>
				</>
			)}
		</BaseDisclosure>
	);
});
