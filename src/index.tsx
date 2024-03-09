import './index.css';
import './global.css';
/* @refresh reload */
import { render } from 'solid-js/web';
import { Route, Router } from '@solidjs/router';
import { HomePage } from './pages/HomePage';

const root = document.getElementById('root')

render(() => (
    <Router>
        <Route path="/" component={HomePage} />
    </Router>
), root!)
