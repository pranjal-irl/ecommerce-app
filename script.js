// ==========================================================================
// 1. HARDCODED IMAGE BANNER URLS
// ==========================================================================
const BANNERS = [
    "https://contents.mediadecathlon.com/s1446981/k$37d69ecaac3634a1a004dc158d318cd7/defaut.jpg?format=auto&quality=70&f=1536x0", 
    "https://contents.mediadecathlon.com/s1445650/k$7f1100e2c4764d24a8090a5ffd398c3e/defaut.jpg?format=auto&quality=70&f=1536x0",
    "https://contents.mediadecathlon.com/s1446796/k$532fd3f8571fe6cbdd0af3c7b8207eb5/defaut.jpg?format=auto&quality=70&f=1536x0",
    "https://contents.mediadecathlon.com/s1446836/k$5882ab010c730679726efd4a0f789c9f/defaut.jpg?format=auto&quality=70&f=1536x0"
];

// ==========================================================================
// 2. PRODUCT DATA ENGINE - All images in images/ folder
// ==========================================================================

// Your 7 original featured products (local images)
const BASE_PRODUCTS = [
    { id: "f1", name: "Adidas F50 ELITE", desc: "Laceless Firm Ground Football Boots", price: 19999, rating: 5, reviews: "4.2k", image: "images/football boots square.png", category: "football", gender: "men", type: "shoes" },
    { id: "f2", name: "Ronaldo Portugal Home jersey 2026", desc: "Official Match-wear Jersey", price: 7999, rating: 5, reviews: "7.7k", image: "images/ronaldo jersey.jpg", category: "football", gender: "unisex", type: "top" },
    { id: "f3", name: "Tripole Colonel Metal Frame Rucksack", desc: "Heavy Duty Hiking Bag", price: 3970, rating: 4.5, reviews: "2.0k", image: "images/hiking bag square.webp", category: "hiking", gender: "unisex", type: "gear" },
    { id: "f4", name: "YONEX ZR-100", desc: "Light Aluminium Badminton Racket", price: 760, rating: 4.5, reviews: "8.3k", image: "images/yonex.webp", category: "badminton", gender: "unisex", type: "gear" },
    { id: "f5", name: "Leader Cycle Scout 26T", desc: "High-performance Mountain Bike", price: 4999, rating: 4.5, reviews: "2.1k", image: "images/cycle square.webp", category: "accessories", gender: "unisex", type: "gear" },
    { id: "f6", name: "Cosco Cricket Tennis Ball Tuff H.wt.", desc: "Heavy weight Tennis Balls - Pack of 6", price: 500, rating: 4.5, reviews: "3.9k", image: "images/cosco square.webp", category: "cricket", gender: "unisex", type: "gear" },
    { id: "f7", name: "Nivia Sports Super Inline Skate", desc: "Adjustable Premium Adult Skates", price: 4280, rating: 4.5, reviews: "1.1k", image: "images/skates.webp", category: "accessories", gender: "unisex", type: "gear" }
];

