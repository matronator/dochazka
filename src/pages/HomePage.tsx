import { createResource, ErrorBoundary, JSXElement, ParentProps } from 'solid-js';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { fetchDay, fetchWeek } from '~/lib/api';
import { useParams } from '@solidjs/router';

export default function HomePage(props: ParentProps): JSXElement {
    const params = useParams();
    const [week] = createResource(params.day, fetchWeek);
    const [data] = createResource(() => params.day, fetchDay);

    return (
        <div>
            <Card>
                <CardHeader>
                    <ErrorBoundary fallback={<div>No content</div>}>
                        <div>{data()[0].date}</div>
                    </ErrorBoundary>
                </CardHeader>
                <CardContent>
                    {props.children}
                </CardContent>
            </Card>
        </div>
    )
}
