"use client";
import React, { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import bash from "highlight.js/lib/languages/bash";
import python from "highlight.js/lib/languages/python";
import html from "highlight.js/lib/languages/vbscript-html";
import "highlight.js/styles/default.css"; // Use the style of your choice

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("python", python);
hljs.registerLanguage("html", html);

interface CodeProps {
	text: string;
	language?: string;
}

const Code = ({ text, language = "javascript" }: CodeProps) => {
	const codeRef = useRef<HTMLElement>(null);

	useEffect(() => {
		if (codeRef.current) {
			codeRef.current.removeAttribute("data-highlighted");
			hljs.highlightElement(codeRef.current);
		}
	}, [text, language]);

	return (
		<pre>
			<code ref={codeRef} className={language}>
				{text}
			</code>
		</pre>
	);
};

export default Code;