// ALL images are in the images/ folder with exact product names as filenames
const CURATED_CATALOG = [
    // --- MEN'S CAPS ---
    { id: "m-cap-1", name: "Nike Black Training Cap", desc: "Classic lightweight athletic cap", price: 1299, rating: 4.5, reviews: "1.2k", image: "images/Nike Black Training Cap.avif", category: "football", gender: "men", type: "cap" },
    { id: "m-cap-2", name: "Adidas White Cricket Hat", desc: "UV protection white field cap", price: 999, rating: 4, reviews: "850", image: "images/Adidas White Cricket Hat.avif", category: "cricket", gender: "men", type: "cap" },
    { id: "m-cap-3", name: "Puma Dark Gym Snapback", desc: "Moisture-wicking structured training cap", price: 1499, rating: 4.5, reviews: "620", image: "images/Puma Dark Gym Snapback.avif", category: "gym", gender: "men", type: "cap" },
    { id: "m-cap-4", name: "Under Armour Red Running Cap", desc: "Aerodynamic laser-vented path hat", price: 1799, rating: 5, reviews: "2.1k", image: "images/Under Armour Red Running Cap.webp", category: "running", gender: "men", type: "cap" },

    // --- MEN'S TOPS ---
    { id: "m-top-1", name: "Nike White Core Sport Tee", desc: "High-performance mesh training top", price: 1999, rating: 4.5, reviews: "3.4k", image: "images/Nike White Core Sport Tee.avif", category: "cricket", gender: "men", type: "top" },
    { id: "m-top-2", name: "Adidas Performance Running Jersey", desc: "Lightweight moisture-wicking training shirt", price: 1599, rating: 4.5, reviews: "1.1k", image: "images/Adidas Performance Running Jersey.avif", category: "running", gender: "men", type: "top" },
    { id: "m-top-3", name: "Puma Grey Active Gym Top", desc: "Featherweight split-seam training shirt", price: 1399, rating: 4, reviews: "510", image: "images/Puma Grey Active Gym Top.avif", category: "gym", gender: "men", type: "top" },
    { id: "m-top-4", name: "Under Armour Solid Athletic V-Neck", desc: "Anti-odor stretch workout top", price: 1899, rating: 4.5, reviews: "930", image: "images/Under Armour Solid Athletic V-Neck.avif", category: "badminton", gender: "men", type: "top" },

    // --- MEN'S SHORTS ---
    { id: "m-shorts-1", name: "Nike Tapered Pitch Football Shorts", desc: "Breathable structural match-day shorts", price: 1699, rating: 4.5, reviews: "4.1k", image: "images/Nike Tapered Pitch Football Shorts.avif", category: "football", gender: "men", type: "shorts" },
    { id: "m-shorts-2", name: "Adidas Woven Gym Shorts", desc: "Unrestricted movement functional workout shorts", price: 1499, rating: 4.5, reviews: "830", image: "images/Adidas Woven Gym Shorts.avif", category: "gym", gender: "men", type: "shorts" },
    { id: "m-shorts-3", name: "Speedo Solid Blue Swim Shorts", desc: "Quick-dry chlorine resistant swim trunks", price: 1899, rating: 4.5, reviews: "620", image: "images/Speedo Solid Blue Swim Shorts.webp", category: "swimming", gender: "men", type: "shorts" },
    { id: "m-shorts-4", name: "Puma Active Multi-Sport Shorts", desc: "Lightweight flexible training lining shorts", price: 1299, rating: 4, reviews: "1.9k", image: "images/Puma Active Multi-Sport Shorts.avif", category: "accessories", gender: "men", type: "shorts" },

    // --- MEN'S SHOES ---
    { id: "m-shoes-1", name: "Nike Air Zoom Turf Shoes", desc: "High-traction fields and nets shoes", price: 6999, rating: 4.5, reviews: "3.2k", image: "images/Nike Air Zoom Turf Shoes.avif", category: "cricket", gender: "men", type: "shoes" },
    { id: "m-shoes-2", name: "Puma Red Streak Running Shoes", desc: "Responsive road running foam cushioning", price: 8999, rating: 5, reviews: "8.2k", image: "images/Puma Red Streak Running Shoes.avif", category: "running", gender: "men", type: "shoes" },
    { id: "m-shoes-3", name: "Adidas Court Stability Indoor Shoes", desc: "Gum-rubber lateral support badminton sneakers", price: 4999, rating: 4.5, reviews: "1.1k", image: "images/Adidas Court Stability Indoor Shoes.avif", category: "badminton", gender: "men", type: "shoes" },

    // --- WOMEN'S CAPS ---
    { id: "w-cap-1", name: "Nike Light Coral Running Cap", desc: "Breathable low-profile athletic cap", price: 1199, rating: 4.5, reviews: "920", image: "images/Nike Light Coral Running Cap.avif", category: "running", gender: "women", type: "cap" },
    { id: "w-cap-2", name: "Adidas White Tennis Visor", desc: "Open-top wide brim field visor hat", price: 899, rating: 4, reviews: "430", image: "images/Adidas White Tennis Visor.webp", category: "badminton", gender: "women", type: "cap" },
    { id: "w-cap-3", name: "Puma Yellow Active Sport Cap", desc: "Adjustable dynamic quick-dry training hat", price: 1299, rating: 4.5, reviews: "310", image: "images/Puma Yellow Active Sport Cap.webp", category: "cricket", gender: "women", type: "cap" },
    { id: "w-cap-4", name: "Under Armour Trail Sun Hat", desc: "Lightweight structured trekking sun hat", price: 1099, rating: 4.5, reviews: "210", image: "images/Under Armour Trail Sun Hat.avif", category: "hiking", gender: "women", type: "cap" },

    // --- WOMEN'S TOPS ---
    { id: "w-top-1", name: "Nike Teal Racerback Tank", desc: "Ultra-breathable slim athletic practice top", price: 1599, rating: 4.5, reviews: "1.1k", image: "images/Nike Teal Racerback Tank.avif", category: "football", gender: "women", type: "top" },
    { id: "w-top-2", name: "Adidas Athletic Fitness Crop", desc: "Form-fitting structural knit gym top", price: 1899, rating: 5, reviews: "2.4k", image: "images/Adidas Athletic Fitness Crop.avif", category: "gym", gender: "women", type: "top" },
    { id: "w-top-3", name: "Puma Performance Running Top", desc: "Moisture shield anti-chafe split-top", price: 1299, rating: 4.5, reviews: "810", image: "images/Puma Performance Running Top.webp", category: "running", gender: "women", type: "top" },
    { id: "w-top-4", name: "Under Armour Loose Fit Training Tee", desc: "Relaxed fit lightweight athletic top", price: 1399, rating: 4, reviews: "640", image: "images/Under Armour Loose Fit Training Tee.avif", category: "badminton", gender: "women", type: "top" },

    // --- WOMEN'S SHORTS ---
    { id: "w-shorts-1", name: "Nike Pro Compression Shorts", desc: "High-rise secure squeeze workout shorts", price: 1499, rating: 4.5, reviews: "4.3k", image: "images/Nike Pro Compression Shorts.avif", category: "gym", gender: "women", type: "shorts" },
    { id: "w-shorts-2", name: "Adidas Run-Fast Lightweight Shorts", desc: "Featherweight split panel jogging shorts", price: 1699, rating: 4.5, reviews: "2.1k", image: "images/Adidas Run-Fast Lightweight Shorts.avif", category: "running", gender: "women", type: "shorts" },
    { id: "w-shorts-3", name: "Puma Fitted Studio Shorts", desc: "Elastic band structural running shorts", price: 1399, rating: 4, reviews: "520", image: "images/Puma Fitted Studio Shorts.avif", category: "football", gender: "women", type: "shorts" },
    { id: "w-shorts-4", name: "Under Armour Match Court Skort", desc: "Flexible built-in liners sports skirt-shorts", price: 1999, rating: 4, reviews: "750", image: "images/Under Armour Match Court Skort.avif", category: "badminton", gender: "women", type: "shorts" },

    // --- WOMEN'S SHOES ---
    { id: "w-shoes-1", name: "Nike Cushion White Fitness Shoes", desc: "All-white structural training sneakers", price: 4599, rating: 5, reviews: "9.1k", image: "images/Nike Cushion White Fitness Shoes.avif", category: "gym", gender: "women", type: "shoes" },
    { id: "w-shoes-2", name: "Adidas Pink Foam Running Shoes", desc: "Plush impact-absorbing road sneakers", price: 5999, rating: 4, reviews: "830", image: "images/Adidas Pink Foam Running Shoes.avif", category: "running", gender: "women", type: "shoes" },
    { id: "w-shoes-3", name: "Puma Speedcross Trail Shoes", desc: "Lugged high-traction hiking trail sneakers", price: 5499, rating: 4.5, reviews: "1.4k", image: "images/Puma Speedcross Trail Shoes.avif", category: "hiking", gender: "women", type: "shoes" },
    { id: "w-shoes-4", name: "Asics Gel-Court Badminton Shoes", desc: "Non-marking indoor studio court shoes", price: 3999, rating: 4.5, reviews: "670", image: "images/Asics Gel-Court Badminton Shoes.jpg", category: "badminton", gender: "women", type: "shoes" },

    // --- KIDS SECTIONS (FIRST 2 FROM EACH SUB-CATEGORY ONLY = 8 PRODUCTS) ---
    // Kids Caps (2)
    { id: "k-cap-1", name: "Nike Kids Playground Cap", desc: "Lightweight structured sports cap", price: 899, rating: 4.5, reviews: "380", image: "images/Nike Kids Playground Cap.avif", category: "cricket", gender: "kids", type: "cap" },
    { id: "k-cap-2", name: "Adidas Junior Speed Visor", desc: "Velcro adjustable bright running cap", price: 849, rating: 4.5, reviews: "190", image: "images/Adidas Junior Speed Visor.avif", category: "running", gender: "kids", type: "cap" },

    // Kids Tops (2)
    { id: "k-top-1", name: "Nike Junior Pitch Jersey", desc: "Breathable youth football team practice shirt", price: 1499, rating: 4.5, reviews: "1.5k", image: "images/Nike Junior Pitch Jersey.avif", category: "football", gender: "kids", type: "top" },
    { id: "k-top-2", name: "Adidas Pro Youth Practice Tee", desc: "High-durability playground athletic shirt", price: 1199, rating: 5, reviews: "870", image: "images/Adidas Pro Youth Practice Tee.avif", category: "gym", gender: "kids", type: "top" },

    // Kids Shorts (2)
    { id: "k-shorts-1", name: "Nike Dri-FIT Youth Soccer Shorts", desc: "Lightweight mesh playground football shorts", price: 999, rating: 4.5, reviews: "1.8k", image: "images/Nike Dri-FIT Youth Soccer Shorts.avif", category: "football", gender: "kids", type: "shorts" },
    { id: "k-shorts-2", name: "Adidas Kids Explorer Hiking Shorts", desc: "Water-resistant robust outdoor tracking shorts", price: 1199, rating: 4.5, reviews: "520", image: "images/Adidas Kids Explorer Hiking Shorts.webp", category: "hiking", gender: "kids", type: "shorts" },

    // Kids Shoes (2)
    { id: "k-shoes-1", name: "Nike Kids Playground Sneakers", desc: "Strap-secured ultra-flexible youth runner shoes", price: 2999, rating: 4.5, reviews: "2.3k", image: "images/Nike Kids Playground Sneakers.avif", category: "gym", gender: "kids", type: "shoes" },
    { id: "k-shoes-2", name: "Adidas Junior Cushion Runner", desc: "High-traction impact resilient playground shoes", price: 3499, rating: 5, reviews: "1.1k", image: "images/Adidas Junior Cushion Runner.avif", category: "running", gender: "kids", type: "shoes" },

    // --- HARDWARE EQUIPMENT GEAR ---
    { id: "g-fb-1", name: "Nike Strike Match Soccer Ball", desc: "Thermo-bonded aerodynamic pitch ball", price: 1799, rating: 4, reviews: "1.2k", image: "images/Nike Strike Match Soccer Ball.jpg", category: "football", gender: "unisex", type: "gear" },
    { id: "g-cr-1", name: "Kookaburra Leather Match Ball", desc: "4-Piece premium alum-tanned cricket ball", price: 899, rating: 4, reviews: "530", image: "images/Kookaburra Leather Match Ball.jpg", category: "cricket", gender: "unisex", type: "gear" },

    { id: "g-gy-1", name: "Aurion Hex Cast-Iron Dumbbells", desc: "Rubber-coated ergonomic structural weights", price: 2499, rating: 5, reviews: "5.1k", image: "images/Aurion Hex Cast-Iron Dumbbells.webp", category: "gym", gender: "unisex", type: "gear" },

    { id: "g-hk-1", name: "Quechua Aluminum Hiking Poles", desc: "Anti-shock twist-lock mountain trekking sticks", price: 1999, rating: 4.5, reviews: "3.5k", image: "images/Quechua Aluminum Hiking Poles.webp", category: "hiking", gender: "unisex", type: "gear" },
    { id: "g-hk-2", name: "Black Diamond Camping Headlamp", desc: "Waterproof proximity beam alpine element light", price: 2999, rating: 4.5, reviews: "870", image: "images/Black Diamond Camping Headlamp.webp", category: "hiking", gender: "unisex", type: "gear" },

    { id: "g-sw-1", name: "Speedo Aquapulse Racing Goggles", desc: "Anti-fog mirrored lens competition swim goggles", price: 2799, rating: 4.5, reviews: "3.1k", image: "images/Speedo Aquapulse Racing Goggles.webp", category: "swimming", gender: "unisex", type: "gear" },
    { id: "g-sw-2", name: "Arena Hydro Silicone Swim Cap", desc: "Classic high-elasticity protective swim cap", price: 499, rating: 4, reviews: "4.2k", image: "images/Arena Hydro Silicone Swim Cap.webp", category: "swimming", gender: "unisex", type: "gear" },
    { id: "g-sw-3", name: "TYR Hydroblade Training Swim Fins", desc: "Short blade resistance sprint training flippers", price: 2599, rating: 4.5, reviews: "410", image: "images/TYR Hydroblade Training Swim Fins.webp", category: "swimming", gender: "unisex", type: "gear" },

    { id: "g-bd-1", name: "Yonex Graphite Badminton Racket", desc: "Sleek framing high-tension court racket", price: 3499, rating: 4.5, reviews: "1.9k", image: "images/Yonex Graphite Badminton Racket.webp", category: "badminton", gender: "unisex", type: "gear" },

    { id: "g-ac-1", name: "Under Armour Gym Duffel Bag", desc: "Water-resistant element-proof gear storage bag", price: 3499, rating: 5, reviews: "4.7k", image: "images/Under Armour Gym Duffel Bag.avif", category: "accessories", gender: "unisex", type: "gear" },
    { id: "g-ac-2", name: "Nike Insulated Sports Steel Flask", desc: "BPA-free vacuum insulated active water bottle", price: 1499, rating: 4.5, reviews: "3.8k", image: "images/Nike Insulated Sports Steel Flask.avif", category: "accessories", gender: "unisex", type: "gear" }
];

