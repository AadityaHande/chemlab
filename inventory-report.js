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
  const table = document.getElementById("usageTable");
  const rows = table.getElementsByTagName("tr");
  Array.from(rows).forEach(row => {
    row.style.display = "none"; // Hide all rows
  });
  alert("Logs cleared!");
}

// Toggle columns for User and Time (for Chemical Usage Report)
function toggleColumns() {
  const table = document.getElementById("usageTable");
  const headers = table.querySelectorAll("th");
  const userColumnIndex = 3; // User column
  const timeColumnIndex = 4; // Time column

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

// Refresh insights (for Usage Summary Report)
function refreshInsights() {
  const table = document.getElementById("insightTable");
  const tbody = table.querySelector("tbody");

  // Placeholder logic for refreshing insights (example data)
  tbody.innerHTML = ""; // Clear existing data

  const data = [
    { chemical: "Chemical A", usage: 100 },
    { chemical: "Chemical B", usage: 250 },
    { chemical: "Chemical C", usage: 400 },
  ];

  data.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.chemical}</td><td>${item.usage}</td>`;
    tbody.appendChild(row);
  });

  alert("Insights refreshed!");
}

// Placeholder for renewing stock (Current Chemical Inventory Report)
function renewStock() {
  const table = document.getElementById("inventoryTable");
  const rows = table.querySelectorAll("tr");

  rows.forEach(row => {
    const cells = row.querySelectorAll("td");
    if (cells.length > 0) {
      const qtyCell = cells[1]; // Quantity column
      const currentQty = parseInt(qtyCell.textContent);
      const updatedQty = currentQty + 100; // Add 100 as a placeholder for renewal
      qtyCell.textContent = updatedQty;
    }
  });
  alert("Stock renewed!");
}

// Placeholder logic to populate Chemical Inventory Report (Current Chemical Inventory)
function populateInventory() {
  const table = document.getElementById("inventoryTable");
  const tbody = table.querySelector("tbody");

  // Example inventory data
  const inventoryData = [
    { name: "Chemical A", qty: 50, unit: "L", lastUpdated: "2025-05-01" },
    { name: "Chemical B", qty: 30, unit: "kg", lastUpdated: "2025-04-28" },
    { name: "Chemical C", qty: 100, unit: "L", lastUpdated: "2025-05-02" },
  ];

  inventoryData.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.name}</td><td>${item.qty}</td><td>${item.unit}</td><td>${item.lastUpdated}</td>`;
    tbody.appendChild(row);
  });
}

// Placeholder logic to populate Usage Report (Chemical Usage Report)
function populateUsageData() {
  const table = document.getElementById("usageTable");
  const tbody = table.querySelector("tbody");

  // Example usage data
  const usageData = [
    { name: "Chemical A", qty: 10, unit: "L", user: "User1", time: "2025-05-01 10:00" },
    { name: "Chemical B", qty: 5, unit: "kg", user: "User2", time: "2025-05-01 11:00" },
    { name: "Chemical C", qty: 20, unit: "L", user: "User3", time: "2025-05-02 14:00" },
  ];

  usageData.forEach(item => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.name}</td><td>${item.qty}</td><td>${item.unit}</td><td>${item.user}</td><td>${item.time}</td>`;
    tbody.appendChild(row);
  });
}

// Initialize with some default data
window.onload = function() {
  populateInventory();
  populateUsageData();
};
