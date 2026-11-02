const backdrop = document.querySelector(".backdrop");
const openModalButton = document.querySelector(".order-service");
const closeModalButton = document.querySelector(".modal-close");

function openModal() {
  backdrop.classList.add("is-open");
  backdrop.setAttribute("aria-hidden", "false");
  closeModalButton.focus();
}

function closeModal() {
  backdrop.classList.remove("is-open");
  backdrop.setAttribute("aria-hidden", "true");
  openModalButton.focus();
}

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);

backdrop.addEventListener("click", event => {
  if (event.target === backdrop) {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && backdrop.classList.contains("is-open")) {
    closeModal();
  }
});
