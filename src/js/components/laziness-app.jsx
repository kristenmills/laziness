var React = require('react');
var Fluxxor = require('fluxxor');

var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var PageHeader = require('react-bootstrap/lib/PageHeader');
var PhraseButton = require('./phrase-button');

var LazinessApp = React.createClass({

  mixins: [FluxMixin, StoreWatchMixin('PhraseStore')],

  componentDidMount() {
    this.getFlux().actions.phrases.loadPhrases();
  },

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

        {this.state.phrases.map((phrase, i) => {
          return <PhraseButton key={i} phrase={phrase} />
        })}
      </div>
    );
  }
});

module.exports = LazinessApp;