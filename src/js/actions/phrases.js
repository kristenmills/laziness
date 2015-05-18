var constants = require('../constants/phrases');

function addPhrase(name) {
  var phrases = JSON.parse(localStorage.getItem('phrases') || '[]');
  phrases.push(name);
  localStorage.setItem('phrases', JSON.stringify('phrases'));
  this.dispatch(constatns.ADD_PHRASE, { name });
}

function removePhrase(index) {
  var phrases = JSON.parse(localStorage.getItem('phrases') || '[]');
  phrases.splice(index, 1);
  localStorage.setItem('phrases', JSON.stringify('phrases'));
  this.dispatch(constatns.REMOVE_PHRASE, { index });
}

function loadPhrases(index) {
  var phrases = JSON.parse(localStorage.getItem('phrases') || '[]');
  this.dispatch(constatns.LOAD_PHRASES, { index });
}

module.exports = {
  addPhrase,
  removePhrase,
  loadPhrases
}