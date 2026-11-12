/* =========================================================
   brands.js  -  My Brands + Google/SEO data, editable from admin.html
   Data lives in Supabase table:  site_settings  (keys: brands, seo)
   If the table is empty / unreachable, DEFAULTS below are used.
   ========================================================= */
(function () {
  var SUPABASE_URL = "https://dxfxfjdoebyszjobbeap.supabase.co";
  var SUPABASE_KEY = "sb_publishable_2iYq0qbW8-1W2pVYyBozKg_rRUesRqj";
  var SITE = "https://dumiduuddipana.com";

  var ICONS = {"youtube": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z\"/></svg>", "facebook": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z\"/></svg>", "tiktok": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z\"/></svg>", "instagram": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><rect x=\"2.2\" y=\"2.2\" width=\"19.6\" height=\"19.6\" rx=\"5.6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"/><circle cx=\"12\" cy=\"12\" r=\"4.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.2\"/><circle cx=\"17.6\" cy=\"6.4\" r=\"1.4\"/></svg>", "linkedin": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\"/></svg>", "x": "<svg viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.29 19.494h2.039L6.486 3.24H4.298l13.313 17.407z\"/></svg>"};

  var PLATFORMS = [
    { key: "youtube",   label: "YouTube" },
    { key: "facebook",  label: "Facebook" },
    { key: "tiktok",    label: "TikTok" },
    { key: "instagram", label: "Instagram" },
    { key: "linkedin",  label: "LinkedIn" },
    { key: "x",         label: "X" }
  ];

  var DEFAULTS = {
    brands: {
      cards: [
        {
          logo: "DU",
          name: "Dumidu Uddipana",
          subtitle: "AI & Creator Education",
          description: "Practical AI lessons, creator tools and tutorials.",
          links: { youtube: "", facebook: "", tiktok: "", instagram: "", linkedin: "", x: "" }
        }
      ]
    },
    seo: {
      name: "Dumidu Uddipana",
      alternateName: "Dumidu Udipana, ඩුමිදු උද්දීපන",
      jobTitle: "Digital Content Creator",
      description: "Dumidu Uddipana is a digital content creator from Sri Lanka sharing practical AI lessons, creator tools and tutorials.",
      location: "Matale, Sri Lanka",
      image: SITE + "/logo.png"
    }
  };

  function isUrl(u) { return typeof u === "string" && /^https?:\/\/\S+$/i.test(u.trim()); }

  function load() {
    return fetch(SUPABASE_URL + "/rest/v1/site_settings?select=key,value", {
      headers: { apikey: SUPABASE_KEY, Authorization: "Bearer " + SUPABASE_KEY },
      cache: "no-store"
    })
      .then(function (r) { if (!r.ok) throw new Error("HTTP " + r.status); return r.json(); })
      .then(function (rows) {
        var out = JSON.parse(JSON.stringify(DEFAULTS));
        rows.forEach(function (row) {
          if (row.key === "brands" && row.value && Array.isArray(row.value.cards)) out.brands = row.value;
          if (row.key === "seo" && row.value) out.seo = Object.assign({}, DEFAULTS.seo, row.value);
        });
        return out;
      })
      .catch(function (e) {
        console.warn("site_settings not available, using defaults:", e);
        return JSON.parse(JSON.stringify(DEFAULTS));
      });
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }

  function renderBrands(brands) {
    var box = document.getElementById("brandCards");
    if (!box || !brands || !brands.cards) return;
    box.innerHTML = "";
    brands.cards.forEach(function (c) {
      var art = el("article", "brand-card");
      art.appendChild(el("div", "brand-logo", c.logo || (c.name || "?").charAt(0).toUpperCase()));
      art.appendChild(el("h3", "", c.name || ""));
      if (c.subtitle) art.appendChild(el("p", "card-subtitle", c.subtitle));
      if (c.description) art.appendChild(el("p", "card-description", c.description));
      var wrap = el("div", "social-links");
      PLATFORMS.forEach(function (p) {
        var u = c.links && c.links[p.key];
        if (!isUrl(u)) return;
        var a = document.createElement("a");
        a.href = u.trim();
        a.target = "_blank";
        a.rel = "me noopener";
        a.className = "social-pill " + p.key;
        a.setAttribute("aria-label", (c.name || "") + " on " + p.label);
        a.innerHTML = ICONS[p.key] + "<span></span>";
        a.querySelector("span").textContent = p.label;
        wrap.appendChild(a);
      });
      if (wrap.children.length) art.appendChild(wrap);
      box.appendChild(art);
    });
  }

  function buildLd(data) {
    var seo = data.seo, sameAs = [];
    (data.brands.cards || []).forEach(function (c) {
      PLATFORMS.forEach(function (p) {
        var u = c.links && c.links[p.key];
        if (isUrl(u) && sameAs.indexOf(u.trim()) < 0) sameAs.push(u.trim());
      });
    });
    var person = {
      "@type": "Person",
      "@id": SITE + "/#person",
      "name": seo.name,
      "url": SITE + "/",
      "description": seo.description,
      "sameAs": sameAs
    };
    if (seo.alternateName) {
      person.alternateName = seo.alternateName.split(",").map(function (x) { return x.trim(); }).filter(Boolean);
    }
    if (seo.jobTitle) person.jobTitle = seo.jobTitle;
    if (seo.image) person.image = seo.image;
    if (seo.location) person.homeLocation = { "@type": "Place", "name": seo.location };
    return {
      "@context": "https://schema.org",
      "@graph": [
        person,
        {
          "@type": "WebSite",
          "@id": SITE + "/#website",
          "url": SITE + "/",
          "name": "DumiduUddipana",
          "description": seo.description,
          "publisher": { "@id": SITE + "/#person" }
        }
      ]
    };
  }

  function applySeo(data) {
    var ld = document.getElementById("ld-json");
    if (!ld) { ld = document.createElement("script"); ld.type = "application/ld+json"; ld.id = "ld-json"; document.head.appendChild(ld); }
    ld.textContent = JSON.stringify(buildLd(data));
    var d = document.querySelector('meta[name="description"]');
    if (d && data.seo.description) d.setAttribute("content", data.seo.description);
    var og = document.querySelector('meta[property="og:description"]');
    if (og && data.seo.description) og.setAttribute("content", data.seo.description);
  }

  window.DUSite = { DEFAULTS: DEFAULTS, PLATFORMS: PLATFORMS, load: load, isUrl: isUrl, buildLd: buildLd, SUPABASE_URL: SUPABASE_URL, SUPABASE_KEY: SUPABASE_KEY, SITE: SITE };

  if (document.getElementById("brandCards")) {
    load().then(function (data) { renderBrands(data.brands); applySeo(data); });
  }
})();
