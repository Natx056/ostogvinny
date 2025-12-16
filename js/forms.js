const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

// Lav en funktion, der stopper refresh og nulstiller formularen

form.addEventListener('invalid', cancelPopup, true);
// Tilføj event listener, der lytter efter 'submit' eventet
