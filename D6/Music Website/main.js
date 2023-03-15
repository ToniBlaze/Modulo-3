// Funzione per eliminare tutti i bottoni
var deleteButtons = document.querySelectorAll(".delete-row");

for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", function () {
        this.closest("tr").remove();
    });
}
