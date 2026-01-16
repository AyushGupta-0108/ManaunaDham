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
    <div class="manauna-chat-body">
      🙏 Jai Shree Shyam<br><br>
      Yeh final safe chatbot base hai.<br>
      Ab isme features add kar sakte hain bina risk ke.
    </div>
  `;

  box.querySelector(".manauna-chat-close").onclick = () => {
    box.style.display = "none";
  };

  document.body.appendChild(btn);
  document.body.appendChild(box);
})();
