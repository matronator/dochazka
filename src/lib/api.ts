import { getWeek } from './date';

export const API_URL = 'http://localhost:3000';

export async function fetchWeek(date: string) {
    const dateObj = new Date(date);
    const week = getWeek(dateObj);
    const url = `${API_URL}/days?date=${week[0].toShortISOString()}&date=${week[1].toShortISOString()}&date=${week[2].toShortISOString()}&date=${week[3].toShortISOString()}&date=${week[4].toShortISOString()}&date=${week[5].toShortISOString()}&date=${week[6].toShortISOString()}`;
    console.log(url);
    const response = await fetch(url);

    return response.json();
}

export async function fetchDay(date: string) {
    const response = await fetch(`${API_URL}/days?date=${date}`);

    console.log(`${API_URL}/days?date=${date}`);

    return response.json();
}
