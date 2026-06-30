/* Product Data */
const WHATSAPP_NUMBER = "6283125726235";
const STORE_NAME = "TokoKu";
const STORE_ADDRESS = "Jl. Merdeka No. 123, Pangkalpinang";
const STORE_PHONE = "+62 831 2572 6235";
const STORAGE_KEYS = {
  cart: "tokoku_cart",
  theme: "tokoku_theme"
};

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
  },
  {
    id: "nasi-goreng",
    name: "Nasi Goreng Spesial",
    category: "Makanan",
    price: 20000,
    oldPrice: 25000,
    discount: "-20%",
    rating: 4.7,
    reviews: 98,
    sold: 560,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=400",
    description: "Nasi goreng spesial dengan telur, ayam, dan sayuran segar. Rasa yang menggugah selera.",
    stock: "Tersedia",
    createdAt: 12
  },
  {
    id: "mie-ayam",
    name: "Mie Ayam Jamur",
    category: "Makanan",
    price: 18000,
    oldPrice: 22000,
    discount: "-18%",
    rating: 4.6,
    reviews: 73,
    sold: 390,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=400",
    description: "Mie ayam dengan topping jamur champignon dan bakso. Kuah gurih yang nikmat.",
    stock: "Tersedia",
    createdAt: 11
  },
  {
    id: "jus-alpukat",
    name: "Jus Alpukat Kental",
    category: "Minuman",
    price: 12000,
    oldPrice: 15000,
    discount: "-20%",
    rating: 4.8,
    reviews: 67,
    sold: 440,
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&q=80&w=400",
    description: "Jus alpukat kental manis dengan taburan cokelat. Segar dan menyehatkan.",
    stock: "Tersedia",
    createdAt: 10
  },
  {
    id: "salad-buah",
    name: "Salad Buah Segar",
    category: "Snack",
    price: 15000,
    oldPrice: 18000,
    discount: "-17%",
    rating: 4.9,
    reviews: 45,
    sold: 280,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
    description: "Salad buah segar dengan campuran apel, anggur, melon, dan dressing yogurt.",
    stock: "Tersedia",
    createdAt: 9
  },
  {
    id: "sambal-tempe",
    name: "Sambal Tempe Premium",
    category: "Makanan",
    price: 8000,
    oldPrice: 10000,
    discount: "-20%",
    rating: 4.5,
    reviews: 89,
    sold: 620,
    image: "images/sambal-tempe.png",
    description: "Sambal tempe premium dengan rasa pedas manis. Cocok untuk lauk atau cemilan.",
    stock: "Tersedia",
    createdAt: 13
  },
  {
    id: "teh-hijau",
    name: "Teh Hijau Botol",
    category: "Minuman",
    price: 7000,
    oldPrice: 9000,
    discount: "-22%",
    rating: 4.6,
    reviews: 54,
    sold: 310,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=400",
    description: "Teh hijau murni dalam botol, tanpa pemanis buatan. Kaya antioksidan.",
    stock: "Tersedia",
    createdAt: 14
  },
  {
    id: "minum-kaleng",
    name: "Minuman Kaleng",
    category: "Minuman",
    price: 10000,
    oldPrice: 12000,
    discount: "-17%",
    rating: 4.5,
    reviews: 32,
    sold: 180,
    image: "images/minum-kaleng.png",
    description: "Minuman soda segar dalam kaleng praktis. Cocok untuk teman santai atau berbuka puasa.",
    stock: "Tersedia",
    createdAt: 16
  },
  {
    id: "hand-sanitizer",
    name: "Hand Sanitizer 100ml",
    category: "Perawatan",
    price: 12000,
    oldPrice: 15000,
    discount: "-20%",
    rating: 4.7,
    reviews: 92,
    sold: 710,
    image: "images/hand-sanitizer.png",
    description: "Hand sanitizer 70% alkohol, membunuh kemasukan bakteri. Aroma lavender segar.",
    stock: "Tersedia",
    createdAt: 15
  },
  {
    id: "tissue-box",
    name: "Tissue Box Premium",
    category: "Rumah Tangga",
    price: 9000,
    oldPrice: 12000,
    discount: "-25%",
    rating: 4.5,
    reviews: 68,
    sold: 450,
    image: "images/tissue-box.png",
    description: "Tissue box premium dengan 200 lembar. Lembut dan kuat, cocok untuk rumah.",
    stock: "Tersedia",
    createdAt: 16
  },
  {
    id: "pensil-warna",
    name: "Set Pensil Warna 24pc",
    category: "Alat Tulis",
    price: 25000,
    oldPrice: 32000,
    discount: "-22%",
    rating: 4.8,
    reviews: 41,
    sold: 195,
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&q=80&w=400",
    description: "Set 24 pensil warna dengan gradasi lengkap. Cocok untuk anak-anak dan profesional.",
    stock: "Tersedia",
    createdAt: 17
  },
  {
    id: "kue-lapis",
    name: "Kukis",
    category: "Snack",
    price: 35000,
    oldPrice: 42000,
    discount: "-17%",
    rating: 4.9,
    reviews: 38,
    sold: 150,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=400",
    description: "Kukis legit premium dengan lapisan tipis dan rasa butter yang kaya.",
    stock: "Tersedia",
    createdAt: 18
  },
  {
    id: "sarden",
    name: "Sarden Kaleng 150g",
    category: "Makanan",
    price: 14000,
    oldPrice: 17000,
    discount: "-18%",
    rating: 4.4,
    reviews: 105,
    sold: 530,
    image: "images/sarden.png",
    description: "Sarden kaleng dalam saus tomat. Praktis dan bergizi untuk stok makanan.",
    stock: "Tersedia",
    createdAt: 19
  }
];

/* ========== MAP ========== */
let locationMap = null;
function initLocationMap() {
  const mapEl = document.getElementById("locationMap");
  if (!mapEl || locationMap) return;
  // Coordinates for Pangkalpinang, Bangka Belitung
  locationMap = L.map("locationMap", {
    center: [-2.129, 106.114],
    zoom: 15,
    scrollWheelZoom: false,
    zoomControl: true
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap"
  }).addTo(locationMap);
  L.marker([-2.129, 106.114]).addTo(locationMap)
    .bindPopup("<strong>TokoKu</strong><br>Jl. Raya Pangkalpinang No. 123<br>🕒 Buka 24 Jam")
    .openPopup();
}
function destroyLocationMap() {
  if (locationMap) {
    locationMap.remove();
    locationMap = null;
  }
}
// Init map on page load (via IntersectionObserver to lazy-load)
let mapObserver = null;

