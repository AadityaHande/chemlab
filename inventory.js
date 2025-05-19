// === 1. Constants & Data ===
const chemicals = [ 
  "Acetamide",
  "Acetic Acid",
  "Acetanilide",
  "Acetone",
  "Acetyl Salicylic Acid (OOH)",
  "Activated Zinc metal Powder",
  "Agar Agar Powder",
  "Alizarine",
  "Aluminium Sulphate",
  "Ammonia",
  "Ammonium Chloride",
  "Ammonium Ferrous Sulfate",
  "Ammonium Hydroxide",
  "Ammonium Iron (II) Sulphate)",
  "Ammonium Oxalate",
  "Ammonium Thiocyanate",
  "Aniline",
  "Barium Chloride",
  "Barium Hydroxide",
  "Benzaldehyde",
  "Benzamide",
  "Benzene",
  "Benzoic Acid",
  "Benzoinoxime",
  "Benzidine",
  "Bleaching Powder",
  "Brass Fillings",
  "Bromine water",
  "Buffer capsules",
  "Butan-2-one Extrapure",
  "Calcon Carboxylic Acid",
  "Calcium Carbonate",
  "Calcium Chloride",
  "Calcium Tetrachloride",
  "Carboxy Methyl Cellulose",
  "Cellulose Powder",
  "Cetylpyridinium bromide",
  "Charcoal Powder",
  "Cobalt Nitrate",
  "Cobaltous Chloride",
  "Cobaltous chloride",
  "Copper filings",
  "Copper Sulphate",
  "Cyclohexanone",
  "Dextrose",
  "Diethyl Ether",
  "Dimethyl Glyoxime",
  "di-Sodium Phosphate",
  "Diphenylamine Ind.",
  "Dithiozone",
  "Dolomite Powder",
  "EDTA",
  "2,4-Dinitrophenol",
  "Ethyl Acetate",
  "Ethyl Alcohol",
  "Ethyl Benzoate",
  "Ethyl Benzoate for Synthesis",
  "Ethyl Cellulose",
  "Ethyl Methyl Ketone",
  "Ethylenediamine",
  "Ethanol",
  "Ether Solvent",
  "Fumaric Acid",
  "Formaldehyde",
  "Formalin",
  "Formic Acid",
  "Furfuraldehyde",
  "Furfuryl Alcohol",
  "Fehling Solution A",
  "Fehling Solution B",
  "Ferric Chloride",
  "Ferrous Sulphate",
  "Glacial Acetic Acid",
  "Glucose (Dextrose/AVOS?)",
  "Glycerin (Glycanine/Glycerol?)",
  "Glycine",
  "Guar Gum",
  "Hexane",
  "Hydrochloric Acid",
  "Hydrogen Peroxide",
  "Hydroxyethyl Cellulose",
  "L-Alginine",
  "L-Cystine",
  "Iodine",
  "Iodine Crystal",
  "Iron Metal (Powder)",
  "L-Volume for biochemistry",
  "Liquid Paraffin (hard)",
  "Liquid Paraffin (Light)",
  "Lime Water",
  "Leasel Acatate",
  "Leal Nitrade",
  "Methyl Cellulose",
  "n-Butyl Alcohol",
  "Magnesium Sulphate",
  "Ortho Phosphoric Acid",
  "2-Nitrophenol",
  "3-Nitro Aniline",
  "Oxalic Acid",
  "Nitrobenzene",
  "Methyl Acetate",
  "Nickel Chloride",
  "Mercuric Chloride",
  "Picric Acid",
  "Phthalic Acid",
  "1-Naphthol",
  "Methyl Orange",
  "Polyvinyl Alcohol (cold)",
  "Potassium Carbonate",
  "Potassium Dichromate",
  "p-Nitroaniline",
  "Methylene Blue",
  "Potassium Nitrate",
  "Ninhydrin",
  "Methanesulfonic Acid",
  "n-Butyl Acetate",
  "Phthalic Anhydride",
  "Potassium Chloride",
  "Methyl Alcohol",
  "Nitroso-R Salt",
  "Nickel Nitrate",
  "Methanol",
  "β-Naphthol",
  "α-Naphthol",
  "Naphthalene",
  "p-Nitrophenol",
  "Nitrobenzene",
  "Potassium Permanganate",
  "Potassium Persulfate",
  "Potassium Bromide",
  "Potassium Fluoride",
  "Potassium Thiocyanate",
  "Potassium Iodide",
  "Potassium Dithionite",
  "Nitric Acid",
  "Orthophosphate",
  "Nickel Acetate Hexahydrate",
  "Phosphoric Acid",
  "Nickel Sulphate",
  "Potassium Hydroxide",
  "Potassium Ferrocyanide",
  "Phenolphthalein Indicator",
  "Phenol",
  "Potassium Chromate",
  "p-Toluidine",
  "Petroleum Ether",
  "1,10-Phenanthroline Hydrate",
  "Potassium Carbonate Anhydrous",
  "Phenyl Hydrazine",
  "Hydroquinone",
  "Paraffin Wax Pure",
  "Phthalic Anhydride",
  "Rubeanic Acid",
  "Resorcinol",
  "Sodium Carbonate",
  "Sodium Nitrate",
  "Sodium Hydroxide Pellets",
  "Sodium Phosphate Dibasic",
  "Sodium Thiosulfate",
  "Semicarbazide Hydrochloride",
  "Sodium Potassium Tartrate",
  "Sodium Sulphate Anhydrous",
  "Sodium Azide",
  "Sodium Iodide",
  "Sodium Acetate",
  "Sodium Sulphate",
  "Sulphur Powder",
  "Sodium Bicarbonate",
  "Sodium Nitroprusside",
  "Schiff's Reagent",
  "Stannous Chloride",
  "Urease",
  "Sodium Sulphite Flakes",
  "Starch Indicator",
  "Silver Nitrate (AgNO₃)",
  "Sodium Acetate",
  "Sulfuric Acid",
  "Spirit (Rectified Spirit)",
  "Salicylic Acid",
  "Thiourea",
  "Tollens Reagent",
  "Tollene",
  "Urea",
  "Zinc Sulphate",
  "Zinc Choloride Powder",
  "Zinc Oxide Pure",
  "Zinc Dust",
 ];

