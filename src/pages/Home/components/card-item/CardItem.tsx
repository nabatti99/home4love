import { Button, Column, H2, H3, Image, Overlay, Progress, Row, Small, Tag, Text } from "@components";
import { joinCls, randomImgUrl } from "@utilities";
import { forwardRef } from "react";

export const CardItem = forwardRef<HTMLDivElement, CardItemProps>(({ imageUrl, className, children, ...props }, ref) => {
	return (
		<Column ref={ref} className={joinCls("bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-lg", className)} {...props}>
			<Image src={imageUrl} className="w-full h-64" />

			<Column className="gap-4 p-6">
				<H2>Mang 5 Thư Viện Ước Mơ đến các em nhỏ vùng thiểu số khó khăn ở KonTum, Quảng Nam và Quảng Ngãi</H2>
				<Row className="justify-between">
					<Row className="gap-4 items-center">
						<Image src={randomImgUrl()} alt="avatar" className="w-8 h-8 shrink-0 border rounded-full" />
						<Text className="text-in-gray">Nguyễn Văn A</Text>
					</Row>

					<Tag className="bg-orange-200/20" textClassName="text-orange-500">
						Còn 58 Ngày
					</Tag>
				</Row>

				<Column>
					<Row className="items-end gap-2">
						<H2>968.232đ</H2>
						<Text className="text-in-gray">/ 104.000.000đ</Text>
					</Row>

					<Progress className="bg-light-gray mt-2" thumbClassName="bg-accent" percent={0.6} />
				</Column>

				<Row className="justify-between">
					<Column>
						<Small>Lượt quyên góp</Small>
						<H3>1.000</H3>
					</Column>
					<Column>
						<Small>Đạt được</Small>
						<H3>0.93%</H3>
					</Column>
					<Button variant="outline" className="!py-2 !px-4">
						Quyên góp
					</Button>
				</Row>
			</Column>
		</Column>
	);
});