/* State */
let cart = loadCart();
let selectedCategory = "Semua";
let searchKeyword = "";
let sortMode = "Terbaru";
let quickViewProductId = null;
let quickViewQty = 1;
let toastTimer = null;
let searchActiveIndex = -1;
let receiptOrderNumber = 0;

/* Elements */
const body = document.body;
const siteHeader = document.getElementById("siteHeader");
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const searchClear = document.getElementById("searchClear");
const searchSuggestions = document.getElementById("searchSuggestions");
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
const backToTop = document.getElementById("backToTop");
const receiptModal = document.getElementById("receiptModal");
const receiptContent = document.getElementById("receiptContent");
const closeReceipt = document.getElementById("closeReceipt");
const sendWhatsAppBtn = document.getElementById("sendWhatsAppBtn");

/* Utilities */
function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value);
}

function formatRupiahShort(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(value).replace("IDR", "Rp");
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

function getCartSubtotal() {
  return cart.reduce((total, item) => {
    const product = getProduct(item.id);
    return product ? total + product.oldPrice * item.qty : total;
  }, 0);
}

function syncScrollLock() {
  const shouldLock = cartSidebar.classList.contains("open")
    || quickModal.classList.contains("open")
    || receiptModal.classList.contains("open")
    || orderFormModal.classList.contains("open")
    || trackingModal.classList.contains("open")
    || qrisModal.classList.contains("open");
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
    productGrid.innerHTML = `<div class="empty-state"><p>Produk tidak ditemukan. Coba kata kunci atau kategori lain.</p></div>`;
    return;
  }
  productGrid.innerHTML = filteredProducts.map((product) => `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-media">
        <span class="discount-badge">${product.discount}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-body">
        <h3>${product.name}</h3>
        <p class="product-category">${product.category}</p>
        <div class="rating-row">
          <span class="star">⭐</span>
          <span>${product.rating} (${product.reviews} ulasan) · ${product.sold} terjual</span>
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
  observeElements();
}

function updateCategoryUI(category) {
  selectedCategory = category;
  categorySelect.value = category;
  document.querySelectorAll(".chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.category === category);
  });
  document.querySelectorAll(".category-card").forEach((card) => {
    card.classList.toggle("highlighted", card.dataset.category === category && category !== "Semua");
  });
  renderProducts();
}

/* Search Suggestions */
function getSearchSuggestions(keyword) {
  const q = keyword.trim().toLowerCase();
  if (!q) return [];
  return products.filter((product) => {
    const searchable = `${product.name} ${product.category} ${product.description}`.toLowerCase();
    return searchable.includes(q);
  }).slice(0, 6);
}

function highlightMatch(text, keyword) {
  if (!keyword) return text;
  const regex = new RegExp(`(${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

function renderSearchSuggestions() {
  const keyword = searchInput.value.trim();
  const suggestions = getSearchSuggestions(keyword);
  if (!keyword || !suggestions.length) {
    searchSuggestions.classList.remove("open");
    searchSuggestions.innerHTML = "";
    searchInput.setAttribute("aria-expanded", "false");
    searchActiveIndex = -1;
    return;
  }
  searchSuggestions.innerHTML = suggestions.map((product, index) => `
    <button class="search-option${index === searchActiveIndex ? " active" : ""}"
            type="button" data-product-id="${product.id}" role="option" aria-selected="${index === searchActiveIndex}">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
      <div><strong>${highlightMatch(product.name, keyword)}</strong><small>${product.category} · ${formatRupiah(product.price)}</small></div>
      <span class="search-price">${product.discount}</span>
    </button>
  `).join("");
  searchSuggestions.classList.add("open");
  searchInput.setAttribute("aria-expanded", "true");
}

function closeSearchSuggestions() {
  searchSuggestions.classList.remove("open");
  searchInput.setAttribute("aria-expanded", "false");
  searchActiveIndex = -1;
}

/* Cart Rendering */
function renderCart() {
  const total = getCartTotal();
  const count = getCartCount();
  const prevCount = parseInt(cartCount.textContent) || 0;
  cartCount.textContent = count;
  cartTotal.textContent = formatRupiah(total);
  checkoutButton.disabled = count === 0;
  if (count !== prevCount && count > 0) {
    cartCount.classList.remove("bounce");
    void cartCount.offsetWidth;
    cartCount.classList.add("bounce");
  }
  if (!cart.length) {
    cartItems.innerHTML = `<div class="cart-empty"><p>Keranjang masih kosong.<br>Tambahkan produk favoritmu dulu.</p></div>`;
    saveCart();
    return;
  }
  cartItems.innerHTML = cart.map((item) => {
    const product = getProduct(item.id);
    if (!product) return "";
    return `
      <article class="cart-item" data-product-id="${product.id}">
        <img class="cart-thumb" src="${product.image}" alt="${product.name}" loading="lazy">
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
      </article>`;
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
  const addBtn = productGrid.querySelector(`[data-product-id="${productId}"] .product-add`);
  if (addBtn) {
    addBtn.classList.add("added");
    setTimeout(() => addBtn.classList.remove("added"), 400);
  }
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
  setTimeout(() => closeQuickView.focus(), 100);
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
    <img class="quick-image" src="${product.image}" alt="${product.name}" loading="lazy">
    <div class="quick-detail">
      <h2 id="quickTitle">${product.name}</h2>
      <div class="quick-meta"><span>⭐ ${product.rating} (${product.reviews} ulasan)</span><span>${product.category}</span></div>
      <div class="quick-price"><strong>${formatRupiah(product.price)}</strong><del>${formatRupiah(product.oldPrice)}</del><span>${product.discount}</span></div>
      <p class="quick-desc">${product.description}</p>
      <div class="quick-spec">
        <div><span>Kategori</span><strong>${product.category}</strong></div>
        <div><span>Stok</span><strong class="stock">${product.stock}</strong></div>
        <div><span>Jumlah</span>
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
    </div>`;
}

function handleQuickAction(action) {
  if (action === "increase") { quickViewQty += 1; renderQuickView(); }
  if (action === "decrease") { quickViewQty = Math.max(1, quickViewQty - 1); renderQuickView(); }
  if (action === "cancel") closeQuickViewModal();
  if (action === "add" && quickViewProductId) {
    addToCart(quickViewProductId, quickViewQty);
    closeQuickViewModal();
    openCart();
  }
}

/* Focus Trap */
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
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
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
  const savedTheme = localStorage.getItem(STORAGE_KEYS.theme);
  if (savedTheme) { applyTheme(savedTheme); }
  else { applyTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); }
}

function toggleTheme() {
  applyTheme(body.classList.contains("dark-mode") ? "light" : "dark");
}

/* ========== RECEIPT / STRUK ========== */
function generateOrderNumber() {
  receiptOrderNumber++;
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, "");
  return `TK${dateStr}${String(receiptOrderNumber).padStart(3, "0")}`;
}

function generateReceipt() {
  const orderNo = generateOrderNumber();
  const now = new Date();
  const dateStr = now.toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric" });
  const timeStr = now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const subtotal = getCartSubtotal();
  const total = getCartTotal();
  const discount = subtotal - total;

  let itemsHtml = cart.map((item) => {
    const product = getProduct(item.id);
    if (!product) return "";
    const lineTotal = product.price * item.qty;
    return `
      <div class="receipt-item">
        <div class="receipt-item-name">${product.name}</div>
        <div class="receipt-item-detail">${item.qty} x ${formatRupiah(product.price)}</div>
        <div class="receipt-item-total">${formatRupiah(lineTotal)}</div>
      </div>`;
  }).join("");

  receiptContent.innerHTML = `
    <div class="receipt-paper">
      <div class="receipt-header">
        <div class="receipt-store-icon">🛍️</div>
        <div class="receipt-store-name">${STORE_NAME}</div>
        <div class="receipt-store-addr">${STORE_ADDRESS}</div>
        <div class="receipt-store-tel">Telp: ${STORE_PHONE}</div>
      </div>
      <div class="receipt-divider"></div>
      <div class="receipt-meta">
        <div><span>No. Pesanan</span><strong>${orderNo}</strong></div>
        <div><span>Tanggal</span><strong>${dateStr}</strong></div>
        <div><span>Waktu</span><strong>${timeStr}</strong></div>
      </div>
      <div class="receipt-divider"></div>
      <div class="receipt-items-label">ITEM PESANAN</div>
      <div class="receipt-items">${itemsHtml}</div>
      <div class="receipt-divider"></div>
      <div class="receipt-totals">
        <div class="receipt-total-row"><span>Subtotal</span><span>${formatRupiah(subtotal)}</span></div>
        <div class="receipt-total-row discount"><span>Diskon</span><span>-${formatRupiah(discount)}</span></div>
        <div class="receipt-divider-thin"></div>
        <div class="receipt-total-row grand"><span>TOTAL BAYAR</span><span>${formatRupiah(total)}</span></div>
      </div>
      <div class="receipt-divider"></div>
      <div class="receipt-footer">
        <div class="receipt-thanks">Terima kasih atas pesanan Anda!</div>
        <div class="receipt-note">Pesanan akan diproses setelah konfirmasi dari kami.</div>
        <div class="receipt-barcode">||||| |||| ||||| |||| |||||</div>
      </div>
    </div>`;

  receiptModal.classList.add("open");
  receiptModal.setAttribute("aria-hidden", "false");
  syncScrollLock();
  closeCartSidebar();
}

function closeReceiptModal() {
  receiptModal.classList.remove("open");
  receiptModal.setAttribute("aria-hidden", "true");
  syncScrollLock();
}

/* ========== PRINT RECEIPT ========== */
function printReceipt() {
  const receiptHTML = document.getElementById("receiptContent").innerHTML;
  const printWin = window.open("", "_blank", "width=400,height=600");
  printWin.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Print Struk - ${STORE_NAME}</title>
      <style>
        @page { margin: 0; size: 80mm auto; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'Courier New', monospace;
          font-size: 12px;
          color: #000;
          width: 80mm;
          padding: 10px 8px;
          background: #fff;
        }
        .receipt-paper { width: 100%; }
        .receipt-header { text-align: center; margin-bottom: 8px; }
        .receipt-store-icon { font-size: 28px; margin-bottom: 4px; }
        .receipt-store-name { font-size: 16px; font-weight: 700; margin-bottom: 2px; }
        .receipt-store-addr, .receipt-store-tel { font-size: 10px; color: #333; }
        .receipt-divider { border-top: 1px dashed #000; margin: 8px 0; }
        .receipt-divider-thin { border-top: 1px dotted #000; margin: 6px 0; }
        .receipt-meta { font-size: 11px; }
        .receipt-meta div { display: flex; justify-content: space-between; margin: 2px 0; }
        .receipt-items-label { font-weight: 700; font-size: 11px; margin-bottom: 4px; }
        .receipt-item { display: flex; justify-content: space-between; margin: 2px 0; font-size: 11px; }
        .receipt-item-name { flex: 1; }
        .receipt-item-detail { color: #555; margin: 0 4px; }
        .receipt-item-total { font-weight: 700; min-width: 70px; text-align: right; }
        .receipt-totals { }
        .receipt-total-row { display: flex; justify-content: space-between; margin: 3px 0; font-size: 11px; }
        .receipt-total-row.grand { font-size: 14px; font-weight: 700; }
        .receipt-footer { text-align: center; margin-top: 8px; }
        .receipt-thanks { font-size: 12px; margin-bottom: 4px; }
        .receipt-note { font-size: 9px; color: #555; }
        .receipt-barcode { font-size: 16px; letter-spacing: 4px; margin-top: 6px; color: #000; }
        @media print {
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      </style>
    </head>
    <body>\n      ${receiptHTML}
      <script>window.onload=function(){window.print();window.close()};<\/script>
    </body>
    </html>
  `);
  printWin.document.close();
}

/* ========== WHATSAPP MESSAGE ========== */
function buildWhatsAppMessage() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("id-ID", { day: "2-digit", month: "2-digit", year: "numeric" });
  const timeStr = now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });
  const orderNo = `TK${now.toISOString().slice(0, 10).replace(/-/g, "")}${String(receiptOrderNumber).padStart(3, "0")}`;

  const lines = cart.map((item) => {
    const p = getProduct(item.id);
    if (!p) return "";
    return `  ${p.name}\n  ${item.qty} x ${formatRupiah(p.price)} = ${formatRupiah(p.price * item.qty)}`;
  }).filter(Boolean);

  return [
    `*${STORE_NAME}*`,
    `${STORE_ADDRESS}`,
    `Telp: ${STORE_PHONE}`,
    ``,
    `━━━━━━━━━━━━━━━━━━━`,
    `*STRUK PEMESANAN*`,
    `No: ${orderNo}`,
    `${dateStr} ${timeStr}`,
    `━━━━━━━━━━━━━━━━━━━`,
    ``,
    ...lines,
    ``,
    `━━━━━━━━━━━━━━━━━━━`,
    `*TOTAL: ${formatRupiah(getCartTotal())}*`,
    `━━━━━━━━━━━━━━━━━━━`,
    ``,
    `Terima kasih 🙏`
  ].join("\n");
}

/* ========== NEW ORDER SYSTEM ========== */
/* State */
let orderFilterStatus = "Semua";
let currentTrackingOrderId = null;

/* Elements */
const orderFormModal = document.getElementById("orderFormModal");
const closeOrderForm = document.getElementById("closeOrderForm");
const cancelOrderForm = document.getElementById("cancelOrderForm");
const orderForm = document.getElementById("orderForm");
const orderFormSummary = document.getElementById("orderFormSummary");
const orderName = document.getElementById("orderName");
const orderPhone = document.getElementById("orderPhone");
const orderAddress = document.getElementById("orderAddress");
const orderPayment = document.getElementById("orderPayment");
const orderNotes = document.getElementById("orderNotes");
const orderKecamatan = document.getElementById("orderKecamatan");
const trackingModal = document.getElementById("trackingModal");
const trackingContent = document.getElementById("trackingContent");
const closeTracking = document.getElementById("closeTracking");
const orderList = document.getElementById("orderList");
const qrisModal = document.getElementById("qrisModal");
const closeQris = document.getElementById("closeQris");
const closeQrisBtn = document.getElementById("closeQrisBtn");
const qrisPaidBtn = document.getElementById("qrisPaidBtn");
const qrisOrderInfo = document.getElementById("qrisOrderInfo");
let qrisPendingOrderNo = null;

/* Order CRUD */
function getOrders() {
  try {
    return JSON.parse(localStorage.getItem("tokoku_orders")) || [];
  } catch (e) {
    return [];
  }
}

function saveOrders(orders) {
  localStorage.setItem("tokoku_orders", JSON.stringify(orders));
}

function generateOrderNo() {
  const orders = getOrders();
  const now = new Date();
  const dateStr = now.toISOString().slice(0,10).replace(/-/g,"");
  const num = String(orders.length + 1).padStart(3,"0");
  return `INV${dateStr}${num}`;
}

function formatDate(d) {
  return d.toLocaleDateString("id-ID", { day:"2-digit", month:"short", year:"numeric" });
}

function formatTime(d) {
  return d.toLocaleTimeString("id-ID", { hour:"2-digit", minute:"2-digit" });
}

function getStatusEmoji(status) {
  const map = {
    "Dibuat":"🆕","Dikonfirmasi":"✅","Diproses":"📦","Dikirim":"🚚","DalamPerjalanan":"📍","Selesai":"✅","Dibatalkan":"❌"
  };
  return map[status]||"❓";
}

function getStatusTimeline(status) {
  const allStatuses = ["Dibuat","Dikonfirmasi","Diproses","Dikirim","DalamPerjalanan","Selesai"];
  const idx = allStatuses.indexOf(status);
  return allStatuses.map((s,i) => ({
    status: s,
    label: s === "Dibuat" ? "Pesanan Dibuat" :
           s === "Dikonfirmasi" ? "Pesanan Dikonfirmasi" :
           s === "Diproses" ? "Pesanan Diproses" :
           s === "Dikirim" ? "Pesanan Dikirim" :
           s === "DalamPerjalanan" ? "Dalam Perjalanan" :
           "Pesanan Selesai",
    completed: i < idx,
    active: i === idx,
    pending: i > idx
  }));
}

function getEstimatedDelivery(status) {
  if (status === "Selesai") return "Pesanan telah selesai";
  if (status === "DalamPerjalanan") return "Estimasi sampai hari ini";
  if (status === "Dikirim") return "Estimasi 1-2 hari lagi";
  if (status === "Diproses") return "Estimasi 2-3 hari lagi";
  if (status === "Dikonfirmasi") return "Menunggu diproses";
  return "Menunggu konfirmasi";
}

/* Checkout — now opens order form */
function checkoutWhatsApp() {
  if (!cart.length) {
    showToast("Keranjang kosong", "Tambahkan produk sebelum checkout");
    return;
  }
  openOrderForm();
}

/* ========== ORDER FORM ========== */
function openOrderForm() {
  renderOrderFormSummary();
  orderForm.reset();
  clearFormErrors();
  orderFormModal.classList.add("open");
  orderFormModal.setAttribute("aria-hidden","false");
  syncScrollLock();
  closeCartSidebar();
}

function closeOrderFormModal() {
  orderFormModal.classList.remove("open");
  orderFormModal.setAttribute("aria-hidden","true");
  syncScrollLock();
}

function renderOrderFormSummary() {
  let html = cart.map(item => {
    const p = getProduct(item.id);
    if (!p) return "";
    return `<div class="orderform-summary-item"><span>${item.qty}x ${p.name}</span><span>${formatRupiah(p.price * item.qty)}</span></div>`;
  }).join("");
  html += `<div class="orderform-summary-total"><span>Total</span><span>${formatRupiah(getCartTotal())}</span></div>`;
  orderFormSummary.innerHTML = html;
}

function clearFormErrors() {
  document.querySelectorAll(".form-error").forEach(el => el.textContent = "");
}

function validateOrderForm() {
  let valid = true;
  clearFormErrors();
  const phoneRegex = /^[0-9]{10,15}$/;

  if (!orderName.value.trim()) {
    document.getElementById("nameError").textContent = "Nama harus diisi";
    valid = false;
  }
  const phone = orderPhone.value.replace(/[^0-9]/g,"");
  if (!phone || !phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent = "Masukkan no. telepon valid (10-15 angka)";
    valid = false;
  }
  if (!orderAddress.value.trim()) {
    document.getElementById("addressError").textContent = "Alamat harus diisi";
    valid = false;
  }
  if (!orderPayment.value) {
    document.getElementById("paymentError").textContent = "Pilih metode pembayaran";
    valid = false;
  }
  return valid;
}

function handleOrderSubmit(event) {
  event.preventDefault();
  if (!validateOrderForm()) return;

  const now = new Date();
  const orderNo = generateOrderNo();
  const items = cart.map(item => {
    const p = getProduct(item.id);
    return {
      id: item.id,
      name: p.name,
      qty: item.qty,
      price: p.price,
      oldPrice: p.oldPrice,
      image: p.image,
      total: p.price * item.qty
    };
  });
  const subtotal = getCartSubtotal();
  const total = getCartTotal();
  const discount = subtotal - total;

  const order = {
    orderNo,
    date: formatDate(now),
    time: formatTime(now),
    timestamp: now.toISOString(),
    customer: {
      name: orderName.value.trim(),
      phone: orderPhone.value.replace(/[^0-9]/g,""),
      address: orderAddress.value.trim(),
      kecamatan: orderKecamatan.value,
      payment: orderPayment.value,
      notes: orderNotes.value.trim()
    },
    items,
    subtotal,
    discount,
    total,
    status: "Dibuat",
    statusHistory: [{
      status: "Dibuat",
      timestamp: now.toISOString(),
      label: "Pesanan Dibuat"
    }]
  };

  const orders = getOrders();
  orders.unshift(order);
  saveOrders(orders);

  // Clear cart
  cart = [];
  saveCart();
  renderCart();

  closeOrderFormModal();

  if (order.customer.payment === "QRIS") {
    // Show QRIS payment modal instead of receipt
    showQrisModal(orderNo, total);
  } else {
    showToast("Pesanan Dibuat!", `No. ${orderNo} — silakan kirim via WhatsApp`);
    generateEnhancedReceipt(order);
  }
}

/* ========== ENHANCED RECEIPT ========== */
function generateEnhancedReceipt(order) {
  let itemsHtml = order.items.map(item => `
    <div class="receipt-item">
      <div class="receipt-item-name">${item.name}</div>
      <div class="receipt-item-detail">${item.qty} x ${formatRupiah(item.price)}</div>
      <div class="receipt-item-total">${formatRupiah(item.total)}</div>
    </div>
  `).join("");

  receiptContent.innerHTML = `
    <div class="receipt-paper">
      <div class="receipt-header">
        <div class="receipt-store-icon">🛍️</div>
        <div class="receipt-store-name">${STORE_NAME}</div>
        <div class="receipt-store-addr">${STORE_ADDRESS}</div>
        <div class="receipt-store-tel">Telp: ${STORE_PHONE}</div>
      </div>
      <div class="receipt-divider"></div>
      <div class="receipt-meta">
        <div><span>No. Pesanan</span><strong>${order.orderNo}</strong></div>
        <div><span>Tanggal</span><strong>${order.date}</strong></div>
        <div><span>Waktu</span><strong>${order.time}</strong></div>
        <div><span>Status</span><strong class="status-badge status-${order.status}">${getStatusEmoji(order.status)} ${order.status}</strong></div>
        <div><span>Pembayaran</span><strong>${order.customer.payment}</strong></div>
        <div><span>Pelanggan</span><strong>${order.customer.name}</strong></div>
        <div><span>No. HP</span><strong>${order.customer.phone}</strong></div>
        <div><span>Alamat</span><strong>${order.customer.address}${order.customer.kecamatan ? ", Kec. "+order.customer.kecamatan : ""}</strong></div>
      </div>
      <div class="receipt-divider"></div>
      <div class="receipt-items-label">ITEM PESANAN</div>
      <div class="receipt-items">${itemsHtml}</div>
      <div class="receipt-divider"></div>
      <div class="receipt-totals">
        <div class="receipt-total-row"><span>Subtotal</span><span>${formatRupiah(order.subtotal)}</span></div>
        ${order.discount > 0 ? `<div class="receipt-total-row discount"><span>Diskon</span><span>-${formatRupiah(order.discount)}</span></div>` : ""}
        <div class="receipt-divider-thin"></div>
        <div class="receipt-total-row grand"><span>TOTAL BAYAR</span><span>${formatRupiah(order.total)}</span></div>
      </div>
      <div class="receipt-divider"></div>
      <div class="receipt-footer">
        <div class="receipt-thanks">Terima kasih atas pesanan Anda!</div>
        <div class="receipt-note">Pembayaran: ${order.customer.payment}. Pesanan akan diproses setelah konfirmasi.</div>
        <div class="receipt-barcode">||||| |||| ||||| |||| |||||</div>
      </div>
    </div>`;

  receiptModal.classList.add("open");
  receiptModal.setAttribute("aria-hidden","false");
  syncScrollLock();
}

function buildWhatsAppMessage() {
  const orders = getOrders();
  const order = orders[0];
  if (!order) return "";

  let itemsLines = order.items.map(item =>
    `  ${item.name}\n  ${item.qty} x ${formatRupiah(item.price)} = ${formatRupiah(item.total)}`
  ).join("\n");

  return [
    `*${STORE_NAME}*`,
    `${STORE_ADDRESS}`,
    `Telp: ${STORE_PHONE}`,
    ``,
    `━━━━━━━━━━━━━━━━━━━`,
    `*STRUK PEMESANAN*`,
    `No: ${order.orderNo}`,
    `${order.date} ${order.time}`,
    `━━━━━━━━━━━━━━━━━━━`,
    ``,
    itemsLines,
    ``,
    `━━━━━━━━━━━━━━━━━━━`,
    `*TOTAL: ${formatRupiah(order.total)}*`,
    `━━━━━━━━━━━━━━━━━━━`,
    ``,
    `*DATA PELANGGAN*`,
    `Nama: ${order.customer.name}`,
    `No. HP: ${order.customer.phone}`,
    `Alamat: ${order.customer.address}${order.customer.kecamatan ? ", Kec. "+order.customer.kecamatan : ""}`,
    `Pembayaran: ${order.customer.payment}`,
    order.customer.notes ? `Catatan: ${order.customer.notes}` : "",
    ``,
    `Terima kasih 🙏`
  ].join("\n");
}

function sendToWhatsApp() {
  const message = encodeURIComponent(buildWhatsAppMessage());
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
  closeReceiptModal();
}

/* ========== ORDER HISTORY ========== */
function renderOrderHistory() {
  const orders = getOrders();
  const filtered = orderFilterStatus === "Semua"
    ? orders
    : orders.filter(o => o.status === orderFilterStatus);

  // Update tab UI
  document.querySelectorAll(".order-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.status === orderFilterStatus);
  });

  if (!filtered.length) {
    orderList.innerHTML = `<div class="empty-state"><p>${orderFilterStatus === "Semua" ? "Belum ada pesanan. Yuk, belanja dulu!" : "Tidak ada pesanan dengan status ini."}</p></div>`;
    return;
  }

  orderList.innerHTML = filtered.map(order => {
    const itemsCount = order.items.reduce((sum,i) => sum + i.qty, 0);
    return `
      <div class="order-card" data-order-no="${order.orderNo}">
        <div class="order-card-top">
          <div class="order-card-no">${order.orderNo}</div>
          <div><span class="status-badge status-${order.status}">${getStatusEmoji(order.status)} ${order.status}</span></div>
        </div>
        <div class="order-card-body">
          <div class="order-card-info">
            ${order.date} · ${itemsCount} item · ${order.customer.payment}
          </div>
          <div class="order-card-total">${formatRupiah(order.total)}</div>
        </div>
        <div class="order-card-actions">
          <button class="btn-sm btn-outline" data-action="track-order" data-order-no="${order.orderNo}">📍 Lacak</button>
          <button class="btn-sm btn-outline" data-action="view-order" data-order-no="${order.orderNo}">📋 Detail</button>
          ${order.status !== "Dibatalkan" && order.status !== "Selesai" ? `<button class="btn-sm btn-outline" style="color:var(--danger);border-color:rgba(239,68,68,0.3)" data-action="cancel-order" data-order-no="${order.orderNo}">❌ Batalkan</button>` : ""}
          <button class="btn-delete" data-action="delete-order" data-order-no="${order.orderNo}" title="Hapus dari riwayat">🗑️</button>
        </div>
      </div>
    `;
  }).join("");

  // Re-attach click events for order cards
  orderList.querySelectorAll(".order-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest("button")) return; // Let button handler do its thing
      const orderNo = card.dataset.orderNo;
      const orders = getOrders();
      const order = orders.find(o => o.orderNo === orderNo);
      if (order) openTrackingModal(order);
    });
  });
}

