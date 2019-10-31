
(function(exports) {
  function NoteController(noteListView) {
    this.noteListView = noteListView
    this.displayHTML()
  }

  NoteController.prototype.displayHTML = function(doc = document) {
    return doc.getElementById("app").innerHTML = this.noteListView.getHTML()
  }

  makeUrlChangeShowNoteForCurrentPage();

  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };

  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  };

  function getNoteFromUrl(location) {
    return location.hash.split("#notes/")[1];
  };

  function showNote(noteID) {
    console.log(this)
    document
      .getElementById("app")
      .innerHTML = this.noteListView.getById(noteID).text
  };

  exports.NoteController = NoteController;
})(this)
