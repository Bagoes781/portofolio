const openPhoto = document.getElementById("open-photo");
const closePhoto = document.getElementById("close-photo");
const photoModal = document.getElementById("photo-modal");

function showPhoto() {
    photoModal.classList.add("open");
    photoModal.setAttribute("aria-hidden", "false");
}

function hidePhoto() {
    photoModal.classList.remove("open");
    photoModal.setAttribute("aria-hidden", "true");
}

openPhoto.addEventListener("click", showPhoto);
closePhoto.addEventListener("click", hidePhoto);

photoModal.addEventListener("click", function (event) {
    if (event.target === photoModal) {
        hidePhoto();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        hidePhoto();
    }
});
