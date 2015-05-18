var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var LazinessApp = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin()],

  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
    };
  },

  render: function() {
    return (
      <h1>Hello World</h1>
    );
  }
});

module.exports = LazinessApp;