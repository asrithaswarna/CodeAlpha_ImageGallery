// ================================================================
// 📸 VisualVerse — Complete JavaScript (9/10)
// ================================================================

// ─── IMAGE DATA (your custom links, with unique IDs & EXIF) ────
// I've assigned sequential unique IDs and added placeholder EXIF.
// You can edit the exif objects to match your real data.
const imageData = [
    // Beaches (6 images)
    { id: 1, src: 'https://fastly.picsum.photos/id/50/4608/3072.jpg?hmac=E6WgCk6MBOyuRjW4bypT6y-tFXyWQfC_LjIBYPUspxE', title: 'Nature Edge', category: 'beaches', exif: { location: 'Coastal Region', camera: 'Canon EOS', date: '2024-06-01' } },
    { id: 2, src: 'https://fastly.picsum.photos/id/51/5000/3333.jpg?hmac=9dZb89mIRt-mPQpI_ScJAxVsNI82SFCGOuiKsvGSchY', title: 'Follow the Tide', category: 'beaches', exif: { location: 'Tropical Shore', camera: 'Nikon', date: '2024-07-15' } },
    { id: 3, src: 'https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s', title: 'Golden Escape', category: 'beaches', exif: { location: 'Sandy Bay', camera: 'Sony Alpha', date: '2024-08-20' } },
    { id: 4, src: 'https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o', title: 'Paradise Awaits', category: 'beaches', exif: { location: 'Island Paradise', camera: 'Fujifilm', date: '2024-09-10' } },
    { id: 5, src: 'https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE', title: 'Where Woods Meet Waves', category: 'beaches', exif: { location: 'Forest Coast', camera: 'Canon EOS R', date: '2024-10-05' } },
    { id: 6, src: 'https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI', title: 'Blue Beyond', category: 'beaches', exif: { location: 'Deep Blue', camera: 'Nikon Z', date: '2024-11-12' } },

    // Mountains (8 images)
    { id: 7, src: 'https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68', title: 'Reach Higher', category: 'mountains', exif: { location: 'Alpine Peaks', camera: 'Canon EOS', date: '2024-06-20' } },
    { id: 8, src: 'https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ', title: 'Misty Escape', category: 'mountains', exif: { location: 'Misty Range', camera: 'Sony Alpha', date: '2024-07-25' } },
    { id: 9, src: 'https://fastly.picsum.photos/id/29/4000/2670.jpg?hmac=rCbRAl24FzrSzwlR5tL-Aqzyu5tX_PA95VJtnUXegGU', title: 'Frozen Majesty', category: 'mountains', exif: { location: 'Snowy Summit', camera: 'Nikon', date: '2024-08-01' } },
    { id: 10, src: 'https://fastly.picsum.photos/id/54/3264/2176.jpg?hmac=blh020fMeJ5Ru0p-fmXUaOAeYnxpOPHnhJojpzPLN3g', title: 'Nature Haven', category: 'mountains', exif: { location: 'Green Valley', camera: 'Fujifilm', date: '2024-05-10' } },
    { id: 11, src: 'https://fastly.picsum.photos/id/62/2000/1333.jpg?hmac=PbFIn8k0AndjiUwpOJcfHz2h-wPCQi_vJRTJZPdr6kQ', title: 'Adventure Awaits', category: 'mountains', exif: { location: 'Rocky Trails', camera: 'Canon EOS R', date: '2024-09-15' } },
    { id: 12, src: 'https://fastly.picsum.photos/id/66/3264/2448.jpg?hmac=H9yvGug9-Lk5f-1qZqs6dEV-Yd40jFOIC7oudo4eBK4', title: 'Golden Glow', category: 'mountains', exif: { location: 'Sunrise Ridge', camera: 'Nikon Z', date: '2024-10-01' } },
    { id: 13, src: 'https://fastly.picsum.photos/id/67/2848/4288.jpg?hmac=X_Z0Wdd3HiJ8eWT0ohdmpRSIA6e6s265INUMuHA8MqA', title: 'Wild Serenity', category: 'mountains', exif: { location: 'Wilderness', camera: 'Sony Alpha', date: '2024-11-05' } },
    { id: 14, src: 'https://fastly.picsum.photos/id/79/2000/3011.jpg?hmac=TQsXWj0kLBLRXbSAh2Pygog1-cOefqpjEoKyl0uD3tg', title: 'Mirror Nature', category: 'mountains', exif: { location: 'Lake View', camera: 'Fujifilm', date: '2024-12-10' } },

    // Cities (8 images)
    { id: 15, src: 'https://fastly.picsum.photos/id/84/1280/848.jpg?hmac=YFRYDI4UsfbeTzI8ZakNOR98wVU7a-9a2tGF542539s', title: 'Above It All', category: 'cities', exif: { location: 'Skyline', camera: 'Canon EOS', date: '2024-06-10' } },
    { id: 16, src: 'https://fastly.picsum.photos/id/88/1280/1707.jpg?hmac=NnkwPVDBTVxHkc4rALB_fyu-OHY2usdm7iRk5El7JC4', title: 'City Never Sleeps', category: 'cities', exif: { location: 'Neon District', camera: 'Sony Alpha', date: '2024-07-20' } },
    { id: 17, src: 'https://fastly.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8', title: 'Life in Motion', category: 'cities', exif: { location: 'Downtown', camera: 'Nikon', date: '2024-08-15' } },
    { id: 18, src: 'https://fastly.picsum.photos/id/61/3264/2448.jpg?hmac=Xi3Kq99U5tueFi0aajgUP0yWAL4xwCHg5ZXGZRLTqyI', title: 'Connecting Dreams', category: 'cities', exif: { location: 'Bridge Area', camera: 'Fujifilm', date: '2024-05-25' } },
    { id: 19, src: 'https://fastly.picsum.photos/id/43/1280/831.jpg?hmac=glK-rQ0ppFClW-lvjk9FqEWKog07XkOxJf6Xg_cU9LI', title: 'Lights.Life.Energy', category: 'cities', exif: { location: 'City Lights', camera: 'Canon EOS R', date: '2024-09-10' } },
    { id: 20, src: 'https://fastly.picsum.photos/id/57/2448/3264.jpg?hmac=ewraXYesC6HuSEAJsg3Q80bXd1GyJTxekI05Xt9YjfQ', title: 'The Best View', category: 'cities', exif: { location: 'Rooftop', camera: 'Nikon Z', date: '2024-10-20' } },
    { id: 21, src: 'https://fastly.picsum.photos/id/22/4434/3729.jpg?hmac=fjZdkSMZJNFgsoDh8Qo5zdA_nSGUAWvKLyyqmEt2xs0', title: 'Pulse of Progress', category: 'cities', exif: { location: 'Business District', camera: 'Sony Alpha', date: '2024-11-01' } },
    { id: 22, src: 'https://fastly.picsum.photos/id/69/4912/3264.jpg?hmac=Q08LW3SoOxPfaE-y8-braexxvm5PESXMCdEDqFbEhQ8', title: 'Future in Focus', category: 'cities', exif: { location: 'Modern Architecture', camera: 'Fujifilm', date: '2024-12-05' } },

    // Historical (8 images)
    { id: 23, src: 'https://fastly.picsum.photos/id/78/1584/2376.jpg?hmac=80UVSwpa9Nfcq7sQ5kxb9Z5sD2oLsbd5zkFO5ybMC4E', title: 'Gateway to History', category: 'historical', exif: { location: 'Ancient Gateway', camera: 'Canon EOS', date: '2024-06-01' } },
    { id: 24, src: 'https://fastly.picsum.photos/id/91/3504/2336.jpg?hmac=tK6z7RReLgUlCuf4flDKeg57o6CUAbgklgLsGL0UowU', title: 'Faith Through Time', category: 'historical', exif: { location: 'Cathedral', camera: 'Nikon', date: '2024-07-10' } },
    { id: 25, src: 'https://fastly.picsum.photos/id/99/4912/3264.jpg?hmac=jobkGP8_9Sch9BmMGe3xmm8yjCVQ3iSHrbu_4kOOciY', title: 'Silent Protector', category: 'historical', exif: { location: 'Stone Guardian', camera: 'Sony Alpha', date: '2024-08-05' } },
    { id: 26, src: 'https://fastly.picsum.photos/id/111/4400/2656.jpg?hmac=leq8lj40D6cqFq5M_NLXkMYtV-30TtOOnzklhjPaAAQ', title: 'Echoes of Eternity', category: 'historical', exif: { location: 'Temple', camera: 'Fujifilm', date: '2024-05-15' } },
    { id: 27, src: 'https://fastly.picsum.photos/id/122/4147/2756.jpg?hmac=-B_1uAvYufznhjeA9xSSAJjqt07XrVzDWCf5VDNX0pQ', title: 'Where Legends Gathered', category: 'historical', exif: { location: 'Roman Amphitheater', camera: 'Canon EOS R', date: '2024-09-01' } },
    { id: 28, src: 'https://fastly.picsum.photos/id/133/2742/1828.jpg?hmac=0X5o8bHUICkOIvZHtykCRL50Bjn1N8w1AvkenF7n93E', title: 'Pillars of Time', category: 'historical', exif: { location: 'Columns', camera: 'Nikon Z', date: '2024-10-10' } },
    { id: 29, src: 'https://fastly.picsum.photos/id/134/4928/3264.jpg?hmac=IcPmWTNClVqLcr7PpqBrfOAvgmJbqw0Z8jZvmsCrC-c', title: 'Beauty Preserved', category: 'historical', exif: { location: 'Ancient Art', camera: 'Sony Alpha', date: '2024-11-20' } },

    // Waterfalls (8 images)
    { id: 30, src: 'https://fastly.picsum.photos/id/969/600/400.jpg?hmac=b1qM4NST-I8onupY3rNa3y8wHP_jknRxCefHVD4gOQE', title: 'Where Clarity Flows', category: 'waterfalls', exif: { location: 'Crystal Falls', camera: 'Canon EOS', date: '2024-06-25' } },
    { id: 31, src: 'https://fastly.picsum.photos/id/147/2448/2448.jpg?hmac=Xk6y7EeyG6VQTac1N9IhDAwLVNVeCn_KBN4nO5SRxPw', title: 'Hidden Wonder', category: 'waterfalls', exif: { location: 'Secret Cascade', camera: 'Nikon', date: '2024-07-30' } },
    { id: 32, src: 'https://fastly.picsum.photos/id/124/3504/2336.jpg?hmac=B1Avp6or9Df8vpnN4kQsGNfD66j8hH3gLtootCoTw4M', title: 'Misty Magic', category: 'waterfalls', exif: { location: 'Misty Falls', camera: 'Sony Alpha', date: '2024-08-20' } },
    { id: 33, src: 'https://fastly.picsum.photos/id/125/1500/1000.jpg?hmac=s6pniw6JFp6F753Ow9mnVAVqt8tOcP8ZlZE5-aJ22co', title: 'Forest Escape', category: 'waterfalls', exif: { location: 'Forest Stream', camera: 'Fujifilm', date: '2024-05-30' } },
    { id: 34, src: 'https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA', title: 'Wild Roar', category: 'waterfalls', exif: { location: 'Thunder Falls', camera: 'Canon EOS R', date: '2024-09-15' } },
    { id: 35, src: 'https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4', title: 'Tropical Bliss', category: 'waterfalls', exif: { location: 'Tropical Drop', camera: 'Nikon Z', date: '2024-10-25' } },
    { id: 36, src: 'https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ', title: 'Mountain Flow', category: 'waterfalls', exif: { location: 'Alpine Stream', camera: 'Sony Alpha', date: '2024-11-10' } },
    { id: 37, src: 'https://fastly.picsum.photos/id/55/4608/3072.jpg?hmac=ahGhylwdN52ULB37deeMZX6T_G7NiERtoPhwydMvUKQ', title: 'Silent Serenity', category: 'waterfalls', exif: { location: 'Quiet Waters', camera: 'Fujifilm', date: '2024-12-20' } },

    // Wildlife (8 images)
    { id: 38, src: 'https://fastly.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc', title: 'Majestic Eagle', category: 'wildlife', exif: { location: 'Sky Hunter', camera: 'Canon EOS', date: '2024-06-05' } },
    { id: 39, src: 'https://fastly.picsum.photos/id/130/3807/2538.jpg?hmac=Kl_ZLgNPUBhsKnffomgQvxWA17JhdNLYBnwlPHBEias', title: 'Forest Deer', category: 'wildlife', exif: { location: 'Woodland', camera: 'Nikon', date: '2024-07-12' } },
    { id: 40, src: 'https://fastly.picsum.photos/id/169/2500/1662.jpg?hmac=3DBeyQbiPxO88hBdhIuFPbvy2ff7cm9vmnq8lPIL9Ug', title: 'Curious Fox', category: 'wildlife', exif: { location: 'Meadow', camera: 'Sony Alpha', date: '2024-08-08' } },
    { id: 41, src: 'https://fastly.picsum.photos/id/200/1920/1280.jpg?hmac=-eKjMC8-UrbLMpy1A4OWrK0feVPB3Ka5KNOGibQzpRU', title: 'Ocean Dolphin', category: 'wildlife', exif: { location: 'Marine', camera: 'Fujifilm', date: '2024-05-20' } },
    { id: 42, src: 'https://fastly.picsum.photos/id/219/5000/3333.jpg?hmac=nQIYAD6CmzCXEG3xtEckzbu3iauIE3DpHiqnQy3gdG4', title: 'Jungle Parrot', category: 'wildlife', exif: { location: 'Rainforest', camera: 'Canon EOS R', date: '2024-09-05' } },
    { id: 43, src: 'https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI', title: 'Savannah Lion', category: 'wildlife', exif: { location: 'Savannah', camera: 'Nikon Z', date: '2024-10-15' } },
    { id: 44, src: 'https://fastly.picsum.photos/id/244/4288/2848.jpg?hmac=R6j9PBP4aBk2vcEIoOPU4R_nuknizryn2Vq8GGtWTrM', title: 'Brown Bear', category: 'wildlife', exif: { location: 'Forest', camera: 'Sony Alpha', date: '2024-11-25' } },
    { id: 45, src: 'https://fastly.picsum.photos/id/275/4288/2848.jpg?hmac=DHPZUN0qLc6KRiIP21_mfYCi-BxH9JKNYPPJRhG8t40', title: 'Wings of Wonder', category: 'wildlife', exif: { location: 'Butterfly Garden', camera: 'Fujifilm', date: '2024-12-25' } }
];

