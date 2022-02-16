export const TimeCalc = () => {
	const difference = new Date('2022-03-09').getTime() - new Date().getTime();
	let timeLeft = {};

	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	} else {
		timeLeft = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};
	}

	return timeLeft;
};