function generateFullCatalog() {
    return [...BASE_PRODUCTS, ...CURATED_CATALOG];
}

const PRODUCTS = generateFullCatalog();

// ==========================================================================
// 3. NAVIGATION HISTORY STACK (for smart back button)
// ==========================================================================
let viewHistory = [];

function pushHistory(viewFn, title, filterFn) {
    viewHistory.push({ viewFn, title, filterFn });
}

function popHistory() {
    viewHistory.pop();
    if (viewHistory.length === 0) {
        showHomeView();
        return null;
    }
    return viewHistory[viewHistory.length - 1];
}

function clearHistory() {
    viewHistory = [];
}

// ==========================================================================
// 4. GLOBAL COMMERCE STATE
// ==========================================================================
let cart = JSON.parse(localStorage.getItem('endure_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('endure_wishlist')) || [];
let currentSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
    initSlider();
    updateBadges();
    renderFeaturedProducts();
    registerGlobalListeners();
    initSearch();
});

function registerGlobalListeners() {
    // Top Bar Actions
    document.querySelector(".cart")?.addEventListener("click", () => {
        clearHistory();
        pushHistory(renderCartPage, "cart", null);
        renderCartPage();
    });
    document.querySelector(".wishlist")?.addEventListener("click", () => {
        clearHistory();
        pushHistory(renderWishlistPage, "wishlist", null);
        renderWishlistPage();
    });
    document.querySelector(".support")?.addEventListener("click", () => {
        clearHistory();
        pushHistory(renderSupportPage, "support", null);
        renderSupportPage();
    });
    document.querySelector(".top-bar img")?.addEventListener("click", () => showHomeView());
    document.querySelector(".logo")?.addEventListener("click", () => showHomeView());

    // Home Grid Cards Navigation
    document.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            const selectedSport = card.classList[1];
            clearHistory();
            pushHistory(renderFilteredPage, selectedSport, p => p.category === selectedSport.toLowerCase());
            renderFilteredPage(selectedSport, p => p.category === selectedSport.toLowerCase());
        });
    });

    // Dropdown Navigation - Sports (All Sports dropdown items)
    document.querySelectorAll("[data-sport]").forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            const sport = el.getAttribute("data-sport");
            clearHistory();
            pushHistory(renderFilteredPage, sport, p => p.category === sport);
            renderFilteredPage(sport, p => p.category === sport);
        });
    });

    // Dropdown Navigation - Gender categories (Men, Women, Kids parent links)
    document.querySelectorAll(".dropdown-wrapper > a[data-gender]").forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            const gender = el.getAttribute("data-gender");
            clearHistory();
            pushHistory(renderFilteredPage, gender, p => p.gender === gender);
            renderFilteredPage(gender, p => p.gender === gender);
        });
    });

    // Dropdown Navigation - Gender + Type sub-items
    document.querySelectorAll(".dropdown-menu a[data-gender][data-type]").forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            const gender = el.getAttribute("data-gender");
            const type = el.getAttribute("data-type");
            clearHistory();
            pushHistory(renderFilteredPage, `${gender} - ${type}`, p => p.gender === gender && p.type === type);
            renderFilteredPage(`${gender} - ${type}`, p => p.gender === gender && p.type === type);
        });
    });

    // Footer Sports links
    document.querySelectorAll(".footer-sports a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const sport = link.getAttribute("data-sport");
            if (sport) {
                clearHistory();
                pushHistory(renderFilteredPage, sport, p => p.category === sport);
                renderFilteredPage(sport, p => p.category === sport);
            }
        });
    });

    // Footer Categories links (Men, Women, Kids)
    document.querySelectorAll(".footer-categories a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const gender = link.getAttribute("data-gender");
            if (gender) {
                clearHistory();
                pushHistory(renderFilteredPage, gender, p => p.gender === gender);
                renderFilteredPage(gender, p => p.gender === gender);
            }
        });
    });

    // Footer Support links
    document.querySelectorAll(".footer-support a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const pageKey = link.getAttribute("data-page");
            clearHistory();
            if (pageKey === "support") {
                pushHistory(renderSupportPage, "support", null);
                renderSupportPage();
            } else if (pageKey) {
                pushHistory(renderMiniInformationPage, pageKey, null);
                renderMiniInformationPage(pageKey);
            }
        });
    });
}

