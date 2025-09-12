export default function getSuffix(num: number) {
	const lastDigit = num % 10;
	const lastTwoDigits = num % 100;

	if (lastTwoDigits >= 11 && lastTwoDigits <= 13) return "th";
	if (lastDigit === 1) return "st";
	if (lastDigit === 2) return "nd";
	if (lastDigit === 3) return "rd";
	return "th";
}
