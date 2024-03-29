(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.getHTML = function() {
    var stringHTML = '<ul>'
    this.noteList.getList().forEach( function(note) {
      stringHTML += '<li><div><a href=#notes/' + note.id + ">" + note.getText().substring(0, 20) + '</a></div></li>'
    })
    return stringHTML + '</ul>'
  }

  NoteListView.prototype.getById = function(id) {
    return this.noteList.getList()[id]
  }

  NoteListView.prototype.backButton = function() {
    return '<form id="back" action="/" method="post"><input type="submit" name="back" value="Back"></form>'
  }

  exports.NoteListView = NoteListView;
})(this);
