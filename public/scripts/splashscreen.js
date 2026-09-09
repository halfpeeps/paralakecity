function closePopup() {
    var popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "none";
    }
}

function openPopup() {
    var popup = document.getElementById("popup");
    if (popup) {
        popup.style.display = "flex";
    }
}

var popupElement = document.getElementById("popup");
if (popupElement) {
    popupElement.addEventListener("click", function(event) {
        if (event.target === this) {
            closePopup();
        }
    });
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closePopup();
    }
});