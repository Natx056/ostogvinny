document.addEventListener("DOMContentLoaded", () => {
  // ===== DATA =====
  const PAIRINGS = {
    "Cabernet Sauvignon": [
      { name: "Aged Cheddar", note: "Bold tanniner og kraftig smag matcher skarp cheddar.", img: "https://www.keystonefarmscheese.com/cdn/shop/files/Cheddar-White3.jpg?v=1712088283&width=1080" },
      { name: "Aged Gouda", note: "Karamel og nøddeagtige noter spiller godt sammen.", img: "https://www.davidlebovitz.com/wp-content/uploads/2012/11/8199399678_3ac1a17b9a-1.jpg" },
      { name: "Manchego", note: "Fast tekstur der passer vinens struktur.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNCAGP4-IfA3LRquXDC9QhPf7SHpKEiXixA&s" },
    ],
    "Pinot Noir": [
      { name: "Brie", note: "Blød og cremet ost til Pinot Noirs lethed.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLPp7bEaP19kB7vtsGUmWLO7Y05iw65EXug&s" },
      { name: "Gruyère", note: "Nøddeagtig og aromatisk – perfekt match.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsC04NyjJod8DDR3Gf5rpAfghZ4aqKk5s8rg&s" },
      { name: "Camembert", note: "Mild, blød og god balance til rødfrugt.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_MB_hxJ9dVEXIa2YQ8r3933ve4lU62G4WLA&s" },
    ],
    Merlot: [
      { name: "Fontina", note: "Mild og cremet, matcher Merlot flot.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmi6yBufXQNUvPBiAPVqqNf6MXyqBPcznINQ&s" },
      { name: "Tomme de Savoie", note: "Let jordet smag der balancerer vinen.", img: "https://shop74084.sfstatic.io/upload_dir/shop/_thumbs/2024-01-17-13-16-59-429.w610.h610.backdrop.jpg" },
      { name: "Comté", note: "Kompleks smag der kan følge med Merlot.", img: "https://provisionslondon.co.uk/cdn/shop/products/provisions_london_comte_18_cover_08ed78fe-8155-4381-b900-93d9f08a20d7.jpg?v=1744626522" },
    ],
    Chardonnay: [
      { name: "Brie", note: "Buttery + buttery = perfekt.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLPp7bEaP19kB7vtsGUmWLO7Y05iw65EXug&s" },
      { name: "Triple-cream", note: "Cremet luksus til fyldig Chardonnay.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_2sSzXcYsiS6YMgzS9mTsuWD_zaHGjTuog&s" },
      { name: "Comté", note: "Aromatisk og elegant parring.", img: "https://provisionslondon.co.uk/cdn/shop/products/provisions_london_comte_18_cover_08ed78fe-8155-4381-b900-93d9f08a20d7.jpg?v=1744626522" },
    ],
    "Sauvignon Blanc": [
      {
        name: "Chèvre (ged)",
        note: "Syre + friskhed = klassisk match.",
        img: "https://cdn.castellocheese.com/498cf1/globalassets/world-of-cheese/cheese-type-images/square/cheese-type-white-mould-goat.jpg?width=680&height=624&mode=crop&format=webp",
      },
      { name: "Feta", note: "Salt + citrus = oplivende kontrast.", img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Feta_Greece_2.jpg" },
      { name: "Young Pecorino", note: "Let saltet og urtet – perfekt harmoni.", img: "https://e74kjowcjem.exactdn.com/wp-content/uploads/2023/02/MG_9785.jpg?strip=all" },
    ],
    Riesling: [
      { name: "Mild Gorgonzola", note: "Sødme + blue cheese fungerer overraskende godt.", img: "https://lafromagerie.co.uk/cdn/shop/products/Italy_Cow_Gorgonzola_Naturale_1600x.jpg?v=1650976509" },
      { name: "Munster", note: "Pikant, men Riesling afbalancerer det.", img: "https://checkout.eriksorensenvin.dk/wp-content/uploads/2022/04/Munsterost.jpg" },
      { name: "Ricotta salata", note: "Let og salt, holder parringen frisk.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWNh3owUemEqQ9sVpS5cuhdJzzajmiKsuvw&s" },
    ],
    "Syrah / Shiraz": [
      { name: "Blue Cheese", note: "Kraftige smage møder kraftig vin.", img: "https://cdn.castellocheese.com/498cf1/globalassets/world-of-cheese/cheese-type-images/square/cheese-type-roquefort.jpg?width=660&height=494&mode=min&format=webp" },
      { name: "Aged Pecorino", note: "Salt + peberede noter fra Syrah.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ26SsJwNkz61M6BSPH4tuVIFnYzEh7l9mr7w&s" },
      { name: "Smoked Gouda", note: "Røg og mørke krydderier går hånd i hånd.", img: "https://www.goudaostshop.dk/pub/media/catalog/product/cache/e49b825e2097b82b7746eb40be207ecb/b/o/boerenrookkaas_6.jpg" },
    ],
    Champagne: [
      { name: "Triple-cream", note: "Bobler + fedme = luksus.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_2sSzXcYsiS6YMgzS9mTsuWD_zaHGjTuog&s" },
      { name: "Parmesan", note: "Umami og salt får boblerne til at skinne.", img: "https://supermarco.dk/wp-content/uploads/2023/10/AdobeStock_211512661-scaled.jpeg" },
      { name: "Brie", note: "Let og festligt match.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoLPp7bEaP19kB7vtsGUmWLO7Y05iw65EXug&s" },
    ],
    Rosé: [
      { name: "Feta", note: "Salt og friskhed arbejder flot sammen.", img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Feta_Greece_2.jpg" },
      { name: "Burrata", note: "Sommerlig, cremet og mild.", img: "https://cdn.castellocheese.com/498cf1/globalassets/world-of-cheese/cheese-type-images/square/cheese-type-burrata.jpg?width=375&height=530&mode=crop&format=webp" },
      { name: "Manchego", note: "Passer godt til frugtdomineret rosé.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeNCAGP4-IfA3LRquXDC9QhPf7SHpKEiXixA&s" },
    ],
    Zinfandel: [
      { name: "Aged Cheddar", note: "Skarp ost til kraftig, frugtig vin.", img: "https://www.keystonefarmscheese.com/cdn/shop/files/Cheddar-White3.jpg?v=1712088283&width=1080" },
      { name: "Smoked Gouda", note: "Røg + mørk frugt = perfekt.", img: "https://www.goudaostshop.dk/pub/media/catalog/product/cache/e49b825e2097b82b7746eb40be207ecb/b/o/boerenrookkaas_6.jpg" },
      { name: "Pecorino Romano", note: "Salt og intensitet matcher Zinfandel.", img: "https://www.parmashop.com/cdn/shop/files/7651.webp?v=1743691260&width=1200" },
    ],
  };

  // ===== DOM =====
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const wineSelect = document.getElementById("wineSelect");
  const cheeseBox = document.getElementById("cheeseBox");
  const clearBtn = document.getElementById("clearBtn");

  // Helper: safe key match
  function findPairKey(value) {
    if (!value) return null;
    const v = value.trim();
    if (PAIRINGS.hasOwnProperty(v)) return v;
    const lower = v.toLowerCase();
    const exact = Object.keys(PAIRINGS).find((k) => k.toLowerCase() === lower);
    if (exact) return exact;
    const partial = Object.keys(PAIRINGS).find((k) => k.toLowerCase().includes(lower) || lower.includes(k.toLowerCase()));
    return partial || null;
  }

  // Render cheeses
  function renderForWine(value) {
    console.log("[renderForWine] requested for:", value);
    const key = findPairKey(value);
    if (!key) {
      cheeseBox.innerHTML = `<p>Ingen forslag fundet for \"${value}\".</p>`;
      cheeseBox.style.display = "block";
      console.warn("Ingen key fundet for:", value);
      return;
    }
    const arr = PAIRINGS[key];
    if (!arr || !arr.length) {
      cheeseBox.innerHTML = `<p>Der er ingen osteforslag for \"${key}\" i data.</p>`;
      cheeseBox.style.display = "block";
      console.warn("Ingen cheeses for key:", key);
      return;
    }

    cheeseBox.innerHTML =
      `<h3>Foreslåede oste til ${key}</h3>` +
      arr
        .map((c) => {
          // fallback image (svg data URI) hvis c.img falsy
          const imgUrl =
            c.img ||
            `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'><rect width='100%' height='100%' fill='%23e6e6e6'/><text x='50%' y='55%' dominant-baseline='middle' text-anchor='middle' font-size='10' fill='%23666'>No image</text></svg>`;
          return `
        <div class="cheese-item">
          <img class="thumb" src="${imgUrl}" alt="${escapeHtml(c.name)}" />
          <div class="meta">
            <div class="name">${escapeHtml(c.name)}</div>
            <div class="note">${escapeHtml(c.note)}</div>
          </div>
        </div>
      `;
        })
        .join("");
    cheeseBox.style.display = "block";
  }

  // Escape helper to avoid nasty markup if values contain <>&
  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  const WINES = {
    "Cabernet Sauvignon": "imgvin/carbernet_result.jpg",
    "Pinot Noir": "imgvin/pinotnoir_result.jpg",
    Merlot: "imgvin/merlot_result.jpg",
    Chardonnay: "imgvin/chardonnay.webp",
    "Sauvignon Blanc": "imgvin/sauvignon_blanc.png_result.jpg",
    Riesling: "imgvin/riesling.png_result.jpg",
    "Syrah / Shiraz": "imgvin/syrah-shiraz-2012-distrikt-somontano-druesort-enate-land-spanien-omrade-spansk-rodvin-vin-emil-vinklubben-913_1080x.jpg_result.jpg",
    Champagne: "imgvin/champagne.png_result.jpg",
    Rosé: "imgvin/rose_result.jpg",
    Zinfandel: "imgvin/zinfandel.jpeg_result.jpg",
  };

  // Populate search results under the search input
  function showSearchMatches(q) {
    if (!q) {
      searchResults.style.display = "none";
      searchResults.innerHTML = "";
      return;
    }
    const ql = q.trim().toLowerCase();
    const matches = Object.keys(PAIRINGS).filter((k) => k.toLowerCase().includes(ql));
    if (!matches.length) {
      searchResults.style.display = "none";
      searchResults.innerHTML = "";
      return;
    }

    searchResults.innerHTML = matches
      .map((k) => {
        const img =
          WINES[k] ||
          `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'
        width='48' height='48'><rect width='100%' height='100%' fill='%23e6e6e6'/></svg>`;

        return `
        <div class="search-item" data-wine="${encodeURIComponent(k)}">
          <img src="${img}" class="thumb" alt="${escapeHtml(k)}" />
          <div>${escapeHtml(k)}</div>
        </div>`;
      })
      .join("");

    searchResults.style.display = "block";
  }

  // Event handlers
  searchInput.addEventListener("input", (e) => {
    const q = e.target.value;
    showSearchMatches(q);
  });

  searchResults.addEventListener("click", (ev) => {
    const item = ev.target.closest(".search-item");
    if (!item) return;
    const wine = decodeURIComponent(item.getAttribute("data-wine"));
    console.log("search clicked:", wine);
    // fill both search input and select for clarity
    searchInput.value = wine;
    wineSelect.value = wine; // will set matching option if exact
    searchResults.style.display = "none";
    renderForWine(wine);
  });

  wineSelect.addEventListener("change", (e) => {
    const wine = e.target.value;
    console.log("select changed:", wine);
    // clear search input when selecting from list (optional)
    searchInput.value = wine;
    renderForWine(wine);
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    wineSelect.value = "";
    searchResults.style.display = "none";
    cheeseBox.style.display = "none";
  });

  // Helpful console dump to verify keys
  console.log("PAIRINGS keys:", Object.keys(PAIRINGS));
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("track");
  const slides = Array.from(track.children);
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const dotsContainer = document.getElementById("dots");

  let index = 0;

  // lav dots
  slides.forEach((_, i) => {
    const d = document.createElement("button");
    d.className = "dot";
    d.setAttribute("aria-label", "Gå til slide " + (i + 1));
    d.addEventListener("click", () => {
      index = i;
      update();
    });
    dotsContainer.appendChild(d);
  });

  const dots = Array.from(dotsContainer.children);

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
  }

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    update();
  });

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    update();
  });

  // keyboard navigation
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "ArrowLeft") prevBtn.click();
    if (ev.key === "ArrowRight") nextBtn.click();
  });

  // enkel touch/swipe support
  let startX = null;
  track.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true }
  );

  track.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const endX = (e.changedTouches && e.changedTouches[0].clientX) || startX;
    const dx = endX - startX;
    if (Math.abs(dx) > 30) {
      if (dx > 0) prevBtn.click();
      else nextBtn.click();
    }
    startX = null;
  });

  // initial update
  update();

  // Debughjælp hvis knapper stadig ikke virker:
  // Åbn devtools og kør: document.elementFromPoint(x,y) for at se hvilket element der ligger øverst
});
