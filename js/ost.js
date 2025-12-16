// ===== DATA =====
const PAIRINGS = {
  Gouda: [
    { name: "Pinot Noir", note: "Let til medium-fyldig rødvin med friske røde frugter og bløde tanniner.", img: "https://www.aevin.dk/wp-content/uploads/2023/09/Pinot-Noir-Vin-de-France-Heritiers-Sanint-Abel_1.jpg" },
    {
      name: "Merlot",
      note: "En blød, frugtdrevet rødvin med moderate tanniner — super til lagret Gouda, hvor vinens bær-noter fremhæver ostens sødme og nøddeagtige toner.",
      img: "https://mediacache.hjhansen-vin.dk/v-639012183635265170/fc/2b/e46d-4833-4978-b6e3-2774fb77766c/18750709_El%20Descanso%20Merlot%20Errazuriz_HIGH.png",
    },
    {
      name: "Riesling",
      note: "En hvidvin med frisk syre og frugtighed, som skærer gennem ostens fedme og giver en fin balance.",
      img: "https://megavin.b-cdn.net/media/catalog/product/cache/56356838e6e4b597abc0fc3e73c58f3f/s/t/ste_phane_berg_alsace_riesling.png",
    },
  ],
  Burrata: [
    { name: "Pinot Grigio", note: "Frisk syre og citrus-noter hjælper med at skære igennem den rige, cremede tekstur og løfter ostesmagen uden at dominere den.", img: "https://shop14539.sfstatic.io/upload_dir/shop/pinot_gris_IGT.jpg" },
    { name: "Sauvignon Blanc", note: "Sauvignon Blanc har sprød syre og aromatiske noter, som komplementerer burrataens milde og fløjlsbløde natur perfekt.", img: "https://www.jyskvin.dk/image/cache/data/products/1583236-192x352.jpg" },
    {
      name: "Prosecco",
      note: "Bobler og syre “renser” ganen mellem hver bid og balancerer ostens fedme — helt ideelt, hvis burrata serveres med tomater eller frugt.",
      img: "https://digitalassets.sallinggroup.com/image/upload/e_trim/b_white,c_pad,e_sharpen:80,f_auto,q_auto,w_464,h_464/eb4411fe66f1fefa588a103e3bf7a469",
    },
  ],
  Camembert: [
    { name: "Champagne", note: "Bobler og høj syre renser ganen mellem hver bid og giver en dejlig kontrast til den bløde, cremede ost.", img: "https://www.vildmedvin.dk/img/600/600/resize/b/r/brut_imperial.jpg" },
    { name: "Pinot Noir", note: "Let til medium-fyldig rødvin med friske røde frugter og bløde tanniner.", img: "https://www.aevin.dk/wp-content/uploads/2023/09/Pinot-Noir-Vin-de-France-Heritiers-Sanint-Abel_1.jpg" },
    { name: "Chardonnay", note: "Chardonnay kan spejle ostens cremethed og tilføje noter af smør, toast og frugt, som harmonerer smukt med Camembert.", img: "https://menuvin.dk/cdn/shop/files/726.jpg?v=1737579655&width=1445" },
  ],
  Comté: [
    {
      name: "Vin Jaune",
      note: "Den nøddeagtige, let krydrede stil spejler og fremhæver Comtés karakteristiske smag, hvilket gør den til et traditionelt og klassisk match.",
      img: "https://sw12281.sfstatic.io/upload_dir/shop/_thumbs/Badoz_Vin_Jaune_Les_Roussots.w610.h610.fill.jpeg",
    },
    {
      name: "Champagne",
      note: "Bobler og frisk syre er ideelle til at skære gennem ostens cremethed og rense ganen mellem bidene. Den sprøde citrus og lette toast-nuancer passer virkelig godt til Comtés fyldige, nøddede profil.",
      img: "https://www.vildmedvin.dk/img/600/600/resize/b/r/brut_imperial.jpg",
    },
    { name: "Pinot Noir", note: "En frugtig Pinot Noir med bløde tanniner giver en frisk, rød frugtprofil", img: "https://www.aevin.dk/wp-content/uploads/2023/09/Pinot-Noir-Vin-de-France-Heritiers-Sanint-Abel_1.jpg" },
  ],
  Emmentaler: [
    {
      name: "Riesling",
      note: "Frisk syre og citrus/stenfrugt-noter skærer gennem ostefedmen og fremhæver den milde, nøddeagtige karakter.",
      img: "https://megavin.b-cdn.net/media/catalog/product/cache/56356838e6e4b597abc0fc3e73c58f3f/s/t/ste_phane_berg_alsace_riesling.png",
    },
    { name: "Pinot Grigio", note: "Let til medium hvidvin med frisk syre og citrus/frugt-profil giver en ren, forfriskende kontrast til ostens bløde tekstur.", img: "https://shop14539.sfstatic.io/upload_dir/shop/pinot_gris_IGT.jpg" },
    {
      name: "Pinot Noir",
      note: "En let, frugtdrevet Pinot Noir med bløde tanniner og røde bærtoner harmonerer fint med den milde, let søde nøddeprofil",
      img: "https://www.aevin.dk/wp-content/uploads/2023/09/Pinot-Noir-Vin-de-France-Heritiers-Sanint-Abel_1.jpg",
    },
  ],
  Gedeost: [
    { name: "Sauvignon Blanc", note: "Høj syre, citrus- og urteagtige noter skærer igennem gedeostens syrlige og cremede smag og renser ganen mellem hver bid.", img: "https://www.jyskvin.dk/image/cache/data/products/1583236-192x352.jpg" },
    { name: "Tør Rosé", note: "Frisk syre med let frugtighed og fine mineraler gør rosé til et elegant og afbalanceret match til gedeost", img: "https://imagedelivery.net/Zzk03ekrhVcCLA2TZCP3WQ/37407140/base" },
    { name: "Pinot Noir", note: "Let og salt, holder parringen frisk.", img: "https://www.aevin.dk/wp-content/uploads/2023/09/Pinot-Noir-Vin-de-France-Heritiers-Sanint-Abel_1.jpg" },
  ],
  Gorgonzola: [
    {
      name: "Sauternes",
      note: "Sødmen i dessertvine som Sauternes balancerer salt- og umamismagen i Gorgonzola og skaber en lækker kontrast mellem sødt og salt.",
      img: "https://www.juuls.dk/admin/public/getimage.ashx?Image=/Files/Images/Products/35011969.jpg&Width=480&Height=0&Format=jpg&Quality=75&Crop=0&filename=35011969-Chateau-des-Ormes-Sauternes.jpg",
    },
    {
      name: "Off-dry Riesling",
      note: "En let frugtig, let sød hvidvin med frisk syre hjælper med at rense ganen og tone den stærke ostesmag ned, samtidig med at vinens frugtighed fremhæver ostens cremethed.",
      img: "https://winecountryontario.ca/wp-content/uploads/2024/04/Lailey-2022Off-DryRiesling_990x.webp",
    },
    {
      name: "Lambrusco",
      note: "Den let sprudlende, frugtige og ofte let sødlige Lambrusco har frisk syre og røde bærtoner, der både skærer gennem ostens rigdom og spiller godt sammen med dens aromaer.",
      img: "https://www.vinello.dk/media/image/db/43/6e/riunite-lambrusco-rosso-magnum.png",
    },
  ],
  Morbier: [
    {
      name: "Gewürztraminer",
      note: "Aromatisk hvidvin med frugtige og lidt krydrede noter, som komplementerer Morbiers cremede tekstur og milde smag uden at overdøve den.",
      img: "https://megavin.b-cdn.net/media/catalog/product/cache/56356838e6e4b597abc0fc3e73c58f3f/d/i/dietrich_gewurztraminer_reserve_alsace.jpg",
    },
    {
      name: "Pinot Noir",
      note: "Lysere rødvin med bløde tanniner og frugtige noter; dens syre og friske røde frugter passer godt til ostens cremethed og jordede undertoner.",
      img: "https://www.aevin.dk/wp-content/uploads/2023/09/Pinot-Noir-Vin-de-France-Heritiers-Sanint-Abel_1.jpg",
    },
    { name: "Chardonnay", note: "En hvidvin med lidt fylde og evt. let fadlagring, som harmonerer med Morbiers milde, lidt nøddeagtige smag.", img: "https://menuvin.dk/cdn/shop/files/726.jpg?v=1737579655&width=1445" },
  ],
  Parmesan: [
    { name: "Chianti", note: "Syren og røde frugt-noter i Chianti skærer flot igennem Parmesanens salt- og umami-profil og balancerer ostens dybde.", img: "https://www.vinogvin.dk/images/Chianti-p.jpg" },
    {
      name: "Prosecco",
      note: "Bobler og frisk syre renser ganen mellem bidene og giver en let, frisk kontrast til ostens kraftige smag.",
      img: "https://digitalassets.sallinggroup.com/image/upload/e_trim/b_white,c_pad,e_sharpen:80,f_auto,q_auto,w_464,h_464/eb4411fe66f1fefa588a103e3bf7a469",
    },
    { name: "Tør Riesling", note: "Høj syre og citrus/stenfrugt-noter skærer gennem saltet og fremhæver den nøddeagtige kompleksitet.", img: "https://www.otto-duborg.dk/1489-large_default/Eifel-Schiefergestein-Riesling-Tor.jpg" },
  ],
  Cheddar: [
    { name: "Cabernet Sauvignon", note: "Kraftige tanniner og fyldig frugt står godt imod cheddarens skarpe, nøddeagtige og salte noter.", img: "https://www.jyskvin.dk/image/cache/data/products/1540636-500x500.jpg" },
    {
      name: "Merlot",
      note: "Blødere tanniner og rundere frugtprofil gør Merlot til en mere tilgængelig rødvin til cheddar.",
      img: "https://mediacache.hjhansen-vin.dk/v-639012183635265170/fc/2b/e46d-4833-4978-b6e3-2774fb77766c/18750709_El%20Descanso%20Merlot%20Errazuriz_HIGH.png",
    },
    {
      name: "Tør Riesling",
      note: "Høj syre i tør Riesling eller et mousserende skaber en frisk kontrast til cheddarens cremede og skarpe smag, og syren renser ganen mellem bidene.",
      img: "https://www.otto-duborg.dk/1489-large_default/Eifel-Schiefergestein-Riesling-Tor.jpg",
    },
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
    `<h3>Foreslåede vin til ${key}</h3>` +
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
  Burrata: "img/burrata_.webp",
  Camembert: "img/Camembert_.webp",
  Cheddar: "img/cheddar.webp",
  Comté: "img/Comté_.webp",
  Emmentaler: "img/emmentaler_.webp",
  Gedeost: "img/gederuller_.webp",
  Gorgonzola: "img/gorgonzola.webp",
  Gouda: "img/gouda.webp",
  Morbier: "img/morbier.webp",
  Parmesan: "img/parmesan.webp",
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
