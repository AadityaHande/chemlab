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

// Switch between reports based on the dropdown selection
function switchReport() {
  const reportType = document.getElementById("reportType").value;
  document.getElementById("usageReport").style.display = (reportType === "usage") ? "block" : "none";
  document.getElementById("inventoryReport").style.display = (reportType === "inventory") ? "block" : "none";
  document.getElementById("insightReport").style.display = (reportType === "insight") ? "block" : "none";
}

// Handle searching across reports
function searchReports() {
  const query = document.getElementById("reportSearch").value.toLowerCase();
  const tables = document.querySelectorAll("table");
  tables.forEach(table => {
    const rows = table.getElementsByTagName("tr");
    Array.from(rows).forEach(row => {
      const cells = row.getElementsByTagName("td");
      let match = false;
      Array.from(cells).forEach(cell => {
        if (cell.textContent.toLowerCase().includes(query)) {
          match = true;
        }
      });
      row.style.display = match ? "" : "none";
    });
  });
}

// Export report data to CSV
function exportToCSV(reportType) {
  let table, rows;
  if (reportType === "usage") {
    table = document.getElementById("usageTable");
  } else if (reportType === "inventory") {
    table = document.getElementById("inventoryTable");
  } else if (reportType === "insight") {
    table = document.getElementById("insightTable");
  }
  rows = table.querySelectorAll("tr");

  let csvContent = "";
  rows.forEach(row => {
    const cells = row.querySelectorAll("td, th");
    const rowContent = Array.from(cells).map(cell => `"${cell.textContent.trim()}"`).join(",");
    csvContent += rowContent + "\n";
  });

  const blob = new Blob([csvContent], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${reportType}-report.csv`;
  link.click();
}

// Clear logs (for Chemical Usage Report)
function clearLogs() {
  localStorage.removeItem("usageLog"); // clear actual data
  populateUsageData(); // refresh UI
  refreshInsights();   // clear insights too
  alert("Usage logs cleared!");
}

// Toggle columns for User and Time (for Chemical Usage Report)
function toggleColumns() {
  const table = document.getElementById("usageTable");
  const headers = table.querySelectorAll("th");
  const userColumnIndex = 3;
  const timeColumnIndex = 4;

  headers[userColumnIndex].style.display = headers[userColumnIndex].style.display === "none" ? "" : "none";
  headers[timeColumnIndex].style.display = headers[timeColumnIndex].style.display === "none" ? "" : "none";

  const rows = table.querySelectorAll("tr");
  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    if (cells[userColumnIndex]) {
      cells[userColumnIndex].style.display = cells[userColumnIndex].style.display === "none" ? "" : "none";
    }
    if (cells[timeColumnIndex]) {
      cells[timeColumnIndex].style.display = cells[timeColumnIndex].style.display === "none" ? "" : "none";
    }
  });
}

// ✅ Fixed: Refresh insights (Usage Summary Report)
function refreshInsights() {
  const table = document.getElementById("insightTable");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  const usageLog = JSON.parse(localStorage.getItem("usageLog") || "[]");

  const summary = {};

  usageLog.forEach(entry => {
    const name = entry.name;
    const qty = parseFloat(entry.qty);
    if (!summary[name]) summary[name] = 0;
    summary[name] += qty;
  });

  Object.entries(summary).forEach(([chemical, totalUsage]) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${chemical}</td><td>${totalUsage.toFixed(2)}</td>`;
    tbody.appendChild(row);
  });

  // if (usageLog.length) {
  //   alert("Insights refreshed!");
  // }
}

// Renew Stock (unchanged)
function renewStock() {
  const table = document.getElementById("inventoryTable");
  const rows = table.querySelectorAll("tr");

  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    if (cells.length > 0) {
      const qtyCell = cells[1];
      const currentQty = parseInt(qtyCell.textContent);
      const updatedQty = currentQty + 100;
      qtyCell.textContent = updatedQty;
    }
  });
  alert("Stock renewed!");
}

// Inventory Report (unchanged)
function populateInventory() {
  const table = document.getElementById("inventoryTable");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  chemicals.forEach(name => {
    const raw = localStorage.getItem(name);
    if (!raw) return;

    try {
      const { baseQty, unit, lastUpdated } = JSON.parse(raw);
      if (baseQty != null && unit) {
        const qty = parseFloat(baseQty).toFixed(2);
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${name}</td>
          <td>${qty}</td>
          <td>${unit}</td>
          <td>${new Date(lastUpdated).toLocaleString()}</td>
        `;
        tbody.appendChild(row);
      }
    } catch (e) {
      console.warn(`Failed to parse data for ${name}`);
    }
  });
}

// ✅ Fixed: Populate Usage Report (from localStorage log)
function populateUsageData() {
  const table = document.getElementById("usageTable");
  const tbody = table.querySelector("tbody");
  tbody.innerHTML = "";

  const usageData = JSON.parse(localStorage.getItem("usageLog") || "[]");

  usageData.forEach(item => {
    const row = document.createElement("tr");
    const dt = new Date(item.time);
    const dateStr = dt.toLocaleDateString();
    const timeStr = dt.toLocaleTimeString();

row.innerHTML = `
  <td>${item.name}</td>
  <td>${item.qty}</td>
  <td>${item.unit}</td>
  <td>${item.user}</td>
  <td>${dateStr}</td>
  <td>${timeStr}</td>
`;
    tbody.appendChild(row);
  });
}

// Initialize
window.onload = function () {
  populateInventory();
  populateUsageData();
  refreshInsights();
};

window.addEventListener("storage", function (e) {
  if (e.key) {
    populateInventory();
    populateUsageData();
    refreshInsights();
  }
});

function goBack(){ window.location.href="inventory.html"; }
