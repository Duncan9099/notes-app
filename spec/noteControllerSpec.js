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
    innerHTML: "pish"
  }
  var documentDouble = {
    getElementById: function() {
      return elementDouble
    }
  }
  noteList = new NoteList
  noteList.addNote("pish")
  controller = new NoteController(noteList)
  assert.isTrue(controller.displayHTML()==="<ul><li>pish</li></ul>")
 };
 
 testInnerHTML()
// function testingNoteAddedtoNoteList() {
//   function NoteListDouble() {};
//   NoteListDouble.prototype = {
//     addNote: function() {}
//   };
//   var noteListDouble = new NoteListDouble
//
//   noteListDouble.addNote = function() {
//     this.noteList.push("test string")
//   }
//
//   var noteController = new NoteController(noteListDouble)
//   assert.isTrue(noteController.noteList.includes("test string"))
// }
//
// testingNoteAddedtoNoteList();
//
// NoteListDouble.prototype = {
//   addNote: function() {};
// };