// Map known liquids; everything else → solid
const chemicalTypes = {
  "Acetone": "liquid", "Diethyl Ether": "liquid", "Ether Solvent": "liquid",
  "Ethyl Acetate": "liquid", "Ethyl Alcohol": "liquid", "Ethanol": "liquid",
  "Methanol": "liquid", "Methyl Alcohol": "liquid", "n-Butyl Alcohol": "liquid",
  "Petroleum Ether": "liquid", "Hexane": "liquid", "Bromine water": "liquid",
  "Formalin": "liquid", "Formaldehyde": "liquid", "Hydrochloric Acid": "liquid",
  "Nitric Acid": "liquid", "Sulfuric Acid": "liquid", "Hydrogen Peroxide": "liquid",
  "Lime Water": "liquid", "Liquid Paraffin (hard)": "liquid",
  "Liquid Paraffin (Light)": "liquid", "Acetic Acid": "liquid",
  "Glacial Acetic Acid": "liquid", "Ortho Phosphoric Acid": "liquid",
  "Phosphoric Acid": "liquid", "Methyl Acetate": "liquid", "Furfuraldehyde": "liquid",
  "Furfuryl Alcohol": "liquid"
};
function getChemicalType(name) {
  return chemicalTypes[name] || "solid";
}

const MASS_FACTORS = { kg:1000, g:1, mg:0.001 };
const VOL_FACTORS  = { l:1000, ml:1 };
const LOW_STOCK_THRESHOLD_BASE = 10; // in base unit
const undoStack = [];

// === 2. Conversion Helpers ===
function isMassUnit(u){ return MASS_FACTORS[u]!==undefined; }
function isVolUnit(u){ return VOL_FACTORS[u]!==undefined; }
function toBase(v,u){ return isMassUnit(u)?v*MASS_FACTORS[u]: isVolUnit(u)?v*VOL_FACTORS[u]:v; }
function fromBase(v,u){ return isMassUnit(u)?v/MASS_FACTORS[u]: isVolUnit(u)?v/VOL_FACTORS[u]:v; }

