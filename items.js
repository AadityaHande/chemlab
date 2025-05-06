const chemicals = [
    "Asbestos Sheet", "B.O.D. Bottle", "Burette 10mL", "Burette", "Burette Stand with Clip", "BOD Bottle", "Beaker 1000mL", "Beaker 500mL", "Beaker 250mL", "Beaker 100mL", "Beaker 25mL", "Beaker (some)", "Buchner Funnel (Small)", "Buchner Funnel (Big)", "Capillary Tube", "Conical Flask 1000mL", "Conical Flask 500mL", "Conical Flask 250mL", "Conical Flask 100mL", "Conical Flask with Gland", "Conical Flask with a Glee", "Conical Flask Wide Side", "Conical Flask (Tarsm)", "Crucible with Lid", "Congo Red Paper", "Cotton Bleached", "Dessicator", "Drop Bottle (Glass)", "Conical Flask (Nominal)", "Column Chromatography Flask", "Filter Flask (500mL)", "Fire Bucket with Sand", "Evaporating Dish", "First Aid Box", "Funnel", "Filter Paper", "Funnel 100mL", "Filter Flask 100mL", "Glass Funnel (Small Sink)", "Glass Column", "Gas Pipe", "Glass Rod", "Crucible (Couch Type)", "ICE Spot", "ID Jar", "IL Flask", "Landberger’s Apparatus", "Iodine Flask (Glass 2500mL)", "Measuring Cylinder", "Notice Board", "GIRAS 500mL", "Ostwald Viscometer", "Plastic Funnel (Big)", "Plastic Lid", "Measuring Cylinder (Plastic 100mL)", "Measuring Cylinder 10mL", "Measuring Cylinder 25mL", "Measuring Cylinder 50mL", "Measuring Cylinder 100mL", "Pipette 25mL", "Pipette 100mL", "Plastic Sample Bottle", "Pestle and Mortar", "Plastic Funnel (Small)", "Plastic Beaker 500mL", "Plastic Beaker 1L", "Pipe Clay Triangle", "Petri Dish", "Plastic Beaker 2500mL", "Plastic Beaker 250mL", "Plastic Water Bath", "Plastic Tray", "Rubber Cork", "Reagent Bottle", "Spatula (Metal)", "Test Tube Holder", "Reflux Condenser", "Spatula (Plastic)", "Test Tube Stand", "Rubber Tubing for Burette", "Steel Water Bath", "Thiele Tube", "Sodium Fusion Tube", "Scissors", "TLC Jar", "Round Bottom Flask (2 Neck)", "Specific Gravity Bottle", "Test Tube Box", "Round Bottom Flask 100mL", "Thermometer (110°C)", "Stalagmometer", "Thermometer (300°C)", "Separating Funnel", "Separating Funnel (M/S)", "Test Tube Brush 6", "Turmeric Paper", "Volumetric Flask 100mL", "Volumetric Flask 250mL", "Volumetric Flask 500mL", "Volumetric Flask 1000mL", "Volumetric Flask (Plastic 1000mL)", "Volumetric Flask (Plastic 500mL)", "Volumetric Flask (Glass 100mL)", "Viscometer 10mL", "Viscometer 25mL", "Wire Gauze", "White Can (5L)", "Wash Bottle (500mL Plastic)", "Whatman Filter Paper", "Watch Glass"
];

document.addEventListener("DOMContentLoaded", () => {
    loadChemicals();
    setupThemeToggle();
    displayLoggedInUser();
    setupSearch();
});

function loadChemicals() {
    const list = document.getElementById("chemicalList");
    if (!list) return;

    list.innerHTML = "";
    let hasChemicals = false;

    chemicals.forEach(chemical => {
        if (chemical.trim() === "") return;
        hasChemicals = true;
        let storedData = localStorage.getItem(chemical);
        let storedQuantity = 0;

        if (storedData) {
            const data = JSON.parse(storedData);
            storedQuantity = data.quantity || 0;
        }

        let item = document.createElement("div");
        item.className = "chemical-item";
        item.innerHTML = `
            <h3 class="chemical-name">${chemical}</h3>
            <div class="quantity-controls">
                <label for="set-${chemical}">Set Quantity:</label>
                <input type="number" id="set-${chemical}" placeholder="Set Quantity" min="0">
                <button onclick="setQuantity('${chemical}')">Set</button>
            </div>
            <div class="quantity-controls">
                <label for="use-${chemical}">Use Quantity:</label>
                <input type="number" id="use-${chemical}" placeholder="Use Quantity" min="0">
                <button onclick="useQuantity('${chemical}')">Use</button>
                <p class="available-quantity">Available: <span id="quantity-${chemical}">${storedQuantity}</span></p>
            </div>
        `;
        list.appendChild(item);
    });

    if (!hasChemicals) {
        list.innerHTML = "<p>No chemicals found.</p>";
    }
}

