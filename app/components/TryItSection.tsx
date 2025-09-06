"use client";
import { useState } from "react";
import { tryEndpoint } from "../lib/actions";
import Code from "./Code";

export default function TryItSection() {
	const [response, setResponse] = useState<any>(null);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (formData: FormData) => {
		console.log("handleSubmit");
		setLoading(true);
		const result = await tryEndpoint(formData);
		setResponse(result);
		setLoading(false);
	};

	return (
		<section>
			<h2>Try it!</h2>
			<form action={handleSubmit}>
				<label htmlFor='endpoint'>https://horus-heresy-next.vercel.app/api/</label>
				<input type='text' name='endpoint' id='urlInput' placeholder='legion/13' required />
				<div className='clipboardButton'></div>
				<button disabled={loading} type='submit'>
					{loading ? "Loading..." : "Submit"}
				</button>
			</form>
			{response && (
				<div>
					<Code text={JSON.stringify(response, null, 2)} language='json' />
				</div>
			)}
		</section>
	);
}