// === 3. Lifecycle Setup ===
document.addEventListener("DOMContentLoaded",()=>{
  setupThemeFromStorage();
  loadChemicals();
  setupSearch();
  document.getElementById("showMass").onclick = ()=>filterByType('mass');
  document.getElementById("showVol").onclick  = ()=>filterByType('volume');
  document.getElementById("exportAll").onclick = exportInventoryCSV;
  document.getElementById("bulkImport").onclick = showBulkImportModal;
});

// === 4. Render Inventory ===
function loadChemicals(){
  const list = document.getElementById("chemicalList");
  list.innerHTML = "";

  chemicals.forEach(name=>{
    if(!name.trim()) return;
    let raw = localStorage.getItem(name),
        baseQty=0, unit='g', lastUpdated=null;

    if(raw){
      try{
        const o=JSON.parse(raw);
        baseQty = o.baseQty||0;
        unit    = o.unit||unit;
        lastUpdated = o.lastUpdated;
      }catch{ baseQty = parseFloat(raw)||0; }
    }

    const displayQty = fromBase(baseQty,unit).toFixed(2);
    const type = isMassUnit(unit)?'mass': isVolUnit(unit)?'volume':'other';
    const lowStock = baseQty < LOW_STOCK_THRESHOLD_BASE;
    const chemType = getChemicalType(name);
    const unitOptions = chemType==='liquid'
      ? `<option value="ml">mL</option><option value="l">L</option>`
      : `<option value="mg">mg</option><option value="g">g</option><option value="kg">kg</option>`;

    const div = document.createElement("div");
    div.id = `item-${name}`;
    div.className = `chemical-item${lowStock?' low-stock':''}`;
    div.dataset.type = type;
    div.innerHTML = `
      <h3 class="chemical-name">${name}</h3>
      <div class="quantity-controls">
        <label for="set-${name}">Set Qty:</label>
        <input type="number" id="set-${name}" min="0">
        <select id="unit-${name}">${unitOptions}</select>
        <button onclick="setQuantity('${name}')">Set</button>
      </div>
      <div class="quantity-controls">
        <label for="use-${name}">Use Qty:</label>
        <input type="number" id="use-${name}" min="0">
        <select id="use-unit-${name}">${unitOptions}</select>
        <button onclick="useQuantity('${name}')">Use</button>
        <p class="available-quantity">
          Available: <span id="quantity-${name}">${displayQty}</span>
          <span id="display-unit-${name}">${unit}</span>
        </p>
      </div>
      ${lastUpdated?`<div class="timestamp">Last updated: ${new Date(lastUpdated).toLocaleString()}</div>`:''}
    `;
    list.appendChild(div);
  });
}

// === 5. Set & Use ===
function setQuantity(name){
  const qty = parseFloat(document.getElementById(`set-${name}`).value)||0;
  const unit = document.getElementById(`unit-${name}`).value;
  const baseQty = toBase(qty,unit);
  const now = new Date().toISOString();
  pushUndo(name);
  localStorage.setItem(name,JSON.stringify({ baseQty,unit,lastUpdated:now }));
  loadChemicals();
}

function useQuantity(name){
  const qty = parseFloat(document.getElementById(`use-${name}`).value)||0;
  const uunit = document.getElementById(`use-unit-${name}`).value;
  let o = JSON.parse(localStorage.getItem(name)||'{}'),
      baseStored = o.baseQty || 0,
      used = toBase(qty, uunit),
      newBase = Math.max(baseStored - used, 0),
      now = new Date().toISOString();

  pushUndo(name);
  localStorage.setItem(name, JSON.stringify({
    baseQty: newBase,
    unit: o.unit,
    lastUpdated: now
  }));
  
  const usageLog = JSON.parse(localStorage.getItem("usageLog") || "[]");
  usageLog.push({
    name: name,
    qty: qty,
    unit: uunit,
    user: "Aditya", // or prompt("Enter your name:") if you want
    time: now
  });
  localStorage.setItem("usageLog", JSON.stringify(usageLog));

  loadChemicals();
}

// === 6. Undo ===
function pushUndo(name){
  if(undoStack.length>=10) undoStack.shift();
  undoStack.push({name,data:localStorage.getItem(name)});
}
function undoLast(){
  const e=undoStack.pop();
  if(e){
    if(e.data===null) localStorage.removeItem(e.name);
    else localStorage.setItem(e.name,e.data);
    loadChemicals();
  } else alert("Nothing to undo");
}