// ==========================================================================
// 5. SEARCH FUNCTIONALITY
// ==========================================================================
function initSearch() {
    const searchInput = document.querySelector('.search-bar input[type="search"]');
    if (!searchInput) return;

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const query = searchInput.value.trim().toLowerCase();
            if (query.length > 0) {
                performSearch(query);
            }
        }
    });
}

function performSearch(query) {
    clearHistory();

    const filtered = PRODUCTS.filter(p => {
        const searchText = (p.name + ' ' + p.desc + ' ' + p.category + ' ' + p.gender + ' ' + p.type).toLowerCase();
        return searchText.includes(query);
    });

    const wrapper = initDynamicView(true);

    let html = `<h2 style="margin-bottom:30px;">Search Results for "${query}" (${filtered.length} items found)</h2>`;

    if (filtered.length === 0) {
        html += `<p style="padding: 40px 0; text-align:center; color:#777;">No products found matching your search.</p>`;
    } else {
        html += `<div class="sport-grid-container">`;
        filtered.forEach(p => { html += generateProductCardHTML(p); });
        html += `</div>`;
    }

    wrapper.innerHTML = html;
    attachDynamicProductListeners(wrapper);
}

// ==========================================================================
// 6. CARD RENDERING LAYOUT ENGINE
// ==========================================================================
function generateProductCardHTML(product) {
    const isWishlisted = wishlist.includes(product.id);
    const isInCart = cart.some(item => item.id === product.id);

    const heartClass = isWishlisted ? "fa-solid fa-heart" : "fa-regular fa-heart";
    const heartStyle = isWishlisted ? "color: red;" : "";

    const btnText = isInCart ? "Added to cart ✓" : "Add to cart";
    const btnStyle = isInCart ? "background-color: #4BB543; color: white; border-color: #4BB543;" : "";

    let starHtml = "";
    for (let i = 1; i <= 5; i++) {
        if (product.rating >= i) {
            starHtml += `<span class="material-symbols-outlined">star_rate</span>`;
        } else if (product.rating + 0.5 === i) {
            starHtml += `<span class="material-symbols-outlined">star_rate_half</span>`;
        } else {
            starHtml += `<span class="material-symbols-outlined" style="color:#ccc;">star_rate</span>`;
        }
    }

    return `
        <div class="product-card ${product.id}">
            <i class="${heartClass}" style="${heartStyle}"></i>
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-details">
                <p class="product-name">${product.name} <span class="description">${product.desc}</span></p>
                <div class="rating">
                    ${starHtml}
                    <p class="no-of-reviews">${product.reviews}</p>
                </div>
                <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
                <button type="button" class="add-button" style="${btnStyle}">${btnText}</button>
            </div>
        </div>
    `;
}

