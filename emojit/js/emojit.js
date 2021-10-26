const toggler = document.createElement("span")
toggler.className = "emodropbtn"
toggler.innerHTML = '&#128512'
var currentfocused = null
const faces_emo = '😁 -😂 -🤣 -😃 -😄 -😅 -😆 -😉 -😊 -😋 -😎 -😍 -😘 -😗 -😙 -😚 -🙂 -🤗 -🤩 -🤔 -🤨 -😐 -😑 -😶 -🙄 -😏 -😣 -😥 -😮 -🤐 -😯 -😪 -😫 -😴 -😌 -😛 -😜 -😝 -🤤 -😒 -😓 -😔 -😕 -🙃 -🤑 -😲-🙁 -😖 -😞 -😟 -😤 -😢 -😭 -😦 -😧 -😨 -😩 -🤯 -😬 -😰 -😱 -😳 -🤪 -😵 -😡 -😠 -🤬 -😷 -🤒 -🤕 -🤢 -🤮 -🤧 -😇 -🤠 -🤡 -🤥 -🤫 -🤭 -🧐 -🤓 -😈 -👿 -👹 -👺 -💀 -👻 -👽 -🤖 -💩 -👦 -👶 -👧 -👨 -👩 -👴 -👵 -👾 -👨‍⚕️ -👩‍⚕️ -👨‍🎓 -👩‍🎓 -👨‍⚖️ -👩‍⚖️ -👨‍🌾 -👩‍🌾 -👨‍🍳 -👩‍🍳 -👨‍🔧 -👩‍🔧 -👨‍🏭 -👩‍🏭 -👨‍💼 -👩‍💼 -👨‍🔬 -👩‍🔬 -👨‍💻 -👩‍💻 -👨‍🎤 -👩‍🎤 -👨‍🎨 -👩‍🎨 -👨‍✈️ -👩‍✈️ -👨‍🚀 -👩‍🚀 -👨‍🚒 -👩‍🚒 -👮 -👮‍♂️ -👮‍♀️ -🕵 -🕵️‍♂️ -🕵️‍♀️ -💂 -💂‍♂️ -💂‍♀️ -👷 -👷‍♂️ -👷‍♀️ -🤴 -👸 -👳 -👳‍♂️ -👳‍♀️ -👲 -🧕 -🧔 -👱 -👱‍♂️ -👱‍♀️ -🤵 -👰 -🤰 -🤱 -👼 -🎅 -🤶 -🧙‍♀️ -🧙‍♂️ -🧚‍♀️ -🧚‍♂️ -🧛‍♀️ -🧛‍♂️ -🧜‍♀️ -🧜‍♂️ -🧝‍♀️ -🧝‍♂️ -🧞‍♀️ -🧞‍♂️ -🧟‍♀️ -🧟‍♂️ -🙍 -🙍‍♂️ -🙍‍♀️ -🙎 -🙎‍♂️ -🙎‍♀️ -🙅 -🙅‍♂️ -🙅‍♀️ -🙆 -🙆‍♂️ -🙆‍♀️ -💁 -💁‍♂️ -💁‍♀️ -🙋 -🙋‍♂️ -🙋‍♀️ -🙇 -🙇‍♂️ -🙇‍♀️ -🤦 -🤦‍♂️ -🤦‍♀️ -🤷 -🤷‍♂️ -🤷‍♀️ -💆 -💆‍♂️ -💆‍♀️ -💇 -💇‍♂️ -💇‍♀️ -🚶 -🚶‍♂️ -🚶‍♀️ -🏃 -🏃‍♂️ -🏃‍♀️ -💃 -🕺 -👯 -👯‍♂️ -👯‍♀️ -🧖‍♀️ -🧖‍♂️ -🕴 -🗣 -👤 -👥 -👫 -👬 -👭 -💏 -👨‍❤️‍💋‍👨 -👩‍❤️‍💋‍👩 -💑 -👨‍❤️‍👨 -👩‍❤️‍👩 -👪 -👨‍👩‍👦 -👨‍👩‍👧 -👨‍👩‍👧‍👦 -👨‍👩‍👦‍👦 -👨‍👩‍👧‍👧 -👨‍👨‍👦 -👨‍👨‍👧 -👨‍👨‍👧‍👦 -👨‍👨‍👦‍👦 -👨‍👨‍👧‍👧 -👩‍👩‍👦 -👩‍👩‍👧 -👩‍👩‍👧‍👦 -👩‍👩‍👦‍👦 -👩‍👩‍👧‍👧 -👨‍👦 -👨‍👦‍👦 -👨‍👧 -👨‍👧‍👦 -👨‍👧‍👧 -👩‍👦 -👩‍👦‍👦 -👩‍👧 -👩‍👧‍👦 -👩‍👧‍👧 -🏇 -⛷ -🏂 -🧗‍♀️ -🧗‍♂️ -🧘‍♀️ -🧘‍♂️ -🏌 -🏌️‍♂️ -🏌️‍♀️ -🏄 -🏄‍♂️ -🏄‍♀️ -🚣 -🚣‍♂️ -🚣‍♀️ -🏊 -🏊‍♂️ -🏊‍♀️ -⛹ -⛹️‍♂️ -⛹️‍♀️ -🏋 -🏋️‍♂️ -🏋️‍♀️ -🚴 -🚴‍♂️ -🚴‍♀️ -🚵 -🚵‍♂️ -🚵‍♀️ -🤸 -🤸‍♂️ -🤸‍♀️ -🤼 -🤼‍♂️ -🤼‍♀️ -🤽 -🤽‍♂️ -🤽‍♀️ -🤾 -🤾‍♂️ -🤾‍♀️ -🤹 -🤹‍♂️ -🤹‍♀️ -👍 -👎 -💪 -🤳 -👈 -👉 -☝ -👆 -🖕 -👇 -✌ -🤞 -🖖 -🤘 -🖐 -✋ -👌 -✊ -👊 -🤛 -🤜 -🤚 -👋 -🤟 -✍ -👏 -👐 -🙌 -🤲 -🙏 -🤝 -💅 -👂 -👃 -👣 -👀 -👁 -👁️‍🗨️ -🧠 -👅 -👄 -💋'

