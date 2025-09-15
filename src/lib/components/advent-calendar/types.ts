export interface AdventDayData {
	day: number;
	isPast: boolean;
	isToday: boolean;
	isLocked: boolean;
	content: string;
	reward: string;
	backgroundColor: string;
	icon: string;
}

export interface AdventCalendarConfig {
	year?: number;
	onDayClick?: (day: number, data: AdventDayData) => void;
} 