document.addEventListener("DOMContentLoaded", () => {
  // ===== DATA =====
  const PAIRINGS = {
    "Cabernet Sauvignon": [
      { name: "Aged Cheddar", note: "Bold tanniner og kraftig smag matcher skarp cheddar.", img: "https://images.unsplash.com/photo-1603048297172-c92544798e8c?q=80&w=400" },
      { name: "Aged Gouda", note: "Karamel og nøddeagtige noter spiller godt sammen.", img: "https://images.unsplash.com/photo-1615486364547-14fb9a2adb66?q=80&w=400" },
      { name: "Manchego", note: "Fast tekstur der passer vinens struktur.", img: "https://images.unsplash.com/photo-1603894584373-5ac82b8f8b30?q=80&w=400" },
    ],
    "Pinot Noir": [
      { name: "Brie", note: "Blød og cremet ost til Pinot Noirs lethed.", img: "https://images.unsplash.com/photo-1608032077018-b37da4a0aeba?q=80&w=400" },
      { name: "Gruyère", note: "Nøddeagtig og aromatisk – perfekt match.", img: "https://images.unsplash.com/photo-1618172193769-8bbf3e3891ef?q=80&w=400" },
      { name: "Camembert", note: "Mild, blød og god balance til rødfrugt.", img: "https://images.unsplash.com/photo-1610890716178-4ec1a3f0f1a4?q=80&w=400" },
    ],
    Merlot: [
      { name: "Fontina", note: "Mild og cremet, matcher Merlot flot.", img: "" },
      { name: "Tomme de Savoie", note: "Let jordet smag der balancerer vinen.", img: "" },
      { name: "Comté", note: "Kompleks smag der kan følge med Merlot.", img: "" },
    ],
    Chardonnay: [
      { name: "Brie", note: "Buttery + buttery = perfekt.", img: "" },
      { name: "Triple-cream", note: "Cremet luksus til fyldig Chardonnay.", img: "" },
      { name: "Comté", note: "Aromatisk og elegant parring.", img: "" },
    ],
    "Sauvignon Blanc": [
      { name: "Chèvre (ged)", note: "Syre + friskhed = klassisk match.", img: "" },
      { name: "Feta", note: "Salt + citrus = oplivende kontrast.", img: "" },
      { name: "Young Pecorino", note: "Let saltet og urtet – perfekt harmoni.", img: "" },
    ],
    Riesling: [
      { name: "Mild Gorgonzola", note: "Sødme + blue cheese fungerer overraskende godt.", img: "" },
      { name: "Munster", note: "Pikant, men Riesling afbalancerer det.", img: "" },
      { name: "Ricotta salata", note: "Let og salt, holder parringen frisk.", img: "" },
    ],
    "Syrah / Shiraz": [
      { name: "Blue Cheese", note: "Kraftige smage møder kraftig vin.", img: "" },
      { name: "Aged Pecorino", note: "Salt + peberede noter fra Syrah.", img: "" },
      { name: "Smoked Gouda", note: "Røg og mørke krydderier går hånd i hånd.", img: "" },
    ],
    Champagne: [
      { name: "Triple-cream", note: "Bobler + fedme = luksus.", img: "" },
      { name: "Parmesan", note: "Umami og salt får boblerne til at skinne.", img: "" },
      { name: "Brie", note: "Let og festligt match.", img: "" },
    ],
    Rosé: [
      { name: "Feta", note: "Salt og friskhed arbejder flot sammen.", img: "" },
      { name: "Burrata", note: "Sommerlig, cremet og mild.", img: "" },
      { name: "Manchego", note: "Passer godt til frugtdomineret rosé.", img: "" },
    ],
    Zinfandel: [
      { name: "Aged Cheddar", note: "Skarp ost til kraftig, frugtig vin.", img: "" },
      { name: "Smoked Gouda", note: "Røg + mørk frugt = perfekt.", img: "" },
      { name: "Pecorino Romano", note: "Salt og intensitet matcher Zinfandel.", img: "" },
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
        const img = PAIRINGS[k][0] && PAIRINGS[k][0].img ? PAIRINGS[k][0].img : `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48'><rect width='100%' height='100%' fill='%23e6e6e6'/></svg>`;
        return `<div class="search-item" data-wine="${encodeURIComponent(k)}">
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

  // For quick debug: if you want the first wine displayed on load, uncomment:
  // renderForWine(Object.keys(PAIRINGS)[0]);
});

