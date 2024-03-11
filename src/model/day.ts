interface Day {
    id: number;
    date: string;
    hours: number;
}

interface TimeRange {
    id: number;
    dayId: number;
    start: string;
    end: string;
    image: string;
}
