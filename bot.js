const Discord = require('discord.js')
const Client = new Discord.Client()

Client.login('NDU1Mjg4Mzk4MjQ5MzI4NjUw.D3qryw.hcv1H3wwx75-r5W80b4rafqK-Dc').then(async () => {
    console.log(`Ligado em ${Client.user.tag}`)
})
Client.on('message', async message => {
    if (message.author.id === '455288398249328650') {
        let prefix = '!'
        const args = message.content.slice(prefix.length).trim().split(' ') 
        if (message.content.startsWith(`${prefix}avatar`)) {
            Client.user.setAvatar(args[1]).then(async () => {
                await message.reply(Client.user.displayAvatarURL)
            })
        }
    }
})
