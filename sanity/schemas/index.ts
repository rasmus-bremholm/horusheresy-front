// schemas/index.js - Main schema export file

import apiEndpoint from "./apiEndpoint";
import endpointCategory from "./endpointCategory";
import parameter from "./parameter";
import apiResponse from "./apiResponse";
import codeExample from "./codeExample";

export default [
	// Documents
	apiEndpoint,
	endpointCategory,

	// Objects
	parameter,
	apiResponse,
	codeExample,
];
