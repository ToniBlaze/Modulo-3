// Funzione per eliminare le righe quando clicchi bottone
// const deleteButtons = document.querySelector(".delete-row");
// deleteButtons.addEventListener("click", function (event) {
//   let row = event.target.parentNode.parentNode;
//   row.remove();
// });

// function deleteRowTable() {
//   let elimina = document.querySelector(".delete-row");
//   let row = elimina.parentNode.parentNode;
//   row.remove();
// }

function deleteRowTable(elem) {
	elem.parentNode.parentNode.remove()
}


function clickBtn() {
  for (let index of document.querySelectorAll("section")) {
    index.children[0].classList.add("collapse");
    index.children[0].classList.add("show");
    index.innerHTML =
      `<button class="bottone btn btn-outline-warning toggle-btn m-2" data-bs-target="#${index.id} > div" data-bs-toggle="collapse"> SHOW/HIDE <br>${index.id}</button>` +
      index.innerHTML;
  }
}

window.onload = function() {
  footer();
  clickBtn();
};



// function footer() {
//   let nAlbum = document.querySelectorAll("img").length - 1;
//   let span = document.createElement("span");
//   span.classList.add("text-bg-light");
//   span.innerHTML = "Questa pagina contiene " + nAlbum + " album";
//   document.querySelector("footer").appendChild(span);
// }