function goBack() {
    window.location.href = "./homepage.html";
}

function setQuantity(chemical) {
    let quantityInput = document.getElementById(`set-${chemical}`);
    if (!quantityInput) return;

    let quantity = quantityInput.value;
    if (quantity !== "") {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();

        const dataToStore = {
            quantity: quantity,
            lastUpdatedDate: formattedDate,
            lastUpdatedTime: formattedTime
        };
        localStorage.setItem(chemical, JSON.stringify(dataToStore));
        document.getElementById(`quantity-${chemical}`).innerText = quantity;
        quantityInput.value = "";

        // Store user activity
        storeUserActivity(chemical, "set", quantity);
    }
}

function useQuantity(chemical) {
    let usedInput = document.getElementById(`use-${chemical}`);
    if (!usedInput) return;

    let used = parseInt(usedInput.value) || 0;
    let storedData = localStorage.getItem(chemical);
    let storedQuantity = 0;

    if (storedData) {
        const data = JSON.parse(storedData);
        storedQuantity = parseInt(data.quantity) || 0;
    }

    let newQuantity = Math.max(storedQuantity - used, 0);

    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();

    const dataToStore = {
        quantity: newQuantity,
        lastUpdatedDate: formattedDate,
        lastUpdatedTime: formattedTime
    };
    localStorage.setItem(chemical, JSON.stringify(dataToStore));
    document.getElementById(`quantity-${chemical}`).innerText = newQuantity;
    usedInput.value = "";

    // Store user activity
    storeUserActivity(chemical, "use", used);
}

function resetQuantities() {
    chemicals.forEach(chemical => localStorage.removeItem(chemical));
    loadChemicals();
}

function setupThemeToggle() {
    const toggleButton = document.getElementById('toggleTheme');
    if (!toggleButton) return;

    const body = document.body;
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    if (isDarkMode) {
        body.classList.add('dark-mode');
        toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.classList.remove('dark-mode');
        toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const currentMode = localStorage.getItem('darkMode');
        const newMode = currentMode === 'enabled' ? 'disabled' : 'enabled';
        localStorage.setItem('darkMode', newMode);

        if (newMode === 'enabled') {
            toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
}

function displayLoggedInUser() {
    const userNameSpan = document.getElementById("user-name");
    const userEmailSpan = document.getElementById("user-email");
    if (!userNameSpan || !userEmailSpan) return;

    // Simulate retrieving user data.  Replace this with your actual user data retrieval.
    const user = {
        name: "John Doe",
        email: "john.doe@example.com"
    };

    userNameSpan.textContent = `Name: ${user.name}`;
    userEmailSpan.textContent = `Email: ${user.email}`;
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const chemicalItems = document.querySelectorAll('.chemical-item');

        chemicalItems.forEach(item => {
            const chemicalName = item.querySelector('.chemical-name').textContent.toLowerCase();
            if (chemicalName.includes(searchTerm)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

function storeUserActivity(chemical, action, quantity) {
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    const userName = document.getElementById("user-name").textContent.replace("Name: ", "") || "N/A";
    const userEmail = document.getElementById("user-email").textContent.replace("Email: ", "") || "N/A";

    const activity = {
        chemical: chemical,
        action: action,
        quantity: quantity,
        userName: userName,
        userEmail: userEmail,
        date: formattedDate,
        time: formattedTime
    };

    // Store the activity in localStorage
    let activities = JSON.parse(localStorage.getItem('userActivities')) || [];
    activities.push(activity);
    localStorage.setItem('userActivities', JSON.stringify(activities));
}

function manualMode(){
    window.location.href="manual_chemical.html"
}

function report(){
    window.location.href="item-report.html"
}

function exportChemicalsToExcel() {
    let csvContent = "Chemical Name,Available Quantity,Last Updated Date,Last Updated Time\n";
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    const userName = document.getElementById("user-name").textContent.replace("Name: ", "") || "N/A";
    const userEmail = document.getElementById("user-email").textContent.replace("Email: ", "") || "N/A";

    chemicals.forEach(chemical => {
        const storedData = localStorage.getItem(chemical);
        let quantity = 0;
        let lastUpdatedDate = '-';
        let lastUpdatedTime = '-';
        if (storedData) {
            const data = JSON.parse(storedData);
            quantity = data.quantity || 0;
            lastUpdatedDate = data.lastUpdatedDate || '-';
            lastUpdatedTime = data.lastUpdatedTime || '-';
        }
        csvContent += `${chemical},${quantity},${lastUpdatedDate},${lastUpdatedTime}\n`;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "chemical_inventory.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}