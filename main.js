const form = document.getElementById("contactForm");
const cardName = document.getElementById("cardName");
const cardAge = document.getElementById("cardAge");

form.addEventListener("focusin", (e) => {
  e.preventDefault();

  // Get form values
  const name = form.name.value;
  const age = form.age.value;
  const photo = form.photo.files[0];

  // Update contact card
  cardName.textContent = name;
  cardAge.textContent = age;

  // You can handle the photo upload here (e.g., send it to a server)

  // Clear form inputs
});
