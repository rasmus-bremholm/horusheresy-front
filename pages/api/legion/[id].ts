import { NextRequest, NextResponse } from "next/server";
import pool from "../../../app/lib/database";

interface RouteParams {
	params: {
		id: string;
	};
}

export async function GET(request: NextRequest, { params }: RouteParams) {
	const legionId = parseInt(params.id, 10);

	// Validate ID is a number and in valid range
	if (isNaN(legionId) || legionId < 1 || legionId > 20) {
		return NextResponse.json({ error: "Invalid legion ID. Must be a number between 1-20" }, { status: 400 });
	}

	try {
		const query = "SELECT * FROM legions WHERE id = $1";
		const { rows: legion } = await pool.query(query, [legionId]);

		if (legion.length === 0) {
			return NextResponse.json({ error: "Legion not found" }, { status: 404 });
		}

		return NextResponse.json(legion[0], {
			headers: {
				"Cache-Control": "public, s-maxage=3600, stale-while-revalidate=3600",
			},
		});
	} catch (err) {
		console.error("Database error:", err);
		return NextResponse.json({ error: "Database error" }, { status: 500 });
	}
}
