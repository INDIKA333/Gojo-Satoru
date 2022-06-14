//═══════════════════════════════════════════════════════//
//
//                              KING-丅IǤǤᗴᖇ 𝓫𝔂 KING 丅IǤǤᗴᖇ
//prabhash laknindu king 丅IǤǤᗴᖇ COPY BY gojo sataru
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['94704045022']
global.premium = ['94704045022']
global.ownernomer = '94704045022'
global.ownername = 'KING 丅IǤǤᗴᖇ'
global.botname = 'PrAbHaShA LaKnInDu 丅IǤǤᗴᖇ'
global.footer = '©gojobotcopy丅IǤǤᗴᖇ.'
global.ig = 'https://github.com/nexusNw'
global.region = 'India, South India, Kerala'
global.sc = 'https://github.com/nexusNw/Gojo-Satoru'
global.myweb = 'https://youtube.com/channel/UCqoUjPvDdb0kjXNYdvPPpHQ'
global.packname = 'king 丅IǤǤᗴᖇ'
global.author = 'king 丅IǤǤᗴᖇ'
global.sessionName = 'session'
global.prefa = ['','!','.','👑','🐅','☣️']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'අයිති කරුට පමණි!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'අයිතිකරුට පමණි!',
    group: 'ගරූප් පමනි!',
    private: 'පුද්ගලික ගනුදෙනු සදහා පමනි!',
    bot: 'ඔබට කල නොහැකි දෙයකි',
    wait: 'Wait A minute...',
    error: 'Error! Maybe Api Key Is Expired🤔!',
    endLimit: 'භාවිතා කල හැකි කාලය අවසානයි. The Limit Will Be Reset Every 12 Hours',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
