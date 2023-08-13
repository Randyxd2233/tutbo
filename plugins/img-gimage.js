
import fg from 'api-dylux'
let handler  = async (m, { conn, args, text, usedPrefix, command }) => {
  if (!text) throw `🧑🏻‍💻 Ingrese la imagen que quiere buscar \n\nEjemplo: 👉🏻 ${usedPrefix + command} Anuel`
  let res = await fg.googleImage(text)
  conn.sendFile(m.chat, res.getRandom(), 'img.png', `
🧑🏻‍💻 Resultado de: ${text}`.trim(), m)
}
handler.help = ['imagen']
handler.tags = ['img']
handler.command = /^(img|image|gimage|imagen)$/i
handler.diamond = false

export default handler
