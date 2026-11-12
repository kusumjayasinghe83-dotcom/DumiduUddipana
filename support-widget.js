/* Floating customer-support button (bottom-left on every page).
   Change the email / links here if they ever change. */
(function () {
  var EMAIL = "support@dumiduuddipana.com";

  var css = document.createElement("style");
  css.textContent =
    "#duSupBtn{position:fixed;left:16px;bottom:16px;z-index:9998;border:0;border-radius:999px;padding:12px 18px;background:#111827;color:#fff;font:700 14px/1 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.28);cursor:pointer}" +
    "#duSupPanel{position:fixed;left:16px;bottom:70px;z-index:9998;width:min(300px,calc(100vw - 32px));background:#fff;color:#111827;border:1px solid #e5e7eb;border-radius:18px;padding:16px;box-shadow:0 14px 40px rgba(0,0,0,.25);display:none;font:14px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif}" +
    "#duSupPanel h4{margin:0 0 4px;font-size:16px}" +
    "#duSupPanel p{margin:0 0 12px;color:#4b5563}" +
    "#duSupPanel a{display:block;padding:11px 14px;margin-top:8px;border-radius:12px;background:#eef2ff;color:#3730a3;font-weight:700;text-decoration:none}" +
    "#duSupPanel a.main{background:#4f46e5;color:#fff}";
  document.head.appendChild(css);

  var btn = document.createElement("button");
  btn.id = "duSupBtn";
  btn.type = "button";
  btn.setAttribute("aria-label", "Customer support");
  btn.textContent = "💬 Support";

  var panel = document.createElement("div");
  panel.id = "duSupPanel";
  panel.innerHTML =
    "<h4>Need help?</h4>" +
    "<p>We usually reply within 1-2 days.</p>" +
    '<a class="main" href="mailto:' + EMAIL + '?subject=Support%20request">✉️ Email ' + EMAIL + "</a>" +
    '<a href="contact.html">📝 Send a message</a>' +
    '<a href="faq.html">❓ Read the FAQ</a>';

  btn.onclick = function (e) {
    e.stopPropagation();
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  };
  document.addEventListener("click", function (e) {
    if (!panel.contains(e.target) && e.target !== btn) panel.style.display = "none";
  });

  document.body.appendChild(panel);
  document.body.appendChild(btn);
})();
