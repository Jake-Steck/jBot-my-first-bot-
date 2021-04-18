module.exports = {
    name: 'clear',
    description: "Clear message",
    async execute(message, args) {
        if (!args[0]) return message.reply("Please enter the amount of messages you would like to clear.")
        if (isNaN(args[0])) return message.reply("Please enter an int!")

        if (args[0] > 100) return message.reply("You can not clear more than 100 messsages")
        if (args[0] < 1) return message.reply("You must clear at least 1 message")

        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}