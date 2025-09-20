// Heads up here. Im just following the documentation here. I have no idea how this /og package works.

import { ImageResponse } from "@vercel/og";

const fontUrl = "https://fonts.googleapis.com/css2?family=IM+Fell+English:wght@400&display=swap";

export async function GET(req: Request) {
	// This generates a legion specific OG image based on the data i fetch. Like legion name and number.
	const { searchParams } = new URL(req.url);
	const legion = searchParams.get("legion");
	const legionNumber = searchParams.get("number") || "XX";

	const fontData = await fetch(new URL("https://fonts.gstatic.com/s/imfellenglish/v18/Ktk6ALSMeZjqPXneuFCgdg.woff2")).then((res) => res.arrayBuffer());

	if (!legion) {
		return new ImageResponse(
			(
				<div
					style={{
						background: "linear-gradient(135deg, #F7F7FC, #D1D3E0)",
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						flexDirection: "column",
						color: "#141414",
						fontFamily: "IM Fell English",
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
			),
			{
				width: 1200,
				height: 630,
				fonts: [
					{
						name: "IM Fell English",
						data: fontData,
						style: "normal",
					},
				],
			}
		);
	}

	return new ImageResponse(
		(
			<div
				style={{
					background: "linear-gradient(135deg, #F7F7FC, #D1D3E0)",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
					color: "#141414",
					fontFamily: "IM Fell English",
				}}>
				<h1
					style={{
						fontSize: "56px",
						margin: "0 0 20px 0",
					}}>
					{legion}
				</h1>
				<p style={{ fontSize: "48px", margin: 0, opacity: 0.8 }}>The {legionNumber} Legion</p>
			</div>
		),
		{
			width: 1200,
			height: 630,
			fonts: [
				{
					name: "IM Fell English",
					data: fontData,
					style: "normal",
				},
			],
		}
	);
}
