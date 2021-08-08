let fetch = require("node-fetch")
let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://es.memedroid.com/memes/detail/3359739/La-puta-madre-estoy-harto-de-encontrarme-esos-anuncios', '/meme'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.image) throw 'Err!'
  conn.sendFile(m.chat, json.image, 'meme.png', json.caption, m)
}

handler.help = ['meme']
handler.tags = ['internet']

handler.command = /^(meme)$/i

handler.group = true

module.exports = handler