function handleOrderTabClick(status) {
  orderFilterStatus = status;
  renderOrderHistory();
}

/* ========== ORDER TRACKING ========== */
function openTrackingModal(order) {
  currentTrackingOrderId = order.orderNo;
  renderTrackingModal(order);
  initTrackingMap(order);
  trackingModal.classList.add("open");
  trackingModal.setAttribute("aria-hidden","false");
  syncScrollLock();
}

function closeTrackingModal() {
  trackingModal.classList.remove("open");
  trackingModal.setAttribute("aria-hidden","true");
  currentTrackingOrderId = null;
  syncScrollLock();
}

function renderTrackingModal(order) {
  const timeline = getStatusTimeline(order.status);
  const history = order.statusHistory || [];

  let timelineHtml = timeline.map((item, idx) => {
    const histItem = history.find(h => h.status === item.status);
    const timeStr = histItem ? formatDate(new Date(histItem.timestamp)) + " " + formatTime(new Date(histItem.timestamp)) : "";
    const cls = item.completed ? "completed" : item.active ? "active" : "pending";
    const emoji = item.completed ? "✅" : item.active ? "⏳" : "⭕";
    return `
      <div class="timeline-item ${cls}">
        <div class="timeline-dot">${item.completed ? "✓" : item.active ? "●" : "○"}</div>
        <div class="timeline-label">${emoji} ${item.label}</div>
        <div class="timeline-time">${timeStr || (item.active ? "Sekarang" : "")}</div>
      </div>
    `;
  }).join("");

  trackingContent.innerHTML = `
    <div class="tracking-header">
      <h2>📍 Lacak Pesanan</h2>
      <p>No. Pesanan: <strong>${order.orderNo}</strong> · ${order.date} ${order.time}</p>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
      <span class="status-badge status-${order.status}">${getStatusEmoji(order.status)} ${order.status}</span>
      <span style="font-size:14px;color:var(--text);font-weight:700">${formatRupiah(order.total)}</span>
    </div>
    <div class="tracking-timeline">${timelineHtml}</div>
    <div class="tracking-map" id="trackingMap"></div>
    <div class="tracking-eta"><i class="fas fa-clock"></i> ${getEstimatedDelivery(order.status)}</div>
    <div class="tracking-info">
      <div class="tracking-info-item">
        <span>Pelanggan</span>
        <strong>${order.customer.name}</strong>
      </div>
      <div class="tracking-info-item">
        <span>Pembayaran</span>
        <strong>${order.customer.payment}</strong>
      </div>
      <div class="tracking-info-item">
        <span>Telepon</span>
        <strong>${order.customer.phone}</strong>
      </div>
      <div class="tracking-info-item">
        <span>Alamat</span>
        <strong>${order.customer.address}${order.customer.kecamatan ? ", Kec. "+order.customer.kecamatan : ""}</strong>
      </div>
    </div>
  `;
}

