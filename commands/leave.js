module.exports = {
    name: "leave",
    handleEvent: true,

    async handleEvent({ api, event }) {
        if (event.logMessageType === "log:unsubscribe") {
            const threadID = event.threadID;
            const leftUserID = event.logMessageData.leftParticipantFbId;

            if (leftUserID === api.getCurrentUserID()) {
                return api.sendMessage("Goodbye everyone! I hope to see you again!", threadID);
            }

            try {
                const userInfo = await api.getUserInfo(leftUserID);
                const userName = userInfo[leftUserID]?.name || "Someone";

                api.sendMessage(`😢 ${userName} ay umalis sa group chat deserve muyan haha wag kana babalik ha!`, threadID);
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        }
    }
};
