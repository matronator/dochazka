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