// ─── CATEGORY INFO ──────────────────────────────────────────────
const categoryInfo = {
    beaches: { name: 'Beaches', icon: '🏖️', desc: 'Sun, sand, and serene shores' },
    mountains: { name: 'Mountains', icon: '🏔️', desc: 'Majestic peaks and alpine views' },
    cities: { name: 'Cities', icon: '🌆', desc: 'Urban landscapes and vibrant life' },
    historical: { name: 'Historical', icon: '🏛️', desc: 'Ancient ruins and timeless architecture' },
    waterfalls: { name: 'Waterfalls', icon: '💧', desc: 'Thundering cascades and serene drops' },
    wildlife: { name: 'Wildlife', icon: '🐾', desc: 'Animals in their natural habitats' }
};

// ─── PAGINATION SETTINGS ──────────────────────────────────────
const ITEMS_PER_PAGE = 12;
let currentPage = 1;
let allFilteredImages = [];
let isLoading = false;

// ─── LIGHTBOX STATE ──────────────────────────────────────────────
let lightboxImages = [];
let lightboxIndex = 0;

// ─── LOADING SPINNER ──────────────────────────────────────────────
function showLoading(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    // Remove existing spinner if any
    const existing = document.getElementById('loadingSpinner');
    if (existing) existing.remove();
    const spinner = document.createElement('div');
    spinner.id = 'loadingSpinner';
    spinner.style.cssText = 'grid-column:1/-1; display:flex; justify-content:center; align-items:center; padding:40px;';
    spinner.innerHTML = `<div style="width:50px; height:50px; border:4px solid #e0e0e0; border-top-color:#6c63ff; border-radius:50%; animation:spin 0.8s linear infinite;"></div>`;
    container.prepend(spinner);
}

