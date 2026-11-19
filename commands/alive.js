module.exports = async (sock, m, args, extra = {}) => {
  try {
    const pushname = m.pushName || 'User';
    const up = process.uptime();
    const h = Math.floor(up / 3600);
    const min = Math.floor((up % 3600) / 60);
    const s = Math.floor(up % 60);
    const uptime = `${h}h ${min}m ${s}s`;
    const start = Date.now();
    const speed = Date.now() - start;
    const date = new Date().toLocaleString('en-GB', { timeZone: 'Africa/Harare' });

    const aliveText = `╔═════《 〘 𝘼€𝙀-𝙈𝘿 〙 》═════╗
║̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇
║̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇─̣─̇
║╚═════《 〘 𝘼€𝙀-𝙈𝘿 〙 》═════╝
║
║◆━━━━━━━━━━◆💎◆━━━━━━━━━━◆
║💎 𝐀€𝐄-𝐌𝐃 // 𝐕𝟏 💎
║⚡ _Diamond Tech Core_ ⚡
║◆━━━━━━━━━━◆💎◆━━━━━━━━━━◆
║
┌───〔 𝐀€𝐄-𝐌𝐃 〕─────✦
✦ Owner: Tinashe Muchoza
✦ Commands: 105
✦ Runtime: ${uptime}
✦ Prefix: .
✦ Mode: Public
✦ Version: 1.0.0
✦ Speed: ${speed}ms ⚡
✦ User: ${pushname} 💎
✦ Date: ${date}
└───────────────✦

╔════════◇◆◇═══════╗
├ *💎 𝐀€𝐄-𝐌𝐃 𝐈𝐒 𝐀𝐋𝐈𝐕𝐄 💎*
├▢🟢 Status: *Online*
├▢👑 Owner: *Tinashe Muchoza*
├▢⚡ Speed: *${speed}ms*
├▢⏱️ Uptime: *${uptime}*
╚════════◇◆◇═══════╝

> *Bot Is Ready To Work 💎*
> Type *.menu* to explore commands!`;

    const jid = m.key.remoteJid;
    await sock.sendMessage(jid, { image: { url: './assets/menu_image.jpg' }, caption: aliveText }, { quoted: m });
  } catch (e) {
    console.log('Alive Error:', e);
  }
};

module.exports.command = ['alive', 'bot', 'online'];
module.exports.category = 'General';