function attachDynamicProductListeners(container) {
    container.querySelectorAll(".product-card").forEach(card => {
        const id = card.classList[1];

        card.querySelector(".add-button").addEventListener("click", (e) => {
            e.stopPropagation();
            toggleCartItem(id, card.querySelector(".add-button"));
        });

        card.querySelector(".fa-heart").addEventListener("click", (e) => {
            e.stopPropagation();
            toggleWishlistItem(id, card.querySelector(".fa-heart"));
        });

        card.addEventListener("click", () => {
            const product = PRODUCTS.find(p => p.id === id);
            pushHistory(renderProductDetailPage, "product-detail", id);
            renderProductDetailPage(id);
        });
    });
}

function toggleCartItem(productId, buttonElement) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        cart.splice(index, 1);
        buttonElement.innerText = "Add to cart";
        buttonElement.style = ""; 
    } else {
        cart.push({ id: productId, qty: 1 });
        buttonElement.innerText = "Added to cart ✓";
        buttonElement.style.backgroundColor = "#4BB543";
        buttonElement.style.color = "white";
        buttonElement.style.borderColor = "#4BB543";
    }
    updateBadges();
}

function toggleWishlistItem(productId, heartElement) {
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        heartElement.className = "fa-regular fa-heart";
        heartElement.style.color = "";
    } else {
        wishlist.push(productId);
        heartElement.className = "fa-solid fa-heart";
        heartElement.style.color = "red";
    }
    updateBadges();
}

