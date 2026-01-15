(function () {

  if (window.manaunaChatLoaded) return;
  window.manaunaChatLoaded = true;

  const style = document.createElement("style");
  style.innerHTML = `
  .chat-float{
    position:fixed;
    bottom:20px;
    left:20px;
    width:60px;
    height:60px;
    background:linear-gradient(135deg,#7a0000,#4d0000);
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    z-index:99999;
    box-shadow:0 5px 20px rgba(0,0,0,.4);
  }
  .chat-float i{color:white;font-size:26px}

  .chat-box{
    position:fixed;
    bottom:90px;
    left:20px;
    width:360px;
    max-height:75vh;
    background:white;
    border-radius:15px;
    display:none;
    flex-direction:column;
    box-shadow:0 5px 40px rgba(0,0,0,.4);
    overflow:hidden;
    z-index:99999;
  }
  .chat-box.active{display:flex}

  .chat-header{
    background:#7a0000;
    color:white;
    padding:14px;
    font-weight:700;
    flex-shrink:0;
  }

  .chat-messages{
    flex:1;
    overflow-y:auto;
    padding:15px;
    background:#f6f6f6;
  }

  .chat-input{
    display:flex;
    padding:10px;
    border-top:1px solid #ddd;
  }
  .chat-input input{
    flex:1;
    padding:10px;
    border:1px solid #ccc;
    border-radius:20px;
    outline:none;
  }
  .chat-input button{
    margin-left:8px;
    background:#7a0000;
    color:white;
    border:none;
    width:40px;
    height:40px;
    border-radius:50%;
    cursor:pointer;
  }

  .bot{background:white;padding:10px;border-radius:10px;margin-bottom:8px;max-width:85%}
  .user{background:#7a0000;color:white;padding:10px;border-radius:10px;margin-bottom:8px;margin-left:auto;max-width:85%}

  @media(max-width:480px){
    .chat-box{
      left:10px;
      width:calc(100vw - 20px);
      max-height:70vh;
    }
    .chat-float{left:10px}
  }
  `;
  document.head.appendChild(style);

  const html = `
  <div class="chat-float" id="chatOpen">
    <i class="fa fa-comments"></i>
  </div>

  <div class="chat-box" id="chatBox">
    <div class="chat-header">Manauna Dham Sahayak</div>
    <div class="chat-messages" id="chatMsgs">
      <div class="bot">🙏 Jai Shree Shyam! Aapko kis cheez ki madad chahiye?</div>
      <div class="bot">Food, Hotel, Shyam Jal, ya Darshan?</div>
    </div>
    <div class="chat-input">
      <input id="chatInput" placeholder="Type here...">
      <button id="chatSend">➤</button>
    </div>
  </div>
  `;
  document.body.insertAdjacentHTML("beforeend", html);

  const open = document.getElementById("chatOpen");
  const box = document.getElementById("chatBox");
  const msgs = document.getElementById("chatMsgs");
  const input = document.getElementById("chatInput");

  open.onclick = () => box.classList.toggle("active");

  document.getElementById("chatSend").onclick = send;
  input.onkeypress = e => { if (e.key === "Enter") send(); };

  function send(){
    const t = input.value.trim();
    if(!t) return;
    msgs.innerHTML += `<div class="user">${t}</div>`;
    input.value = "";

    setTimeout(()=>{
      msgs.innerHTML += `<div class="bot">Hum WhatsApp par connect kar denge. Kripya neeche click karein.</div>
      <div class="bot"><a href="https://wa.me/917817803342" target="_blank">📲 WhatsApp Open</a></div>`;
      msgs.scrollTop = msgs.scrollHeight;
    },600);
  }

})();
