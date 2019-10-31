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
  noteListView = new NoteListView(noteList)
  controller = new NoteController(noteListView)
  assert.isTrue(controller.displayHTML(documentDouble)==="<ul><li><div>pish</div></li></ul>")

 };

 testInnerHTML()
