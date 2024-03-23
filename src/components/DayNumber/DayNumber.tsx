import './DayNumber.css';

export function DayNumber(props: { date: Date }) {
    return (
        <div class="day-number">
            {props.date.getDate()}
        </div>
    )
}
