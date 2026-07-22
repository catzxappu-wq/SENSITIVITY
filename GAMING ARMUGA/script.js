const searchInput = document.getElementById("searchInput");
const phoneCards = document.querySelectorAll(".phone-card");

const popup = document.getElementById("popup");
const phoneName = document.getElementById("phoneName");
const phoneDetails = document.getElementById("phoneDetails");

// Live Search
searchInput.addEventListener("keyup", function () {

    let value = this.value.toLowerCase();

    phoneCards.forEach(card => {

        let name = card.innerText.toLowerCase();

        if(name.includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});


// Phone Click

phoneCards.forEach(card=>{

    card.addEventListener("click",()=>{

        let selected = card.dataset.phone;

        let phone = phones.find(p=>p.name===selected);

        if(phone){

            phoneName.innerHTML = phone.name;

            phoneDetails.innerHTML = `
            <b>🎯 General :</b> ${phone.general}<br><br>

            <b>🔴 Red Dot :</b> ${phone.redDot}<br><br>

            <b>🔍 2X Scope :</b> ${phone.scope2x}<br><br>

            <b>🎯 4X Scope :</b> ${phone.scope4x}<br><br>

            <b>🎯 Sniper :</b> ${phone.sniper}<br><br>

            <b>👀 Free Look :</b> ${phone.freeLook}
            `;

            popup.style.display="flex";

        }

    });

});


// Close Popup

function closePopup(){

    popup.style.display="none";

}


// Copy Sensitivity

function copyData(){

    let text =

phoneName.innerText + "\n\n" +

phoneDetails.innerText;

    navigator.clipboard.writeText(text);

    alert("✅ Sensitivity Copied Successfully!");

}


// Close when clicking outside popup

window.onclick=function(event){

    if(event.target==popup){

        popup.style.display="none";

    }

}