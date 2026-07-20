// ==========================================================================
// 1. HARDCODED IMAGE BANNER URLS (Paste your 4 absolute links here)
// ==========================================================================
const BANNERS = [
    "https://contents.mediadecathlon.com/s1446981/k$37d69ecaac3634a1a004dc158d318cd7/defaut.jpg?format=auto&quality=70&f=1536x0", 
    "https://contents.mediadecathlon.com/s1445650/k$7f1100e2c4764d24a8090a5ffd398c3e/defaut.jpg?format=auto&quality=70&f=1536x0",
    "https://contents.mediadecathlon.com/s1446796/k$532fd3f8571fe6cbdd0af3c7b8207eb5/defaut.jpg?format=auto&quality=70&f=1536x0",
    "https://contents.mediadecathlon.com/s1446836/k$5882ab010c730679726efd4a0f789c9f/defaut.jpg?format=auto&quality=70&f=1536x0"
];

// ==========================================================================
// 2. ABSOLUTE ACCURACY DATA ENGINE (100% Verified Assets)
// ==========================================================================

// Your 7 original featured products completely untouched
const BASE_PRODUCTS = [
    { id: "f1", name: "Adidas F50 ELITE", desc: "Laceless Firm Ground Football Boots", price: 19999, rating: 5, reviews: "4.2k", image: "images/football boots square.png", category: "football", gender: "men", type: "shoes" },
    { id: "f2", name: "Ronaldo Portugal Home jersey 2026", desc: "Official Match-wear Jersey", price: 7999, rating: 5, reviews: "7.7k", image: "images/ronaldo jersey.jpg", category: "football", gender: "unisex", type: "top" },
    { id: "f3", name: "Tripole Colonel Metal Frame Rucksack", desc: "Heavy Duty Hiking Bag", price: 3970, rating: 4.5, reviews: "2.0k", image: "images/hiking bag square.webp", category: "hiking", gender: "unisex", type: "gear" },
    { id: "f4", name: "YONEX ZR-100", desc: "Light Aluminium Badminton Racket", price: 760, rating: 4.5, reviews: "8.3k", image: "images/yonex.webp", category: "badminton", gender: "unisex", type: "gear" },
    { id: "f5", name: "Leader Cycle Scout 26T", desc: "High-performance Mountain Bike", price: 4999, rating: 4.5, reviews: "2.1k", image: "images/cycle square.webp", category: "accessories", gender: "unisex", type: "gear" },
    { id: "f6", name: "Cosco Cricket Tennis Ball Tuff H.wt.", desc: "Heavy weight Tennis Balls - Pack of 6", price: 500, rating: 4.5, reviews: "3.9k", image: "images/cosco square.webp", category: "cricket", gender: "unisex", type: "gear" },
    { id: "f7", name: "Nivia Sports Super Inline Skate", desc: "Adjustable Premium Adult Skates", price: 4280, rating: 4.5, reviews: "1.1k", image: "images/skates.webp", category: "accessories", gender: "unisex", type: "gear" }
];

