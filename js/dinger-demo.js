function addListItem(ul, text, colorClass){
    const li = document.createElement("li");
    li.textContent = text;
    if(colorClass) li.classList.add(colorClass);
    li.classList.add("slide-in"); // Animate slide-in
    ul.appendChild(li);
    // Remove animation class after animation ends to allow re-animation later
    li.addEventListener('animationend', ()=> li.classList.remove('slide-in'));
}

// Update updateLists function
function updateLists(){
    // PREPARING
    const prepUl = document.getElementById("preparing-list");
    prepUl.innerHTML = "";
    preparingList.sort().forEach(n => addListItem(prepUl, n, "preparing"));

    // READY
    const readyUl = document.getElementById("ready-list");
    readyUl.innerHTML = "";
    readyList.sort((a,b)=>a.num-b.num)
             .forEach(item => addListItem(readyUl, item.num, item.color));

    // COMPLETED
    const compUl = document.getElementById("completed-list");
    compUl.innerHTML = "";
    completedList.sort().forEach(n => addListItem(compUl, n, "completed"));
}