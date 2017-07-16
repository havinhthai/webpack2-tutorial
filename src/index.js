const scss = require('./main.scss');

import React from 'react';
import ReactDOM from 'react-dom';

const MyElement = () => {
    return (<div>Hello World</div>)
};

ReactDOM.render(
    <MyElement/>,
    document.getElementById('root')
);