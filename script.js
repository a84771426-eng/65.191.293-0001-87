const siteConfig = {
  companyName: "Online Despachante LTDA",
  companyDocument: "65.191.293/0001-87",
  email: "cleber@onlinedespachante.com.br",
  phoneDisplay: "(19) 98401-2165",
  phoneRaw: "5519984012165",
  address: "Rua Analia Franco 40 - Parque Vista Alegre - Campinas/SP - CEP 13054-382",
};

const bySelector = (selector) => document.querySelectorAll(selector);

function setText(selector, value) {
  bySelector(selector).forEach((element) => {
    element.textContent = value;
  });
}

function setLink(selector, href, label) {
  bySelector(selector).forEach((element) => {
    element.setAttribute("href", href);
    if (label) {
      element.textContent = label;
    }
  });
}

function applyCompanyData() {
  setText("[data-company-name]", siteConfig.companyName);
  setText("[data-company-document]", siteConfig.companyDocument);
  setText("[data-company-address]", siteConfig.address);
  setText("[data-current-year]", String(new Date().getFullYear()));

  setLink("[data-company-email]", `mailto:${siteConfig.email}`, siteConfig.email);
  setLink("[data-company-phone]", `tel:+${siteConfig.phoneRaw}`, siteConfig.phoneDisplay);
  if (siteConfig.phoneSecondaryRaw && siteConfig.phoneSecondaryDisplay) {
    setLink(
      "[data-company-phone-secondary]",
      `tel:+${siteConfig.phoneSecondaryRaw}`,
      siteConfig.phoneSecondaryDisplay,
    );
  }
}

applyCompanyData();
const menuToggleButton = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuToggleButton && mobileMenu) {
  menuToggleButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("is-open");
    menuToggleButton.setAttribute("aria-expanded", String(isOpen));
  });
}
