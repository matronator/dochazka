import { createSignal, For, ParentProps } from 'solid-js';
import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle
} from './components/ui/card';
import { Flex } from './components/ui/flex';
import { getWeek } from './lib/date';

export function App(props: ParentProps) {
    const [week, setWeek] = createSignal(getWeek(new Date()));

    return (
        <div>
            <Flex>
                <For each={week()}>
                    {(day) => (
                        <Card>
                            <CardHeader>
                                <CardTitle>{day.toLocaleDateString('en-us', {weekday: "long"})}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Some content</p>
                            </CardContent>
                            <CardFooter>
                                <CardDescription>Some description</CardDescription>
                            </CardFooter>
                        </Card>
                    )}
                </For>
            </Flex>
            {props.children}
        </div>
    )
}
