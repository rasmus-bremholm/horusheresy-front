// schemas/index.js - Main schema export file

import apiEndpoint from "./apiEndpoint";
import endpointCategory from "./endpointCategory";
import parameter from "./parameter";
import apiResponse from "./apiResponse";
import codeExample from "./codeExample";
import docPage from "./docPage";
import newsArticle from "./newsPage";

export default [
	// Documents
	apiEndpoint,
	endpointCategory,
	docPage,
	newsArticle,

	// Objects
	parameter,
	apiResponse,
	codeExample,
];
