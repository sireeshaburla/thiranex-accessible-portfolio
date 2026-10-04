(() => {
  "use strict";
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#primary-navigation");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isExpanded));
      navigation.classList.toggle("is-open", !isExpanded);
    });
    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        menuButton.setAttribute("aria-expanded", "false");
        navigation.classList.remove("is-open");
      }
    });
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const form = document.querySelector("#contact-form");
  if (form) {
    const status = document.querySelector("#form-status");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) {
        status.textContent = "Please review the required fields and try again.";
        return;
      }
      const data = new FormData(form);
      const subject = encodeURIComponent(data.get("subject") || "Portfolio contact");
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`
      );
      status.textContent = "Your email application should open with the message prepared.";
      window.location.href = `mailto:sirisacet12@gmail.com?subject=${subject}&body=${body}`;
    });
  }
})();