function hideLoading(containerId) {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) spinner.remove();
}

// ─── GET CATEGORY FROM URL ──────────────────────────────────────
function getCategoryFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('cat');
}

// ─── RENDER CATEGORY PAGE ──────────────────────────────────────
function renderCategoryPage() {
    const cat = getCategoryFromURL() || 'beaches';
    const info = categoryInfo[cat];
    if (!info) return;

    document.title = `${info.icon} ${info.name} · VisualVerse`;
    const titleEl = document.getElementById('categoryTitle');
    const descEl = document.getElementById('categoryDesc');
    if (titleEl) titleEl.innerHTML = `${info.icon} ${info.name}`;
    if (descEl) descEl.textContent = info.desc;

    renderCategoryGallery(cat, 'categoryGrid');
}

// ─── RENDER CATEGORY GALLERY ────────────────────────────────────
function renderCategoryGallery(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const filtered = imageData.filter(img => img.category === category);
    lightboxImages = filtered;

    container.innerHTML = filtered.map((img, index) => `
        <div class="grid-item" data-index="${index}" data-id="${img.id}">
            <img src="${img.src}" alt="${img.title}" loading="lazy" />
            <div class="info">
                <h4>${img.title}</h4>
                <span>${categoryInfo[img.category]?.name || img.category}</span>
                <div class="exif-tags">
                    <span>📍 ${img.exif?.location || 'Unknown'}</span>
                    <span>📷 ${img.exif?.camera || 'Unknown'}</span>
                </div>
            </div>
        </div>
    `).join('');

    container.querySelectorAll('.grid-item').forEach(item => {
        item.addEventListener('click', function() {
            const idx = parseInt(this.dataset.index);
            openLightbox(idx);
        });
    });
}

