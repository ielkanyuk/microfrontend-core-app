import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            Hello
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

let InitModule;
console.log('Init');
async function load() {
    if (!InitModule) {
        InitModule = await import(/* webpackIgnore: true */"https://microfrontend-react-app.web.app/index.js");
        console.log(InitModule);
        InitModule.default('root', React, ReactDOM);
    }
}

load();
