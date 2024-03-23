import { ParentProps } from 'solid-js';

export function App(props: ParentProps) {
    return (
        <div>
            <h1>App</h1>
            {props.children}
        </div>
    );
}
