const catalog = [
  {
    sku: "shawarma-classic",
    category: "shawarma",
    name: "Шаверма классическая",
    badge: "Сочная классика",
    description: "Курица, овощи, фирменный соус и горячий лаваш.",
    price: 159,
    image: "./assets/products/shawarma-classic.png",
    popular: true,
  },
  {
    sku: "shawarma-spicy",
    category: "shawarma",
    name: "Шаверма острая",
    badge: "Чили соус",
    description: "Курица, овощи, перец и соус с нормальной остротой.",
    price: 169,
    image: "./assets/products/shawarma-spicy.png",
    popular: false,
  },
  {
    sku: "shawarma-cheese",
    category: "shawarma",
    name: "Шаверма сырная",
    badge: "Мягкий сыр",
    description: "Курица, овощи, сырный соус и тянущийся сыр.",
    price: 189,
    image: "./assets/products/shawarma-cheese.png",
    popular: true,
  },
  {
    sku: "shawarma-double",
    category: "shawarma",
    name: "Шаверма двойное мясо",
    badge: "Больше мяса",
    description: "Плотная порция курицы, овощи и два соуса.",
    price: 219,
    image: "./assets/products/shawarma-double.png",
    popular: false,
  },
  {
    sku: "shawarma-meter",
    category: "shawarma",
    name: "Шаверма метровая",
    badge: "Для компании",
    description: "Большой лаваш, много мяса, овощей и соуса.",
    price: 329,
    image: "./assets/products/shawarma-meter.png",
    popular: true,
  },
  {
    sku: "shawarma-mini",
    category: "shawarma",
    name: "Шаверма mini",
    badge: "Быстрый перекус",
    description: "Компактная порция, когда хочется быстро и горячо.",
    price: 119,
    image: "./assets/products/shawarma-mini.png",
    popular: false,
  },
  {
    sku: "burger-legend",
    category: "burgers",
    name: "Бургер Legend",
    badge: "Бургер дня",
    description: "Говяжья котлета, сыр, овощи и фирменный соус.",
    price: 189,
    image: "./assets/products/burger-legend.png",
    popular: true,
  },
  {
    sku: "burger-xl",
    category: "burgers",
    name: "Бургер XL",
    badge: "Двойная котлета",
    description: "Две котлеты, сыр, овощи и соус в мягкой булке.",
    price: 249,
    image: "./assets/products/burger-xl.png",
    popular: false,
  },
  {
    sku: "burger-cheese",
    category: "burgers",
    name: "Чизбургер",
    badge: "Сырный",
    description: "Котлета, сыр, огурцы, лук и легкий соус.",
    price: 159,
    image: "./assets/products/burger-cheese.png",
    popular: false,
  },
  {
    sku: "burger-double-cheese",
    category: "burgers",
    name: "Дабл чиз",
    badge: "Сытный",
    description: "Двойная котлета, двойной сыр и маринованные огурцы.",
    price: 229,
    image: "./assets/products/burger-double-cheese.png",
    popular: true,
  },
  {
    sku: "burger-bbq",
    category: "burgers",
    name: "BBQ бургер",
    badge: "Дымный соус",
    description: "Котлета, сыр, овощи и густой BBQ-соус.",
    price: 219,
    image: "./assets/products/burger-bbq.png",
    popular: false,
  },
  {
    sku: "burger-mini",
    category: "burgers",
    name: "Mini burger",
    badge: "Легкий выбор",
    description: "Небольшой бургер к фри или напитку.",
    price: 139,
    image: "./assets/products/burger-mini.png",
    popular: false,
  },
  {
    sku: "burum-spicy",
    category: "burums",
    name: "Бурум острый",
    badge: "Острый выбор",
    description: "Острое мясо, свежие овощи и соус чили.",
    price: 169,
    image: "./assets/products/burum-spicy.png",
    popular: true,
  },
  {
    sku: "burum-chicken",
    category: "burums",
    name: "Бурум куриный",
    badge: "Горячий",
    description: "Курица, салат, томаты и фирменный белый соус.",
    price: 159,
    image: "./assets/products/burum-chicken.png",
    popular: false,
  },
  {
    sku: "burum-cheese",
    category: "burums",
    name: "Бурум сырный",
    badge: "Сыр внутри",
    description: "Мясо, овощи, сыр и мягкий соус в лаваше.",
    price: 179,
    image: "./assets/products/burum-cheese.png",
    popular: false,
  },
  {
    sku: "burum-beef",
    category: "burums",
    name: "Бурум beef",
    badge: "Говядина",
    description: "Говядина, овощи, соус и плотный лаваш.",
    price: 199,
    image: "./assets/products/burum-beef.png",
    popular: false,
  },
  {
    sku: "burum-mex",
    category: "burums",
    name: "Бурум mex",
    badge: "Перец и соус",
    description: "Курица, перец, зелень и яркий острый соус.",
    price: 189,
    image: "./assets/products/burum-mex.png",
    popular: false,
  },
  {
    sku: "combo-xl",
    category: "combo",
    name: "Комбо XL",
    badge: "Выгодно",
    description: "Бургер, картофель фри и напиток на выбор.",
    price: 249,
    image: "./assets/products/combo-xl.png",
    popular: true,
  },
  {
    sku: "combo-day",
    category: "combo",
    name: "Комбо дня",
    badge: "Сегодня",
    description: "Шаверма, картофель и напиток без лишних решений.",
    price: 229,
    image: "./assets/products/combo-day.png",
    popular: false,
  },
  {
    sku: "combo-legend",
    category: "combo",
    name: "Комбо Legend",
    badge: "Полный набор",
    description: "Бургер Legend, фри, наггетсы и напиток.",
    price: 299,
    image: "./assets/products/combo-legend.png",
    popular: false,
  },
  {
    sku: "combo-shawarma",
    category: "combo",
    name: "Шаверма combo",
    badge: "Шаверма + фри",
    description: "Классическая шаверма, фри и холодная кола.",
    price: 239,
    image: "./assets/products/combo-shawarma.png",
    popular: false,
  },
  {
    sku: "combo-family",
    category: "combo",
    name: "Family сет",
    badge: "На троих",
    description: "Две шавермы, бургер, фри XL и два напитка.",
    price: 599,
    image: "./assets/products/combo-family.png",
    popular: false,
  },
  {
    sku: "fries",
    category: "snacks",
    name: "Картофель фри",
    badge: "Хрустящий",
    description: "Горячий картофель с солью.",
    price: 79,
    image: "./assets/products/fries.png",
    popular: false,
  },
  {
    sku: "fries-cheese",
    category: "snacks",
    name: "Фри с сыром",
    badge: "Сырный соус",
    description: "Фри, сырный соус и чуть зелени.",
    price: 99,
    image: "./assets/products/fries-cheese.png",
    popular: false,
  },
  {
    sku: "nuggets",
    category: "snacks",
    name: "Наггетсы",
    badge: "К соусу",
    description: "Золотистые кусочки и соус на выбор.",
    price: 119,
    image: "./assets/products/nuggets.png",
    popular: false,
  },
  {
    sku: "nuggets-xl",
    category: "snacks",
    name: "Наггетсы XL",
    badge: "Большая порция",
    description: "Больше наггетсов для компании или сильного голода.",
    price: 169,
    image: "./assets/products/nuggets-xl.png",
    popular: false,
  },
  {
    sku: "sauce-set",
    category: "snacks",
    name: "Сет соусов",
    badge: "3 вкуса",
    description: "Чесночный, сырный и чили.",
    price: 39,
    image: "./assets/products/sauce-set.png",
    popular: false,
  },
  {
    sku: "cola",
    category: "drinks",
    name: "Кола",
    badge: "Холодная",
    description: "Классический напиток к горячему заказу.",
    price: 55,
    image: "./assets/products/cola.png",
    popular: false,
  },
  {
    sku: "ice-tea",
    category: "drinks",
    name: "Ice tea",
    badge: "Лед и чай",
    description: "Освежающий чай со льдом.",
    price: 65,
    image: "./assets/products/ice-tea.png",
    popular: false,
  },
  {
    sku: "lemonade",
    category: "drinks",
    name: "Лимонад",
    badge: "Цитрус",
    description: "Холодный лимонад к острому меню.",
    price: 69,
    image: "./assets/products/lemonade.png",
    popular: false,
  },
  {
    sku: "water",
    category: "drinks",
    name: "Вода",
    badge: "Без газа",
    description: "Простая вода к заказу.",
    price: 35,
    image: "./assets/products/water.png",
    popular: false,
  },
  {
    sku: "energy",
    category: "drinks",
    name: "Energy",
    badge: "Холодный заряд",
    description: "Напиток для позднего перекуса.",
    price: 75,
    image: "./assets/products/energy.png",
    popular: false,
  },
];

