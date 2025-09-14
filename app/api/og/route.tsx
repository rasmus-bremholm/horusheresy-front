// Heads up here. Im just following the documentation here. I have no idea how this /og package works.

import { ImageResponse } from "@vercel/og";

export async function GET(req: Request) {
	// This generates a legion specific OG image based on the data i fetch. Like legion name and number.
	const { searchParams } = new URL(req.url);
	const legion = searchParams.get("legion");
	const legionNumber = searchParams.get("number") || "XX";

	if (!legion) {
		return new ImageResponse(
			(
				<div
					style={{
						background: "linear-gradient(135deg, #1a1a2e, #16213e)",
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
						color: "whitesmoke",
						fontFamily: "serif",
					}}>
					<h1
						style={{
							fontSize: "48px",
							margin: "0 0 20px 0",
						}}>
						Horus Heresy API
					</h1>
					<p style={{ fontSize: "32px", margin: 0, opacity: 0.8 }}>The 30K REST API</p>
				</div>
			)
		);
	}

	return new ImageResponse(
		(
			<div
				style={{
					background: "linear-gradient(135deg, #1a1a2e, #16213e)",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					color: "whitesmoke",
					fontFamily: "serif",
				}}>
				<h1
					style={{
						fontSize: "48px",
						margin: "0 0 20px 0",
					}}>
					{legion}
				</h1>
				<p style={{ fontSize: "32px", margin: 0, opacity: 0.8 }}>The {legionNumber} Legion</p>
			</div>
		),
		{ width: 1200, height: 630 }
	);
}