/* ========== LEAFLET MAP ========== */
let trackingMapInstance = null;

function initTrackingMap(order) {
  // TokoKu location (Pangkalpinang)
  const storeLat = -2.129;
  const storeLng = 106.107;

  setTimeout(() => {
    const mapEl = document.getElementById("trackingMap");
    if (!mapEl) return;

    // Destroy previous instance
    if (trackingMapInstance) {
      trackingMapInstance.remove();
      trackingMapInstance = null;
    }

    trackingMapInstance = L.map("trackingMap", {
      zoomControl: false,
      attributionControl: false
    }).setView([storeLat, storeLng], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19
    }).addTo(trackingMapInstance);

    // Store marker
    const storeIcon = L.divIcon({
      html: '<div style="background:#16A34A;color:#fff;width:32px;height:32px;border-radius:50%;display:grid;place-items:center;font-size:16px;box-shadow:0 4px 12px rgba(22,163,74,0.4);border:3px solid #fff">🏪</div>',
      className: "",
      iconSize: [32, 32],
      iconAnchor: [16, 16]
    });
    L.marker([storeLat, storeLng], { icon: storeIcon }).addTo(trackingMapInstance)
      .bindPopup(`<strong>${STORE_NAME}</strong><br>${STORE_ADDRESS}`);

    // Add delivery destination marker if order is in shipping status
    if (["Diproses","Dikirim","DalamPerjalanan","Selesai"].includes(order.status)) {
      const destLat = storeLat + (Math.random() - 0.5) * 0.02;
      const destLng = storeLng + (Math.random() - 0.5) * 0.02;

      const destIcon = L.divIcon({
        html: '<div style="background:#F59E0B;color:#fff;width:32px;height:32px;border-radius:50%;display:grid;place-items:center;font-size:16px;box-shadow:0 4px 12px rgba(245,158,11,0.4);border:3px solid #fff">📍</div>',
        className: "",
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      });
      const destMarker = L.marker([destLat, destLng], { icon: destIcon }).addTo(trackingMapInstance)
        .bindPopup(`<strong>Tujuan Pengiriman</strong><br>${order.customer.address}`);

      // Draw line from store to destination
      const latlngs = [[storeLat, storeLng], [destLat, destLng]];
      // If DalamPerjalanan, show intermediate point
      if (order.status === "DalamPerjalanan" || order.status === "Dikirim") {
        const midLat = (storeLat + destLat) / 2 + (Math.random() - 0.5) * 0.01;
        const midLng = (storeLng + destLng) / 2 + (Math.random() - 0.5) * 0.01;
        latlngs.splice(1, 0, [midLat, midLng]);

        if (order.status === "DalamPerjalanan") {
          const riderIcon = L.divIcon({
            html: '<div style="background:#EF4444;color:#fff;width:28px;height:28px;border-radius:50%;display:grid;place-items:center;font-size:14px;box-shadow:0 4px 12px rgba(239,68,68,0.4);border:3px solid #fff">🏍️</div>',
            className: "",
            iconSize: [28, 28],
            iconAnchor: [14, 14]
          });
          L.marker([midLat, midLng], { icon: riderIcon }).addTo(trackingMapInstance)
            .bindPopup("📍 Kurir dalam perjalanan");
        }
      }

      const routeLine = L.polyline(latlngs, {
        color: "#16A34A",
        weight: 3,
        opacity: 0.6,
        dashArray: "8, 12"
      }).addTo(trackingMapInstance);

      // Fit bounds to show both markers
      trackingMapInstance.fitBounds(routeLine.getBounds().pad(0.3));
    }

    // Force map to recalculate size after render
    setTimeout(() => {
      if (trackingMapInstance) trackingMapInstance.invalidateSize();
    }, 300);
  }, 100);
}