function updateBadges() {
    const cartBadge = document.querySelector(".cart-badge");
    const wishlistBadge = document.querySelector(".wishlist-badge");
    const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);

    if (cartBadge) { cartBadge.innerText = totalCartCount; cartBadge.setAttribute("data-count", totalCartCount); }
    if (wishlistBadge) { wishlistBadge.innerText = wishlist.length; wishlistBadge.setAttribute("data-count", wishlist.length); }

    localStorage.setItem('endure_cart', JSON.stringify(cart));
    localStorage.setItem('endure_wishlist', JSON.stringify(wishlist));
}

// ==========================================================================
// 7. VIEW ENGINE CONTROLLER & SINGLE PAGE ROUTER
// ==========================================================================
function showHomeView() {
    clearHistory();
    document.getElementById("home-view").style.display = "block";
    document.getElementById("hero-slider").style.display = "flex";
    document.getElementById("dynamic-view").style.display = "none";
    renderFeaturedProducts();
}

function initDynamicView() {
    document.getElementById("home-view").style.display = "none";
    document.getElementById("hero-slider").style.display = "none";
    const view = document.getElementById("dynamic-view");
    view.style.display = "block";
    window.scrollTo({ top: 0, behavior: 'smooth' });

    view.innerHTML = `<button type="button" class="global-back-btn">← Back</button><div class="page-content-wrapper"></div>`;
    
    // SMART BACK BUTTON - goes to previous page, not home
    view.querySelector(".global-back-btn").addEventListener("click", () => {
        // Remove current page from history
        viewHistory.pop();
        
        // Check if there's a previous page
        if (viewHistory.length === 0) {
            showHomeView();
            return;
        }
        
        // Get the previous page (peek, don't remove)
        const prev = viewHistory[viewHistory.length - 1];
        
        // Render it WITHOUT pushing new history
        if (prev.viewFn === renderFilteredPage && prev.filterFn) {
            renderFilteredPage(prev.title, prev.filterFn, false);
        } else if (prev.viewFn === renderCartPage) {
            renderCartPage(false);
        } else if (prev.viewFn === renderWishlistPage) {
            renderWishlistPage(false);
        } else if (prev.viewFn === renderSupportPage) {
            renderSupportPage(false);
        } else if (prev.viewFn === renderMiniInformationPage) {
            renderMiniInformationPage(prev.title, false);
        } else if (prev.viewFn === renderProductDetailPage) {
            renderProductDetailPage(prev.filterFn, false);
        }
    });

    return view.querySelector(".page-content-wrapper");
}

function renderFeaturedProducts() {
    const sliderContainer = document.querySelector(".product-slider");
    if (!sliderContainer) return;
    sliderContainer.innerHTML = "";
    PRODUCTS.slice(0, 7).forEach(p => { sliderContainer.innerHTML += generateProductCardHTML(p); });
    attachDynamicProductListeners(sliderContainer);
}

// Master Filter Pipeline
function renderFilteredPage(title, filterFn, pushToHistory = true) {
    if (pushToHistory) {
        pushHistory(renderFilteredPage, title, filterFn);
    }
    const wrapper = initDynamicView();
    const filtered = PRODUCTS.filter(filterFn);

    let html = `<h2 style="margin-bottom:30px; text-transform: capitalize;">Catalog: ${title} (${filtered.length} Items found)</h2>`;
    if (filtered.length === 0) {
        html += `<p style="padding: 40px 0; text-align:center; color:#777;">No items found matching this category filter.</p>`;
    } else {
        html += `<div class="sport-grid-container">`;
        filtered.forEach(p => { html += generateProductCardHTML(p); });
        html += `</div>`;
    }
    
    wrapper.innerHTML = html;
    attachDynamicProductListeners(wrapper);
}

