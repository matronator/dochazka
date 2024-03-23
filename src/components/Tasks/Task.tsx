import { Button } from '../ui/button';

function setTrelloCardUrl() {
    
}

export function Task() {
    return (
        <div class="task">
            <input type="text" name="trelloCardUrl" id="trelloCardUrl" placeholder="https://trello.com/c/a4LFy..." />
            <Button onClick={setTrelloCardUrl}>Save</Button>
        </div>
    );
}
