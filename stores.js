/* 별 잇는 밤 스토어 링크 — 출시하면 해당 값만 true 로 바꾼다 (iOS·Android 따로 켤 수 있음) */
window.STARNIGHT_STORES = {
  ios: { live: true, url: "https://apps.apple.com/app/id6829614015" },
  android: { live: true, url: "https://play.google.com/store/apps/details?id=com.theostudio.starnight" }
};

(function () {
  var s = window.STARNIGHT_STORES;
  function apply() {
    var any = false;
    document.querySelectorAll("[data-store]").forEach(function (a) {
      var c = s[a.getAttribute("data-store")];
      if (!c || !c.live) return;
      any = true;
      a.href = c.url;
      a.removeAttribute("aria-disabled");
      a.rel = "noopener";
      var soon = a.querySelector("[data-soon]");
      if (soon) soon.remove();
    });
    if (any) document.querySelectorAll("[data-launch-badge]").forEach(function (b) { b.remove(); });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply);
  else apply();
})();