// ==========================================================================
// 8. PRODUCT DETAIL VIEW
// ==========================================================================
function renderProductDetailPage(productId, pushToHistory = true) {
    if (pushToHistory) {
        pushHistory(renderProductDetailPage, "product-detail", productId);
    }
    const wrapper = initDynamicView();
    const product = PRODUCTS.find(p => p.id === productId);
    const isInCart = cart.some(item => item.id === product.id);

    wrapper.innerHTML = `
        <div class="product-detail-container" style="display:flex; gap:50px; padding:40px 0;">
            <div style="flex:1;"><img src="${product.image}" style="width:100%; border:1px solid #ddd; border-radius:8px; max-height:450px; object-fit:cover;"></div>
            <div style="flex:1; display:flex; flex-direction:column; gap:20px;">
                <h1 style="margin:0; font-size:32px;">${product.name}</h1>
                <p style="font-size:18px; color:#555; margin:0;">${product.desc}</p>
                <h2 style="color:#fe5203; font-size:32px; margin:0;">₹${product.price.toLocaleString('en-IN')}</h2>

                <div style="display:flex; gap:15px; margin-top:20px;">
                    <button id="detail-cart-btn" class="add-button" style="flex:1; padding:15px; font-size:16px; font-weight:bold; ${isInCart ? 'background-color:#4BB543; color:white; border-color:#4BB543;' : 'background:#333; color:white;'}">
                        ${isInCart ? 'Added to cart ✓' : 'Add To Cart'}
                    </button>
                    <button id="detail-buy-now-btn" style="flex:1; padding:15px; background:#fe5203; color:white; border:none; font-size:16px; font-weight:bold; border-radius:4px; cursor:pointer;">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    `;

    document.getElementById("detail-cart-btn").addEventListener("click", function() { toggleCartItem(product.id, this); });
    document.getElementById("detail-buy-now-btn").addEventListener("click", () => triggerOrderPlacement());
}

// ==========================================================================
// 9. CART VIEW
// ==========================================================================
function renderCartPage(pushToHistory = true) {
    if (pushToHistory) {
        pushHistory(renderCartPage, "cart", null);
    }
    const wrapper = initDynamicView();
    if (cart.length === 0) {
        wrapper.innerHTML = `<h2>Your Shopping Cart</h2><p style="padding:40px 0; text-align:center;">Your shopping cart is empty!</p>`;
        return;
    }

    let subtotal = 0;
    let itemsHtml = "";

    cart.forEach(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        if(!product) return;
        const lineTotal = product.price * item.qty;
        subtotal += lineTotal;

        itemsHtml += `
            <div class="cart-item-row" data-id="${product.id}" style="display:flex; align-items:center; border-bottom:1px solid #ddd; padding:15px 0; cursor:pointer;">
                <img src="${product.image}" style="width:80px; height:80px; object-fit:cover; margin-right:20px; border:1px solid #ddd; border-radius:4px;">
                <div style="flex:1;">
                    <h4 style="margin:0; font-size:18px;">${product.name}</h4>
                    <p style="margin:5px 0 0 0; color:#666;">Quantity: ${item.qty} × ₹${product.price.toLocaleString('en-IN')}</p>
                </div>
                <p style="font-weight:bold; font-size:18px;">₹${lineTotal.toLocaleString('en-IN')}</p>
            </div>
        `;
    });

    wrapper.innerHTML = `
        <h2>Shopping Cart</h2>
        <div style="display:flex; gap:40px; margin-top:20px;">
            <div style="flex:2;">${itemsHtml}</div>
            <div style="flex:1; background:#f9f9f9; padding:20px; border-radius:8px; height:fit-content; border:1px solid #eee;">
                <h3>Order Summary</h3>
                <div style="display:flex; justify-content:space-between; margin-bottom:15px;"><span>Subtotal</span><strong>₹${subtotal.toLocaleString('en-IN')}</strong></div>
                <div style="display:flex; justify-content:space-between; margin-bottom:15px;"><span>Shipping</span><span style="color:green; font-weight:bold;">FREE</span></div>
                <hr>
                <div style="display:flex; justify-content:space-between; font-size:18px; margin:15px 0;"><span>Total</span><strong style="color:#fe5203;">₹${subtotal.toLocaleString('en-IN')}</strong></div>
                <button id="checkout-btn" class="add-button" style="width:100%; padding:14px; background:#fe5203; color:white; border:none; font-size:16px; font-weight:bold; border-radius:6px;">Place Order</button>
            </div>
        </div>
    `;

    wrapper.querySelectorAll(".cart-item-row").forEach(row => {
        row.addEventListener("click", () => {
            const id = row.getAttribute("data-id");
            pushHistory(renderProductDetailPage, "product-detail", id);
            renderProductDetailPage(id);
        });
    });

    document.getElementById("checkout-btn").addEventListener("click", () => triggerOrderPlacement());
}

