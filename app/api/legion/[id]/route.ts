import { NextRequest, NextResponse } from "next/server";
import pool from "../../../lib/database";

interface RouteParams {
	params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
	const { id } = await params;
	const legionId = parseInt(id, 10);

	// Validate ID is a number and in valid range
	if (isNaN(legionId) || legionId < 1 || legionId > 20) {
		return NextResponse.json({ error: "Invalid legion ID. Must be a number between 1-20" }, { status: 400 });
	}

	try {
		const legionQuery = await pool.query("SELECT * FROM legions WHERE id = $1", [legionId]);
		const primarchQuery = await pool.query("SELECT * FROM primarchs WHERE legion_id = $1", [legionId]);
		const charactersQuerie = await pool.query("SELECT * from characters WHERE legion_id = $1", [legionId]);

		const response = {
			data: {
				legionInfo: legionQuery.rows[0],
				primarch: primarchQuery.rows[0],
				characters: charactersQuerie.rows[0],
			},
		};

		return NextResponse.json(response, {
			headers: {
				"Cache-Control": "public, s-maxage=3600, stale-while-revalidate=3600",
			},
		});
	} catch (err) {
		console.error("Database error:", err);
		return NextResponse.json({ error: "Database error" }, { status: 500 });
	}
}
