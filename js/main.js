(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
      nav.classList.toggle("is-open", !open);
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
        toggle.focus();
      }
    });
  }

  document.querySelectorAll(".accordion").forEach(function (item) {
    var button = item.querySelector("button");
    var panel = item.querySelector(".panel");
    if (!button || !panel) return;
    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", open ? "false" : "true");
      panel.hidden = open;
    });
  });

  var dialog = document.querySelector(".lightbox");
  if (!dialog || !dialog.showModal) return;
  var frame = dialog.querySelector("img");
  var closer = dialog.querySelector(".lightbox-close");

  document.querySelectorAll(".shot").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      frame.src = link.getAttribute("href");
      frame.alt = link.querySelector("img") ? link.querySelector("img").alt : "";
      dialog.showModal();
    });
  });

  function closeLightbox() {
    dialog.close();
    frame.removeAttribute("src");
  }

  closer.addEventListener("click", closeLightbox);
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog || event.target.classList.contains("lightbox-frame")) {
      closeLightbox();
    }
  });
  dialog.addEventListener("cancel", function () {
    frame.removeAttribute("src");
  });
})();
