(function(exports) {
  function NoteList() {
    this.list = []
  }
  //
  NoteList.prototype.addNote = function(note) {
    this.list.push(note.getText());
  }

  NoteList.prototype.getList = function() {
    for(let i = 0; i < (this.list.length); i++) {
      return this.list[i]
    }
  }

  exports.NoteList = NoteList;
})(this);
