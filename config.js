import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6281212604428', 'Fyyy 666⸸', true]
] 
global.mods = []
global.prems = []
// Info
global.nomorwa = '6281212604428'
global.packname = 'Fyyy 666⸸'
global.author = '© Fyyy 666⸸'
global.namebot = '​Fyyy 666⸸ - MD'
global.wm = '© Fyyy 666⸸'
global.stickpack = 'Fyyy 666⸸'
global.stickauth = 'Fyyy 666⸸'
// Link Sosmed
global.sig = 'https://twitter.com/RafiAkeno10?s=09'
global.sgh = 'https://github.com/RaffiBot'
global.sgc = 'https://chat.whatsapp.com/D2QckjUTYkK4V41Tw4bn9N'
// Donasi
global.psaweria = 'https://youtube.com/@rafitetsuya10'
global.ptrakterr = 'https://twitter.com/RafiAkeno10?s=09'
global.povo = 'Fyyy 666⸸'
// Info Wait
global.wait = 'Sabar om lagi loading....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'xCOpP5f36W'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "xCOpP5f36W",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})