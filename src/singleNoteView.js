'use strict';

(function(exports) {
  function NoteView(note = new Note) {
    this.note = note
  }

  NoteView.prototype.getHTML = function() {
    return "<div>" + this.note.getText() + "</div>"
  }

  exports.NoteView = NoteView
})(this)
