import { NextResponse } from "next/server";

export function middleware(request) {
	const response = NextResponse.next();

	// Handle CORS headers
	response.headers.set("Access-Control-Allow-Origin", "*");
	response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	response.headers.set("Access-Control-Allow-Headers", "Content-Type, x-api-key");

	// Allow OPTIONS requests (preflight) without API key validation
	if (request.method === "OPTIONS") {
		return response;
	}

	
	const apiKey = request.headers.get("x-api-key");


	if (!apiKey || apiKey !== process.env.API_KEY) {
		return NextResponse.json({ message: "Forbidden: Invalid API Key" }, { status: 403 });
	}

	// Allow the request to proceed
	return response;
}

// Apply middleware only to API routes, excluding OG image generation
export const config = {
	matcher: [
		"/api/((?!og).*)", // Match all API routes except /api/og
	],
};
