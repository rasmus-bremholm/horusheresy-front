/*
/legions - lean collection (just legion data, maybe primarch name)
/legion/:id - rich detail view (legion + full primarch + all characters)
/characters - characters collection with filtering
/primarchs - what you already built

*/
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
	return NextResponse.json(
		{ message: "Characters endpoint coming soon!" },
		{ status: 501 } // Not Implemented
	);
}
