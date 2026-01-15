(function () {

const css = `
*{box-sizing:border-box}

.chat-float{
 position:fixed;bottom:25px;right:25px;width:65px;height:65px;
 background:linear-gradient(135deg,#7a0000,#4d0000);
 border-radius:50%;display:flex;align-items:center;justify-content:center;
 cursor:pointer;z-index:999999;box-shadow:0 5px 20px rgba(0,0,0,.3);
 animation:pulse 2s infinite;
}
.chat-float i{color:#fff;font-size:30px}

@keyframes pulse{
 0%,100%{box-shadow:0 5px 20px rgba(122,0,0,.4)}
 50%{box-shadow:0 5px 30px rgba(122,0,0,.8)}
}

.chat-container{
 position:fixed;bottom:100px;right:25px;width:380px;height:550px;
 background:#fff;border-radius:15px;box-shadow:0 5px 40px rgba(0,0,0,.3);
 display:none;flex-direction:column;overflow:hidden;z-index:999999;
}
.chat-container.active{display:flex}

.chat-header{
 background:#7a0000;color:#fff;padding:15px;font-weight:bold;
 display:flex;justify-content:space-between;align-items:center
}

.chat-messages{flex:1;padding:15px;overflow-y:auto;background:#f9f9f9}
.message{margin-bottom:10px}
.bot{background:#fff;padding:10px;border-radius:10px;max-width:80%}
.user{text-align:right}
.user span{background:#7a0000;color:#fff;padding:10px;border-radius:10px;display:inline-block}

.chat-input{display:flex;border-top:1px solid #ddd}
.chat-input input{flex:1;border:none;padding:12px;font-size:14px}
.chat-input button{background:#7a0000;color:#fff;border:none;padding:12px 15px;cursor:pointer}
`;

const style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);

document.body.insertAdjacentHTML("beforeend",`
<div class="chat-float" id="chatToggle"><i class="fas fa-comments"></i></div>

<div class="chat-container" id="chatBox">
  <div class="chat-header">
    Manauna Dham
    <span style="cursor:pointer" id="chatClose">×</span>
  </div>
  <div class="chat-messages" id="chatMessages">
    <div class="message bot">🙏 Jai Shree Shyam! Aap kaise madad chahte hain?</div>
  </div>
  <div class="chat-input">
    <input id="chatInput" placeholder="Type here...">
    <button id="chatSend">Send</button>
  </div>
</div>
`);

document.getElementById("chatToggle").onclick = () => {
 document.getElementById("chatBox").classList.toggle("active");
};

document.getElementById("chatClose").onclick = () => {
 document.getElementById("chatBox").classList.remove("active");
};

document.getElementById("chatSend").onclick = sendMessage;
document.getElementById("chatInput").addEventListener("keypress",e=>{
 if(e.key==="Enter") sendMessage();
});

function sendMessage(){
 const i=document.getElementById("chatInput");
 if(!i.value) return;
 const msg=i.value;
 i.value="";
 document.getElementById("chatMessages").innerHTML+=`<div class="message user"><span>${msg}</span></div>`;
 document.getElementById("chatMessages").innerHTML+=`<div class="message bot">WhatsApp par booking ke liye button dabaiye.</div>`;
 document.getElementById("chatMessages").innerHTML+=`
   <div style="margin-top:10px">
     <a href="https://wa.me/917817803342?text=${encodeURIComponent(msg)}" target="_blank"
        style="display:inline-block;background:#25D366;color:white;padding:10px 15px;border-radius:8px;text-decoration:none">
        WhatsApp
     </a>
   </div>`;
}

})();
