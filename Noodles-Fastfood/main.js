// ===== RESTAURANT CONFIG =====
const RESTO_NAME = "Noodles Fastfood";

// ===== DATA STORAGE =====
let preparingList = JSON.parse(localStorage.getItem(`${RESTO_NAME}-preparing`)) || [];
let readyList = JSON.parse(localStorage.getItem(`${RESTO_NAME}-ready`)) || [];

// ===== HELPERS =====
function formatTicket(num) {
    return String(num).padStart(4, '0');
}

// ===== RENDER =====
function renderLists() {
    const prepEl = document.getElementById("preparing-list");
    const readyEl = document.getElementById("ready-list");
    if (prepEl) prepEl.innerHTML = preparingList.map(t => `<li>${t}</li>`).join('');
    if (readyEl) readyEl.innerHTML = readyList.map(t => `<li>${t}</li>`).join('');
}

function scrollLists() {
    ["preparing-list", "ready-list"].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.scrollTop = el.scrollHeight;
    });
}

// ===== CASHIER DASHBOARD =====
function initCashier(maxButtons=10, startTicket=1){
    const container = document.getElementById("cashier-buttons");
    if(!container) return;

    let currentTicket = startTicket;

    function renderButtons() {
        container.innerHTML = '';
        for(let i=0;i<maxButtons;i++){
            const btnTicket = formatTicket(currentTicket+i);
            const btn = document.createElement("button");
            btn.innerText = btnTicket;
            btn.onclick = ()=>{
                preparingList.push(btnTicket);
                localStorage.setItem(`${RESTO_NAME}-preparing`, JSON.stringify(preparingList));
                currentTicket++;
                renderButtons();
                renderLists();
            };
            container.appendChild(btn);
        }
    }
    renderButtons();
}

// ===== WAITER DASHBOARD =====
function markReady() {
    const input = document.getElementById("ready-ticket-input");
    if(!input) return;
    let ticket = formatTicket(Number(input.value));
    if(preparingList.includes(ticket)){
        preparingList = preparingList.filter(t=>t!==ticket);
        readyList.push(ticket);
        localStorage.setItem(`${RESTO_NAME}-preparing`, JSON.stringify(preparingList));
        localStorage.setItem(`${RESTO_NAME}-ready`, JSON.stringify(readyList));
        input.value = '';
        renderLists();
        alert(`Ticket ${ticket} is now READY`);
    } else {
        alert(`Ticket ${ticket} not found in PREPARING list!`);
    }
}

// ===== INITIAL RENDER =====
renderLists();
scrollLists();