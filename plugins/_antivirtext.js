let handler = m => m

let linkRegex = /(|à§ª|à¹|ð§ALâHARAMð®|à­§|à­¨|â«·â¢à¼ð¦ð©ðð¥ð¨ð¦ ððð¥ð¦à¼â¢â«¸|ð¤ÍÍ¡ð²ð­á­á®ÊÍ­ÊÍ¢Í¤ÉªÍ¦É´á·Æðµâà¿âð¸ðððððð¤¬ð¥ï¸ð¥|à¼ºâ¢ð¥VÌ³IÌ³RÌ³UÌ³SÌ³ Ì³AÌ³PÌ³IÌ³ð¥â¢à¼»|â³ï¸ââ¢â¢â¢âââââ¢â¢ââââ¢âââ¢â¢ððð ððððððâââââââââ¢â¢â¢â¢â¢â¢â¢â¢â¢â¢â³ï¸|â.ð¼ð°ð.ðð¾ð½ðð¾ð»|ð¸ ð± ð¦ ð¾ ðª ð· 07â¢|à¼â¢ââ¡SLAYER PETIRâ¡ââ¢à¼|9999999|à¸à¸´à¸à¸¸à¸à¹à¹à¹à¸¶à¸²à¸à¸·à¸à¸´à¸à¸¸à¸à¹à¹à¹à¸¶à¸²à¸à¸·| ð¥µãð¥ððððá¬ððððºð ð¤ ððºððá¬ðð¯ððããð¤¯Òê°ð«§ New Generation Virusð)/i //Tambah sendiri virtexnya

handler.before = function (m, { user, isAdmin, isBotAdmin }) {

  if (m.isBaileys && m.fromMe) throw false
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupVirtex = linkRegex.exec(m.text)

  if (chat.antiVirtex && isGroupVirtex) {
  this.reply(m.chat, '*VIRTEX DETECTED*\n\n_Kamu akan dikeluarkan karena telah mangirim virtex di grup ini!', m)
  this.reply(m.chat, '\n'.repeat(9999), m)
  this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
}
handler.group = true

export default handler
