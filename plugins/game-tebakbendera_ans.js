import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*(teba)/i.test(m.quoted.text) || /.*(teba)/i.test(m.text)) return !0
    this.tebakbendera = this.tebakbendera ? this.tebakbendera : {}
    if (!(id in this.tebakbendera)) return conn.sendButton(m.chat, 'Soal itu telah berakhir', author, ['Tebak Bendera', '/tebakbendera'], m)
    if (m.quoted.id == this.tebakbendera[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakbendera[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].
                exp += this.tebakbendera[id][2]
            conn.sendButton(m.chat, `*Benar!*\n+${this.tebakbendera[id][2]} XP`, author, ['Tebak Bendera', '/tebakbendera'], m)
            clearTimeout(this.tebakbendera[id][3])
            delete this.tebakbendera[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

export default handler