const categoryLabels = {
  all: "Все",
  shawarma: "Шаверма",
  burgers: "Бургеры",
  burums: "Бурумы",
  combo: "Комбо",
  snacks: "Снеки",
  drinks: "Напитки",
};

const catalogBySku = new Map(catalog.map((product) => [product.sku, product]));
const cart = new Map();

const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector("[data-mobile-nav]");
const hitsGrid = document.querySelector("[data-hits-grid]");
const menuList = document.querySelector("[data-menu-list]");
const menuTabs = document.querySelector("[data-menu-tabs]");
const cartOpenButtons = document.querySelectorAll("[data-cart-open]");
const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartBackdrop = document.querySelector("[data-cart-backdrop]");
const cartCloseButtons = document.querySelectorAll("[data-cart-close]");
const checkoutButton = document.querySelector("[data-checkout]");
const checkoutNote = document.querySelector("[data-checkout-note]");
const emptyCart = document.querySelector("[data-empty-cart]");
const orderSummary = document.querySelector("[data-order-summary]");
const orderItems = document.querySelector("[data-order-items]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let activeCategory = "all";
let revealObserver;

function activeCartOpenButton() {
  return (
    [...cartOpenButtons].find((button) => {
      const box = button.getBoundingClientRect();
      const style = window.getComputedStyle(button);
      return box.width > 0 && box.height > 0 && style.visibility !== "hidden" && style.display !== "none";
    }) || cartOpenButtons[0]
  );
}

function formatPrice(value) {
  return `${value.toLocaleString("ru-RU")} ₴`;
}

function pluralItems(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) return "товар";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return "товара";
  return "товаров";
}

