const html = document.querySelector("html");
const overlay = document.querySelector(".events-overlay-container");
const descriptionContainer = document.querySelector(
  ".events-description-container"
);
const inner = document.querySelector(".events-overlay-inner");
const imgContainer = document.querySelector(".events-image-container");
const button = document.querySelector(".events-overlay-container button");
const lis = document.querySelectorAll(".events li");

lis.forEach((li) => {
  li.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = li.getAttribute("data-src");

    const description = document.createElement("p");
    description.innerHTML = li.getAttribute("data-description");

    imgContainer.appendChild(img);
    descriptionContainer.appendChild(description);

    overlay.classList.add("active");
    document.body.classList.add("scroll-lock");
    html.classList.add("scroll-lock");
  });
});

function escapeKeyPress() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideEventOverly();
    }
  });
}

function closeEventsOverlay() {
  button.addEventListener("click", () => {
    hideEventOverly();
  });

  overlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("events-overlay")) {
      hideEventOverly();
    }
  });
}

function hideEventOverly() {
  overlay.classList.remove("active");
  const img = document.querySelector(".events-image-container img");
  const p = document.querySelector(".events-description-container p");
  imgContainer.removeChild(img);
  descriptionContainer.removeChild(p);
  document.body.classList.remove("scroll-lock");
  html.classList.remove("scroll-lock");
}

escapeKeyPress();
closeEventsOverlay();
