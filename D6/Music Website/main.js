// Funzione per eliminare le righe quando clicchi bottone
var deleteButtons = document.querySelectorAll(".delete-row");

for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function (event) {
    var row = event.target.parentNode.parentNode;
    row.remove();
  });
};