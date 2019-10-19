const Discord = require("discord.js");
const character = require("dnd-npc");
const roles = require("./npc/roles.json");
const races = require("./npc/races.json");
exports.run = async (client, message, args) => {

	if(!args[0] || !args[1]) return await message.channel.send("Usage: [npc](<..race> <..role/class>)", { code: "markdown" });

	const npcRace = (races.includes(args[0].toLowerCase())) ? args[0].toLowerCase() : undefined;
	const npcRole = (roles.includes(args[1].toLowerCase())) ? args[1].toLowerCase() : undefined;
	if(!npcRace || !npcRole) return await message.channel.send("Usage: [npc](<..race> <..role/class>)", { code: "markdown" });

	const npc = new character({ raceType: npcRace, roleType: npcRole }).generate();

	let stats = "";
	for(const [key, value] of Object.entries(npc.class.stats)){
		stats += `**${key.toProperCase()}** :: ${value}\n`;
	}

	const weapon = (npc.inventory.shield) ? `[${npc.inventory.weapon.name}](${npc.inventory.weapon.link}) & [Shield](${npc.inventory.shield})` : `[${npc.inventory.weapon.name}](${npc.inventory.weapon.link})`;
	const armor = (npc.inventory.armor) ? `[${npc.inventory.armor.name}](${npc.inventory.armor.link})` : "None";

	let tools = "None";
	if(npc.inventory.tools.length > 0){
		tools = [];
		npc.inventory.tools.forEach(t => {
			tools.push(`[${t.name}](${t.link})`);
		});
		tools = tools.join(", ");
	}

	const charInfo = `**Race/ Subrace:**
		[${npc.race.name}](${npc.race.link})
		**Class:**
		[${npc.class.name}](https://www.dndbeyond.com/classes/${npc.class.link})
		**Gender:**
		${npc.character.gender}
		**Speed:**
		${npc.race.speed}
		\u200b
		**Weapon:**
		${weapon}
		**Armor:**
		${armor}
		**Tools:**
		${tools}`;

	const embed = new Discord.MessageEmbed()
		.setAuthor(npc.character.name)
		.setFooter(client.user.username, client.user.displayAvatarURL())
		.setTimestamp()
		.addField("Misc Information", charInfo.removeIndents(), true)
		.addField("**Stats**", `${stats}`, true);

	return message.channel.send({ embed }).catch(e => errFunc(e));
};

exports.conf = {
	enabled: true,
	allowDM: true,
	aliases: ["n"],
	permLevel: 0,
};

exports.help = {
	name: "npc",
	category: "Dungeons & Dragons",
	description: "Creates a semi-random NPC",
	usage: "race job/class",
};
