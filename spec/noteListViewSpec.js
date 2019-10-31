function noteListView() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.noteList === noteList);
}

noteListView();

function getHTML() {
  ID.reset()
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  noteList.addNote("Favourite Drink: Pepsi")
  noteList.addNote("Favourite Food: Spaghetti Bolognese")
  assert.isTrue(noteListView.getHTML() === "<ul><li><div><a href=#notes/0>Favourite Drink: Pep</a></div></li><li><div><a href=#notes/1>Favourite Food: Spag</a></div></li></ul>")
}

getHTML();

function singleNoteList() {
  ID.reset()
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  noteList.addNote("Favourite Drink: Pepsi")

  assert.isTrue(noteListView.getHTML() === "<ul><li><div><a href=#notes/0>Favourite Drink: Pep</a></div></li></ul>")
}

singleNoteList();

function emptyList() {
  ID.reset()
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === "<ul></ul>")
}

emptyList();
