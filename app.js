
const themeToggle = document.querySelector("#themeToggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const themeLabel = themeToggle.querySelector(".theme-label");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const dark = theme === "dark";
  themeIcon.textContent = dark ? "☀" : "☾";
  themeLabel.textContent = dark ? "Modo claro" : "Modo escuro";
  themeToggle.setAttribute("aria-label", dark ? "Ativar modo claro" : "Ativar modo escuro");
  themeToggle.title = dark ? "Ativar modo claro" : "Ativar modo escuro";
}

const savedTheme = localStorage.getItem("estudos-theme");
const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
applyTheme(savedTheme || preferredTheme);

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("estudos-theme", nextTheme);
  applyTheme(nextTheme);
});

const disciplines = [
  { name:"Cálculo I", code:"MAT101", items:42, progress:72, favorite:true },
  { name:"Álgebra Linear", code:"MAT203", items:31, progress:48, favorite:false },
  { name:"Física I", code:"FIS101", items:57, progress:61, favorite:true },
  { name:"Programação I", code:"FAC101", items:38, progress:86, favorite:false },
  { name:"Geometria Analítica", code:"MAT105", items:24, progress:35, favorite:false },
  { name:"Circuitos Elétricos", code:"ELE201", items:63, progress:27, favorite:true },
  { name:"Eletrônica", code:"ELE301", items:19, progress:12, favorite:false },
  { name:"Probabilidade", code:"EST201", items:28, progress:54, favorite:false }
];

const grid = document.querySelector("#disciplineGrid");
const search = document.querySelector("#search");
const count = document.querySelector("#count");
const empty = document.querySelector("#empty");
const sort = document.querySelector("#sort");
const dialog = document.querySelector("#newDialog");
const form = document.querySelector("#newForm");

function render() {
  const query = search.value.trim().toLowerCase();
  let data = disciplines.filter(d =>
    `${d.name} ${d.code}`.toLowerCase().includes(query)
  );

  if (sort.value === "name") data.sort((a,b) => a.name.localeCompare(b.name));
  if (sort.value === "items") data.sort((a,b) => b.items - a.items);
  if (sort.value === "recent") data.sort((a,b) => disciplines.indexOf(a) - disciplines.indexOf(b));

  count.textContent = data.length;
  empty.classList.toggle("hidden", data.length > 0);

  grid.innerHTML = data.map((d, i) => `
    <article class="card">
      <div class="card-head">
        <div class="card-icon">${d.name.split(" ").map(x=>x[0]).slice(0,2).join("")}</div>
        <button class="star ${d.favorite ? "fav" : ""}" data-index="${disciplines.indexOf(d)}" aria-label="Favoritar">☆</button>
      </div>
      <h3>${d.name}</h3>
      <div class="meta">${d.code} · ${d.items} itens</div>
      <div class="card-footer">
        <span>${d.progress}% estudado</span><span>›</span>
      </div>
      <div class="progress"><i style="width:${d.progress}%"></i></div>
    </article>
  `).join("");

  grid.querySelectorAll(".star").forEach(btn => {
    btn.addEventListener("click", () => {
      disciplines[Number(btn.dataset.index)].favorite ^= true;
      render();
    });
  });
}

search.addEventListener("input", render);
sort.addEventListener("change", render);

document.querySelectorAll(".view").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".view").forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
    grid.classList.toggle("list", btn.dataset.view === "list");
  });
});

document.addEventListener("keydown", e => {
  if (e.key === "/" && document.activeElement !== search) {
    e.preventDefault(); search.focus();
  }
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
    e.preventDefault(); search.focus();
  }
});

document.querySelector("#newDiscipline").addEventListener("click", () => dialog.showModal());

form.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name").trim();
  const code = data.get("code").trim().toUpperCase() || "SEM CÓDIGO";
  if (!name) return;
  disciplines.push({name, code, items:0, progress:0, favorite:false});
  form.reset();
  dialog.close();
  render();
});

render();
