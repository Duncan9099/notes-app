function testNoteListInstatiated() {
  var noteList = new NoteList();
  assert.isTrue(noteList.list.length === 0)
}

testNoteListInstatiated();

function addNote() {
  var noteList = new NoteList();
  note = new Note("Favourite drink: seltzer");
  noteList.addNote(note)
  assert.isTrue(noteList.list.length === 1)
}

addNote();

function getList() {
  ID.reset
  var noteList = new NoteList();
  noteList.addNote("Favourite drink: seltzer")
  var note = noteList.getList()[0]
  assert.isTrue(note.getText() === "Favourite drink: seltzer")
}

getList();
