// function changeText(newText) {
//   document.getElementById("app").innerHTML = "Howdy!";
// }
//
// document.addEventListener("click", changeText);
//
// (function(exports) {
//   var note = new Note("Favourite drink: seltzer")
//
//   function NoteController(noteList = new NoteList) {
//     this.noteList = noteList
//     this.note = this.noteList.addNote(note)
//     this.noteListView = new NoteListView(this.noteList)
//   }
//
  // NoteController.prototype.displayHTML = function() {
  //   document.getElementById("app").innerHTML = this.noteListView.getHTML()
  // }
//
//   exports.NoteController = NoteController;
// })(this)
//
// var noteController = new NoteController();
//
// noteController.displayHTML()

(function(exports) {
  function NoteController(noteList = new NoteList) {
    this.noteList = noteList
    // this.note = this.noteList.addNote("Favourite drink: seltzer")
    this.noteListView = new NoteListView(this.noteList)
  }

  NoteController.prototype.displayHTML = function(doc = document) {
    return doc.getElementById("app").innerHTML = this.noteListView.getHTML()
  }

  exports.NoteController = NoteController;
})(this)
