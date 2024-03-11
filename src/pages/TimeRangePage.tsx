import { JSXElement } from 'solid-js';
import { useParams } from '@solidjs/router';

export default function TimeRangePage(): JSXElement {
    const params = useParams();

    return (
        <div>
            Time Range
        </div>
    )
}
