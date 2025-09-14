"use client";
import { useEffect, useState } from "react";
import { tryEndpoint } from "../lib/actions";
import Code from "./Code";
import styles from "./TryItSection.module.scss";

export default function TryItSection() {
	const [isMounted, setIsMounted] = useState(false);
	const [response, setResponse] = useState<any>(null);
	const [loading, setLoading] = useState(false);

	// Avoiding Hydration message
	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return <div className={styles.tryitSection}>...</div>;
	}

	const handleSubmit = async (formData: FormData) => {
		setLoading(true);
		const result = await tryEndpoint(formData);
		setResponse(result);
		setLoading(false);
	};

	return (
		<section className={styles.tryitSection}>
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
				<div className={styles.responseSection}>
					<Code text={JSON.stringify(response, null, 2)} language='json' />
				</div>
			)}
		</section>
	);
}
