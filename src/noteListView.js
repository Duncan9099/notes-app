(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.getHTML = function() {
    var notes = this.noteList.list.map(getNote)
    return '<ul><li><div>' + notes.join('</div></li><li><div>') + '</div></li></ul>'
  }

  function getNote(note) {
    return note.getText().substr(0, 20)
  }

  exports.NoteListView = NoteListView;
})(this);


// NoteListView.prototype.getHTML = function() {
//   var notes = this.noteList.list.map(getNote)
//   return '<ul><li><div>' + notes.join('</div></li><li><div>') + '</div></li></ul>'
// }
//
// function getNote(note) {
//   return note.getText()
// }
