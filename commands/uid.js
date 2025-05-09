module.exports = {

  name: "uid",

  category: "Utility",

  description: "Displays the UID of a mentioned, replied, or sender user.",

  usage: "/uid @tag or reply",

  author: "Aljur Pogoy",

  version: "1.0.0",

  async run({ api, event }) {

    const { threadID, senderID, messageID, messageReply, mentions } = event;

    let targetID;

    let targetName;

    if (Object.keys(mentions).length > 0) {

      targetID = Object.keys(mentions)[0];

      targetName = mentions[targetID];

    } else if (messageReply) {

      targetID = messageReply.senderID;

      targetName = "the replied user";

    } else {

      targetID = senderID;

      targetName = "sender";

    }

    const message = `====『 𝗨𝗦𝗘𝗥 𝗨𝗜𝗗 』====\n\n 𝗧𝗮𝗿𝗴𝗲𝘁: ${targetName}\n 𝗨𝗜𝗗: ${targetID}\n\n> Yan na uid mo boss.`;

    api.sendMessage(message, threadID, messageID);

  }

};