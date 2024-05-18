import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['593992402778', 'FG98', true],
  ['593989504402', 'Steven', true,
  ['593986923159', 'Jonathan', true],
  ['593982981749', 'Jariel', true],
  ['593988077924', 'Cesar', true],
  ['593969499267', 'Steven2', true],
  ['593967323759', 'Pollito', true],
  ['593980654294', 'Mathias', true]
] //Numeros de owner 

global.mods = ['593992402778'] 
global.prems = ['593992402778', '593995004980']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = '𝙎𝙚𝙗𝙖𝙨𝘽𝙤𝙩-𝙈𝘿' 
global.author = '@𝙎𝙚𝙗𝙖𝙨' 

//--info FG
global.botName = '𝙎𝙚𝙗𝙖𝙨'
global.fgig = 'https://www.instagram.com/sebas.mvp_official0' 
global.fgsc = 'https://github.com/sebasmvpoficial/SebasBot-MD' 
global.fgyt = 'https://youtube.com/@sebastian_official0'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.id_canal = '120363177092661333@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029Va8Ykl3F1YlR60HF5N3p'
global.bgp = 'https://chat.whatsapp.com/IZKtfZefgWSJEPHvyIQrhN'
global.bgp2 = 'https://chat.whatsapp.com/IZKtfZefgWSJEPHvyIQrhN'
global.bgp3 = 'https://chat.whatsapp.com/IZKtfZefgWSJEPHvyIQrhN' //--GP SebasBot-MD

global.wait = '⌛ _Cargando..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
