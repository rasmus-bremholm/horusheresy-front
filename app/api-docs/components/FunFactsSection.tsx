"use client";
import { TypedObject } from "sanity";
import { PortableText } from "next-sanity";
import styles from "../api-docs.module.scss";

interface FunFactsProps {
	funfacts: TypedObject | TypedObject[];
}

export default function FunFacts({ funfacts }: FunFactsProps) {
	return (
		<section className={styles.funfactContainer}>
			<h3>Fun Facts:</h3>
			<PortableText value={funfacts} />
		</section>
	);
}
