function testingNoteControllerCreatesNoteList() {
  function NoteListDouble() {};
  NoteListDouble.prototype = {
    addNote: function() {}
  };
  var newNoteList = new NoteListDouble()
  var noteController = new NoteController(newNoteList)
  assert.isTrue(noteController.noteList === newNoteList)
}
testingNoteControllerCreatesNoteList()

function testInnerHTML() {
  var elementDouble = {
    innerHTML: "app"
  }
  var documentDouble = {
    getElementById: function() {
      return elementDouble
    }
  }

  noteList = new NoteList
  noteList.addNote("pish")
  controller = new NoteController(noteList)
  assert.isTrue(controller.displayHTML(documentDouble)==="<ul><li><div>pish</div></li></ul>")

 };

 testInnerHTML()
