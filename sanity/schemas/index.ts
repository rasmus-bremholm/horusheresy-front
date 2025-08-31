// schemas/index.js - Main schema export file

import apiEndpoint from "./apiEndpoint";
import endpointCategory from "./endpointCategory";
import parameter from "./parameter";
import apiResponse from "./apiResponse";
import codeExample from "./codeExample";
import docPage from "./docPage";
import newsPage from "./newsPage";

export default [
	// Documents
	apiEndpoint,
	endpointCategory,
	docPage,
	newsPage,

	// Objects
	parameter,
	apiResponse,
	codeExample,
];
