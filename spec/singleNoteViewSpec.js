function testSingleNoteViewInstatiated() {
  var note = new Note("test")
  var noteView = new NoteView(note)

  assert.isTrue(noteView.getHTML() === "<div>test</div>")
}

testSingleNoteViewInstatiated()