// ─── RENDER MAIN GALLERY (with pagination) ──────────────────────
function renderGallery(filter = 'all', containerId = 'galleryGrid', page = 1) {
    const container = document.getElementById(containerId);
    if (!container) return;

    showLoading(containerId);

    setTimeout(() => {
        const filtered = filter === 'all' ? imageData : imageData.filter(img => img.category === filter);
        allFilteredImages = filtered;
        currentPage = page;

        const start = (page - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const paginated = filtered.slice(0, end);

        lightboxImages = paginated;

        container.innerHTML = paginated.map((img, index) => `
            <div class="grid-item" data-index="${index}" data-id="${img.id}">
                <img src="${img.src}" alt="${img.title}" loading="lazy" />
                <div class="info">
                    <h4>${img.title}</h4>
                    <span>${categoryInfo[img.category]?.name || img.category}</span>
                    <div class="exif-tags">
                        <span>📍 ${img.exif?.location || 'Unknown'}</span>
                        <span>📷 ${img.exif?.camera || 'Unknown'}</span>
                    </div>
                </div>
            </div>
        `).join('');

        // Add load more button if needed
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            if (end >= filtered.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-block';
            }
        }

        container.querySelectorAll('.grid-item').forEach(item => {
            item.addEventListener('click', function() {
                const idx = parseInt(this.dataset.index);
                openLightbox(idx);
            });
        });

        hideLoading(containerId);
    }, 300);
}

