/* Appearance toggle for somestyleplease.
 *
 * The theme renders <body a="auto|light|dark|matrix|bear|together"> from
 * config. This script adds a minimal runtime toggle that cycles
 * light → dark → auto, persists the choice in localStorage, and re-applies
 * it before first paint on later visits.
 */
(() => {
  var KEY = "somestyleplease-appearance";
  var ORDER = ["light", "dark", "auto"];

  var saved = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch (e) {
    /* private mode */
  }
  if (ORDER.indexOf(saved) !== -1) {
    document.body.setAttribute("a", saved);
  }

  var style = document.createElement("style");
  style.textContent =
    "#appearance-toggle{position:fixed;top:.5rem;right:.5rem;border:0;background:transparent;" +
    "color:inherit;cursor:pointer;font-size:1.05rem;line-height:1;opacity:.45;padding:.2rem;" +
    "z-index:99;font-family:inherit}" +
    "#appearance-toggle:hover{opacity:1}";
  document.head.appendChild(style);

  var btn = document.createElement("button");
  btn.type = "button";
  btn.id = "appearance-toggle";

  function current() {
    var mode = document.body.getAttribute("a") || "auto";
    return ORDER.indexOf(mode) === -1 ? "auto" : mode;
  }

  function render() {
    var mode = current();
    btn.textContent = mode === "auto" ? "◐" : mode === "dark" ? "☾" : "☀";
    btn.title = "appearance: " + mode + " (click to cycle light / dark / auto)";
  }

  btn.addEventListener("click", () => {
    var next = ORDER[(ORDER.indexOf(current()) + 1) % ORDER.length];
    document.body.setAttribute("a", next);
    try {
      localStorage.setItem(KEY, next);
    } catch (e) {
      /* private mode */
    }
    render();
  });

  render();
  document.body.appendChild(btn);
})();
