"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

interface PrimarchPortraitProps {
	height: number;
	width: number;
	image: string;
	alt: string;
	fallbackImage?: string;
}

export default function PrimarchPortrait({ height, width, image, alt, fallbackImage = "/primarchs/placeholder.png" }: PrimarchPortraitProps) {
	const [imgSrc, setImgScr] = useState(fallbackImage);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const img = new window.Image();

		img.onload = () => {
			setImgScr(image);
			setIsLoading(false);
		};

		img.onerror = () => {
			setImgScr(fallbackImage);
			setIsLoading(false);
		};

		img.src = image;
	}, [image, fallbackImage]);

	return <Image height={height} width={width} src={imgSrc} alt={alt} />;
}
