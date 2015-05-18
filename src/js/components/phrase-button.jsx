var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var Button = require('react-bootstrap/lib/Button');

var PhraseButton = React.createClass({

  play() {
    var utterance = new SpeechSynthesisUtterance(this.props.phrase);
    window.speechSynthesis.speak(utterance);
  },

  render() {
    return (
      <Button onClick={this.play}>{this.props.phrase}</Button>
    );
  }

});

module.exports = PhraseButton;