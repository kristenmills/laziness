var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var PageHeader = require('react-bootstrap/lib/PageHeader');

var LazinessApp = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin()],

  getStateFromFlux: function() {
    var flux = this.getFlux();
    return {
    };
  },

  render: function() {
    return (
      <div className="container">
        <PageHeader>Laziness <small>Because this is super necessary</small></PageHeader>
      </div>
    );
  }
});

module.exports = LazinessApp;