/* ========== ORDER ACTIONS ========== */
function viewOrderDetail(orderNo) {
  const orders = getOrders();
  const order = orders.find(o => o.orderNo === orderNo);
  if (!order) return;
  openTrackingModal(order);
}

function cancelOrder(orderNo) {
  if (!confirm(`Yakin ingin membatalkan pesanan ${orderNo}?`)) return;
  const orders = getOrders();
  const order = orders.find(o => o.orderNo === orderNo);
  if (!order) return;
  order.status = "Dibatalkan";
  if (!order.statusHistory) order.statusHistory = [];
  order.statusHistory.push({
    status: "Dibatalkan",
    timestamp: new Date().toISOString(),
    label: "Pesanan dibatalkan"
  });
  saveOrders(orders);
  renderOrderHistory();
  showToast("Pesanan Dibatalkan", `Pesanan ${orderNo} telah dibatalkan`);
}

/* ========== QRIS PAYMENT ========== */
function showQrisModal(orderNo, total) {
  qrisPendingOrderNo = orderNo;
  qrisOrderInfo.innerHTML = `
    <div class="qris-order-no">No. Pesanan: <strong>${orderNo}</strong></div>
    <div class="qris-amount">${formatRupiah(total)}</div>
  `;
  qrisModal.classList.add("open");
  qrisModal.setAttribute("aria-hidden", "false");
  syncScrollLock();
}