const animals_emo = '😸 -😹 -😻 -😼 -😽 -🙀 -😿 -😾 -🙈 -🙉 -🙊 -💥 -🐵 -🐒 -🦍 -🐶 -🐕 -🐩 -🐺 -🦊 -🐱 -🐈 -🦁 -🐯 -🐅 -🐆 -🐴 -🐎 -🦄 -🦓 -🐮 -🐂 -🐃 -🐄 -🐷 -🐖 -🐗 -🐽 -🐏 -🐑 -🐐 -🐪 -🐫 -🦒 -🐘 -🦏 -🐭 -🐁 -🐀 -🐹 -🐰 -🐇 -🐿 -🦔 -🦇 -🐻 -🐨 -🐼 -🐾 -🦃 -🐔 -🐓 -🐣 -🐤 -🐥 -🐦 -🐧 -🕊 -🦅 -🦆 -🦉 -🐸 -🐊 -🐢 -🦎 -🐍 -🐲 -🐉 -🦕 -🦖 -🐳 -🐋 -🐬 -🐟 -🐠 -🐡 -🦈 -🐙 -🐚 -🦀 -🦐 -🦑 -🐌 -🦋 -🐛 -🐜 -🐝 -🐞 -🦗 -🕷 -🕸 -🦂'

const food_emo = '🍈 -🍉 -🍊 -🍋 -🍌 -🍍 -🍎 -🍏 -🍐 -🍑 -🍒 -🍓 -🥝 -🍅 -🥥 -🥑 -🍆 -🥔 -🥕 -🌽 -🌶 -🥒 -🥦 -🥜 -🍞 -🥐 -🥖 -🥨 -🥞 -🧀 -🍖 -🍗 -🥩 -🥓 -🍔 -🍟 -🍕 -🌭 -🥪 -🌮 -🌯 -🍳 -🍲 -🥣 -🥗 -🍿 -🥫 -🍱 -🍘 -🍙 -🍚 -🍛 -🍜 -🍝 -🍠 -🍢 -🍣 -🍤 -🍥 -🍡 -🥟 -🥠 -🥡 -🍦 -🍧 -🍨 -🍩 -🍪 -🎂 -🍰 -🥧 -🍫 -🍬 -🍭 -🍮 -🍯 -🍼 -🥛 -☕ -🍵 -🍶 -🍾 -🍷 -🍸 -🍹 -🍺 -🍻 -🥂 -🥃 -🥤 -🥢 -🍽 -🍴 -🥄 -💐 -🌸 -💮 -🏵 -🌹 -🥀 -🌺 -🌻 -🌼 -🌷 -🌱 -🌲 -🌳 -🌴 -🌵 -🌾 -🌿 -☘ -🍀 -🍁 -🍂 -🍃 -🍄 -🌰'

