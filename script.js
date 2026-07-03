const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("[data-mobile-nav]");
const addButtons = document.querySelectorAll("[data-name][data-price]");
const stickyCart = document.querySelector("[data-sticky-cart]");
const emptyCart = document.querySelector("[data-empty-cart]");
const orderSummary = document.querySelector("[data-order-summary]");

let cartCount = 0;
let cartTotal = 0;

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((item) => {
    item.textContent = value;
  });
}

function formatPrice(value) {
  return `${value.toLocaleString("ru-RU")} ₴`;
}

function updateCart() {
  setText("[data-cart-count]", cartCount);
  setText("[data-cart-count-panel]", cartCount);
  setText("[data-cart-count-sticky]", cartCount);
  setText("[data-cart-total-panel]", formatPrice(cartTotal));
  setText("[data-cart-total-sticky]", formatPrice(cartTotal));

  if (cartCount > 0) {
    stickyCart.hidden = false;
    emptyCart.hidden = true;
    orderSummary.hidden = false;
  } else {
    stickyCart.hidden = true;
    emptyCart.hidden = false;
    orderSummary.hidden = true;
  }
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mobileNav?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    mobileNav.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  });
});

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const price = Number(button.dataset.price || 0);
    cartCount += 1;
    cartTotal += price;

    button.classList.add("is-added");
    button.textContent = button.classList.contains("icon-add") ? "✓" : "Добавлено";

    window.setTimeout(() => {
      button.classList.remove("is-added");
      button.textContent = button.classList.contains("icon-add") ? "+" : "Добавить";
    }, 1050);

    updateCart();
  });
});

updateCart();
