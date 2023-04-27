import { defineMessages } from "react-intl";

// Scope is used to identify the messages in the translation files
const SCOPE = "MyAccount";

// Define messages for the page
export const myAccountMessages = defineMessages<string, MessageItem, MessageCollection>({
	seeMoreButton: {
		id: `${SCOPE}.SeeMoreButton`,
		en: "SEE MORE",
		vi: "XEM THÊM",
	},
});
