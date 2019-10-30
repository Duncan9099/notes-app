(function(exports) {
  function NoteList() {
    this.list = []
  }
  //
  NoteList.prototype.addNote = function(text) {
    var note = new Note(text)
    this.list.push(note);
  }

  NoteList.prototype.getList = function() {
    for(let i = 0; i < (this.list.length); i++) {
      return this.list[i]
    }
  }

  exports.NoteList = NoteList;
})(this);
