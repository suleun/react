const React = requier('react3');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay');

React.render(<WordRelay/>, document.querySelector('#root'));