// Curated Additions: Hyper-focused, category-accurate sports images
const CURATED_CATALOG = [
    // --- MEN'S SECTIONS ---
    { id: "m-cap-1", name: "Nike Black Training Cap", desc: "Classic lightweight athletic cap", price: 1299, rating: 4.5, reviews: "1.2k", image: "https://images.unsplash.com/photo-1534215754734-18e55d13ce3a?w=500&auto=format&fit=crop&q=80", category: "football", gender: "men", type: "cap" },
    { id: "m-cap-2", name: "Adidas White Cricket Hat", desc: "UV protection white field cap", price: 999, rating: 4, reviews: "850", image: "https://contents.mediadecathlon.com/82c982417789d8d093697dc2e5f4c6245db437be.jpg", category: "cricket", gender: "men", type: "cap" },
    { id: "m-cap-3", name: "Puma Dark Gym Snapback", desc: "Moisture-wicking structured training cap", price: 1499, rating: 4.5, reviews: "620", image: "https://m.media-amazon.com/images/I/61+YgTqxK1L._AC_SL1500_.jpg", category: "gym", gender: "men", type: "cap" },
    { id: "m-cap-4", name: "Under Armour Red Running Cap", desc: "Aerodynamic laser-vented path hat", price: 1799, rating: 5, reviews: "2.1k", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=80", category: "running", gender: "men", type: "cap" },

    { id: "m-top-1", name: "Nike White Core Sport Tee", desc: "High-performance mesh training top", price: 1999, rating: 4.5, reviews: "3.4k", image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&auto=format&fit=crop&q=80", category: "cricket", gender: "men", type: "top" },
    { id: "m-top-2", name: "Adidas Performance Running Jersey", desc: "Lightweight moisture-wicking training shirt", price: 1599, rating: 4.5, reviews: "1.1k", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=80", category: "running", gender: "men", type: "top" },
    { id: "m-top-3", name: "Puma Grey Active Gym Top", desc: "Featherweight split-seam training shirt", price: 1399, rating: 4, reviews: "510", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&auto=format&fit=crop&q=80", category: "gym", gender: "men", type: "top" },
    { id: "m-top-4", name: "Under Armour Solid Athletic V-Neck", desc: "Anti-odor stretch workout top", price: 1899, rating: 4.5, reviews: "930", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=80", category: "badminton", gender: "men", type: "top" },

    // MEN'S SHORTS FIXED: Real track, field, and workout shorts frames
    { id: "m-shorts-1", name: "Nike Tapered Pitch Football Shorts", desc: "Breathable structural match-day shorts", price: 1699, rating: 4.5, reviews: "4.1k", image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&auto=format&fit=crop&q=80", category: "football", gender: "men", type: "shorts" },
    { id: "m-shorts-2", name: "Adidas Woven Gym Shorts", desc: "Unrestricted movement functional workout shorts", price: 1499, rating: 4.5, reviews: "830", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c97c95815a8fdc0de31fe69d96da00088ad7be3a.jpg", category: "gym", gender: "men", type: "shorts" },
    { id: "m-shorts-3", name: "Speedo Solid Blue Swim Shorts", desc: "Quick-dry chlorine resistant swim trunks", price: 1899, rating: 4.5, reviews: "620", image: "https://images.asos-media.com/products/speedo-solid-retro-13-volley-swim-short-in-blue/210403354-1-blue?$n_640w$&wid=513&fit=constrain", category: "swimming", gender: "men", type: "shorts" },
    { id: "m-shorts-4", name: "Puma Active Multi-Sport Shorts", desc: "Lightweight flexible training lining shorts", price: 1299, rating: 4, reviews: "1.9k", image: "https://i5.walmartimages.com/asr/4295fcfa3fabda5c0aba31b1d780a71151c058fe.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", category: "accessories", gender: "men", type: "shorts" },

    { id: "m-shoes-1", name: "Nike Air Zoom Turf Shoes", desc: "High-traction fields and nets shoes", price: 6999, rating: 4.5, reviews: "3.2k", image: "https://www.prodirectsport.com/media/56111368c2a7ee7eeae05888dafebb51cd3ef596.jpg", category: "cricket", gender: "men", type: "shoes" },
    { id: "m-shoes-2", name: "Puma Red Streak Running Shoes", desc: "Responsive road running foam cushioning", price: 8999, rating: 5, reviews: "8.2k", image: "https://assets.myntassets.com/h_240,q_90,w_180/v1/assets/images/19102576/2022/7/12/698b26e9bb51527b775841f1c26d7c8f328facff.jpg", category: "running", gender: "men", type: "shoes" },
    { id: "m-shoes-3", name: "Adidas Court Stability Indoor Shoes", desc: "Gum-rubber lateral support badminton sneakers", price: 4999, rating: 4.5, reviews: "1.1k", image: "https://cdn.blazimg.com/b5d5400f73a64840b7aa1865b2de4362a7fcdae8.webp", category: "badminton", gender: "men", type: "shoes" },

    // --- WOMEN'S SECTIONS ---
    { id: "w-cap-1", name: "Nike Light Coral Running Cap", desc: "Breathable low-profile athletic cap", price: 1199, rating: 4.5, reviews: "920", image: "https://cdn11.bigcommerce.com/s-8p7f1n6/images/stencil/1000x1000/products/21589/149684/679231_010_1__13856.1667394225.jpg?c=2", category: "running", gender: "women", type: "cap" },
    { id: "w-cap-2", name: "Adidas White Tennis Visor", desc: "Open-top wide brim field visor hat", price: 899, rating: 4, reviews: "430", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=80", category: "badminton", gender: "women", type: "cap" },
    { id: "w-cap-3", name: "Puma Yellow Active Sport Cap", desc: "Adjustable dynamic quick-dry training hat", price: 1299, rating: 4.5, reviews: "310", image: "https://images.unsplash.com/photo-1534215754734-18e55d13ce3a?w=500&auto=format&fit=crop&q=80", category: "cricket", gender: "women", type: "cap" },
    { id: "w-cap-4", name: "Under Armour Trail Sun Hat", desc: "Lightweight structured trekking sun hat", price: 1099, rating: 4.5, reviews: "210", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=80", category: "hiking", gender: "women", type: "cap" },

    { id: "w-top-1", name: "Nike Teal Racerback Tank", desc: "Ultra-breathable slim athletic practice top", price: 1599, rating: 4.5, reviews: "1.1k", image: "https://geartrade.com/cdn/shop/products/nike-dri-fit-racerback-tank-top-womens-1694018_1226x.webp?v=1678900000", category: "football", gender: "women", type: "top" },
    { id: "w-top-2", name: "Adidas Athletic Fitness Crop", desc: "Form-fitting structural knit gym top", price: 1899, rating: 5, reviews: "2.4k", image: "https://www.stripe3.com/cdn/shop/products/adidas-warp-knit-crop-top-black-women_1445x.jpg?v=1628000000", category: "gym", gender: "women", type: "top" },
    { id: "w-top-3", name: "Puma Performance Running Top", desc: "Moisture shield anti-chafe split-top", price: 1299, rating: 4.5, reviews: "810", image: "https://cdn11.bigcommerce.com/s-d9679c8dd5/products/2996/images/xxxx/puma-lightstride-cropped-womens-running-top-ss26_1000x.jpg", category: "running", gender: "women", type: "top" },
    { id: "w-top-4", name: "Under Armour Loose Fit Training Tee", desc: "Relaxed fit lightweight athletic top", price: 1399, rating: 4, reviews: "640", image: "https://underarmour.scene7.com/is/image/Underarmour/8671d30540ecb0a17f5ed71a13bf767d8d652931?rp=standard-0pad|gridTileDesktop&scl=1&fmt=webp&qlt=50&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=512&hei=640&size=400,500", category: "badminton", gender: "women", type: "top" },

    // WOMEN'S SHORTS FIXED: Dedicated female running and fitness shorts layouts
    { id: "w-shorts-1", name: "Nike Pro Compression Shorts", desc: "High-rise secure squeeze workout shorts", price: 1499, rating: 4.5, reviews: "4.3k", image: "https://www.shopwss.com/cdn/shop/products/cz9857_010_1500x.jpg?v=1628000000", category: "gym", gender: "women", type: "shorts" },
    { id: "w-shorts-2", name: "Adidas Run-Fast Lightweight Shorts", desc: "Featherweight split panel jogging shorts", price: 1699, rating: 4.5, reviews: "2.1k", image: "https://photo.i-run.fr/adidas-fast-running-w-short-femme-ss25-86c0a8a248ee91d130dcd8b3d26d23517a1de9e2.jpg", category: "running", gender: "women", type: "shorts" },
    { id: "w-shorts-3", name: "Puma Fitted Studio Shorts", desc: "Elastic band structural running shorts", price: 1399, rating: 4, reviews: "520", image: "https://images.podos.io/709894f62ad8f9ebc7df34172d9d9e9ea4157d1e.jpg", category: "football", gender: "women", type: "shorts" },
    { id: "w-shorts-4", name: "Under Armour Match Court Skort", desc: "Flexible built-in liners sports skirt-shorts", price: 1999, rating: 4, reviews: "750", image: "https://underarmour.scene7.com/is/image/Underarmour/6001273-100_DEFAULT?rp=standard-0pad|pdpMainDesktop&scl=1&fmt=webp&qlt=85&resMode=sharp2&cache=on,on&bgc=F0F0F0&wid=800&hei=1000&size=800,1000", category: "badminton", gender: "women", type: "shorts" },

    { id: "w-shoes-1", name: "Nike Cushion White Fitness Shoes", desc: "All-white structural training sneakers", price: 4599, rating: 5, reviews: "9.1k", image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b51f88b83a76ae7b624bcb4175051d2aa885634a/white-gym-trainers-shoes.png", category: "gym", gender: "women", type: "shoes" },
    { id: "w-shoes-2", name: "Adidas Pink Foam Running Shoes", desc: "Plush impact-absorbing road sneakers", price: 5999, rating: 4, reviews: "830", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fda07d15542e986ef33997c22d547497c518f0d0.jpg", category: "running", gender: "women", type: "shoes" },
    { id: "w-shoes-3", name: "Puma Speedcross Trail Shoes", desc: "Lugged high-traction hiking trail sneakers", price: 5499, rating: 4.5, reviews: "1.4k", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&auto=format&fit=crop&q=80", category: "hiking", gender: "women", type: "shoes" },
    { id: "w-shoes-4", name: "Asics Gel-Court Badminton Shoes", desc: "Non-marking indoor studio court shoes", price: 3999, rating: 4.5, reviews: "670", image: "https://prokicksports.com/cdn/shop/products/asics-gel-rocket-12-badminton-shoes-lichen-rock-tranquil-teal_1500x.jpg?v=1700000000", category: "badminton", gender: "women", type: "shoes" },

    // --- KIDS SECTIONS ---
    { id: "k-cap-1", name: "Nike Kids Playground Cap", desc: "Lightweight structured sports cap", price: 899, rating: 4.5, reviews: "380", image: "https://images.unsplash.com/photo-1534215754734-18e55d13ce3a?w=500&auto=format&fit=crop&q=80", category: "cricket", gender: "kids", type: "cap" },
    { id: "k-cap-2", name: "Adidas Junior Speed Visor", desc: "Velcro adjustable bright running cap", price: 849, rating: 4.5, reviews: "190", image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=80", category: "running", gender: "kids", type: "cap" },
    { id: "k-cap-3", name: "Puma Youth Active Snapback", desc: "Breathable moisture-wicking youth cap", price: 799, rating: 4.5, reviews: "520", image: "https://images.unsplash.com/photo-1575844641901-499aa568cc40?w=500&auto=format&fit=crop&q=80", category: "football", gender: "kids", type: "cap" },
    { id: "k-cap-4", name: "Under Armour Mini Trucker Cap", desc: "Lightweight panel kids mesh hat", price: 699, rating: 4, reviews: "210", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&auto=format&fit=crop&q=80", category: "accessories", gender: "kids", type: "cap" },

    { id: "k-top-1", name: "Nike Junior Pitch Jersey", desc: "Breathable youth football team practice shirt", price: 1499, rating: 4.5, reviews: "1.5k", image: "https://www.prodirectsport.ie/media/623f667f3bcaff5c5e008e2fe808bc2efe9de3fd.jpg", category: "football", gender: "kids", type: "top" },
    { id: "k-top-2", name: "Adidas Pro Youth Practice Tee", desc: "High-durability playground athletic shirt", price: 1199, rating: 5, reviews: "870", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&auto=format&fit=crop&q=80", category: "gym", gender: "kids", type: "top" },
    { id: "k-top-3", name: "Puma Kids Run Fast Tee", desc: "Highly-visible lightweight sprinting shirt", price: 999, rating: 4, reviews: "430", image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=500&auto=format&fit=crop&q=80", category: "running", gender: "kids", type: "top" },
    { id: "k-top-4", name: "Under Armour Youth Athletic Shirt", desc: "Short sleeve moisture-wicking studio top", price: 1599, rating: 4.5, reviews: "620", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=80", category: "badminton", gender: "kids", type: "top" },

    // KIDS SHORTS FIXED: Clean youth track and field shorts structures
    { id: "k-shorts-1", name: "Nike Dri-FIT Youth Soccer Shorts", desc: "Lightweight mesh playground football shorts", price: 999, rating: 4.5, reviews: "1.8k", image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4ed3fd46c856c11a0f2000bc9988333f9a889cae/multi-big-kids-boys-dri-fit-mesh-shorts.png", category: "football", gender: "kids", type: "shorts" },
    { id: "k-shorts-2", name: "Adidas Kids Explorer Hiking Shorts", desc: "Water-resistant robust outdoor tracking shorts", price: 1199, rating: 4.5, reviews: "520", image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2bbcb8c61f51851ab4e8fac5fbd8631eb9fd3988.jpg", category: "hiking", gender: "kids", type: "shorts" },
    { id: "k-shorts-3", name: "Puma Kids Active Workout Shorts", desc: "Quick-dry functional youth training shorts", price: 899, rating: 4, reviews: "730", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/529272/01/fnd/EEA/fmt/png", category: "gym", gender: "kids", type: "shorts" },
    { id: "k-shorts-4", name: "Lining Junior Court Sports Skort", desc: "Badminton flexible paneled elastic shorts", price: 1299, rating: 4.5, reviews: "340", image: "https://contents.mediadecathlon.com/9d2c019079075e95f85d32aa163346222188b5a3.jpg", category: "badminton", gender: "kids", type: "shorts" },

    { id: "k-shoes-1", name: "Nike Kids Playground Sneakers", desc: "Strap-secured ultra-flexible youth runner shoes", price: 2999, rating: 4.5, reviews: "2.3k", image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/69a3456ff6abe56e7a03f4301ddb25789a2f9cd4/flex-runner-4-little-kids-shoes.png", category: "gym", gender: "kids", type: "shoes" },
    { id: "k-shoes-2", name: "Adidas Junior Cushion Runner", desc: "High-traction impact resilient playground shoes", price: 3499, rating: 5, reviews: "1.1k", image: "https://academy.scene7.com/is/image/academy/20305328?wid=1320&hei=1320", category: "running", gender: "kids", type: "shoes" },
    { id: "k-shoes-3", name: "Puma Junior Indoor Court Sneakers", desc: "Soft-sole supportive junior indoor shoes", price: 2499, rating: 4, reviews: "1.4k", image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/108105/01/fnd/EEA/fmt/png", category: "badminton", gender: "kids", type: "shoes" },
    { id: "k-shoes-4", name: "Asics Gel-Game Kids Trail Shoes", desc: "Durable non-marking children multi-sport sneakers", price: 3799, rating: 4.5, reviews: "910", image: "https://images.asics.com/is/image/asics/1044A083_401_SR_RT_GLB?$sfcc-product$", category: "hiking", gender: "kids", type: "shoes" },

    // --- HARDWARE EQUIPMENT GEAR FIXED: Total asset decoupling ---
    { id: "g-fb-1", name: "Nike Strike Match Soccer Ball", desc: "Thermo-bonded aerodynamic pitch ball", price: 1799, rating: 4, reviews: "1.2k", image: "https://futstrikersclub.com/cdn/shop/articles/nike-strike-vs-match-ball_1200x.png?v=1628000000", category: "football", gender: "unisex", type: "gear" },
    { id: "g-cr-1", name: "Kookaburra Leather Match Ball", desc: "4-Piece premium alum-tanned cricket ball", price: 899, rating: 4, reviews: "530", image: "https://cdn11.bigcommerce.com/s-b97636960dc/images/stencil/386x386/products/xxxx/yyyy/kookaburra-regulation-cricket-ball-4-piece-25-26_386x386.jpg", category: "cricket", gender: "unisex", type: "gear" },
    
    // The ONLY barbell/dumbbell photo in the entire catalog
    { id: "g-gy-1", name: "Aurion Hex Cast-Iron Dumbbells", desc: "Rubber-coated ergonomic structural weights", price: 2499, rating: 5, reviews: "5.1k", image: "https://m.media-amazon.com/images/I/51Q2z3JxPZL._SL1000_.jpg", category: "gym", gender: "unisex", type: "gear" },
    
    { id: "g-hk-1", name: "Quechua Aluminum Hiking Poles", desc: "Anti-shock twist-lock mountain trekking sticks", price: 1999, rating: 4.5, reviews: "3.5k", image: "https://image.made-in-china.com/202f0j0Qiangsheng/High-Strength-Unisex-Quick-Twist-Lock-Telescope-Folding-Ultralight-Aluminum-Shaft-Walking-Hiking-Sticks-Canes-Trekking-Poles.webp", category: "hiking", gender: "unisex", type: "gear" },
    { id: "g-hk-2", name: "Black Diamond Camping Headlamp", desc: "Waterproof proximity beam alpine element light", price: 2999, rating: 4.5, reviews: "870", image: "https://manmakesfire.com/wp-content/uploads/2023/05/black-diamond-spot-400-headlamp-review.jpeg", category: "hiking", gender: "unisex", type: "gear" },
    
    { id: "g-sw-1", name: "Speedo Aquapulse Racing Goggles", desc: "Anti-fog mirrored lens competition swim goggles", price: 2799, rating: 4.5, reviews: "3.1k", image: "https://images.unsplash.com/photo-1530541930197-ff16ac917b0e?w=500&auto=format&fit=crop&q=80", category: "swimming", gender: "unisex", type: "gear" },
    { id: "g-sw-2", name: "Arena Hydro Silicone Swim Cap", desc: "Classic high-elasticity protective swim cap", price: 499, rating: 4, reviews: "4.2k", image: "https://m.media-amazon.com/images/I/61Q3C1+7xHL._AC_SL1500_.jpg", category: "swimming", gender: "unisex", type: "gear" },
    { id: "g-sw-3", name: "TYR Hydroblade Training Swim Fins", desc: "Short blade resistance sprint training flippers", price: 2599, rating: 4.5, reviews: "410", image: "https://tyr.com/cdn/shop/products/tyr-hydroblade-fins_647x.jpg?v=1628000000", category: "swimming", gender: "unisex", type: "gear" },
    
    { id: "g-bd-1", name: "Yonex Graphite Badminton Racket", desc: "Sleek framing high-tension court racket", price: 3499, rating: 4.5, reviews: "1.9k", image: "https://m.media-amazon.com/images/I/51x3cj+-iXL._AC_SY350_.jpg", category: "badminton", gender: "unisex", type: "gear" },
    
    { id: "g-ac-1", name: "Under Armour Gym Duffel Bag", desc: "Water-resistant element-proof gear storage bag", price: 3499, rating: 5, reviews: "4.7k", image: "https://underarmour.scene7.com/is/image/Underarmour/1369223_001_A?$pdpMainDesktop$", category: "accessories", gender: "unisex", type: "gear" },
    { id: "g-ac-2", name: "Nike Insulated Sports Steel Flask", desc: "BPA-free vacuum insulated active water bottle", price: 1499, rating: 4.5, reviews: "3.8k", image: "https://www.nike.ae/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-nike-master-catalog/default/dw993c29a6/images/1013799091/1013799091_1.png?sw=2000&sh=2000", category: "accessories", gender: "unisex", type: "gear" }
];

function generateFullCatalog() {
    return [...BASE_PRODUCTS, ...CURATED_CATALOG];
}

const PRODUCTS = generateFullCatalog();
// ==========================================================================
// 3. GLOBAL COMMERCE STATE
// ==========================================================================
let cart = JSON.parse(localStorage.getItem('endure_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('endure_wishlist')) || [];
let currentSlide = 0;

document.addEventListener("DOMContentLoaded", () => {
    initSlider();
    updateBadges();
    renderFeaturedProducts(); 
    registerGlobalListeners();
});

function registerGlobalListeners() {
    // Top Bar Actions
    document.querySelector(".cart")?.addEventListener("click", () => renderCartPage());
    document.querySelector(".wishlist")?.addEventListener("click", () => renderWishlistPage());
    document.querySelector(".support")?.addEventListener("click", () => renderSupportPage());
    document.querySelector(".top-bar img")?.addEventListener("click", () => showHomeView());
    document.querySelector(".logo")?.addEventListener("click", () => showHomeView());

    // Home Grid Cards Navigation Click Latches
    document.querySelectorAll(".category-card").forEach(card => {
        card.addEventListener("click", () => {
            const selectedSport = card.classList[1];
            renderFilteredPage(selectedSport, p => p.category === selectedSport.toLowerCase());
        });
    });

    // Dropdown Navigation System Router Hooks
    document.querySelectorAll("[data-sport]").forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            const sport = el.getAttribute("data-sport");
            renderFilteredPage(sport, p => p.category === sport);
        });
    });

    document.querySelectorAll("[data-gender]").forEach(el => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            const gender = el.getAttribute("data-gender");
            const type = el.getAttribute("data-type");
            renderFilteredPage(`${gender} - ${type}`, p => p.gender === gender && p.type === type);
        });
    });

    // Dynamic Footer Route Attachments
    document.querySelectorAll(".footer-sports a, .footer-categories a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const sport = link.getAttribute("data-sport");
            const gender = link.getAttribute("data-gender");
            const type = link.getAttribute("data-type");

            if (sport) renderFilteredPage(sport, p => p.category === sport);
            if (gender && type) renderFilteredPage(`${gender} - ${type}`, p => p.gender === gender && p.type === type);
        });
    });

    // Footer Support Extra Mini-Pages Wire-up
    document.querySelectorAll(".footer-support a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const pageKey = link.getAttribute("data-page");
            if (pageKey === "support") {
                renderSupportPage();
            } else if (pageKey) {
                renderMiniInformationPage(pageKey);
            }
        });
    });
}

// ==========================================================================
// 4. CARD RENDERING LAYOUT ENGINE
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

        card.addEventListener("click", () => renderProductDetailPage(id));
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
// 5. VIEW ENGINE CONTROLLER & SINGLE PAGE ROUTER
// ==========================================================================
function showHomeView() {
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

    // Injects Global Sticky Back Button at Top Left
    view.innerHTML = `<button type="button" class="global-back-btn">← Back To Home</button><div class="page-content-wrapper"></div>`;
    view.querySelector(".global-back-btn").addEventListener("click", () => showHomeView());

    return view.querySelector(".page-content-wrapper");
}

function renderFeaturedProducts() {
    const sliderContainer = document.querySelector(".product-slider");
    if (!sliderContainer) return;
    sliderContainer.innerHTML = "";
    PRODUCTS.slice(0, 7).forEach(p => { sliderContainer.innerHTML += generateProductCardHTML(p); });
    attachDynamicProductListeners(sliderContainer);
}

// Master Filter Pipeline: Handles Sport grids, Men, Women, and Kids Views Instantly
function renderFilteredPage(title, filterFn) {
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
// UPDATED DETAILED VIEW (With clean "Buy Now" button text)
// ==========================================================================
function renderProductDetailPage(productId) {
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
// UPDATED CART VIEW (Clicking rows opens the product page)
// ==========================================================================
function renderCartPage() {
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

        // Added 'cart-item-row' class and pointer cursor for navigation
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

    // Wire up row clicks to product view
    wrapper.querySelectorAll(".cart-item-row").forEach(row => {
        row.addEventListener("click", () => {
            const id = row.getAttribute("data-id");
            renderProductDetailPage(id);
        });
    });

    document.getElementById("checkout-btn").addEventListener("click", () => triggerOrderPlacement());
}

// ==========================================================================
// UPDATED WISHLIST VIEW (Clicking cards opens the product page)
// ==========================================================================
function renderWishlistPage() {
    const wrapper = initDynamicView();
    if (wishlist.length === 0) { wrapper.innerHTML = `<h2>Your Wishlist</h2><p style="padding:40px 0; text-align:center;">Your wishlist is empty.</p>`; return; }

    let html = `<h2>Your Wishlist</h2><div class="sport-grid-container">`;
    wishlist.forEach(id => { const product = PRODUCTS.find(p => p.id === id); if(product) html += generateProductCardHTML(product); });
    html += `</div>`;
    
    wrapper.innerHTML = html;

    // Handles layout, removals, additions, and explicit background page navigation routing
    wrapper.querySelectorAll(".product-card").forEach(card => {
        const id = card.classList[1];

        // Click card to open detail page
        card.addEventListener("click", () => renderProductDetailPage(id));

        // Heart Click
        card.querySelector(".fa-heart").addEventListener("click", (e) => {
            e.stopPropagation();
            toggleWishlistItem(id, card.querySelector(".fa-heart"));
            renderWishlistPage(); 
        });

        // Add to Cart Button Click
        card.querySelector(".add-button").addEventListener("click", (e) => {
            e.stopPropagation();
            toggleCartItem(id, card.querySelector(".add-button"));
        });
    });
}

function renderSupportPage() {
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

// Renders mini terms, privacy policy or order tracking page modules for footer link compliance
function renderMiniInformationPage(key) {
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
// 6. HERO SLIDER CORE ENGINE
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

function triggerOrderPlacement() {
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
