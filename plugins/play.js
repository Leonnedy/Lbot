let limit = 30
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  if (!text) throw '¿Qué estás buscando?'
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Video / audio no encontrado'
  let isVideo = /2$/.test(command)
  let { dl_link, thumb, title, filesize, filesizeF} = await (isVideo ? ytv : yta)(vid.url, 'id4')
  let isLimit = (isPrems || isOwner ? 99 : limit) * 1024 < filesize
  conn.sendFile(m.chat, thumb, 'thumbnail.jpg', `
*Titulo:* ${title}
*Tamaño:* ${filesizeF}
*Fuente:* ${vid.url}
*${isLimit ? 'Póntelo ': ''}Link:* no hay link, solo pene 
`.trim(), m)
  let _thumb = {}
  try { if (isVideo) _thumb = { thumbnail: await (await fetch(thumb)).buffer() } }
  catch (e) { }
  if (!isLimit) conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*Titulo:* ${title}
*Tamaño:* ${filesizeF}
*Fuente:* ${vid.url}
`.trim(), m, false, _thumb || {})
}
handler.help = ['rola', 'rola2'].map(v => v + ' <nombre de la rola>')
handler.tags = ['downloader']
handler.command = /^rola2?$/i

handler.exp = 0
handler.limit = true

module.exports = handler

