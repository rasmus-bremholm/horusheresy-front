import { NextRequest, NextResponse } from "next/server";
import pool from "../../lib/database";

export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const traitorParam = searchParams.get("traitor");
		const sort = searchParams.get("sort");
		const order = searchParams.get("order");

		const validSortFields = ["name", "id", "size"];

		let query = "SELECT * FROM legions";
		const params: any[] = [];

		if (traitorParam) {
			query += " WHERE traitor = $1";
			params.push(traitorParam === "true");
		}

		if (traitorParam && !["true", "false"].includes(traitorParam)) {
			return NextResponse.json({ error: "traitor must be 'true' or 'false'" }, { status: 400 });
		}

		if (sort && validSortFields.includes(sort)) {
			const sortOrder = order === "desc" ? "DESC" : "ASC";
			query += ` ORDER BY ${sort} ${sortOrder}`;
		}

		if (!sort) {
			query += ` ORDER BY id ASC`;
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
