import React from 'react';
import { render } from 'react-dom';

import App from './app/containers/App.jsx';

const rootElement = document.getElementById('root');
const Main = () => {
    return(
        <App />
    )
}
let renderDom = () => {
    render(<Main />, rootElement)
}
renderDom();
