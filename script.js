/* Product Data */
const WHATSAPP_NUMBER = "6283125726235";
const STORAGE_KEYS = {
  cart: "tokoku_cart",
  theme: "tokoku_theme"
};

// Data array dengan gambar URL asli dari Unsplash
const products = [
  {
    id: "ayam-geprek",
    name: "Ayam Geprek Sambal Matah",
    category: "Makanan",
    price: 25000,
    oldPrice: 30000,
    discount: "-17%",
    rating: 4.8,
    reviews: 120,
    sold: 480,
    image: "assets/products/Ayam geprek.webp",
    description: "Ayam crispy dengan sambal matah yang pedas dan segar. Cocok untuk makan siang atau makan malam praktis.",
    stock: "Tersedia",
    createdAt: 8
  },
  {
    id: "es-teh",
    name: "Es Teh Manis",
    category: "Minuman",
    price: 5000,
    oldPrice: 7000,
    discount: "-29%",
    rating: 4.7,
    reviews: 95,
    sold: 520,
    image: "assets/products/teh kemasan cup_1.jpg",
    description: "Es teh manis segar dengan rasa teh klasik yang ringan dan cocok dinikmati kapan saja.",
    stock: "Tersedia",
    createdAt: 7
  },
  {
    id: "keripik-kentang",
    name: "Keripik Kentang Original",
    category: "Snack",
    price: 12000,
    oldPrice: 15000,
    discount: "-20%",
    rating: 4.6,
    reviews: 88,
    sold: 340,
    image: "assets/products/keripik kentang.webp",
    description: "Keripik kentang renyah dengan rasa original gurih, pas untuk teman kerja atau santai.",
    stock: "Tersedia",
    createdAt: 6
  },
  {
    id: "facial-wash",
    name: "Facial Wash Glad2Glow",
    category: "Perawatan",
    price: 18000,
    oldPrice: 20000,
    discount: "-10%",
    rating: 4.9,
    reviews: 80,
    sold: 270,
    image: "assets/products/facial wash.jpg",
    description: "Pembersih wajah lembut untuk rutinitas harian, membuat kulit terasa bersih dan segar.",
    stock: "Tersedia",
    createdAt: 5
  },
  {
    id: "kopi-susu",
    name: "Kopi Susu Botol",
    category: "Minuman",
    price: 15000,
    oldPrice: 18000,
    discount: "-17%",
    rating: 4.8,
    reviews: 74,
    sold: 410,
    image: "assets/products/kopi susu.jpg",
    description: "Kopi susu creamy dalam botol praktis dengan rasa manis seimbang dan aroma kopi lembut.",
    stock: "Tersedia",
    createdAt: 4
  },
  {
    id: "sabun-mandi",
    name: "Sabun Mandi Fresh",
    category: "Perawatan",
    price: 16000,
    oldPrice: 19000,
    discount: "-16%",
    rating: 4.7,
    reviews: 61,
    sold: 220,
    image: "assets/products/sabun.jpg",
    description: "Sabun mandi dengan aroma segar untuk menjaga kulit tetap bersih dan nyaman.",
    stock: "Tersedia",
    createdAt: 3
  },
  {
    id: "deterjen",
    name: "Deterjen Clean Home",
    category: "Rumah Tangga",
    price: 22000,
    oldPrice: 26000,
    discount: "-15%",
    rating: 4.8,
    reviews: 112,
    sold: 390,
    image: "assets/products/deterjen.jpg",
    description: "Deterjen rumah tangga untuk mencuci lebih bersih dengan wangi yang tahan lama.",
    stock: "Tersedia",
    createdAt: 2
  },
  {
    id: "buku-tulis",
    name: "Buku Tulis A5 Premium",
    category: "Alat Tulis",
    price: 11000,
    oldPrice: 14000,
    discount: "-21%",
    rating: 4.9,
    reviews: 56,
    sold: 180,
    image: "assets/products/buku a5.jpg",
    description: "Buku tulis A5 dengan kertas halus dan desain ringkas untuk catatan sekolah, kerja, atau jurnal.",
    stock: "Tersedia",
    createdAt: 1
  }
];

/* State */
let cart = loadCart();
let selectedCategory = "Semua";
let searchKeyword = "";
let sortMode = "Terbaru";
let quickViewProductId = null;
let quickViewQty = 1;
let toastTimer = null;

