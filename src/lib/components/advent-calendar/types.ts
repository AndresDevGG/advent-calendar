export interface AdventDayData {
	day: number;
	isPast: boolean;
	isToday: boolean;
	isLocked: boolean;
	content: string;
	description: string;
	reward: string;
	backgroundColor: string;
	icon: string;
	illustration: string;
}

export interface AdventCalendarConfig {
	year?: number;
	onDayClick?: (day: number, data: AdventDayData) => void;
} 