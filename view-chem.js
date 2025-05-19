const commonChemicals = ["Water", "Oxygen", "Carbon Dioxide", "Methane", "Ethanol", "Glucose", "Sulfuric Acid", "Acetic Acid", "Sodium Chloride", "Ammonia", "Hydrogen", "Nitrogen", "Carbon Monoxide", "Hydrochloric Acid", "Sodium Hydroxide", "Potassium Chloride", "Calcium Carbonate", "Methanol", "Acetone", "Ethylene"];

const chemicalStates = {
    "Water": "Liquid",
    "Oxygen": "Gas",
    "Carbon Dioxide": "Gas",
    "Methane": "Gas",
    "Ethanol": "Liquid",
    "Glucose": "Solid",
    "Sulfuric Acid": "Liquid",
    "Acetic Acid": "Liquid",
    "Sodium Chloride": "Solid",
    "Ammonia": "Gas",
    "Hydrogen": "Gas",
    "Nitrogen": "Gas",
    "Carbon Monoxide": "Gas",
    "Hydrochloric Acid": "Liquid", // Could also be a gas (hydrogen chloride)
    "Sodium Hydroxide": "Solid",
    "Potassium Chloride": "Solid",
    "Calcium Carbonate": "Solid",
    "Methanol": "Liquid",
    "Acetone": "Liquid",
    "Ethylene": "Gas"
};

document.addEventListener("DOMContentLoaded", loadChemicals);

async function loadChemicals() {
    const list = document.getElementById("chemicalList");
    list.innerHTML = "";
    document.getElementById("searchResult").classList.add("hidden");
    document.getElementById("title").innerText = "List of Chemicals";

    for (let chemical of commonChemicals) {
        try {
            let apiUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${chemical}/property/MolecularFormula,MolecularWeight,CanonicalSMILES,IUPACName/JSON`;
            let response = await fetch(apiUrl);
            if (!response.ok) throw new Error("Failed to fetch");
            let data = await response.json();
            if (!data || !data.PropertyTable || !data.PropertyTable.Properties || data.PropertyTable.Properties.length === 0) {
                console.warn(`No data found for ${chemical}`);
                continue; // Skip to the next chemical
            }
            let properties = data.PropertyTable.Properties[0];
            let state = chemicalStates[chemical] || "N/A";

            let item = document.createElement("div");
            item.className = "chemical-item";
            item.innerHTML = `
                <h3 class="chemical-name">${chemical}</h3>
                <p><span class="label">Formula:</span> <span class="value">${properties.MolecularFormula || 'N/A'}</span></p>
                <p><span class="label">Molecular Weight:</span> <span class="value">${properties.MolecularWeight || 'N/A'}</span></p>
                <p><span class="label">Physical State:</span> <span class="value">${state}</span></p>
                <p><span class="label">IUPAC Name:</span> <span class="value">${properties.IUPACName || 'N/A'}</span></p>
            `;
            list.appendChild(item);
        } catch (error) {
            console.error(`Error fetching ${chemical}:`, error);
             let item = document.createElement("div");
             item.className = "chemical-item error-item";
             item.innerHTML = `<h3>${chemical}</h3><p style="color:red;">Error fetching data</p>`;
             list.appendChild(item);
        }
    }
}

async function fetchChemicalData() {
    let chemicalName = document.getElementById("chemicalSearch").value;
    if (!chemicalName) {
        document.getElementById("searchResult").innerHTML = `<p style='color:red;'>Please enter a chemical name.</p>`;
        document.getElementById("searchResult").classList.remove("hidden");
        return;
    }
    let apiUrl = `https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/name/${chemicalName}/property/MolecularFormula,MolecularWeight,CanonicalSMILES,IUPACName/JSON`;
    try {
        let response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Chemical not found");
        let data = await response.json();

         if (!data || !data.PropertyTable || !data.PropertyTable.Properties || data.PropertyTable.Properties.length === 0) {
            document.getElementById("searchResult").innerHTML = `<p style='color:red;'>No data found for ${chemicalName}</p>`;
            document.getElementById("searchResult").classList.remove("hidden");
            return;
        }

        let properties = data.PropertyTable.Properties[0];
        let state = chemicalStates[chemicalName] || "N/A";

        document.getElementById("chemicalList").innerHTML = "";
        document.getElementById("title").innerText = `Results for ${chemicalName}`;
        let resultDiv = document.getElementById("searchResult");
        resultDiv.innerHTML = `
            <div class="chemical-item result-item">
                <h3 class="chemical-name">${chemicalName}</h3>
                <p><span class="label">Formula:</span> <span class="value">${properties.MolecularFormula || 'N/A'}</span></p>
                <p><span class="label">Molecular Weight:</span> <span class="value">${properties.MolecularWeight || 'N/A'}</span></p>
                <p><span class="label">Physical State:</span> <span class="value">${state}</span></p>
                <p><span class="label">IUPAC Name:</span> <span class="value">${properties.IUPACName || 'N/A'}</span></p>
            </div>
        `;
        resultDiv.classList.remove("hidden");
    } catch (error) {
        document.getElementById("searchResult").innerHTML = `<p style='color:red;'>Error: ${error.message}</p>`;
        document.getElementById("searchResult").classList.remove("hidden");

    }
}

function goBack() {
    window.history.back();
}

document.getElementById('chemicalSearch').addEventListener('input', function() {
    let query = this.value.toLowerCase();
    const list = document.getElementById("chemicalList");
    const chemicalItems = list.getElementsByClassName("chemical-item");

    for (let item of chemicalItems) {
        let chemicalName = item.querySelector(".chemical-name").textContent.toLowerCase();
        if (chemicalName.includes(query)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    }
});