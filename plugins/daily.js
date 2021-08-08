let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    global.DATABASE._data.users[m.sender].exp += 15000
    m.reply('Solo porque te quiero +15000 XP para ti :3')
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else m.reply('ora ora hijo de perra ya te di tus puntos diarios')
}
handler.help = ['diario', 'reclamar']
handler.tags = ['xp']
handler.command = /^(diario|reclamar)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

