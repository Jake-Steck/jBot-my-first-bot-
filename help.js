const Discord = require("discord.js");
let prefix = '*';


const helpEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle("jBot Help Commands")
    .setAuthor("jrsteck#3300", "https://cdn.discordapp.com/attachments/782048991353372683/799683664744546334/original.gif")
    .setDescription("The help command for jBot!")
    .addFields(
        { name: `Command: ${prefix}woc`, value: "\u200B", value: "This command will display all of World of Coding's information!" },
        { name: `Command: ${prefix}jake`, value: "\u200B", value: "This command will display all of Jake's information!" },
        { name: `Command: ${prefix}clear <int>`, value: "\u200B", value: "This command will clear the indicated amount of messages!" }
    )
    .setFooter("jbot Help Commands", "https://cdn.discordapp.com/attachments/791645179374338099/799659442584944650/jakelogo.png")
    .setTimestamp(module.createdAt)



module.exports = {
    name: 'help',
    description: 'this is a help command!',
    execute(message, args) {
        message.channel.send(helpEmbed);
    }
};