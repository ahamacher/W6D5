import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';

const tabContent = [{ title: "Tab 1", content: "I am the first" }, { title: "Tab 2", content: "I am the SECUNDE" }, { title: "Tab 3", content: "I am the Turd :(" }]

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<main><Clock /><Tabs content={tabContent} /></main>, root);
});