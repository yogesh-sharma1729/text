document.addEventListener('DOMContentLoaded', function() {
  const notesList = document.getElementById('notes-list');
  const noteText = document.getElementById('note-text');
  const addButton = document.getElementById('add-button');

  addButton.addEventListener('click', function() {
    const note = noteText.value.trim();
    if (note !== '') {
      const listItem = document.createElement('li');
      listItem.textContent = note;
      notesList.appendChild(listItem);
      noteText.value = '';
    }
  });
});
