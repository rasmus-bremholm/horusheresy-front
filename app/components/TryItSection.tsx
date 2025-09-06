"use client";
import { FormEvent, useState } from "react";
import Code from "./Code";

export default async function TryItSection() {
	const [endpoint, setEndpoint] = useState("");
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);
	const apiKey = process.env.NEXT_PUBLIC_API_KEY;

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);
		try {
			const res = await fetch(`https://horus-heresy-next.vercel.app/api/${endpoint}`, {
				method: "GET",
				headers: {
					"x-api-key": apiKey,
				} as HeadersInit,
			});
			const data = await res.json();
			setResponse(data);
		} catch (error) {
			throw new Error(`Something went wrong ${error}`);
		} finally {
			setLoading(false);
		}
	};

	return (
		<section>
			<h2>Try it!</h2>
			<form action=''>
				<label htmlFor='urlInput'>https://horus-heresy-next.vercel.app/api/</label>
				<input type='text' name='urlInput' id='urlInput' />
				<div className='clipboardButton'></div>
				<button type='submit'>Submit</button>
			</form>
			{response && (
				<div>
					<Code text={response} />
				</div>
			)}
		</section>
	);
}