const recreation_emo = '🌎 -🌏 -🌐 -🌑 -🌒 -🌓 -🌔 -🌕 -🌖 -🌗 -🌘 -🌙 -🌚 -🌛 -🌜 -☀ -🌝 -🌞 -⭐ -🌟 -🌠 -☁ -⛅ -⛈ -🌤 -🌥 -🌦 -🌧 -🌨 -🌩 -🌪 -🌫 -🌬 -🌈 -☔ -⚡ -❄ -☃ -⛄ -☄ -🔥 -💧 -🌊 -🎄 -✨ -🎋 -🎍 -🏖 -🏎 -🏍 -🗾 -🏔 -⛰ -🌋 -🗻 -🏕 -🏜 -🏝 -🏞 -🏟 -🏛 -🏗 -🏘 -🏚 -🏠 -🏡 -🏢 -🏣 -🏤 -🏥 -🏦 -🏨 -🏩 -🏪 -🏫 -🏬 -🏭 -🏯 -🏰 -💒 -🗼 -🗽 -⛪ -🕌 -🕍 -⛩ -🕋 -⛲ -⛺ -🌁 -🌃 -🏙 -🌄 -🌅 -🌆 -🌇 -🌉 -🌌 -🎠 -🎡 -🎢 -🚂 -🚃 -🚄 -🚅 -🚆 -🚇 -🚈 -🚉 -🚊 -🚝 -🚞 -🚋 -🚌 -🚍 -🚎 -🚐 -🚑 -🚒 -🚓 -🚔 -🚕 -🚖 -🚗 -🚘 -🚚 -🚛 -🚜 -🚲 -🛴 -🛵 -🚏 -🛤 -⛽ -🚨 -⛵ -🚤 -🛳 -⛴ -🛥 -🚢 -✈ -🛩 -🛫 -🛬 -💺 -🚁 -🚟 -🚠 -🚡 -🛰 -🚀 -🛸 -⛱ -🎆 -🎇 -🎑 -🗿 -🎪 -🎗 -🎟 -🎫 -🎖 -🏆 -🏅 -🥇 -🥈 -🥉 -⚽ -⚾ -🏀 -🏐 -🏈 -🏉 -🎾 -🎳 -🏏 -🏑 -🏒 -🏓 -🏸 -🥊 -🥋 -⛳ -⛸ -🎣 -🎽 -🎿 -🛷 -🥌 -🎯 -🎱 -🎮 -🎰 -🎲 -🎭 -🎨 -🎼 -🎤 -🎧 -🎷 -🎸 -🎹 -🎺 -🎻 -🥁 -🎬 -🏹'