/* Elements */
const body = document.body;
const siteHeader = document.getElementById("siteHeader");
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const sortSelect = document.getElementById("sortSelect");
const categoryChips = document.getElementById("categoryChips");
const cartTrigger = document.getElementById("cartTrigger");
const closeCart = document.getElementById("closeCart");
const cartSidebar = document.getElementById("cartSidebar");
const pageScrim = document.getElementById("pageScrim");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const checkoutButton = document.getElementById("checkoutButton");
const quickModal = document.getElementById("quickModal");
const quickContent = document.getElementById("quickContent");
const closeQuickView = document.getElementById("closeQuickView");
const themeToggle = document.getElementById("themeToggle");
const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toastTitle");
const toastMessage = document.getElementById("toastMessage");
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

/* Utilities */
function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

function getProduct(productId) {
  return products.find((product) => product.id === productId);
}

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.cart)) || [];
  } catch (error) {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce((total, item) => {
    const product = getProduct(item.id);
    return product ? total + product.price * item.qty : total;
  }, 0);
}

function getCartCount() {
  return cart.reduce((total, item) => total + item.qty, 0);
}

function syncScrollLock() {
  const shouldLock = cartSidebar.classList.contains("open") || quickModal.classList.contains("open");
  body.classList.toggle("no-scroll", shouldLock);
}

/* Product Rendering */
function getFilteredProducts() {
  const keyword = searchKeyword.trim().toLowerCase();

  return products
    .filter((product) => selectedCategory === "Semua" || product.category === selectedCategory)
    .filter((product) => {
      const searchable = `${product.name} ${product.category} ${product.description}`.toLowerCase();
      return searchable.includes(keyword);
    })
    .sort((a, b) => {
      if (sortMode === "Harga Terendah") return a.price - b.price;
      if (sortMode === "Harga Tertinggi") return b.price - a.price;
      if (sortMode === "Terlaris") return b.sold - a.sold;
      return b.createdAt - a.createdAt;
    });
}

function renderProducts() {
  const filteredProducts = getFilteredProducts();

  if (!filteredProducts.length) {
    productGrid.innerHTML = `
      <div class="empty-state">
        <p>Produk tidak ditemukan. Coba kata kunci atau kategori lain.</p>
      </div>
    `;
    return;
  }

  productGrid.innerHTML = filteredProducts.map((product) => `
    <article class="product-card reveal" data-product-id="${product.id}">
      <div class="product-media">
        <span class="discount-badge">${product.discount}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-body">
        <h3>${product.name}</h3>
        <p class="product-category">${product.category}</p>
        <div class="rating-row">
          <span class="star">⭐</span>
          <span>${product.rating} (${product.reviews} ulasan)</span>
        </div>
        <div class="price-row">
          <span class="price-new">${formatRupiah(product.price)}</span>
          <span class="price-old">${formatRupiah(product.oldPrice)}</span>
        </div>
        <div class="product-actions">
          <button class="product-add" type="button" data-action="add" data-product-id="${product.id}">+ Keranjang</button>
          <button class="quick-view" type="button" data-action="quick-view" data-product-id="${product.id}" aria-label="Lihat detail ${product.name}">👁️</button>
        </div>
      </div>
    </article>
  `).join("");
}

function updateCategoryUI(category) {
  selectedCategory = category;
  categorySelect.value = category;
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.category === category);
  });
  renderProducts();
}

