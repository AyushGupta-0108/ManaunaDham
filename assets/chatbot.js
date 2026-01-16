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
    }
  `;
  document.head.appendChild(style);

  const btn = document.createElement("div");
  btn.className = "manauna-chat-btn";
  btn.textContent = "Chat Karein";
  btn.onclick = () => {
    box.style.display = "block";
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
• Token ke baad Mahant Ji ka darshan hota hai<br>
• Mahant Ji apne haathon se Abhimantrit Shyam Jal dete hain<br>
• Line comparatively fast hoti hai<br><br>

<b>2️⃣ Jab PATIENT present NA ho:</b><br>
• Family member Shyam Jal lene aata hai<br>
• Patient Token nahi milta<br>
• General Shyam Jal Line follow hoti hai<br>
• Line lambi hoti hai<br><br>

⚠️ Shyam Jal sirf mandir premises ke andar ek hi official shop se milta hai<br><br>

<b>Mahant Ji Availability:</b><br>
❌ Wednesday & Thursday nahi baithte<br>
⚠️ Kabhi-kabhi urgent kaam ki wajah se anya din bhi unavailable ho sakte hain<br><br>

📌 Patient Token ke liye advance booking nahi hoti<br><br>

<b>Isse zyada jaankari available nahi hai.</b><br><br>

<button class="chat-option" onclick="location.reload()">⬅ Back</button>
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

<button class="chat-option" onclick="location.reload()">⬅ Back</button>
`;
  }

  // OPTION 3 — SHYAM JAL ON-SITE
  if (option === 3) {
    box.innerHTML = `
<b>💧 Manauna Dham aakar Shyam Jal</b><br><br>

• Patient present ho to Patient Token Line<br>
• Patient present na ho to General Jal Line<br>
• General line lambi hoti hai<br><br>

⚠️ Advance booking possible nahi hai<br>
⚠️ Sirf official shop se jal milta hai<br><br>

<button class="chat-option" onclick="location.reload()">⬅ Back</button>
`;
  }

  // OPTION 4 — HOTEL / DHARAMSHALA
  if (option === 4) {
    box.innerHTML = `
<b>🏨 Hotel / Dharamshala – Booking & Jankari</b><br><br>

⚠️ January–February mein hotels jaldi full ho jaate hain<br>
Advance booking strongly recommended<br><br>

Website se booking par koi extra charge nahi hota<br><br>

<button class="chat-option" onclick="window.location.href='accommodations.html'">
Hotel / Dharamshala Page Par Jaayein
</button>

<button class="chat-option" onclick="location.reload()">⬅ Back</button>
`;
  }

  // OPTION 5 — RESTAURANT
  if (option === 5) {
    box.innerHTML = `
<b>🍽️ Restaurant – Khana Order & Jankari</b><br><br>

Verified restaurants available hain:<br>
• Food Plaza<br>
• Shiv Pizza Point<br>
• Kipps Restaurant<br><br>

<button class="chat-option" onclick="window.location.href='food.html'">
Food Page Par Jaayein
</button>

<button class="chat-option" onclick="location.reload()">⬅ Back</button>
`;
  }

  // OPTION 6 — TRANSPORT
  if (option === 6) {
    box.innerHTML = `
<b>🚕 Transport Seva</b><br><br>

Local transport aur travel assistance available hai.<br>
Rush days par pehle se planning zaroori hoti hai.<br><br>

<button class="chat-option" onclick="window.location.href='transport.html'">
Transport Page Par Jaayein
</button>

<button class="chat-option" onclick="location.reload()">⬅ Back</button>
`;
  }
};

})();
