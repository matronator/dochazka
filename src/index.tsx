import './index.css';
import './root.css';
import { lazy } from 'solid-js';
/* @refresh reload */
import { render } from 'solid-js/web';
import { Route, Router } from '@solidjs/router';
import { App } from './App';
import TimeRangePage from './pages/TimeRangePage';
import { WeekPage } from './pages/WeekPage';

const HomePage = lazy(() => import("./pages/HomePage"));

const root = document.getElementById('root')

render(() => (
    <Router root={App}>
        <Route path="/:day" component={WeekPage}>
            <Route path="/" component={HomePage} />
            <Route path="/:id" component={TimeRangePage} />
        </Route>
    </Router>
), root!)