const nation_emo = '👓 -🕶 -👔 -👕 -👖 -🧣 -🧤 -🧥 -🧦 -👗 -👘 -👙 -👚 -👛 -👜 -👝 -🎒 -👞 -👟 -👠 -👡 -👢 -👑 -👒 -🎩 -🎓 -🧢 -⛑ -💄 -💍 -🌂 -☂ -💼 -☠ -🛀 -🛌 -💌 -💣 -🚥 -🚦 -🚧 -⚓ -🕳 -🛍 -📿 -🔪 -🏺 -🗺 -💈 -🛢 -🛎 -⌛ -⏳ -⌚ -⏰ -⏱ -⏲ -🕰 -🌡 -🎈 -🎉 -🎊 -🎎 -🎏 -🎐 -🎀 -🎁 -🔮 -🕹 -🖼 -🎙 -🎚 -🎛 -📻 -📱 -📲 -☎ -📞 -📟 -📠 -🔋 -🔌 -💻 -🖥 -🖨 -⌨ -🖱 -🖲 -💽 -💾 -💿 -📀 -🎥 -🎞 -📽 -📺 -📷 -📸 -📹 -📼 -🔍 -🔎 -🕯 -💡 -🔦 -🏮 -📔 -📕 -📖 -📗 -📘 -📙 -📚 -📓 -📃 -📜 -📄 -📰 -🗞 -📑 -🔖 -🏷 -💰 -💸 -💳 -✉ -📧 -📨 -📩 -📤 -📥 -📦 -📫 -📪 -📬 -📭 -📮 -🗳 -✏ -✎ -🖉 -✒ -🖋 -🖊 -🖌 -🖍 -📝 -📁 -📂 -🗂 -📅 -📆 -🗒 -🗓 -📇 -📈 -📉 -📊 -📋 -📌 -📍 -📎 -🖇 -📏 -📐 -✂ -🗃 -🗄 -🗑 -🔒 -🔓 -🔏 -🔐 -🔑 -🗝 -🔨 -⛏ -⚒ -🛠 -🗡 -⚔ -🔫 -🛡 -🔧 -🔩 -⚙ -🗜 -⚖ -🔗 -⛓ -⚗ -🔬 -🔭 -📡 -💉 -💊 -🚪 -🛏 -🛋 -🚽 -🚿 -🛁 -🚬 -⚰ -⚱ -💘 -❤ -💓 -💔 -💕 -💖 -💗 -💙 -💚 -💛 -🧡 -💜 -🖤 -💝 -💞 -💟 -❣ -💦 -💨 -💫 -🏁 -🚩 -🎌 -🏴 -🏳 -🏳️‍🌈 -🏴‍☠️ -💴 -💵 -💶 -💷 -💤 -💢 -💬 -🗯 -💭 -♨ -🛑 -🕛 -🕧 -🕐 -🕜 -🕑 -🕝 -🕒 -🕞 -🕓 -🕟 -🕔 -🕠 -🕕 -🕡 -🕖 -🕢 -🕗 -🕣 -🕘 -🕤 -🕙 -🕥 -🕚 -🕦 -🌀 -🃏 -🀄 -🎴 -🔇 -🔈 -🔉 -🔊 -📢 -📣 -📯 -🔔 -🔕 -🎵 -🎶 -🏧 -🚮 -🚰 -♿ -🚹 -🚺 -🚻 -🚼 -🚾 -⚠ -🚸 -⛔ -🚫 -🚳 -🚭 -🚯 -🚱 -🚷 -🔞 -☢ -☣ -🛐 -⚛ -🕉 -✡ -☸ -☯ -✝ -☦ -☪ -☮ -🕎 -🔯 -♈ -♉ -♊ -♋ -♌ -♍ -♎ -♏ -♐ -♑ -♒ -♓ -⛎ -🔀 -🔁 -🔂 -▶ -⏩ -◀ -⏪ -🔼 -⏫ -🔽 -⏬ -⏹ -⏏ -🎦 -🔅 -🔆 -📶 -📳 -📴 -♻ -🔱 -📛 -🔰 -⭕ -✅ -☑ -✔ -✖ -❌ -❎ -➕ -➖ -➗ -➰ -➿ -〽 -✳ -✴ -❇ -‼ -⁉ -❓ -❔ -❕ -❗ -#️⃣ -0️⃣ -1️⃣ -2️⃣ -3️⃣ -4️⃣ -5️⃣ -6️⃣ -7️⃣ -8️⃣ -9️⃣ -🔟 -💯 -🔠 -🔡 -🔢 -🔣 -🔤 -🅰 -🆎 -🅱 -🆑 -🆒 -🆓 -ℹ -🆔 -Ⓜ -🆕 -🆖 -🅾 -🆗 -🅿 -🆘 -🆙 -🆚 -🈁 -🈂 -🈷 -🈶 -🈯 -🉐 -🈹 -🈚 -🈲 -🉑 -🈸 -🈴 -🈳 -㊗ -㊙ -🈺 -🈵-⬛ -⬜ -🔶 -🔷 -🔸 -🔹 -🔺 -🔻 -💠 -🔲 -🔳 -⚪ -⚫ -🔴 -🔵-ℹ -⬆ -↗ -➡ -↘ -⬇ -↙ -⬅ -↖ -↕ -↔ -↩ -↪ -⤴ -⤵ -🔃 -🔄 -🔙 -🔚 -🔛 -🔜 -🔝 -➤'
var recent = (typeof(Storage) !== "undefined") ?( (localStorage.getItem("recent-emojits") == null || localStorage.getItem("recent-emojits") == "") ? "<center>No recent emojis yet</center>" : localStorage.getItem("recent-emojits")) : "<center>This browser does not support web storage!</center>"

