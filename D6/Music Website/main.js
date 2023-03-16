// Funzione per eliminare le righe quando clicchi bottone
// const deleteButtons = document.querySelector(".delete-row");
// deleteButtons.addEventListener("click", function (event) {
//   let row = event.target.parentNode.parentNode;
//   row.remove();
// });

function deleteRowTable(elem) {
	elem.parentNode.parentNode.remove()
}

function showHide(elem) {
  elem.nextElementSibling.classList.toggle("collapse");
}


// function footer() {
//   let nAlbum = document.querySelectorAll("img").length - 1;
//   let span = document.createElement("span");
//   span.classList.add("text-bg-light");
//   span.innerHTML = "Questa pagina contiene " + nAlbum + " album";
//   document.querySelector("footer").appendChild(span);
// }
