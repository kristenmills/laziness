var React = require('react');
var flux = require('./flux');

var LazinessApp = require('./components/laziness-app');

React.render(<LazinessApp flux={flux} />, document.getElementById("app"));