function setText(selector, value) {
  document.querySelectorAll(selector).forEach((node) => {
    node.textContent = value;
  });
}

function productButton(product, label = "Добавить", className = "add-button") {
  return `
    <button class="${className}" type="button" data-sku="${product.sku}" aria-label="Добавить ${product.name}">
      ${label}
    </button>
  `;
}

function productCard(product, index) {
  return `
    <article class="product-card" data-sku-card="${product.sku}" data-reveal style="--reveal-delay: ${Math.min(index, 6) * 45}ms">
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.name}" loading="eager" decoding="async" />
      </div>
      <div class="product-card__body">
        <p class="product-card__tag">${product.badge}</p>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-card__footer">
          <strong>${formatPrice(product.price)}</strong>
          ${productButton(product)}
        </div>
      </div>
    </article>
  `;
}

function menuItem(product, index) {
  const qty = cart.get(product.sku) || 0;

  return `
    <article class="menu-item" data-category="${product.category}" data-sku-card="${product.sku}" data-reveal style="--reveal-delay: ${Math.min(index, 10) * 28}ms">
      <img src="${product.image}" alt="${product.name}" loading="eager" decoding="async" />
      <div>
        <span class="menu-item__category">${categoryLabels[product.category]}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <strong>${formatPrice(product.price)}</strong>
      </div>
      <button class="icon-add" type="button" data-sku="${product.sku}" aria-label="Добавить ${product.name}">
        ${qty ? qty : "+"}
      </button>
    </article>
  `;
}

function renderHits() {
  const hitProducts = catalog.filter((product) => product.popular).slice(0, 6);
  hitsGrid.innerHTML = hitProducts.map(productCard).join("");
}

function renderMenu() {
  const products =
    activeCategory === "all" ? catalog : catalog.filter((product) => product.category === activeCategory);

  menuList.innerHTML = products.map(menuItem).join("");
  revealNewNodes(menuList);
}

function renderCart() {
  const items = [...cart.entries()]
    .map(([sku, qty]) => {
      const product = catalogBySku.get(sku);
      return { product, qty, sum: product.price * qty };
    })
    .filter(({ product }) => product);

  const cartCount = items.reduce((sum, item) => sum + item.qty, 0);
  const cartTotal = items.reduce((sum, item) => sum + item.sum, 0);
  const itemLabel = `${cartCount} ${pluralItems(cartCount)}`;

  setText("[data-cart-count]", cartCount);
  setText("[data-cart-count-panel]", cartCount);
  setText("[data-cart-word-panel]", pluralItems(cartCount));
  setText("[data-cart-total-panel]", formatPrice(cartTotal));

  if (items.length) {
    emptyCart.hidden = true;
    orderSummary.hidden = false;
    checkoutButton.disabled = false;
  } else {
    emptyCart.hidden = false;
    orderSummary.hidden = true;
    checkoutButton.disabled = true;
    checkoutNote.hidden = true;
  }

  if (orderItems) {
    orderItems.innerHTML = items
      .map(
        ({ product, qty, sum }) => `
          <div class="order-item">
            <span>${product.name}</span>
            <strong>${qty} × ${formatPrice(product.price)}</strong>
            <em>${formatPrice(sum)}</em>
          </div>
        `,
      )
      .join("");
  }
}

function openCart() {
  cartBackdrop.hidden = false;
  cartDrawer.setAttribute("aria-hidden", "false");
  cartDrawer.removeAttribute("inert");
  document.body.classList.add("cart-open");

  window.requestAnimationFrame(() => {
    cartBackdrop.classList.add("is-open");
    cartDrawer.classList.add("is-open");
    cartDrawer.querySelector("[data-cart-close]")?.focus({ preventScroll: true });
  });
}

