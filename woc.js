const Discord = require("discord.js");

const wocEmbed = new Discord.MessageEmbed()
    .setColor('#0086FF')
    .setTitle('World of Coding')
    .setURL('https://discord.gg/XTsCQNd')
    .setAuthor('jrsteck#0033')
    .setDescription(`Below are World of Coding's social links and discord server :p`)
    .addFields(
        { name: '\u200B', value: '\u200B' },
        { name: 'Discord Server', value: 'https://discord.gg/XTsCQNd' },
        { name: '\u200B', value: '\u200B' },
        { name: 'YouTube', value: 'https://bit.ly/3aOFGxL', inline: true },
        { name: 'Twitter', value: 'https://bit.ly/2MkcUe7', inline: true },
        { name: 'GitHub', value: 'https://bit.ly/38InAe5', inline: true },
    )
    .setImage('https://media.discordapp.net/attachments/738486780029960294/743142019161129420/Animated_GIF-downsized_4.gif')
    .setFooter('jBot Support Server', 'https://discord.gg/ts8EjJWkyX')

module.exports = {
    name: 'woc',
    description: `This command shows World of Coding's information!`,
    execute(message, args) {
        message.channel.send(wocEmbed);
    }
};