// === 7. Search & Filter ===
function setupSearch(){
  document.getElementById("searchInput").addEventListener("input",e=>{
    const t=e.target.value.toLowerCase();
    document.querySelectorAll(".chemical-item").forEach(item=>{
      const n=item.querySelector(".chemical-name").textContent.toLowerCase();
      item.style.display=n.includes(t)?"":"none";
    });
  });
}
function filterByType(type){
  document.querySelectorAll(".chemical-item").forEach(item=>{
    item.style.display=(type==='all'||item.dataset.type===type)?"":"none";
  });
}

// === 8. Theme Toggle ===
function setupThemeFromStorage(){
  if(localStorage.getItem("darkMode")==="enabled")
    document.body.classList.add("dark-theme");
}
function toggleTheme(){
  document.body.classList.toggle("dark-theme");
  localStorage.setItem("darkMode",
    document.body.classList.contains("dark-theme")?"enabled":"disabled"
  );
}

// === 9. Bulk Import & Export ===
function exportInventoryCSV(){
  let csv="Name,Qty,Unit,LastUpdated\n";
  chemicals.forEach(n=>{
    const o=JSON.parse(localStorage.getItem(n)||'{}');
    if(o.baseQty!=null){
      csv+=`${n},${fromBase(o.baseQty,o.unit).toFixed(2)},${o.unit},${o.lastUpdated}\n`;
    }
  });
  const b=new Blob([csv],{type:"text/csv"}),a=document.createElement("a");
  a.href=URL.createObjectURL(b);a.download="inventory.csv";a.click();
}

function showBulkImportModal(){
  document.getElementById("bulkImportModal").style.display="flex";
}
function closeModal(id){
  document.getElementById(id).style.display="none";
}
function processBulkImport(){
  document.getElementById("bulkImportText").value.trim().split("\n").forEach(line=>{
    const [n,q,u]=line.split(",").map(s=>s.trim());
    if(n&&q&&u){
      const bq=toBase(parseFloat(q),u),now=new Date().toISOString();
      localStorage.setItem(n,JSON.stringify({baseQty:bq,unit:u,lastUpdated:now}));
    }
  });
  closeModal("bulkImportModal");
  loadChemicals();
}

// === 10. Navigation & Stubs ===
function manualEdit(){ alert("Manual edit modal coming soon!"); }
function goBack(){ window.location.href="homepage.html"; }
function generateReport(){ window.location.href="inventory-report.html"; }


// === 11. Theme toggle === 
function setupThemeToggle() {
  const toggleButton = document.getElementById("toggleTheme");
  if (!toggleButton) return;

  const body = document.body;
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";

  if (isDarkMode) {
    body.classList.add("dark-mode");
    toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
  }

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    const currentMode = localStorage.getItem("darkMode");
    const newMode = currentMode === "enabled" ? "disabled" : "enabled";
    localStorage.setItem("darkMode", newMode);

    if (newMode === "enabled") {
      toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    }
  });
}

function processBulkImport(){
  const validUnits = ['ml', 'l', 'mg', 'g', 'kg'];
  let importCount = 0;
  document.getElementById("bulkImportText").value.trim().split("\n").forEach(line => {
      const [n, q, u] = line.split(",").map(s => s.trim());
      if (n && q && u && !isNaN(parseFloat(q)) && validUnits.includes(u.toLowerCase())) {
          const bq = toBase(parseFloat(q), u.toLowerCase()), now = new Date().toISOString();
          localStorage.setItem(n, JSON.stringify({ baseQty: bq, unit: u.toLowerCase(), lastUpdated: now }));
          importCount++;
      } else if (n || q || u) {
          alert(`Invalid CSV line: "${line}". Please ensure format is Name,Qty,Unit (e.g., Ethanol,500,ml) and unit is one of: ${validUnits.join(', ')}.`);
      }
  });
  closeModal("bulkImportModal");
  loadChemicals();
  if (importCount > 0) {
      alert(`Successfully imported ${importCount} items.`);
  } else if (document.getElementById("bulkImportText").value.trim()) {
      alert("No valid chemical data found in the provided CSV.");
  }
}