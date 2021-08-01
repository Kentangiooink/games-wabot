let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」

│ • Telkomsel [082217590187]

│ • Dana [082217590187]

╰────

╭─「 INGFO OWNER 」

│ • NAME : MICHAEL AGAM

│ • CONTACT : 082217590187

│                        081283815593

│ • WHATSAPP : wa.me/6282217590187

│ • YOUTUBE : MICHAEL OFC

│ *PLEASE SUBSCRIBE MY CHANNEL

│   MICHAEL OFC*

│ 

│ _THANKS_

╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