function closeQrisModal() {
  qrisModal.classList.remove("open");
  qrisModal.setAttribute("aria-hidden", "true");
  qrisPendingOrderNo = null;
  syncScrollLock();
}

function confirmQrisPayment() {
  if (!qrisPendingOrderNo) return;
  const orders = getOrders();
  const order = orders.find(o => o.orderNo === qrisPendingOrderNo);
  if (!order) return;

  // Update status to Dikonfirmasi (payment confirmed)
  order.status = "Dikonfirmasi";
  if (!order.statusHistory) order.statusHistory = [];
  order.statusHistory.push({
    status: "Dikonfirmasi",
    timestamp: new Date().toISOString(),
    label: "Pembayaran QRIS terkonfirmasi"
  });
  saveOrders(orders);
  renderOrderHistory();

  const orderNo = qrisPendingOrderNo;
  closeQrisModal();

  showToast("✅ Pembayaran Dikonfirmasi!", `Pesanan ${orderNo} — menunggu diproses`);
  generateEnhancedReceipt(order);
}

/* ========== DELETE ORDER ========== */
function deleteOrder(orderNo) {
  if (!confirm(`Hapus pesanan ${orderNo} dari riwayat?`)) return;
  let orders = getOrders();
  orders = orders.filter(o => o.orderNo !== orderNo);
  saveOrders(orders);
  renderOrderHistory();
  showToast("Pesanan Dihapus", `Pesanan ${orderNo} telah dihapus dari riwayat`);
}

