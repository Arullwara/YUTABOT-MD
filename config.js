let fs = require('fs')

global.kontak = ['6285822347348'] //Jangan Sembarang Ganti 
global.owner = ['6285822347348','6285822347348'] // Put your number here
global.linkGC = ['https://chat.whatsapp.com/LDN0EeJfASs0lbUhJsOJu1'] // ganti jadi group lu
global.mods = [] // Want some help?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json'))
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  melcanz: 'httpa://melcanz.com',
  lol: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  hardianto: 'https://hardianto.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'apivproject',
  'https://melcanz.com': 'elaina',
  'https://api.lolhuman.xyz': 'Deffbotz',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://hardianto.xyz': 'hardianto',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
global.stiker_wait = 'Stiker sedang dibuat'
global.packname = 'Arull-Md'
global.author = 'ArullBotz'
global.email = 'sahrulwara62@gmail.com'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wm = '©Arull-md'
global.media = 'https://api.lolhuman.xyz/api/textprome2/glitch?apikey=Deffbotz&text1=YutaBotzMD&text2=Using%20Multi%20Device'

global.wait = '_*tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'

global.multiplier = 69 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
