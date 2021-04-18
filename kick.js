const { description } = require("./help");

module.exports = {
    name: 'kick',
    description: 'Kick command',
    async execute(message, args) {
        let member = message.mentions.users.first();
        if (member)
            args[0] = member.id;
        let memberTarget = message.guild.members.cache.find(m => m.id == args[0])
        console.log(memberTarget);
        if (memberTarget) {
            memberTarget.kick();
            message.channel.send(`${memberTarget.user.username}#${memberTarget.user.discriminator} has been kicked!`);
        } else {
            message.channel.send(`Invalid user`)
        }
    }
}