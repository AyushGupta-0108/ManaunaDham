(function () {
  if (document.getElementById("manauna-chat-loaded")) return;

  const marker = document.createElement("div");
  marker.id = "manauna-chat-loaded";
  document.body.appendChild(marker);

  const style = document.createElement("style");
  style.innerHTML = `
    .manauna-chat-btn {
      position: fixed;
      bottom: 20px;
      left: 20px;
      background: #7a0000;
      color: white;
      padding: 14px 20px;
      border-radius: 30px;
      font-weight: bold;
      cursor: pointer;
      z-index: 999999;
      font-family: Segoe UI, Arial;
    }
     .chat-option {
  display: block;
  width: 100%;
  margin-bottom: 8px;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #7a0000;
  background: white;
  color: #7a0000;
  font-weight: bold;
  cursor: pointer;
  text-align: left;
}


    .manauna-chat-box {
      display: none;
      position: fixed;
      bottom: 80px;
      left: 20px;
      width: 320px;
      max-height: 70vh;
      background: white;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,.3);
      z-index: 999999;
      overflow: hidden;
      font-family: Segoe UI, Arial;
    }

    .manauna-chat-header {
      background: #7a0000;
      color: white;
      padding: 12px;
      font-weight: bold;
    }

    .manauna-chat-close {
      float: right;
      cursor: pointer;
      font-size: 18px;
    }
.manauna-chat-body {
  padding: 12px;
  font-size: 14px;
  overflow-y: auto;
  max-height: 50vh;
}

    /* MOBILE IMPROVEMENTS */
@media (max-width: 480px) {

  .manauna-chat-box {
    width: calc(100vw - 20px);
    left: 10px;
    bottom: 70px;
    max-height: calc(100vh - 90px);
  }

  .manauna-chat-body {
    font-size: 15px;
    line-height: 1.6;
  }

  .chat-option {
    font-size: 15px;
    padding: 12px;
  }
}

  `;
  document.head.appendChild(style);

  const btn = document.createElement("div");
  btn.className = "manauna-chat-btn";
  btn.textContent = "Chat Karein";
 btn.onclick = () => {
  if (box.style.display === "block") {
    box.style.display = "none";
    resetChat();
} else {
  box.style.display = "block";
  resetChat();
}

};


  const box = document.createElement("div");
  box.className = "manauna-chat-box";
  box.innerHTML = `
    <div class="manauna-chat-header">
      Manauna Dham Chat
      <span class="manauna-chat-close">×</span>
    </div>
    <div class="manauna-chat-body" id="chatContent">

🙏 Jai Shree Shyam<br><br>
Welcome to <b>ManaunaDham.org.in</b><br><br>

❌ Calls supported nahi hain<br><br>

<b>Kripya neeche se option chunein:</b><br><br>

<button class="chat-option" onclick="showInfo(1)">
1️⃣ Mahant Ji se Darshan paane ki poori jankari
</button>

<button class="chat-option" onclick="showInfo(2)">
2️⃣ Shyam Jal ghar par courier karwana hai
</button>

<button class="chat-option" onclick="showInfo(3)">
3️⃣ Manauna Dham aakar Shyam Jal lena – services jankari
</button>

<button class="chat-option" onclick="showInfo(4)">
4️⃣ Hotel / Dharamshala – Booking aur jankari
</button>

<button class="chat-option" onclick="showInfo(5)">
5️⃣ Restaurant – Khana order aur jankari
</button>

<button class="chat-option" onclick="showInfo(6)">
6️⃣ Transport seva
</button>

</div>

  `;

  box.querySelector(".manauna-chat-close").onclick = () => {
    box.style.display = "none";
  };

  document.body.appendChild(btn);
  document.body.appendChild(box);
  window.showInfo = function(option) {
 const box = document.getElementById("chatContent");


  // OPTION 1 — DARSHAN / PATIENT TOKEN / MAHANT JI
  if (option === 1) {
    box.innerHTML = `
<b>🩺 DARSHAN & SHYAM JAL SYSTEM – MANAUNA DHAM</b><br><br>

<b>1️⃣ Jab PATIENT khud present ho:</b><br>
• Patient Token Line mein lagna hota hai<br>
• Token milne ke baad Mahant Ji ka darshan hota hai<br>
• Mahant Ji apne haathon se Abhimantrit Shyam Jal dete hain<br>
• Line comparatively fast hoti hai<br><br>

<b>2️⃣ Jab PATIENT present NA ho:</b><br>
• Family member Shyam Jal lene aata hai<br>
• Patient Token nahi milta<br>
• General Shyam Jal Line mai lagna hota hai<br>
• Line lambi hoti hai<br><br>

⚠️ Shyam Jal sirf mandir ground ke andar ek hi official shop se milta hai<br><br>

<b>Mahant Ji Availability:</b><br>
❌ Wednesday & Thursday nahi baithte<br>
⚠️ Kabhi-kabhi urgent kaam ki wajah se anya din bhi unavailable ho sakte hain<br>
JIS DIN MAHANT JI URGENT KAAM SE GAYE HO. USDIN KI JANKARI PHELE SE HAME PATA NHI HOTI.<br><br>

📌 Patient Token ke liye advance booking nahi hoti<br><br>

<b>Isse zyada jaankari available nahi hai.</b><br><br>

<hr>
<button class="chat-option" onclick="resetChat()">🏠 Main Menu</button>

`;
  }

  // OPTION 2 — SHYAM JAL COURIER
  if (option === 2) {
    box.innerHTML = `
<b>💧 Shyam Jal Courier</b><br><br>

Shyam Jal ghar par courier karwaya ja sakta hai.<br>
Price address ke hisaab se decide hota hai.<br><br>

<button class="chat-option" onclick="window.location.href='jal.html'">
Jal Order Page Par Jaayein
</button>

<hr>
<button class="chat-option" onclick="resetChat()">🏠 Main Menu</button>


`;
  }

  // OPTION 3 — SHYAM JAL ON-SITE
  if (option === 3) {
    box.innerHTML = `
<b>💧 Manauna Dham aakar Shyam Jal</b><br><br>

• Patient present ho to Patient Token Line<br>
• Patient present na ho to General Jal Line<br>
• General line lambi hoti hai<br><br>

Hamari taraf se aapko bina extra cost ke neechi likhi services milengi:<br>
• Hotel Booking<br>
• Khaana Delivery<br>
• Shyam Jal Delivery<br>
• Prasad Delivery<br>
• Saadhan Booking<br><br>

⚠️ Advance booking possible nahi hai<br>
⚠️ Sirf official shop se jal milta hai<br><br>
<hr>
<button class="chat-option" onclick="resetChat()">🏠 Main Menu</button>


`;
  }

  // OPTION 4 — HOTEL / DHARAMSHALA
  if (option === 4) {
    box.innerHTML = `
<b>🏨 Hotel / Dharamshala – Booking & Jankari</b><br><br>

⚠️ January–February mein hotels jaldi full ho jaate hain<br>
Advance booking karke hi aae(Recommended)<br><br>

Website se booking par koi extra charge nahi hota<br><br>

<button class="chat-option" onclick="window.location.href='accommodations.html'">
Hotel / Dharamshala Page Par Jaayein
</button>
<hr>
<button class="chat-option" onclick="resetChat()">🏠 Main Menu</button>

`;
  }

  // OPTION 5 — RESTAURANT
  if (option === 5) {
    box.innerHTML = `
<b>🍽️ Restaurant – Khana Order & Jankari</b><br><br>

Verified restaurants available hain jaise:<br>
• Food Plaza<br>
• Shiv Pizza Point<br>
• Kipps Restaurant<br><br>

Aur bhi kai jud rhe hai.<br>

Bhakto ke liye special rate me Cash on delivery khaana available<br>

Khaana Seedhe aapke hotel ya aap mandir area mai aap jha bhi honge vha aa jaega<br><br>

<button class="chat-option" onclick="window.location.href='food.html'">
Food Page Par Jaayein
</button>

<hr>
<button class="chat-option" onclick="resetChat()">🏠 Main Menu</button>


`;
  }

  // OPTION 6 — TRANSPORT
  if (option === 6) {
    box.innerHTML = `
<b>🚕 Transport Seva</b><br><br>

Local transport aur travel ke liye saadhan available hai.<br>
Saadhan jaise- Taxi, Bus, Rickshaw- Sab aapke hisab se book ho skta hai.<br><br>

Rate bilkul uchit tay kiye gaye hai bhakto ke liye.<br><br>

<button class="chat-option" onclick="window.location.href='transport.html'">
Transport Page Par Jaayein
</button>

<hr>
<button class="chat-option" onclick="resetChat()">🏠 Main Menu</button>


`;
  }
};
window.resetChat = function () {
  const content = document.getElementById("chatContent");
  if (!content) return;

  content.innerHTML = `
🙏 Jai Shree Shyam<br><br>
Welcome to <b>ManaunaDham.org.in</b><br><br>

❌ Calls supported nahi hain<br><br>

<b>Kripya neeche se option chunein:</b><br><br>

<button class="chat-option" onclick="showInfo(1)">1️⃣ Mahant Ji se Darshan paane ki poori jankari</button>
<button class="chat-option" onclick="showInfo(2)">2️⃣ Shyam Jal ghar par courier karwana hai</button>
<button class="chat-option" onclick="showInfo(3)">3️⃣ Manauna Dham aakar Shyam Jal lena – services jankari</button>
<button class="chat-option" onclick="showInfo(4)">4️⃣ Hotel / Dharamshala – Booking aur jankari</button>
<button class="chat-option" onclick="showInfo(5)">5️⃣ Restaurant – Khana order aur jankari</button>
<button class="chat-option" onclick="showInfo(6)">6️⃣ Transport seva</button>
`;
};
// ================= FOOD ORDER CHAT FLOW =================
let foodOrderData = {
  restaurant: "",
  name: "",
  order: "",
  address: "",
  phone: ""
};

window.startFoodOrder = function (restaurantName = "") {
  const chatBox = document.querySelector(".manauna-chat-box");
if (chatBox) chatBox.style.display = "block";
  
  const box = document.getElementById("chatContent");
  if (!box) return;

  foodOrderData = {
    restaurant: restaurantName,
    name: "",
    order: "",
    address: "",
    phone: ""
  };

  box.innerHTML = `
<b>🍽️ Food Order</b><br><br>

<b>Restaurant Name:</b><br>
<input type="text" id="fo_restaurant" value="${restaurantName}" style="width:100%;padding:8px"><br><br>

<button class="chat-option" onclick="foodStepName()">Next ➡️</button>
<button class="chat-option" onclick="resetChat()">🏠 Cancel</button>
`;
};
  
window.foodStepName = function () {

  const r = document.getElementById("fo_restaurant").value.trim();
  if (!r) return alert("Restaurant name required");

  foodOrderData.restaurant = r;

document.getElementById("chatContent").innerHTML = `
<b>👤 Your Name</b><br><br>
<input type="text" id="fo_name" placeholder="Enter your name" style="width:100%;padding:8px"><br><br>

<button class="chat-option" onclick="foodStepOrder()">Next ➡️</button>
`;
}

window.foodStepOrder = function () {

  const n = document.getElementById("fo_name").value.trim();
  if (!n) return alert("Name required");

  foodOrderData.name = n;

document.getElementById("chatContent").innerHTML = `
<b>📝 What do you want to order?</b><br><br>
<textarea id="fo_order" placeholder="Write full order here" style="width:100%;padding:8px;height:80px"></textarea><br><br>

<button class="chat-option" onclick="foodStepAddress()">Next ➡️</button>
`;
}

window.foodStepAddress = function () {

  const o = document.getElementById("fo_order").value.trim();
  if (!o) return alert("Order details required");

  foodOrderData.order = o;

  document.getElementById("chatContent").innerHTML = `
<b>📍 Delivery Address</b><br><br>
<textarea id="fo_address" placeholder="Full address" style="width:100%;padding:8px;height:70px"></textarea><br><br>

<button class="chat-option" onclick="foodStepPhone()">Next ➡️</button>
`;
}

window.foodStepPhone = function () {

  const a = document.getElementById("fo_address").value.trim();
  if (!a) return alert("Address required");

  foodOrderData.address = a;

  document.getElementById("chatContent").innerHTML = `
<b>📞 Phone Number</b><br><br>
<input type="tel" id="fo_phone" placeholder="10 digit number" style="width:100%;padding:8px"><br><br>

<button class="chat-option" onclick="foodToWhatsApp()">Proceed to WhatsApp ✅</button>
`;
}

window.foodToWhatsApp = function () {
  const p = document.getElementById("fo_phone").value.trim();
  if (!p) return alert("Phone number required");

  foodOrderData.phone = p;

  const msg = `
🍽️ FOOD ORDER REQUEST

Restaurant: ${foodOrderData.restaurant}
Name: ${foodOrderData.name}
Phone: ${foodOrderData.phone}
Address: ${foodOrderData.address}

Order:
${foodOrderData.order}
  `.trim();

  const url =
    "https://wa.me/917817803342?text=" +
    encodeURIComponent(msg);

  window.location.href = url;
};

// ================= HOTEL BOOKING CHAT FLOW =================
let hotelBookingData = {
  hotel: "",
  checkin: "",
  checkout: "",
  name: "",
  phone: "",
  price: ""
};

window.startHotelBooking = function (hotelName = "") {
  const chatBox = document.querySelector(".manauna-chat-box");
if (chatBox) chatBox.style.display = "block";

  const box = document.getElementById("chatContent");
  if (!box) return;

  hotelBookingData = {
    hotel: hotelName,
    checkin: "",
    checkout: "",
    name: "",
    phone: "",
    price: ""
  };

  box.innerHTML = `
<b>🏨 Hotel Booking Request</b><br><br>

<b>Hotel Name:</b><br>
<input type="text" id="hb_hotel" value="${hotelName}" style="width:100%;padding:8px"><br><br>

<button class="chat-option" onclick="hotelStepDates()">Next ➡️</button>
<button class="chat-option" onclick="resetChat()">🏠 Cancel</button>
`;
};

window.hotelStepDates = function () {
  const h = document.getElementById("hb_hotel").value.trim();
  if (!h) return alert("Hotel name required");

  hotelBookingData.hotel = h;

  document.getElementById("chatContent").innerHTML = `
<b>📅 Stay Dates</b><br><br>

Check-in Date:<br>
<input type="date" id="hb_checkin" style="width:100%;padding:8px"><br><br>

Check-out Date:<br>
<input type="date" id="hb_checkout" style="width:100%;padding:8px"><br><br>

<button class="chat-option" onclick="hotelStepName()">Next ➡️</button>
`;
}

window.hotelStepName = function () {
  const ci = document.getElementById("hb_checkin").value;
  const co = document.getElementById("hb_checkout").value;
  if (!ci || !co) return alert("Both dates required");

  hotelBookingData.checkin = ci;
  hotelBookingData.checkout = co;

 document.getElementById("chatContent").innerHTML = `

<b>👤 Guest Name</b><br><br>
<input type="text" id="hb_name" placeholder="Your full name" style="width:100%;padding:8px"><br><br>

<button class="chat-option" onclick="hotelStepPhone()">Next ➡️</button>
`;
}

window.hotelStepPhone = function () {
  const n = document.getElementById("hb_name").value.trim();
  if (!n) return alert("Name required");

  hotelBookingData.name = n;

  document.getElementById("chatContent").innerHTML = `

<b>📞 Phone Number</b><br><br>
<input type="tel" id="hb_phone" placeholder="10 digit number" style="width:100%;padding:8px"><br><br>

<button class="chat-option" onclick="hotelStepPrice()">Next ➡️</button>
`;
}

window.hotelStepPrice = function () {
  const p = document.getElementById("hb_phone").value.trim();
  if (!p) return alert("Phone number required");

  hotelBookingData.phone = p;

  document.getElementById("chatContent").innerHTML = `

<b>💰 Preferred Room Price (per night)</b><br><br>
<input type="text" id="hb_price" placeholder="e.g. ₹1200 / ₹2400" style="width:100%;padding:8px"><br><br>

<button class="chat-option" onclick="hotelToWhatsApp()">Proceed to WhatsApp ✅</button>
`;
}

window.hotelToWhatsApp = function () {
  const pr = document.getElementById("hb_price").value.trim();
  if (!pr) return alert("Price preference required");

  hotelBookingData.price = pr;

  const msg = `
🏨 HOTEL BOOKING REQUEST

Hotel: ${hotelBookingData.hotel}
Guest Name: ${hotelBookingData.name}
Phone: ${hotelBookingData.phone}

Check-in: ${hotelBookingData.checkin}
Check-out: ${hotelBookingData.checkout}

Preferred Price: ${hotelBookingData.price}
  `.trim();

  const url =
    "https://wa.me/917817803342?text=" +
    encodeURIComponent(msg);

  window.location.href = url;
};

// ================= SHYAM JAL ORDER CHAT FLOW =================
let jalOrderData = {
  name: "",
  phone: "",
  address: "",
  bottles: ""
};

window.startJalOrder = function () {
  const chatBox = document.querySelector(".manauna-chat-box");
  if (chatBox) chatBox.style.display = "block";

  const box = document.getElementById("chatContent");
  if (!box) return;

  jalOrderData = { name: "", phone: "", address: "", bottles: "" };

  box.innerHTML = `
<b>💧 Shyam Jal Home Delivery</b><br><br>

<b>📌 Important Information:</b><br>
• Shyam Jal sirf <b>Mandir area ke ek hi official counter</b> se liya jata hai<br>
• Jal <b>Mahant Ji dwara Abhimantrit</b> hota hai<br><br>

<b>Mahant Ji ka nirdesh:</b><br>
“Roz subah <b>11:55 AM se pehle</b> ek dhakkan jal piyen”<br><br>

<b>📖 Mahatva:</b><br>
Manauna Khatu Shyam Ji ki <b>Janmbhoomi</b> hai.  
Yahan ka jal shareer aur ghar ki <b>negative urja ko door</b> karta hai.<br><br>

<button class="chat-option" onclick="jalStepName()">Order Continue ➡️</button>
<button class="chat-option" onclick="resetChat()">🏠 Cancel</button>
`;
};

window.jalStepName = function () {
  document.getElementById("chatContent").innerHTML = `
<b>👤 Aapka Naam</b><br><br>
<input type="text" id="jal_name" placeholder="Full Name" style="width:100%;padding:8px"><br><br>
<button class="chat-option" onclick="jalStepPhone()">Next ➡️</button>
`;
};

window.jalStepPhone = function () {
  const n = document.getElementById("jal_name").value.trim();
  if (!n) return alert("Naam likhna zaroori hai");

  jalOrderData.name = n;

  document.getElementById("chatContent").innerHTML = `
<b>📞 Phone Number</b><br><br>
<input type="tel" id="jal_phone" placeholder="10 digit number" style="width:100%;padding:8px"><br><br>
<button class="chat-option" onclick="jalStepAddress()">Next ➡️</button>
`;
};

window.jalStepAddress = function () {
  const p = document.getElementById("jal_phone").value.trim();
  if (!p) return alert("Phone number zaroori hai");

  jalOrderData.phone = p;

  document.getElementById("chatContent").innerHTML = `
<b>📍 Full Delivery Address</b><br><br>
<textarea id="jal_address" placeholder="House no, city, state, pincode"
style="width:100%;padding:8px;height:80px"></textarea><br><br>
<button class="chat-option" onclick="jalStepBottles()">Next ➡️</button>
`;
};

window.jalStepBottles = function () {
  const a = document.getElementById("jal_address").value.trim();
  if (!a) return alert("Address zaroori hai");

  jalOrderData.address = a;

  document.getElementById("chatContent").innerHTML = `
<b>💧 Shyam Jal Bottles (Quantity)</b><br><br>
<input type="number" id="jal_bottles" placeholder="Jaise: 2 / 5 / 10"
style="width:100%;padding:8px"><br><br>

<b>💰 Cost Calculation:</b><br>
• ₹20 × bottles<br>
• Packaging cost extra<br>
• Logistics + Handling<br>
• Shipping address ke hisaab se<br><br>

<button class="chat-option" onclick="jalToWhatsApp()">Submit Order ✅</button>
`;
};

window.jalToWhatsApp = function () {
  const b = document.getElementById("jal_bottles").value.trim();
  if (!b) return alert("Bottle quantity likhen");

  jalOrderData.bottles = b;

  const msg = `
💧 SHYAM JAL DELIVERY ORDER

Name: ${jalOrderData.name}
Phone: ${jalOrderData.phone}

Address:
${jalOrderData.address}

Bottles: ${jalOrderData.bottles}

Cost:
₹20 × bottles + packaging + shipping + other
(Shipping address ke hisaab se)

Source:
Official Shyam Jal Counter – Manauna Dham
Abhimantrit by Mahant Ji
`.trim();

  window.location.href =
    "https://wa.me/917817803342?text=" + encodeURIComponent(msg);
};

})();
