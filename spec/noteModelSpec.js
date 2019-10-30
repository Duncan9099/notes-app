function testNoteModelInstatiated() {
  var note = new Note("My favourite language is JavaScript");

  assert.isTrue(note.text === "My favourite language is JavaScript")
}

testNoteModelInstatiated();

function getText() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.getText() === "My favourite language is JavaScript")
}

getText();
