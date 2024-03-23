import { createMemo, createSignal, For, ParentProps } from 'solid-js';
import { DayNumber } from '~/components/DayNumber/DayNumber';
import { Button } from '~/components/ui/button';
import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from '~/components/ui/card';
import { Flex } from '~/components/ui/flex';
import { getNextWeek, getPreviousWeek, getWeek } from '~/lib/date';
import { A, useParams } from '@solidjs/router';

export function WeekPage(props: ParentProps) {
    const params = useParams();
    const [week, setWeek] = createSignal(getWeek(params.day ? new Date(params.day) : new Date()));
    const prevDate = createMemo(() => new Date(week()[0]));
    prevDate().setDate(week()[0].getUTCDate() - 1);
    const nextDate = createMemo(() => new Date(week()[6]));
    nextDate().setDate(week()[6].getUTCDate() + 1);

    return (
        <div>
            <Flex>
                <Button onClick={() => setWeek(getPreviousWeek(new Date(week()[0])))}>Prev</Button>
                <For each={week()}>
                    {(day) => (
                        <A href={`/${day.toShortISOString()}`}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{day.toLocaleDateString('en-us', {weekday: "long"})}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <DayNumber date={day} />
                                </CardContent>
                                <CardFooter>
                                    <CardDescription>Some description</CardDescription>
                                </CardFooter>
                            </Card>
                        </A>
                    )}
                </For>
                <Button onClick={() => setWeek(getNextWeek(new Date(week()[6])))}>Next</Button>
            </Flex>
            {props.children}
        </div>
    )
}
