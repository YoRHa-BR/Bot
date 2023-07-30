import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
	let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
   let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
    
m.reply(`Aktif Selama ${muptime}`)
}
handler.help = ['runtime']
handler.tags = ['main']
handler.command = ['runtime', 'rt']

export default handler


function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari ayang Kok Belum Tidur? 🥱"
  if (time >= 4) {
    res = "Pagi ayang 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang ayang ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore ayang 🌇"
  }
  if (time >= 18) {
    res = "Malam ayang 🌙"
  }
  return res
}
function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Hari* \n', h, ' *Jam*\n', m, ' *Menit*\n', s, ' *Detik*'].map(v => v.toString().padStart(2, 0)).join('')
}
