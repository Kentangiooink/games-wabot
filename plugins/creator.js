let handler = function (m) {
  // this.fakeReply(m.chat, 'This is my owner', '6282217590187@s.whatsapp.net', 'Owner')
  this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  this.sendContact(m.chat, '6282217590187', 'Lord Michael', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
