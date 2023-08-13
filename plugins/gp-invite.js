
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!text) throw `🧑🏻‍💻 Ingrese el número\nde la persona a la\n que desea invitar al grupo\n\n👉🏻️ Ejemplo \n${usedPrefix + command} 12515807685`
if (text.includes('+')) throw  `🧑🏻‍💻️ Ingrese el número\ntodo junto sin el +`
if (isNaN(text)) throw ' 🧑🏻‍💻 Ingrese sólo números\nmás su código de país sin espacios'
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
 
      await conn.reply(text+'@s.whatsapp.net', `🧑🏻‍💻 INVITACIÓN A GRUPO\n\nUn miembro de este grupo te invito a unirte a este grupo \n\n${link}`, m, {mentions: [m.sender]})
        m.reply(`🧑🏻‍💻 Se envió un enlace de invitación al usuario`) 

}
handler.help = ['invite <549xxx>']
handler.tags = ['group']
handler.command = ['invite','invitar'] 
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.rowner = true

export default handler
