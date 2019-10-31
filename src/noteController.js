
(function(exports) {
  function NoteController(noteListView) {
    console.log('notes list');
    // this.noteList = noteList
    // this.note = this.noteList.addNote("Favourite drink: seltzer")
    this.noteListView = noteListView
    this.displayHTML()
  }

  NoteController.prototype.displayHTML = function(doc = document) {
    return doc.getElementById("app").innerHTML = this.noteListView.getHTML()
  }

  // NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
  //   window.addEventListener("hashchange", showNoteForCurrentPage)
  //
  //   function showNoteForCurrentPage() {
  //     showNote(getNoteFromUrl())
  //   }
  //
  //   function getNoteFromUrl() {
  //     console.log(window.location.href.split("#")[1])
  //     note = this.noteListView.getById(window.location.href.split("#")[1])
  //     return note.getText()
  //   }
  //
  //   function showNote(note) {
  //     document.getElementsbyId("note").innerHTML = note
  //   }
  // }
  //
  // noteController.makeUrlChangeShowNoteForCurrentPage();

  // NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
  //   return window.addEventListener("hashchange", this.showNoteForCurrentPage)
  // }
  //
  // NoteController.prototype.showNoteForCurrentPage = function() {
  //   showNote(getNoteFromUrl())
  // }
  //
  // NoteController.prototype.getNoteFromUrl = function() {
  //   var id = window.location.href.split("#")[1]
  //   console.log(id)
  //   var note = this.noteListView.getById(id)
  //   console.log(note)
  //   console.log(this.noteListView)
  //   console.log(this.noteListView.getById(window.location.href.split("#notes/")[1]))
  // }
  //
  // NoteController.prototype.showNote = function(noteID) {
  //   document.getElementsbyId("note").innerHTML = note.getText()
  // }

  makeUrlChangeShowAnimalForCurrentPage();

  function makeUrlChangeShowAnimalForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
    return location.hash.split("#notes/")[1];
  };

  function showNote(noteID) {
    console.log(noteID)
    document
      .getElementById("app")
      .innerHTML = this.noteListView.getById(noteID).text
  };

  exports.NoteController = NoteController;
})(this)
