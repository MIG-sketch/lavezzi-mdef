
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".md-header");

  if (!header) return;

  const menu = document.createElement("div");
  menu.className = "custom-top-menu";

  menu.innerHTML = `
    <a href="/lavezzi-mdef/">Home</a>
    <a href="/lavezzi-mdef/about/me/">About</a>
    <a href="/lavezzi-mdef/term1/01-Design%20studio%2001/">Term 1</a>
    <a href="/lavezzi-mdef/term2/Extended%20Intelligences/">Term 2</a>
    <a href="/lavezzi-mdef/term3/Cognitive%20Orgies%20III/">Term 3</a>
  `;

  header.insertAdjacentElement("afterend", menu);
});
