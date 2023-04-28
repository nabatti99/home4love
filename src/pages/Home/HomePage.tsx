import { Button, Column, Footer, Grid, H1, H2, Image, Row, TabGroup, TabItem, TabList, TabPanel, TabPanels, Text, Small } from "@components";
import { randomImgUrl } from "@utilities";
import { CardItem } from "./components";
import bannerJpg from "./images/banner.jpg";
import donateJpg from "./images/donate.png";
import haichauJpg from "./images/haichau.png";
import partnerJpg from "./images/partner.png";
import section1Jpg from "./images/section1-img.jpg";
import transparentJpg from "./images/transparent.png";
import voteJpg from "./images/vote.png";

export const HomePage = ({}: HomePageProps) => {
	return (
		<div className="">
			<section className="bg-gray-100">
				<div className="container mx-auto">
					<img src={bannerJpg} className="w-full" />
				</div>
			</section>

			<section className="container mx-auto mt-16">
				<Grid className="grid-cols-2 grid-rows-1 gap-20">
					<Column className="col-span-1 justify-center">
						<H1 className="text-accent">Home4Hope - Hãy đóng góp vì tương lai trẻ em Việt Nam</H1>

						<Column className="mt-16 gap-4">
							<Text className="text-in-gray">
								Chúng tôi là một dự án cộng đồng, tiền và chi phí thu được thông qua việc đóng góp sẽ chuyển đến trực tiếp đến những hộ khó khăn, xây nên những ngôi nhà, chung tay
								xây dựng những tổ ấm cho trẻ em Việt Nam.{" "}
							</Text>

							<Text className="text-in-gray">Nhìn lại chặng đường Home4Love đã đi qua</Text>

							<Row>
								<Column className="gap-2">
									<H2 className="px-2 border-l-2 border-light-accent leading-4">5</H2>
									<Small className="text-in-gray px-2">Dự án đã được gây quỹ thành công</Small>
								</Column>
								<Column className="gap-2">
									<H2 className="px-2 border-l-2 border-light-accent leading-4">80 + triệu</H2>
									<Small className="text-in-gray px-2">Dự án đã được gây quỹ thành công</Small>
								</Column>
								<Column className="gap-2">
									<H2 className="px-2 border-l-2 border-light-accent leading-4">103+ </H2>
									<Small className="text-in-gray px-2">Dự án đã được gây quỹ thành công</Small>
								</Column>
							</Row>

							<Row className="gap-4 mt-4">
								<Button variant="fill" className="">
									Quyên góp
								</Button>
								<Button variant="outline" className="">
									Giới thiệu
								</Button>
							</Row>
						</Column>
					</Column>

					<Column>
						<img src={section1Jpg} />
					</Column>
				</Grid>
			</section>

			<div className="bg-accent/20">
				<section className="container mx-auto py-20 mt-16">
					<H1 className="text-center">Các hoàn cảnh quyên góp</H1>
					<H2 className="font-normal text-in-gray text-center mt-2">Chung tay quyên góp giúp đỡ các hoàn cảnh khó khăn trên khắp cả nước.</H2>

					<TabGroup className="mt-8">
						<TabList className="justify-center">
							<TabItem>Trái Tim MoMo</TabItem>
							<TabItem>Heo Đất MoMo</TabItem>
						</TabList>

						<TabPanels>
							<TabPanel>
								<Text className="text-dark-gray">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae
									libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in molestie diam bibendum sed.
								</Text>
							</TabPanel>

							<TabPanel>
								<Grid className="grid-cols-3 grid-rows-2 gap-10">
									{[...Array(6)].map((_, i) => (
										<CardItem imageUrl={randomImgUrl()} />
									))}
								</Grid>
							</TabPanel>
						</TabPanels>
					</TabGroup>
				</section>
			</div>

			<div className="bg-gray-50">
				<section className="container mx-auto py-20">
					<H1 className="text-center text-accent">Home4Hope - Hành động mỗi ngày</H1>
					<Grid className="grid-cols-2 grid-rows-2 gap-10 mt-20">
						<Row className="gap-4">
							<div className="shrink-0 w-20">
								<Image src={donateJpg} />
							</div>
							<Column className="gap-2">
								<H2 className="text-accent mt-1">Quyên góp nhanh chóng, dễ dàng</H2>
								<Text className="text-in-gray">Chỉ với vài chạm, bạn đã góp phần giúp đỡ 1 hoàn cảnh khó khăn có cuộc sống tốt đẹp hơn.</Text>
							</Column>
						</Row>

						<Row className="gap-4">
							<div className="shrink-0 w-20">
								<Image src={transparentJpg} />
							</div>
							<Column className="gap-2">
								<H2 className="text-accent mt-1">Minh bạch, công khai mọi khoản đóng góp</H2>
								<Text className="text-in-gray">Mọi thông tin về hoạt động đóng góp, tài trợ đều được công khai và cập nhật liên tục.</Text>
							</Column>
						</Row>

						<Row className="gap-4">
							<div className="shrink-0 w-20">
								<Image src={voteJpg} />
							</div>
							<Column className="gap-2">
								<H2 className="text-accent mt-1">1000đ cũng là đáng quý</H2>
								<Text className="text-in-gray">
									Với mức ủng hộ tối thiểu 1.000 đồng, bạn đã cùng hàng triệu nhà hảo tâm khác của “Trái tim MoMo” giúp đỡ những mảnh đời khó khăn.
								</Text>
							</Column>
						</Row>

						<Row className="gap-4">
							<div className="shrink-0 w-20">
								<Image src={partnerJpg} />
							</div>
							<Column className="gap-2">
								<H2 className="text-accent mt-1">Đối tác của các cơ quan, tổ chức hảo tâm uy tín</H2>
								<Text className="text-in-gray">“Trái tim MoMo” đã và đang kết nối được với rất nhiều đơn vị bảo trợ, báo chí, đơn vị hảo tâm uy tín trên cả nước.</Text>
							</Column>
						</Row>
					</Grid>
				</section>
			</div>

			<section className="container mx-auto py-20">
				<H1 className="text-center text-accent">Các đối tác đồng hành</H1>
				<Text className="to-in-gray text-center mt-2">Các tổ chức nhân đạo Phi Lợi Nhuận đồng hành cùng HomeLab.ao giúp đỡ các hoàn cảnh khó khăn trên khắp cả nước.</Text>

				<Grid className="grid-cols-3 grid-rows-2 gap-10 mt-10">
					{[...Array(9)].map((_, i) => (
						<Row className="items-center gap-4 border p-2 border-transparent hover:border-gray-300 cursor-pointer rounded-md">
							<div className="shrink-0 w-20">
								<Image src={haichauJpg} />
							</div>
							<Column className="gap-2">
								<H2 className="text-accent">Quỹ Fred Hollows ở Việt Nam</H2>
								<Text className="text-in-gray">Tiền lẻ mỗi ngày Xây ngay nghìn trường mới.</Text>
							</Column>
						</Row>
					))}
				</Grid>

				<Row className="justify-center mt-10">
					<Button variant="outline">Xem tất cả</Button>
				</Row>
			</section>

			<section className="container mx-auto py-20 max-w-5xl">
				<H1 className="text-center text-accent">Khi thiện nguyện là nguồn hạnh phúc</H1>

				<Column className="gap-2 mt-10">
					<Text className="to-in-gray mt-2">
						Đời sống xã hội ngày càng được nâng cao cũng là lúc người ta phát sinh nhu cầu muốn được chia sẻ, được đóng góp cho xã hội, giúp đỡ những cộng đồng yếu thế, những hoàn
						cảnh khó khăn.
					</Text>
					<Text className="to-in-gray mt-2">
						Làm việc thiện không chỉ là sự cho đi, sự sẻ chia giá trị mà còn giúp mỗi người nhận về niềm vui, cảm xúc tích cực, ý nghĩa. Với tôn chỉ “người dùng hạnh
						phúc”, MoMo quyết định khai thác “nguồn hạnh phúc” đầy ý nghĩa là hoạt động thiện nguyện..
					</Text>
					<Text className="to-in-gray mt-2">
						Làm việc thiện không chỉ là sự cho đi, sự sẻ chia giá trị mà còn giúp mỗi người nhận về niềm vui, cảm xúc tích cực, ý nghĩa. Với tôn chỉ “người dùng hạnh
						phúc”, MoMo quyết định khai thác “nguồn hạnh phúc” đầy ý nghĩa là hoạt động thiện nguyện..
					</Text>
					<Text className="to-in-gray mt-2">
						Làm việc thiện không chỉ là sự cho đi, sự sẻ chia giá trị mà còn giúp mỗi người nhận về niềm vui, cảm xúc tích cực, ý nghĩa. Với tôn chỉ “người dùng hạnh
						phúc”, MoMo quyết định khai thác “nguồn hạnh phúc” đầy ý nghĩa là hoạt động thiện nguyện..
					</Text>
					<Text className="to-in-gray mt-2">
						Làm việc thiện không chỉ là sự cho đi, sự sẻ chia giá trị mà còn giúp mỗi người nhận về niềm vui, cảm xúc tích cực, ý nghĩa. Với tôn chỉ “người dùng hạnh
						phúc”, MoMo quyết định khai thác “nguồn hạnh phúc” đầy ý nghĩa là hoạt động thiện nguyện..
					</Text>
					<Text className="to-in-gray mt-2">
						Làm việc thiện không chỉ là sự cho đi, sự sẻ chia giá trị mà còn giúp mỗi người nhận về niềm vui, cảm xúc tích cực, ý nghĩa. Với tôn chỉ “người dùng hạnh
						phúc”, MoMo quyết định khai thác “nguồn hạnh phúc” đầy ý nghĩa là hoạt động thiện nguyện..
					</Text>
				</Column>

				<Row className="justify-center mt-10">
					<Button variant="outline">Xem tất cả</Button>
				</Row>
			</section>

			<div className="h-[1px] bg-light-gray" />

			<section className="container mx-auto py-20">
				<Column>
					<H1 className="text-accent">
						Khi thiện nguyện
						<br />
						là nguồn hạnh phúc
					</H1>

					{/* <div className="w-full px-4 pt-16">
						<div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
							<Disclosure>
								{({ open }) => (
									<>
										<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											<span>What is your refund policy?</span>
											<ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
										</Disclosure.Button>
										<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
											If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.
										</Disclosure.Panel>
									</>
								)}
							</Disclosure>
							<Disclosure as="div" className="mt-2">
								{({ open }) => (
									<>
										<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
											<span>Do you offer technical support?</span>
											<ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-purple-500`} />
										</Disclosure.Button>
										<Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">No.</Disclosure.Panel>
									</>
								)}
							</Disclosure>
						</div>
					</div> */}
				</Column>
			</section>

			<Footer className="container mx-auto mt-52" />
		</div>
	);
};

// Using for lazy loading page
export default HomePage;
