(function(exports) {
  function NoteController(noteListView) {
    var noteListView = noteListView
    this.noteListView = noteListView
    this.displayHTML()

    makeUrlChangeShowNoteForCurrentPage();

    addNote();

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
      document.getElementById("app").innerHTML = this.noteListView.getById(noteID).text + this.noteListView.backButton()
    };

    function addNote() {
      document.getElementById("text").addEventListener("submit", function(submit) {
        submit.preventDefault();
        note = submit.target[0].value
        noteListView.noteList.addNote(note)

        document.getElementById("app").innerHTML = noteListView.getHTML()
        document.getElementById("textarea").value = "";
      })
    }
  }

  NoteController.prototype.displayHTML = function(doc = document) {
    doc.getElementById("app").innerHTML = this.noteListView.getHTML()
  }

  exports.NoteController = NoteController;
})(this)
