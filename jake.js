const discord = require('discord.js');

const jakeEmbed = new discord.MessageEmbed()
    .setColor('#FF3B3B')
    .setTitle('Jake')
    .setURL('https://discord.gg/ts8EjJWkyX')
    .setAuthor('jrsteck#0033')
    .setDescription(`Below is the bot's creator's socials :p`)
    .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'Discord server', value: 'https://discord.gg/ts8EjJWkyX' },
        { name: '\u200B', value: '\u200B' },
        { name: 'YouTube', value: 'https://bit.ly/2X1qQvM', inline: true },
        { name: 'Twitter', value: 'https://bit.ly/2X1qQvM', inline: true },
        { name: 'GitHub', value: 'https://bit.ly/395aXtV', inline: true },
    )
    .setImage('https://cdn.discordapp.com/attachments/791645179374338099/799659442584944650/jakelogo.png')
    .setFooter('jBot Support Server', 'https://discord.gg/ts8EjJWkyX')
    .setTimestamp(module.createdAt)

module.exports = {
    name: 'jake',
    description: `This command shows Jake's information!`,
    execute(message, args) {
        message.channel.send(jakeEmbed);
    }
};