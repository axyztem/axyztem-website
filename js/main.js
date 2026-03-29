const preparing = document.getElementById("preparing");
const ready = document.getElementById("ready");
const completed = document.getElementById("completed");
const ticketInput = document.getElementById("ticketInput");

function addTicket() {
  const ticket = ticketInput.value.trim();
  if (!ticket) return;

  // Create ticket element
  const li = document.createElement("li");
  li.textContent = ticket;
  li.addEventListener("click", () => moveTicket(li));
  
  preparing.appendChild(li);
  ticketInput.value = "";
}

// Move ticket between states
function moveTicket(ticket) {
  if (ticket.parentElement === preparing) {
    ticket.classList.add("ready");
    ready.appendChild(ticket);
    alert(`Ticket ${ticket.textContent} is READY. Customer phone will ring!`);
  } else if (ticket.parentElement === ready) {
    ticket.classList.remove("ready");
    ticket.classList.add("completed");
    completed.appendChild(ticket);
    alert(`Ticket ${ticket.textContent} is COMPLETED. Customer collected food.`);
  }
}