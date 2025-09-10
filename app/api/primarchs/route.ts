import { NextRequest, NextResponse } from "next/server";
import pool from "../../lib/database";

// Primarchs
export async function GET(request: NextRequest) {
	try {
		const { searchParams } = new URL(request.url);
		const traitorParam = searchParams.get("traitor");
		const legionIdParam = searchParams.get("legion_id");
		const sort = searchParams.get("sort");
		const order = searchParams.get("order");

		const validSortFields = ["name", "discovery_order", "legion_id"];

		if (legionIdParam && (isNaN(parseInt(legionIdParam)) || parseInt(legionIdParam) < 1)) {
			return NextResponse.json({
				error: "legion_id must be a positive number",
				status: 400,
			});
		}

		if (traitorParam && !["true", "false"].includes(traitorParam)) {
			return NextResponse.json({
				error: "traitor has to be either 'true' or 'false'",
				status: 400,
			});
		}

		let query = "SELECT * FROM primarchs";
		const params: any[] = [];

		if (traitorParam && legionIdParam) {
			query += " WHERE traitor = $1 AND legion_id = $2";
			params.push(traitorParam, parseInt(legionIdParam));
		} else if (traitorParam) {
			query += " WHERE traitor = $1";
			params.push(traitorParam);
		} else if (legionIdParam) {
			query += " WHERE legion_id = $1";
			params.push(parseInt(legionIdParam));
		}

		if (sort && validSortFields.includes(sort)) {
			const sortOrder = order === "desc" ? "DESC" : "ASC";
			query += ` ORDER BY ${sort} ${sortOrder}`;
		}

		// Defaults to sorting on legion ID
		if (!sort) {
			query += " ORDER BY legion_id ASC";
		}

		const { rows: primarchs } = await pool.query(query, params);
		return NextResponse.json(primarchs, {
			headers: {
				"Cache-Control": "public, s-maxage=3600, stale-while-revalidate=3600",
			},
		});
	} catch (err) {
		console.error("Database error:", err);
		return NextResponse.json({ error: "Database error" }, { status: 500 });
	}
}