/* ========== NAVIGATION ========== */
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
    if (section.offsetTop <= window.scrollY + 120) current = section;
  });
  if (!current) return;
  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`);
  });
}

function updateBackToTop() {
  backToTop.classList.toggle("visible", window.scrollY > 400);
}

/* Scroll Reveal */
function observeElements() {
  const els = document.querySelectorAll(".reveal:not(.visible), .product-card:not(.visible)");
  if (!els.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
  els.forEach((el) => observer.observe(el));
}

/* ========== STATS COUNTER ANIMATION ========== */
function animateStats() {
  const statNumbers = document.querySelectorAll(".stat-number");
  if (!statNumbers.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        observer.unobserve(el);
        const target = parseInt(el.dataset.target);
        const isDecimal = el.dataset.decimal === "1";
        const suffix = el.dataset.suffix !== undefined ? el.dataset.suffix : "+";
        const duration = 1500;
        const start = performance.now();
        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          if (isDecimal) {
            el.textContent = (target * eased / 10).toFixed(1);
          } else {
            el.textContent = current + (suffix || "");
          }
          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            if (isDecimal) {
              el.textContent = (target / 10).toFixed(1);
            } else {
              el.textContent = target + (suffix || "");
            }
          }
        }
        requestAnimationFrame(update);
      }
    });
  }, { threshold: 0.3 });
  statNumbers.forEach((el) => observer.observe(el));
}

/* ========== EVENTS ========== */
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

  document.querySelectorAll(".category-card[data-category]").forEach((card) => {
    card.addEventListener("click", () => {
      updateCategoryUI(card.dataset.category);
      document.getElementById("produk").scrollIntoView({ behavior: "smooth" });
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); card.click(); }
    });
  });

  searchInput.addEventListener("input", (event) => {
    searchKeyword = event.target.value;
    renderProducts();
    renderSearchSuggestions();
    searchClear.hidden = !searchInput.value;
  });

  searchInput.addEventListener("keydown", (event) => {
    const options = searchSuggestions.querySelectorAll(".search-option");
    if (event.key === "ArrowDown") { event.preventDefault(); searchActiveIndex = Math.min(searchActiveIndex + 1, options.length - 1); renderSearchSuggestions(); }
    else if (event.key === "ArrowUp") { event.preventDefault(); searchActiveIndex = Math.max(searchActiveIndex - 1, -1); renderSearchSuggestions(); }
    else if (event.key === "Enter" && searchActiveIndex >= 0 && options[searchActiveIndex]) {
      event.preventDefault();
      const pid = options[searchActiveIndex].dataset.productId;
      closeSearchSuggestions(); searchInput.value = ""; searchClear.hidden = true; searchKeyword = ""; renderProducts();
      openQuickView(pid);
    } else if (event.key === "Escape") closeSearchSuggestions();
  });

  searchInput.addEventListener("blur", () => setTimeout(closeSearchSuggestions, 200));
  searchInput.addEventListener("focus", () => { if (searchInput.value.trim()) renderSearchSuggestions(); });

  searchClear.addEventListener("click", () => {
    searchInput.value = ""; searchKeyword = ""; searchClear.hidden = true;
    renderProducts(); closeSearchSuggestions(); searchInput.focus();
  });

  searchSuggestions.addEventListener("click", (event) => {
    const option = event.target.closest(".search-option");
    if (!option) return;
    const pid = option.dataset.productId;
    closeSearchSuggestions(); searchInput.value = ""; searchClear.hidden = true; searchKeyword = ""; renderProducts();
    openQuickView(pid);
  });

  categorySelect.addEventListener("change", (event) => updateCategoryUI(event.target.value));
  sortSelect.addEventListener("change", (event) => { sortMode = event.target.value; renderProducts(); });

  cartTrigger.addEventListener("click", openCart);
  closeCart.addEventListener("click", closeCartSidebar);
  pageScrim.addEventListener("click", closeCartSidebar);

  cartItems.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-cart-action]");
    if (btn) handleCartAction(btn.dataset.cartAction, btn.dataset.productId);
  });

  quickContent.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-quick-action]");
    if (btn) handleQuickAction(btn.dataset.quickAction);
  });

  closeQuickView.addEventListener("click", closeQuickViewModal);
  quickModal.addEventListener("click", (event) => { if (event.target === quickModal) closeQuickViewModal(); });

  checkoutButton.addEventListener("click", checkoutWhatsApp);
  themeToggle.addEventListener("click", toggleTheme);
  menuToggle.addEventListener("click", toggleMobileMenu);
  navMenu.addEventListener("click", (event) => { if (event.target.closest("a")) closeMobileMenu(); });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  // Receipt modal
  closeReceipt.addEventListener("click", closeReceiptModal);
  document.getElementById("closeReceiptBtn").addEventListener("click", closeReceiptModal);
  document.getElementById("printReceiptBtn").addEventListener("click", printReceipt);
  sendWhatsAppBtn.addEventListener("click", sendToWhatsApp);
  receiptModal.addEventListener("click", (event) => { if (event.target === receiptModal) closeReceiptModal(); });

  // Order form
  closeOrderForm.addEventListener("click", closeOrderFormModal);
  cancelOrderForm.addEventListener("click", closeOrderFormModal);
  orderFormModal.addEventListener("click", (event) => { if (event.target === orderFormModal) closeOrderFormModal(); });
  orderForm.addEventListener("submit", handleOrderSubmit);

  // Order history tabs
  document.querySelectorAll(".order-tab").forEach(tab => {
    tab.addEventListener("click", () => handleOrderTabClick(tab.dataset.status));
  });

  // Order list delegated events
  orderList.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-action]");
    if (!btn) return;
    const orderNo = btn.dataset.orderNo;
    if (btn.dataset.action === "track-order") {
      const orders = getOrders();
      const order = orders.find(o => o.orderNo === orderNo);
      if (order) openTrackingModal(order);
    }
    if (btn.dataset.action === "view-order") viewOrderDetail(orderNo);
    if (btn.dataset.action === "cancel-order") cancelOrder(orderNo);
    if (btn.dataset.action === "delete-order") deleteOrder(orderNo);
  });

  // Tracking modal
  closeTracking.addEventListener("click", closeTrackingModal);
  trackingModal.addEventListener("click", (event) => { if (event.target === trackingModal) closeTrackingModal(); });

  // QRIS modal
  closeQris.addEventListener("click", closeQrisModal);
  closeQrisBtn.addEventListener("click", closeQrisModal);
  qrisModal.addEventListener("click", (event) => { if (event.target === qrisModal) closeQrisModal(); });
  qrisPaidBtn.addEventListener("click", confirmQrisPayment);

  let scrollTicking = false;
  window.addEventListener("scroll", () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => { updateHeaderState(); updateActiveNav(); updateBackToTop(); scrollTicking = false; });
      scrollTicking = true;
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCartSidebar(); closeQuickViewModal(); closeMobileMenu();
      closeSearchSuggestions(); closeReceiptModal();
      if (orderFormModal.classList.contains("open")) closeOrderFormModal();
      if (trackingModal.classList.contains("open")) closeTrackingModal();
      if (qrisModal.classList.contains("open")) closeQrisModal();
    }
    trapFocusInModal(event);
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    if (!localStorage.getItem(STORAGE_KEYS.theme)) applyTheme(event.matches ? "dark" : "light");
  });

  document.addEventListener("click", (event) => {
    if (!event.target.closest(".search-box")) closeSearchSuggestions();
  });
}

/* ========== FOCUS TRAP (enhanced) ========== */
function trapFocusInModal(event) {
  const modals = [quickModal, receiptModal, orderFormModal, trackingModal, qrisModal];
  const openModal = modals.find(m => m.classList.contains("open"));
  if (!openModal || event.key !== "Tab") return;
  const focusable = openModal.querySelectorAll('button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])');
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
}

/* ========== INIT ========== */
function initApp() {
  // Hide loading screen
  const loadingScreen = document.getElementById("loadingScreen");
  if (loadingScreen) {
    setTimeout(() => loadingScreen.classList.add("hidden"), 600);
  }

  initTheme();
  renderProducts();
  renderCart();
  updateHeaderState();
  updateActiveNav();
  updateBackToTop();
  bindEvents();
  observeElements();
  renderOrderHistory();

  // Lazy-load map when location section comes into view
  const locSection = document.getElementById("lokasi");
  if (locSection && typeof L !== "undefined") {
    const mapObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          initLocationMap();
          mapObserver.disconnect();
        }
      });
    }, { threshold: 0.1 });
    mapObserver.observe(locSection);
  }
  animateStats();
}

document.addEventListener("DOMContentLoaded", initApp);