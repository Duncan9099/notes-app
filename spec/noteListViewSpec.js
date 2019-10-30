function noteListView() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.noteList === noteList);
}

noteListView();

function getHTML() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  noteList.addNote("Favourite Drink: Pepsi")
  noteList.addNote("Favourite Food: Spaghetti Bolognese")

  assert.isTrue(noteListView.getHTML() === "<ul><li><div>Favourite Drink: Pepsi</div></li><li><div>Favourite Food: Spaghetti Bolognese</div></li></ul>")
}

getHTML();

function singleNoteList() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  noteList.addNote("Favourite Drink: Pepsi")

  assert.isTrue(noteListView.getHTML() === "<ul><li><div>Favourite Drink: Pepsi</div></li></ul>")
}

singleNoteList();

function emptyList() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  assert.isTrue(noteListView.getHTML() === "<ul><li><div></div></li></ul>")
}

emptyList();
