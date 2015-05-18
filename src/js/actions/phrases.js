var constants = require('../constants/phrases');
var initialValues = require('../phrases.json');

function addPhrase(name) {
  var phrases = JSON.parse(localStorage.getItem('phrases') || '[]');
  phrases.push(name);
  localStorage.setItem('phrases', JSON.stringify(phrases));
  this.dispatch(constants.ADD_PHRASE, { name });
}

function removePhrase(index) {
  var phrases = JSON.parse(localStorage.getItem('phrases') || '[]');
  phrases.splice(index, 1);
  localStorage.setItem('phrases', JSON.stringify(phrases));
  this.dispatch(constants.REMOVE_PHRASE, { index });
}

function loadPhrases() {
  var phrases = JSON.parse(localStorage.getItem('phrases'));
  if(!phrases) {
    localStorage.setItem('phrases', JSON.stringify(initialValues));
  }
  this.dispatch(constants.LOAD_PHRASES, { phrases });
}

module.exports = {
  addPhrase,
  removePhrase,
  loadPhrases
}