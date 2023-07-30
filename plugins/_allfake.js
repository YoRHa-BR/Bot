import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'

let handler = m => m
handler.all = async function (m) {
    let name = await conn.getName(m.sender) 
	let pp = 'https://telegra.ph/file/5d1e19dbb41456896ce1e.jpg'
	let fotonyu = 'https://telegra.ph/file/5d1e19dbb41456896ce1e.jpg'
	try {
		pp = await this.profilePictureUrl(m.sender, 'image')
	} catch (e) {
	} finally {
		
        //global.bg = await (await fetch(img)).buffer()
		global.doc = pickRandom(["application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/msword", "application/pdf"])
		
		// Module 
		global.fetch = import('node-fetch')
		global.bochil = import('@bochilteam/scraper')
		
		const _uptime = process.uptime() * 1000
        
		// Ini untuk command crator/owner
		global.kontak2 = [
         [owner[0], await conn.getName(owner[0] + '6281212604428@s.whatsapp.net'), 'Fyyy MD', 'https://youtube.com/@rafitetsuya10', true], // Kalo mau di tambah tinggal copy 1baris ini di tempel di bawahnya trs di edit dikit!
        ]
        
		// ucapan ini mah
		global.ucapan = ucapan()
		
		// pesan sementara
		global.ephemeral = '86400' // 86400 = 24jam, kalo ingin di hilangkan ganti '86400' jadi 'null' atau ''
		
		// externalAdReply atau text with thumbnail. gatau bahasa Inggris? coba translate!
		global.adReply = {
			contextInfo: {
				forwardingScore: 9999,
				//isForwarded: true, // ini biar ada tulisannya diteruskan berkali-kali, jika ingin di hilangkan ganti true menjadi false
				externalAdReply: { // Bagian ini sesuka kalian berkreasi :'v
                    showAdAttribution: true,
					title: "Fyyy - Multidevice",
					body: "Fyyy 666",
					mediaUrl: sgc,
					description: '',
					previewType: "PHOTO",
					thumbnail: await (await fetch(fotonyu)).buffer(),
					sourceUrl: "https://youtube.com/@rafitetsuya10",					
				}
			}
		}
		global.fakeig = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            title: 'Fyyy - MD',
            body: wm,
            thumbnailUrl: pp,
            sourceUrl: sig
         }
       }
     }
   }
}

export default handler 

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam sayang 🌙"
    if (time >= 4) {
        res = "Selamat pagi sayang 🌄"
    }
    if (time > 10) {
        res = "Selamat siang sayang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore sayang 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam sayang 🌙"
    }
    return res
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
