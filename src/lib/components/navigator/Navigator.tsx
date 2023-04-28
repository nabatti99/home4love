import { H2, H3, Row } from "@components";
import { joinCls } from "@utilities";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { Title } from "./Title";
import logoPng from "./images/logo.png";

export const Navigator = forwardRef<HTMLDivElement, NavigatorProps>(({ className, ...props }, ref) => {
	return (
		<>
			<Title />

			<nav ref={ref} className={joinCls("h-16 border-b border-in-gray bg-white z-10", className)} {...props}>
				<Row className="container mx-auto h-full justify-between items-center gap-14">
					<Link to="/">
						<img src={logoPng} />
					</Link>

					<Row className="items-center gap-16">
						<Row className="items-center gap-20">
							<Link to="/shop">
								<H3 className="text-black hover:text-accent">Hoàn Cảnh Quyên Góp</H3>
							</Link>
							<Link to="/blog">
								<H3 className="text-black hover:text-accent">Đối Tác Đồng Hành</H3>
							</Link>
							<Link to="/story">
								<H3 className="text-black hover:text-accent">Tin Tức Cộng Đồng</H3>
							</Link>
							<Link to="/story">
								<H3 className="text-black hover:text-accent">Blog Cuộc Sống</H3>
							</Link>
						</Row>
					</Row>
				</Row>
			</nav>
		</>
	);
});
