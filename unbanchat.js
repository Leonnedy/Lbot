let handler = async (m, { conn }) => {
  global.DATABASE._data.chats[m.chat].isBanned = false
  m.reply('Done!')
}
handler.help = ['desbancar chat']
handler.tags = ['owner']
handler.command = /^desbanchat$/i
handler.owner = true

module.exports = handler
