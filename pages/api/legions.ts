import { NextRequest, NextResponse } from "next/server";
import pool from "../../app/lib/database";

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const traitorParam = searchParams.get("traitor");

		let query = "SELECT * FROM legions";
		const params: any[] = [];

		if (traitorParam !== null) {
			query += " WHERE traitor = $1";
			params.push(traitorParam === "true");
		}

		const { rows: legions } = await pool.query(query, params);

		return NextResponse.json(legions, {
			headers: {
				"Cache-Control": "public, s-maxage=3600, stale-while-revalidate=3600",
			},
		});
	} catch (err) {
		return NextResponse.json({ error: "Database error" }, { status: 500 });
	}
}
