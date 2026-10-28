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


const openCertificate = document.getElementById("open-certificate");
const closeCertificate = document.getElementById("close-certificate");
const certificateModal = document.getElementById("certificate-modal");

function showCertificate() {
    certificateModal.classList.add("open");
    certificateModal.setAttribute("aria-hidden", "false");
}

function hideCertificate() {
    certificateModal.classList.remove("open");
    certificateModal.setAttribute("aria-hidden", "true");
}

openCertificate.addEventListener("click", showCertificate);
closeCertificate.addEventListener("click", hideCertificate);

certificateModal.addEventListener("click", function (event) {
    if (event.target === certificateModal) {
        hideCertificate();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        hideCertificate();
    }
});
