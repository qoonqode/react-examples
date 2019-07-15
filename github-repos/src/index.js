import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'

// Root Component
import Main from './components/Main';

// Render
ReactDOM.render(<Main />, document.getElementById('root'));

// HMR
if (module.hot) {
    module.hot.accept(() => {});
    module.hot.dispose(() => {});
}