// ==========================================================================
// 10. WISHLIST VIEW
// ==========================================================================
function renderWishlistPage(pushToHistory = true) {
    if (pushToHistory) {
        pushHistory(renderWishlistPage, "wishlist", null);
    }
    const wrapper = initDynamicView();
    if (wishlist.length === 0) { wrapper.innerHTML = `<h2>Your Wishlist</h2><p style="padding:40px 0; text-align:center;">Your wishlist is empty.</p>`; return; }

    let html = `<h2>Your Wishlist</h2><div class="sport-grid-container">`;
    wishlist.forEach(id => { const product = PRODUCTS.find(p => p.id === id); if(product) html += generateProductCardHTML(product); });
    html += `</div>`;

    wrapper.innerHTML = html;

    wrapper.querySelectorAll(".product-card").forEach(card => {
        const id = card.classList[1];

        card.addEventListener("click", () => {
            pushHistory(renderProductDetailPage, "product-detail", id);
            renderProductDetailPage(id);
        });

        card.querySelector(".fa-heart").addEventListener("click", (e) => {
            e.stopPropagation();
            toggleWishlistItem(id, card.querySelector(".fa-heart"));
            renderWishlistPage(false);
        });

        card.querySelector(".add-button").addEventListener("click", (e) => {
            e.stopPropagation();
            toggleCartItem(id, card.querySelector(".add-button"));
        });
    });
}

// ==========================================================================
// 11. SUPPORT & INFO PAGES
// ==========================================================================
function renderSupportPage(pushToHistory = true) {
    if (pushToHistory) {
        pushHistory(renderSupportPage, "support", null);
    }
    const wrapper = initDynamicView();
    wrapper.innerHTML = `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px 0;">
            <h2>Customer Support Center</h2>
            <form id="support-form" style="display:flex; flex-direction:column; gap:15px; margin-top:20px;">
                <label style="font-weight:bold;">Your Name</label>
                <input type="text" required style="padding:10px; border:1px solid #ccc; border-radius:4px;">
                <label style="font-weight:bold;">Email Address</label>
                <input type="email" required style="padding:10px; border:1px solid #ccc; border-radius:4px;">
                <label style="font-weight:bold;">Message</label>
                <textarea rows="5" required style="padding:10px; border:1px solid #ccc; border-radius:4px;"></textarea>
                <button type="submit" class="add-button" style="background:#333; color:white; padding:12px; align-self:flex-start;">Submit Ticket</button>
            </form>
        </div>
    `;
    document.getElementById("support-form").addEventListener("submit", (e) => {
        e.preventDefault(); alert("Ticket submitted successfully!"); showHomeView();
    });
}

function renderMiniInformationPage(key, pushToHistory = true) {
    if (pushToHistory) {
        pushHistory(renderMiniInformationPage, key, null);
    }
    const wrapper = initDynamicView();
    const formattedTitle = key.replace(/-/g, ' ');
    wrapper.innerHTML = `
        <div style="max-width: 800px; margin: 0 auto; padding: 40px 0; line-height:1.6;">
            <h2 style="text-transform: capitalize; border-bottom:2px solid #fe5203; padding-bottom:10px;">${formattedTitle}</h2>
            <p style="margin-top:20px; color:#444;">This is a dynamically generated ${formattedTitle} statement viewport page module for Endure Sports Hub performance workspace environments.</p>
            <p>Our global guidelines guarantee secure delivery processing, robust handling verification protocols, and premium brand service conditions for all performance assets across localized testing territories in 2026.</p>
        </div>
    `;
}

// ==========================================================================
// 12. HERO SLIDER CORE ENGINE
// ==========================================================================
function initSlider() {
    const heroSection = document.getElementById("hero-slider");
    if (!heroSection) return;

    heroSection.style.backgroundImage = `url('${BANNERS[0]}')`;

    function changeSlide(index) {
        currentSlide = (index + BANNERS.length) % BANNERS.length;
        heroSection.style.backgroundImage = `url('${BANNERS[currentSlide]}')`;
    }

    document.getElementById("next-slide").addEventListener("click", (e) => { e.stopPropagation(); changeSlide(currentSlide + 1); });
    document.getElementById("prev-slide").addEventListener("click", (e) => { e.stopPropagation(); changeSlide(currentSlide - 1); });

    let autoTimer = setInterval(() => changeSlide(currentSlide + 1), 5000);
    heroSection.addEventListener("click", () => {
        clearInterval(autoTimer); autoTimer = setInterval(() => changeSlide(currentSlide + 1), 6000);
    });
}

// ==========================================================================
// 13. ORDER PLACEMENT
// ==========================================================================
function triggerOrderPlacement() {
    clearHistory();
    const view = document.getElementById("dynamic-view");
    cart = []; updateBadges();
    view.innerHTML = `
        <div style="text-align:center; padding: 80px 20px;">
            <div style="font-size: 70px; color: #4BB543; margin-bottom: 20px;">🎉</div>
            <h1 style="font-size: 36px; color: #333;">Order Placed Successfully!</h1>
            <p style="font-size: 18px; color: #666; margin-bottom: 30px;">Thank you for testing with Endure.</p>
            <button id="return-home-btn" class="add-button" style="padding: 12px 30px; background: #333; color: white;">Return to Home</button>
        </div>
    `;
    document.getElementById("return-home-btn").addEventListener("click", () => showHomeView());
}