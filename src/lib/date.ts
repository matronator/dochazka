export function getWeekStart(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
}

export function getWeek(date: Date): Date[] {
    const start = getWeekStart(date);
    const dates = [start];
    for (let i = 1; i < 7; i++) {
        const next = new Date(start);
        next.setDate(start.getDate() + i);
        dates.push(next);
    }

    return dates;
}

export function getPreviousWeek(date: Date): Date[] {
    const start = new Date(date);
    start.setDate(date.getDate() - 7);
    return getWeek(start);
}

export function getNextWeek(date: Date): Date[] {
    const start = new Date(date);
    start.setDate(date.getDate() + 7);
    return getWeek(start);
}

export function toShortISOString(date: Date): string {
    return date.toISOString().substring(0, 10);
}

declare global {
    interface Date {
        toShortISOString(): string;
    }
}

Date.prototype.toShortISOString = function() {
    return toShortISOString(this);
}
