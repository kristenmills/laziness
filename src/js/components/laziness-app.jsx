var React = require('react');
var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var PageHeader = require('react-bootstrap/lib/PageHeader');
var Row = require('react-bootstrap/lib/Row');
var Col = require('react-bootstrap/lib/Col');
var PhraseButton = require('./phrase-button');

var LazinessApp = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin('PhraseStore')],

  getStateFromFlux() {
    var flux = this.getFlux();
    return {
      phrases: flux.store('PhraseStore').getState()
    };
  },

  render() {
    return (
      <div className="container">
        <PageHeader>Laziness <small>Because this is super necessary</small></PageHeader>
        <Row>
          {['xbox pause', 'xbox play'].map((phrase) => {
            return (
              <Col md={1}>
                <PhraseButton phrase={phrase} />
              </Col>
            );
          }) }
        </Row>
      </div>
    );
  }
});

module.exports = LazinessApp;