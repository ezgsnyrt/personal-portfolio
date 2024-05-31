function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


/* Pop-ups */

document.addEventListener("DOMContentLoaded", function () {
    const modalCreators = document.querySelectorAll(".modal-open");
    const modalCloseAction = document.querySelectorAll(".modal-close");
    const overlay = document.querySelector(".modal-overlay");

    modalCreators.forEach((create) => {
      create.addEventListener("click", () => {
        const { popupCreate } = create.dataset;
        const popupModal = document.querySelector(
          `[data-popup-modal="${popupCreate}"]`
        );

        function closeModal() {
          popupModal.classList.remove("show");
          overlay.classList.remove("overlay-on");
        }

        // to open the modals:
        popupModal.classList.add("show");
        overlay.classList.add("overlay-on");

        // close modal when clicking outside (on the overlay):
        overlay.addEventListener("click", () => {
          closeModal();
        });

        // close modal when user presses the "Escape" key:
        document.addEventListener("keydown", function (e) {
          if (e.key === "Escape" && popupModal.classList.contains("show")) {
            closeModal();
          }
        });

        // close modals when clicking on X:
        modalCloseAction.forEach(function (btn) {
          btn.addEventListener("click", function () {
            const modalWindow = this.parentNode.parentNode;
            modalWindow.classList.remove("show");
            overlay.classList.remove("overlay-on");
          });
        });
      });
    });
  });
