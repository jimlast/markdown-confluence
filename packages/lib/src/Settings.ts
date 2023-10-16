export type ConfluenceSettings = {
	confluenceBaseUrl: string;
	confluenceParentId: string;
	usePersonalAccessToken: boolean;
	personalAccessToken: string;
	atlassianUserName: string;
	atlassianApiToken: string;
	folderToPublish: string;
	contentRoot: string;
	firstHeadingPageTitle: boolean;
};

export const DEFAULT_SETTINGS: ConfluenceSettings = {
	confluenceBaseUrl: "",
	confluenceParentId: "",
	usePersonalAccessToken: true,
	personalAccessToken: "",
	atlassianUserName: "",
	atlassianApiToken: "",
	folderToPublish: "Confluence Pages",
	contentRoot: process.cwd(),
	firstHeadingPageTitle: false,
};