const dropdown = '<br/><div class="emodropdown"><div class="emodropdown-content" id="emojit-dropdown-content"><div class="emotab"><button class="tablinks" id="recent" >&#X1f552;</button><button class="tablinks" id="faces" >😌</button><button class="tablinks" id="animals">🐷</button><button class="tablinks" id="food">🌭</button><button class="tablinks" id="recreation">🏀</button><button class="tablinks" id="flag">🏁</button></div><div class="tabfaces emotabcontent"></div><div class="tabanimals emotabcontent"></div><div class="tabfood emotabcontent"></div><div class="tabrecreation emotabcontent"></div><div  class="emotabcontent tabrecent">' + recent + '</div><div class="emotabcontent tabflag"></div></div></div>'

const faces = faces_emo.split("-");
const animals = animals_emo.split("-");
const food = food_emo.split("-");
const recreation = recreation_emo.split("-");
const nation = nation_emo.split("-");

var inputs = document.querySelectorAll("input[data-emojable=true]");
for (let i = 0; i < inputs.length; i++) {
    toggler.id = i
    inputs[i].parentNode.appendChild(toggler)
    inputs[i].parentNode.innerHTML += dropdown
}
var tabfaces = document.getElementsByClassName("tabfaces")
for (let i = 0; i < tabfaces.length; i++) {
  for (let j = 0; j < faces.length; j++) {
    tabfaces[i].innerHTML += '<span class="emojit">'+ faces[j] +'</span>' 
 }
  
}
var tabanimals  = document.getElementsByClassName("tabanimals")
for (let i = 0; i < tabanimals.length; i++) {
  for (let j = 0; j < animals.length; j++) {
    tabanimals [i].innerHTML += '<span class="emojit">'+ animals[j] +'</span>' 
 }
  
}
var tabfood = document.getElementsByClassName("tabfood")
for (let i = 0; i < tabfood.length; i++) {
  for (let j = 0; j < food.length; j++) {
    tabfood[i].innerHTML += '<span class="emojit">'+ food[j] +'</span>' 
 }
  
}
var tabrecreation = document.getElementsByClassName("tabrecreation")
for (let i = 0; i < tabrecreation.length; i++) {
  for (let j = 0; j < recreation.length; j++) {
    tabrecreation[i].innerHTML += '<span class="emojit">'+ recreation[j] +'</span>' 
 }
  
}
var tabflag = document.getElementsByClassName("tabflag")
for (let i = 0; i < tabflag.length; i++) {
  for (let j = 0; j < nation.length; j++) {
    tabflag[i].innerHTML += '<span class="emojit">'+ nation[j] +'</span>' 
 }
  
}


function switchTab(evt, id) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("emotabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementsByClassName("tab"+id)[currentfocused].style.display = "block";
    evt.currentTarget.className += " active";
  }

  $(".tablinks").click(function(e){
      var id = $(this).attr("id")
      switchTab(e, id);
  })

  $(".emodropbtn").click( function(e) {
    currentfocused  = $(this).attr("id")
    var cnt = document.getElementsByClassName("emodropdown-content");
    if (cnt[currentfocused].style.display !== 'block') {
      for (let v = 0; v < cnt.length; v++) {
        cnt[v].style.display = 'none';        
      }
      cnt[currentfocused].style.display = 'block'
      switchTab(e, "recent");
    }
    else{
      for (let v = 0; v < cnt.length; v++) {
        cnt[v].style.display = 'none';        
      }
    }
})

  $(".emojit").click(function(e){
    var emo = $(this).html()
    var inputs = document.querySelectorAll("input[data-emojable=true]");
    inputs[currentfocused].value += emo
    try {
      var str = localStorage.getItem("recent-emojits");
      if (str == null || str.indexOf(emo) == -1) {
        if (str == null) {
          localStorage.setItem("recent-emojits", '<span class="emojit">' + emo + '</span>')
        }
        else{
          localStorage.setItem("recent-emojits", '<span class="emojit">' + emo + '</span>' + str)
        }
      }
    } catch (error) {
      console.log(error)
    }
})
 
 