function closeCart() {
  cartBackdrop.classList.remove("is-open");
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartDrawer.setAttribute("inert", "");
  document.body.classList.remove("cart-open");
  activeCartOpenButton()?.focus({ preventScroll: true });

  window.setTimeout(() => {
    if (!cartDrawer.classList.contains("is-open")) {
      cartBackdrop.hidden = true;
    }
  }, 220);
}

function animateCartAdd(trigger) {
  const cartOpenButton = activeCartOpenButton();
  if (prefersReducedMotion || !trigger || !cartOpenButton) return;

  const from = trigger.getBoundingClientRect();
  const to = cartOpenButton.getBoundingClientRect();
  const token = document.createElement("span");
  token.className = "fly-token";
  token.style.left = `${from.left + from.width / 2 - 7}px`;
  token.style.top = `${from.top + from.height / 2 - 7}px`;
  document.body.append(token);

  const deltaX = to.left + to.width / 2 - (from.left + from.width / 2);
  const deltaY = to.top + to.height / 2 - (from.top + from.height / 2);
  token.animate(
    [
      { opacity: 0.95, transform: "translate3d(0, 0, 0) scale(1)" },
      { opacity: 0.9, offset: 0.55, transform: `translate3d(${deltaX * 0.62}px, ${deltaY - 34}px, 0) scale(0.92)` },
      { opacity: 0, transform: `translate3d(${deltaX}px, ${deltaY}px, 0) scale(0.35)` },
    ],
    { duration: 520, easing: "cubic-bezier(0.23, 1, 0.32, 1)" },
  ).addEventListener("finish", () => token.remove());

  cartOpenButton.classList.remove("is-bump");
  window.requestAnimationFrame(() => cartOpenButton.classList.add("is-bump"));
  window.setTimeout(() => cartOpenButton.classList.remove("is-bump"), 260);
}

function addToCart(sku, trigger) {
  const product = catalogBySku.get(sku);
  if (!product) return;

  cart.set(sku, (cart.get(sku) || 0) + 1);
  checkoutNote.hidden = true;
  renderCart();
  syncMenuQuantities();
  animateCartAdd(trigger);

  const card = trigger?.closest("[data-sku-card]");
  card?.classList.add("is-added");
  trigger?.classList.add("is-added");

  if (!trigger?.classList.contains("icon-add")) {
    trigger.textContent = "Добавлено";
  }

  window.setTimeout(() => {
    card?.classList.remove("is-added");
    trigger?.classList.remove("is-added");
    if (trigger && !trigger.classList.contains("icon-add")) {
      trigger.textContent = "Добавить";
    }
  }, 900);
}

function syncMenuQuantities() {
  menuList?.querySelectorAll(".icon-add[data-sku]").forEach((button) => {
    const qty = cart.get(button.dataset.sku) || 0;
    button.textContent = qty ? qty : "+";
  });
}

function setActiveCategory(category) {
  activeCategory = category;
  menuTabs?.querySelectorAll("[data-category]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.category === category);
  });
  renderMenu();
}

function closeMobileNav() {
  menuToggle?.setAttribute("aria-expanded", "false");
  mobileNav?.classList.remove("is-open");
  document.body.classList.remove("nav-open");
}

function setupReveal() {
  if (prefersReducedMotion) {
    document.documentElement.classList.add("reduced-motion");
    return;
  }

  document.documentElement.classList.add("motion-ready");
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  document.querySelectorAll("[data-reveal], .section-heading, .promo, .benefit, .about, .contacts").forEach((node) => {
    revealObserver.observe(node);
  });
}

function revealNewNodes(root) {
  if (prefersReducedMotion || !revealObserver) return;
  root.querySelectorAll("[data-reveal]").forEach((node) => revealObserver.observe(node));
}

function setupCategoryCards() {
  const map = {
    "#shawarma": "shawarma",
    "#burgers": "burgers",
    "#burums": "burums",
    "#combo": "combo",
    "#drinks": "drinks",
  };

  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", (event) => {
      const category = map[card.getAttribute("href")];
      if (!category) return;
      event.preventDefault();
      setActiveCategory(category);
      document.querySelector("#menu")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  });
}

renderHits();
renderMenu();
renderCart();
setupReveal();
setupCategoryCards();

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  mobileNav?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
});

mobileNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});

cartOpenButtons.forEach((button) => button.addEventListener("click", openCart));
cartBackdrop?.addEventListener("click", closeCart);
cartCloseButtons.forEach((button) => button.addEventListener("click", closeCart));

checkoutButton?.addEventListener("click", () => {
  checkoutNote.hidden = false;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartDrawer?.classList.contains("is-open")) {
    closeCart();
  }
});

menuTabs?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  setActiveCategory(button.dataset.category);
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-sku]");
  if (!button) return;
  addToCart(button.dataset.sku, button);
});