/* Cart Rendering */
function renderCart() {
  const total = getCartTotal();
  const count = getCartCount();

  cartCount.textContent = count;
  cartTotal.textContent = formatRupiah(total);
  checkoutButton.disabled = count === 0;

  if (!cart.length) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <p>Keranjang masih kosong.<br>Tambahkan produk favoritmu dulu.</p>
      </div>
    `;
    saveCart();
    return;
  }

  cartItems.innerHTML = cart.map((item) => {
    const product = getProduct(item.id);
    if (!product) return "";

    return `
      <article class="cart-item" data-product-id="${product.id}">
        <img class="cart-thumb" src="${product.image}" alt="${product.name}">
        <div class="cart-info">
          <h3>${product.name}</h3>
          <span class="cart-price">${formatRupiah(product.price)}</span>
          <div class="qty-control" aria-label="Jumlah ${product.name}">
            <button type="button" data-cart-action="decrease" data-product-id="${product.id}" aria-label="Kurangi jumlah">−</button>
            <span>${item.qty}</span>
            <button type="button" data-cart-action="increase" data-product-id="${product.id}" aria-label="Tambah jumlah">+</button>
          </div>
        </div>
        <button class="remove-item" type="button" data-cart-action="remove" data-product-id="${product.id}" aria-label="Hapus ${product.name}">🗑️</button>
        <strong class="cart-line-total">${formatRupiah(product.price * item.qty)}</strong>
      </article>
    `;
  }).join("");

  saveCart();
}

function addToCart(productId, qty = 1) {
  const product = getProduct(productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);
  if (existingItem) {
    existingItem.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }

  renderCart();
  showToast("Berhasil!", "Produk berhasil ditambahkan ke keranjang");
}

function updateCartQty(productId, nextQty) {
  if (nextQty <= 0) {
    cart = cart.filter((item) => item.id !== productId);
  } else {
    cart = cart.map((item) => item.id === productId ? { ...item, qty: nextQty } : item);
  }
  renderCart();
}

function handleCartAction(action, productId) {
  const item = cart.find((cartItem) => cartItem.id === productId);
  if (!item && action !== "remove") return;

  if (action === "increase") updateCartQty(productId, item.qty + 1);
  if (action === "decrease") updateCartQty(productId, item.qty - 1);
  if (action === "remove") updateCartQty(productId, 0);
}

/* Quick View */
function openQuickView(productId) {
  const product = getProduct(productId);
  if (!product) return;

  quickViewProductId = productId;
  quickViewQty = 1;
  renderQuickView();
  quickModal.classList.add("open");
  quickModal.setAttribute("aria-hidden", "false");
  syncScrollLock();
}

function closeQuickViewModal() {
  quickModal.classList.remove("open");
  quickModal.setAttribute("aria-hidden", "true");
  quickViewProductId = null;
  syncScrollLock();
}

function renderQuickView() {
  const product = getProduct(quickViewProductId);
  if (!product) return;

  quickContent.innerHTML = `
    <img class="quick-image" src="${product.image}" alt="${product.name}">
    <div class="quick-detail">
      <h2 id="quickTitle">${product.name}</h2>
      <div class="quick-meta">
        <span>⭐ ${product.rating} (${product.reviews} ulasan)</span>
        <span>${product.category}</span>
      </div>
      <div class="quick-price">
        <strong>${formatRupiah(product.price)}</strong>
        <del>${formatRupiah(product.oldPrice)}</del>
        <span>${product.discount}</span>
      </div>
      <p class="quick-desc">${product.description}</p>
      <div class="quick-spec">
        <div><span>Kategori</span><strong>${product.category}</strong></div>
        <div><span>Stok</span><strong class="stock">${product.stock}</strong></div>
        <div>
          <span>Jumlah</span>
          <div class="qty-control">
            <button type="button" data-quick-action="decrease" aria-label="Kurangi jumlah">−</button>
            <span>${quickViewQty}</span>
            <button type="button" data-quick-action="increase" aria-label="Tambah jumlah">+</button>
          </div>
        </div>
      </div>
      <div class="quick-actions">
        <button class="btn btn-outline" type="button" data-quick-action="cancel">Batal</button>
        <button class="btn btn-primary" type="button" data-quick-action="add">+ Tambah ke Keranjang</button>
      </div>
    </div>
  `;
}

function handleQuickAction(action) {
  if (action === "increase") {
    quickViewQty += 1;
    renderQuickView();
  }

  if (action === "decrease") {
    quickViewQty = Math.max(1, quickViewQty - 1);
    renderQuickView();
  }

  if (action === "cancel") {
    closeQuickViewModal();
  }

  if (action === "add" && quickViewProductId) {
    addToCart(quickViewProductId, quickViewQty);
    closeQuickViewModal();
    openCart();
  }
}

/* Sidebar */
function openCart() {
  cartSidebar.classList.add("open");
  pageScrim.classList.add("active");
  cartSidebar.setAttribute("aria-hidden", "false");
  syncScrollLock();
}

function closeCartSidebar() {
  cartSidebar.classList.remove("open");
  pageScrim.classList.remove("active");
  cartSidebar.setAttribute("aria-hidden", "true");
  syncScrollLock();
}

/* Toast */
function showToast(title, message) {
  clearTimeout(toastTimer);
  toastTitle.textContent = title;
  toastMessage.textContent = message;
  toast.classList.remove("show");
  void toast.offsetWidth;
  toast.classList.add("show");
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

/* Dark Mode */
function applyTheme(theme) {
  const isDark = theme === "dark";
  body.classList.toggle("dark-mode", isDark);
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? "Nonaktifkan dark mode" : "Aktifkan dark mode");
  localStorage.setItem(STORAGE_KEYS.theme, theme);
}

function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || "light";
  applyTheme(savedTheme);
}

function toggleTheme() {
  const nextTheme = body.classList.contains("dark-mode") ? "light" : "dark";
  applyTheme(nextTheme);
}

/* WhatsApp Checkout */
function buildWhatsAppMessage() {
  const orderLines = cart.map((item) => {
    const product = getProduct(item.id);
    if (!product) return "";
    return `${product.name} x${item.qty}\n${formatRupiah(product.price * item.qty)}`;
  }).filter(Boolean);

  return [
    "Halo TokoKu ",
    "",
    "Saya ingin memesan:",
    "",
    ...orderLines,
    "",
    "Total:",
    formatRupiah(getCartTotal()),
    "",
    "Terima kasih."
  ].join("\n");
}

function checkoutWhatsApp() {
  if (!cart.length) {
    showToast("Keranjang kosong", "Tambahkan produk sebelum checkout");
    return;
  }

  const message = encodeURIComponent(buildWhatsAppMessage());
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
}

/* Navigation */
function toggleMobileMenu() {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

function closeMobileMenu() {
  navMenu.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

function updateHeaderState() {
  siteHeader.classList.toggle("scrolled", window.scrollY > 12);
}

function updateActiveNav() {
  const sections = [...document.querySelectorAll("main section[id]")];
  let current = null;
  sections.forEach((section) => {
    if (section.offsetTop <= window.scrollY + 120) {
      current = section;
    }
  });
  if (!current) return;

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
  });
}

/* Events */
function bindEvents() {
  productGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-action]");
    if (!button) return;

    const productId = button.dataset.productId;
    if (button.dataset.action === "add") addToCart(productId);
    if (button.dataset.action === "quick-view") openQuickView(productId);
  });

  categoryChips.addEventListener("click", (event) => {
    const chip = event.target.closest(".chip");
    if (!chip) return;
    updateCategoryUI(chip.dataset.category);
  });

  searchInput.addEventListener("input", (event) => {
    searchKeyword = event.target.value;
    renderProducts();
  });

  categorySelect.addEventListener("change", (event) => {
    updateCategoryUI(event.target.value);
  });

  sortSelect.addEventListener("change", (event) => {
    sortMode = event.target.value;
    renderProducts();
  });

  cartTrigger.addEventListener("click", openCart);
  closeCart.addEventListener("click", closeCartSidebar);
  pageScrim.addEventListener("click", closeCartSidebar);

  cartItems.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-cart-action]");
    if (!actionButton) return;
    handleCartAction(actionButton.dataset.cartAction, actionButton.dataset.productId);
  });

  quickContent.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-quick-action]");
    if (!actionButton) return;
    handleQuickAction(actionButton.dataset.quickAction);
  });

  closeQuickView.addEventListener("click", closeQuickViewModal);
  quickModal.addEventListener("click", (event) => {
    if (event.target === quickModal) closeQuickViewModal();
  });

  checkoutButton.addEventListener("click", checkoutWhatsApp);
  themeToggle.addEventListener("click", toggleTheme);
  menuToggle.addEventListener("click", toggleMobileMenu);

  navMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMobileMenu();
  });

  window.addEventListener("scroll", () => {
    updateHeaderState();
    updateActiveNav();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    closeCartSidebar();
    closeQuickViewModal();
    closeMobileMenu();
  });
}

/* Init */
function initApp() {
  initTheme();
  renderProducts();
  renderCart();
  updateHeaderState();
  updateActiveNav();
  bindEvents();
}

document.addEventListener("DOMContentLoaded", initApp);