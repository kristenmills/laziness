var Fluxxor = require('fluxxor');
var constants = require('../constants/phrases');

var PhraseStore = Fluxxor.createStore({
  initialize() {
    this.phrases = [];

    this.bindActions(
      constants.ADD_PHRASE, this.onAddPhrase,
      constants.REMOVE_PHRASE, this.onRemovePhrase,
      constants.LOAD_PHRASES, this.onLoadPhrases
    );
  },

  onAddPhrase(payload) {
    this.phrases.push(payload.phrase);
    this.emit('change');
  },

  onRemovePhrase(payload) {
    this.phrases.splice(payload.index, 1);
    this.emit('change');
  },

  onLoadPhrases(payload) {
    this.phrases = payload.phrases;
    this.emit('change');
  },

  getState() {
    return this.phrases;
  }
});

module.exports = PhraseStore;