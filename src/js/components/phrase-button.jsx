var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var Button = require('react-bootstrap/lib/Button');

var PhraseButton = React.createClass({

  play() {
    var utterance = new SpeechSynthesisUtterance(this.props.phrase.name);
    window.speechSynthesis.speak(utterance);
  },

  render() {
    var style = { margin: '10px' };
    return (
      <Button style={ style } onClick={this.play}>{this.props.phrase}</Button >
    );
  }

});

module.exports = PhraseButton;