module.exports = {
  name: "kick",
  category: "Admin",
  execute: async (api, event, args, commands, prefix, admins, appState, sendMessage) => {
    const { threadID, senderID, mentions } = event;

    if (!admins.includes(senderID)) {
      sendMessage(api, { threadID, message: "❌ hindi ka admin bugok!" });
      return;
    }

    if (Object.keys(mentions).length === 0) {
      sendMessage(api, { threadID, message: "❌ Please mention a user to kick master 🥇keijo gwapo × liane!" });
      return;
    }

    const targetUserID = Object.keys(mentions)[0];

    api.removeUserFromGroup(targetUserID, threadID, (err) => {
      if (err) {
        sendMessage(api, { threadID, message: "❌ Failed to kick user." });
      } else {
        sendMessage(api, { threadID, message: `✅ Successfully kicked ${mentions[targetUserID]}` });
      }
    });
  },
};
