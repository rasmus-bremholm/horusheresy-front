// schemas/index.js - Main schema export file
import docPage from "./docPage";
import apiEndpoint from "./apiEndpoint";
import endpointCategory from "./endPointCategory";
import parameter from "./parameter";
import apiResponse from "./apiResponse";
import codeExample from "./codeExample";

export const schemaTypes = [
	// Documents
	docPage,
	apiEndpoint,
	endpointCategory,

	// Objects
	parameter,
	apiResponse,
	codeExample,
];