// ─── LOAD MORE (Pagination) ──────────────────────────────────────
function loadMore() {
    const container = document.getElementById('galleryGrid');
    if (!container || isLoading) return;

    isLoading = true;
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) loadMoreBtn.textContent = 'Loading...';

    setTimeout(() => {
        currentPage++;
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const paginated = allFilteredImages.slice(0, end);

        lightboxImages = paginated;

        // Re-render all images
        container.innerHTML = paginated.map((img, index) => `
            <div class="grid-item" data-index="${index}" data-id="${img.id}">
                <img src="${img.src}" alt="${img.title}" loading="lazy" />
                <div class="info">
                    <h4>${img.title}</h4>
                    <span>${categoryInfo[img.category]?.name || img.category}</span>
                    <div class="exif-tags">
                        <span>📍 ${img.exif?.location || 'Unknown'}</span>
                        <span>📷 ${img.exif?.camera || 'Unknown'}</span>
                    </div>
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.grid-item').forEach(item => {
            item.addEventListener('click', function() {
                const idx = parseInt(this.dataset.index);
                openLightbox(idx);
            });
        });

        if (loadMoreBtn) {
            if (end >= allFilteredImages.length) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.textContent = 'Load More';
            }
        }

        isLoading = false;
    }, 400);
}

// ─── LIGHTBOX FUNCTIONS ──────────────────────────────────────
function openLightbox(index) {
    if (!lightboxImages.length || index < 0 || index >= lightboxImages.length) return;
    lightboxIndex = index;
    const img = lightboxImages[index];

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const lightboxExif = document.getElementById('lightboxExif');

    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = img.src;
    lightboxImg.alt = img.title;
    if (lightboxTitle) lightboxTitle.textContent = img.title;
    if (lightboxCategory) {
        lightboxCategory.textContent = categoryInfo[img.category]?.name || img.category;
    }
    if (lightboxExif) {
        lightboxExif.textContent = `📍 ${img.exif?.location || 'Unknown'}  •  📷 ${img.exif?.camera || 'Unknown'}  •  📅 ${img.exif?.date || 'Unknown'}`;
    }

    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    updateLightboxNav();
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('open');
    document.body.style.overflow = '';
}

function navigateLightbox(delta) {
    const newIndex = lightboxIndex + delta;
    if (newIndex < 0 || newIndex >= lightboxImages.length) return;
    openLightbox(newIndex);
}

function updateLightboxNav() {
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    if (prevBtn) prevBtn.style.display = lightboxIndex > 0 ? 'flex' : 'none';
    if (nextBtn) nextBtn.style.display = lightboxIndex < lightboxImages.length - 1 ? 'flex' : 'none';
}

// ─── INIT LIGHTBOX ──────────────────────────────────────────────
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === this) closeLightbox();
    });
    if (prevBtn) prevBtn.addEventListener('click', e => { e.stopPropagation(); navigateLightbox(-1); });
    if (nextBtn) nextBtn.addEventListener('click', e => { e.stopPropagation(); navigateLightbox(1); });

    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
}

// ─── SEARCH FILTER (FIXED) ──────────────────────────────────────
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) {
        console.warn('Search input not found');
        return;
    }

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        const container = document.getElementById('galleryGrid');
        if (!container) return;

        // Reset pagination
        currentPage = 1;

        // Filter by title AND category name
        const filtered = imageData.filter(img => 
            img.title.toLowerCase().includes(query) ||
            (categoryInfo[img.category]?.name || '').toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            container.innerHTML = `
                <div style="grid-column:1/-1; text-align:center; padding:40px 20px; color:#7a7a9a;">
                    <div style="font-size:3rem; margin-bottom:12px;">🔍</div>
                    <p style="font-size:1.1rem;">No images found matching "<strong>${query}</strong>".</p>
                    <p style="font-size:0.9rem; margin-top:8px;">Try a different search term.</p>
                </div>
            `;
            const loadMoreBtn = document.getElementById('loadMoreBtn');
            if (loadMoreBtn) loadMoreBtn.style.display = 'none';
            return;
        }

        allFilteredImages = filtered;
        lightboxImages = filtered.slice(0, ITEMS_PER_PAGE);

        const paginated = filtered.slice(0, ITEMS_PER_PAGE);
        container.innerHTML = paginated.map((img, index) => `
            <div class="grid-item" data-index="${index}" data-id="${img.id}">
                <img src="${img.src}" alt="${img.title}" loading="lazy" />
                <div class="info">
                    <h4>${img.title}</h4>
                    <span>${categoryInfo[img.category]?.name || img.category}</span>
                    <div class="exif-tags">
                        <span>📍 ${img.exif?.location || 'Unknown'}</span>
                        <span>📷 ${img.exif?.camera || 'Unknown'}</span>
                    </div>
                </div>
            </div>
        `).join('');

        container.querySelectorAll('.grid-item').forEach(item => {
            item.addEventListener('click', function() {
                const idx = parseInt(this.dataset.index);
                openLightbox(idx);
            });
        });

        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            if (filtered.length <= ITEMS_PER_PAGE) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'inline-block';
                loadMoreBtn.textContent = 'Load More';
            }
        }
    });
}

// ─── CONTACT FORM ──────────────────────────────────────────────
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const feedback = document.getElementById('formFeedback');

        if (!name || !email || !message) {
            feedback.textContent = 'Please fill in all fields.';
            feedback.style.color = '#d32f2f';
            return;
        }
        if (!email.includes('@') || !email.includes('.')) {
            feedback.textContent = 'Please enter a valid email address.';
            feedback.style.color = '#d32f2f';
            return;
        }

        feedback.textContent = `Thank you, ${name}! Your message has been sent.`;
        feedback.style.color = '#2e7d32';
        form.reset();
        setTimeout(() => { feedback.textContent = ''; }, 5000);
    });
}

// ─── MOBILE HAMBURGER MENU ──────────────────────────────────────
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', function() {
        this.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Close menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

    // Close menu on outside click
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        }
    });
}

// ─── HEADER SCROLL SHADOW ──────────────────────────────────────
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    window.addEventListener('scroll', function() {
        header.classList.toggle('scrolled', window.scrollY > 20);
    });
}

// ─── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu
    initMobileMenu();

    // Header scroll
    initHeaderScroll();

    // Category page (category.html)
    if (document.getElementById('categoryTitle')) {
        renderCategoryPage();
    }

    // Main gallery page (gallery.html)
    if (document.getElementById('galleryGrid')) {
        renderGallery('all');
        initSearch();

        // Load more button
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', loadMore);
        }
    }

    // Contact form
    initContactForm();

    // Lightbox
    initLightbox();

    console.log('✅ VisualVerse loaded with', imageData.length, 'images');
});

// ─── EXPORT for tests ──────────────────────────────────────────
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        imageData,
        categoryInfo,
        getCategoryFromURL,
        renderCategoryGallery,
        renderGallery,
        openLightbox,
        closeLightbox,
        navigateLightbox,
        initLightbox,
        initContactForm,
        initSearch,
        loadMore,
        ITEMS_PER_PAGE
    };
}