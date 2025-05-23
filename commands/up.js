const os = require('os');

module.exports = {

  name: 'up',

  category: 'Utility',

  description: 'Shows the uptime of the Cid Kagenou bot.',

  author: 'aljur pogoy',

  version: '3.0.0',

  usage: '/up',

  async execute(api, event, args, commands, prefix, admins, appState, sendMessage) {

    const { threadID } = event;

    try {

      const uptimeSeconds = process.uptime();

      const uptimeMinutes = Math.floor(uptimeSeconds / 60);

      const uptimeHours = Math.floor(uptimeMinutes / 60);

      const uptimeDays = Math.floor(uptimeHours / 24);


      let uptimeMessage = `====『 🥇Ito yung buhay ni keijo matapos nyang makilala si liane 』====\n\n`;

      uptimeMessage += `  ╭─╮\n`;

      uptimeMessage += `  | 『 𝗨𝗣𝗧𝗜𝗠𝗘 』 ${uptimeDays} days, ${uptimeHours % 24} hours, ${uptimeMinutes % 60} minutes, ${Math.floor(uptimeSeconds % 60)} seconds\n`;

      uptimeMessage += `  ╰─────────────ꔪ\n\n`;

      uptimeMessage += `> 𝗧𝗵𝗮𝗻𝗸 𝘆𝗼𝘂 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝗼𝘂𝗿 KEIJO �_BOTV2\n`;

      uptimeMessage += `> 𝗙𝗼𝗿 𝗳𝘂𝗿𝘁𝗵𝗲𝗿 𝗮𝘀𝘀𝗶𝘀𝘁𝗮𝗻𝗰𝗲, 𝗰𝗼𝗻𝘁𝗮𝗰𝘁: https://www.facebook.com/c8py.link.kan4n4m4nb0b0`;

      sendMessage(api, { threadID, message: uptimeMessage });

    } catch (error) {

      console.error('❌ Error in up command:', error);

      sendMessage(api, { threadID, message: '❌ Error retrieving uptime.' });

    }

  },

};