module.exports = (roll, message, embed) => {
	const cp = [];
	let cpAmount = 0;
	for(let i = 0; i < 6; i++){
		const num = d6();
		cp.push(num);
		cpAmount += num;
	}
	const sp = [];
	let spAmount = 0;
	for(let i = 0; i < 3; i++){
		const num = d6();
		sp.push(num);
		spAmount += num;
	}
	const gp = [];
	let gpAmount = 0;
	for(let i = 0; i < 2; i++){
		const num = d6();
		gp.push(num);
		gpAmount += num;
	}
	// 0-6
	if(roll <= 6){
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**`, false);
		return message.channel.send({ embed });
	}
	// 7-16
	if(roll <= 16){
		const gemRolls = [];
		let gems = 0;
		for(let i = 0; i < 2; i++){
			const num = d6();
			gemRolls.push(num);
			gems += num;
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D6 - **10 GP Gems**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${gemRolls.join(", ")} (${gems})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${gems} **10 GP Gems**`, false);
		return message.channel.send({ embed });
	}
	// 17-26
	if(roll <= 26){
		const artRolls = [];
		let art = 0;
		for(let i = 0; i < 2; i++){
			const num = d4();
			artRolls.push(num);
			art += num;
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D4 - **25 GP Art Objects**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${artRolls.join(", ")} (${art})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${art} **25 GP Art Objects**`, false);
		return message.channel.send({ embed });
	}
	// 27-36
	if(roll <= 36){
		const gemRolls = [];
		let gems = 0;
		for(let i = 0; i < 2; i++){
			const num = d6();
			gemRolls.push(num);
			gems += num;
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D6 - **50 GP Gems**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${gemRolls.join(", ")} (${gems})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${gems} **50 GP Gems**`, false);
		return message.channel.send({ embed });
	}
	// Magic Item Table A
	// 37-44
	if(roll <= 44){
		const gemRolls = [];
		let gems = 0;
		for(let i = 0; i < 2; i++){
			const num = d6();
			gemRolls.push(num);
			gems += num;
		}
		let rollItems = '';
		const rollAmount = d6();
		const rollNumbers = [];
		for(let i = 0; i < rollAmount; i++){
			const tableA = require("./itemTables/MagicItemTableA.js");
			const num = Math.floor(Math.random() * 100 + 1);
			rollNumbers.push(num);
			rollItems += tableA(num);
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D6 - **10 GP Gems**
1 D6 - **Magic Item Table A**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${gemRolls.join(", ")} (${gems})
${rollAmount} (${rollNumbers.join(", ")})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${gems} **10 GP Gems**
${rollItems}`, false);
		return message.channel.send({ embed });
	}
	// 45-52
	if(roll <= 52){
		const artRolls = [];
		let art = 0;
		for(let i = 0; i < 2; i++){
			const num = d4();
			artRolls.push(num);
			art += num;
		}
		let rollItems = '';
		const rollAmount = d6();
		const rollNumbers = [];
		for(let i = 0; i < rollAmount; i++){
			const tableA = require("./itemTables/MagicItemTableA.js");
			const num = Math.floor(Math.random() * 100 + 1);
			rollNumbers.push(num);
			rollItems += tableA(num);
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D4 - **25 GP Art Objects**
1 D6 - **Magic Item Table A**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${artRolls.join(", ")} (${art})
${rollAmount} (${rollNumbers.join(", ")})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${art} **25 GP Art Objects**
${rollItems}`, false);
		return message.channel.send({ embed });
	}
	// 53-60
	if(roll <= 60){
		const gemRolls = [];
		let gems = 0;
		for(let i = 0; i < 2; i++){
			const num = d6();
			gemRolls.push(num);
			gems += num;
		}
		let rollItems = '';
		const rollAmount = d6();
		const rollNumbers = [];
		for(let i = 0; i < rollAmount; i++){
			const tableA = require("./itemTables/MagicItemTableA.js");
			const num = Math.floor(Math.random() * 100 + 1);
			rollNumbers.push(num);
			rollItems += tableA(num);
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D6 - **50 GP Gems**
1 D6 - **Magic Item Table A**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${gemRolls.join(", ")} (${gems})
${rollAmount} (${rollNumbers.join(", ")})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${gems} **50 GP Gems**
${rollItems}`, false);
		return message.channel.send({ embed });
	}
	// Magic Item Table B
	// 61-65
	if(roll <= 65){
		const gemRolls = [];
		let gems = 0;
		for(let i = 0; i < 2; i++){
			const num = d6();
			gemRolls.push(num);
			gems += num;
		}
		let rollItems = '';
		const rollAmount = d6();
		const rollNumbers = [];
		for(let i = 0; i < rollAmount; i++){
			const tableA = require("./itemTables/MagicItemTableB.js");
			const num = Math.floor(Math.random() * 100 + 1);
			rollNumbers.push(num);
			rollItems += tableA(num);
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D6 - **10 GP Gems**
1 D6 - **Magic Item Table B**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${gemRolls.join(", ")} (${gems})
${rollAmount} (${rollNumbers.join(", ")})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${gems} **10 GP Gems**
${rollItems}`, false);
		return message.channel.send({ embed });
	}
	// 66-70
	if(roll <= 70){
		const artRolls = [];
		let art = 0;
		for(let i = 0; i < 2; i++){
			const num = d4();
			artRolls.push(num);
			art += num;
		}
		let rollItems = '';
		const rollAmount = d6();
		const rollNumbers = [];
		for(let i = 0; i < rollAmount; i++){
			const tableA = require("./itemTables/MagicItemTableB.js");
			const num = Math.floor(Math.random() * 100 + 1);
			rollNumbers.push(num);
			rollItems += tableA(num);
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D4 - **25 GP Art Objects**
1 D6 - **Magic Item Table B**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${artRolls.join(", ")} (${art})
${rollAmount} (${rollNumbers.join(", ")})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${art} **25 GP Art Objects**
${rollItems}`, false);
		return message.channel.send({ embed });
	}
	// 71-75
	if(roll <= 75){
		const gemRolls = [];
		let gems = 0;
		for(let i = 0; i < 2; i++){
			const num = d6();
			gemRolls.push(num);
			gems += num;
		}
		let rollItems = '';
		const rollAmount = d6();
		const rollNumbers = [];
		for(let i = 0; i < rollAmount; i++){
			const tableA = require("./itemTables/MagicItemTableB.js");
			const num = Math.floor(Math.random() * 100 + 1);
			rollNumbers.push(num);
			rollItems += tableA(num);
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D6 - **50 GP Gems**
1 D6 - **Magic Item Table B**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${gemRolls.join(", ")} (${gems})
${rollAmount} (${rollNumbers.join(", ")})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${gems} **50 GP Gems**
${rollItems}`, false);
		return message.channel.send({ embed });
	}
	// Magic Item Table C
	// 76-78
	if(roll <= 78){
		const gemRolls = [];
		let gems = 0;
		for(let i = 0; i < 2; i++){
			const num = d6();
			gemRolls.push(num);
			gems += num;
		}
		let rollItems = '';
		const rollAmount = d6();
		const rollNumbers = [];
		for(let i = 0; i < rollAmount; i++){
			const tableA = require("./itemTables/MagicItemTableC.js");
			const num = Math.floor(Math.random() * 100 + 1);
			rollNumbers.push(num);
			rollItems += tableA(num);
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D6 - **10 GP Gems**
1 D6 - **Magic Item Table C**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${gemRolls.join(", ")} (${gems})
${rollAmount} (${rollNumbers.join(", ")})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${gems} **10 GP Gems**
${rollItems}`, false);
		return message.channel.send({ embed });
	}
	// 79-80
	if(roll <= 80){
		const artRolls = [];
		let art = 0;
		for(let i = 0; i < 2; i++){
			const num = d4();
			artRolls.push(num);
			art += num;
		}
		let rollItems = '';
		const rollAmount = d6();
		const rollNumbers = [];
		for(let i = 0; i < rollAmount; i++){
			const tableA = require("./itemTables/MagicItemTableC.js");
			const num = Math.floor(Math.random() * 100 + 1);
			rollNumbers.push(num);
			rollItems += tableA(num);
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D4 - **25 GP Art Objects**
1 D6 - **Magic Item Table C**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${artRolls.join(", ")} (${art})
${rollAmount} (${rollNumbers.join(", ")})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${art} **25 GP Art Objects**
${rollItems}`, false);
		return message.channel.send({ embed });
	}
	// 81-85
	if(roll <= 85){
		const gemRolls = [];
		let gems = 0;
		for(let i = 0; i < 2; i++){
			const num = d6();
			gemRolls.push(num);
			gems += num;
		}
		let rollItems = '';
		const rollAmount = d6();
		const rollNumbers = [];
		for(let i = 0; i < rollAmount; i++){
			const tableA = require("./itemTables/MagicItemTableC.js");
			const num = Math.floor(Math.random() * 100 + 1);
			rollNumbers.push(num);
			rollItems += tableA(num);
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D6 - **50 GP Gems**
1 D6 - **Magic Item Table C**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${gemRolls.join(", ")} (${gems})
${rollAmount} (${rollNumbers.join(", ")})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${gems} **50 GP Gems**
${rollItems}`, false);
		return message.channel.send({ embed });
	}
	// Magic Item Table F
	// 86-92
	if(roll <= 92){
		const artRolls = [];
		let art = 0;
		for(let i = 0; i < 2; i++){
			const num = d4();
			artRolls.push(num);
			art += num;
		}
		let rollItems = '';
		const rollAmount = d6();
		const rollNumbers = [];
		for(let i = 0; i < rollAmount; i++){
			const tableA = require("./itemTables/MagicItemTableF.js");
			const num = Math.floor(Math.random() * 100 + 1);
			rollNumbers.push(num);
			rollItems += tableA(num);
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D4 - **25 GP Gems**
1 D6 - **Magic Item Table F**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${artRolls.join(", ")} (${art})
${rollAmount} (${rollNumbers.join(", ")})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${art} **25 GP Gems**
${rollItems}`, false);
		return message.channel.send({ embed });
	}
	// 93-97
	if(roll <= 97){
		const gemRolls = [];
		let gems = 0;
		for(let i = 0; i < 2; i++){
			const num = d6();
			gemRolls.push(num);
			gems += num;
		}
		let rollItems = '';
		const rollAmount = d6();
		const rollNumbers = [];
		for(let i = 0; i < rollAmount; i++){
			const tableA = require("./itemTables/MagicItemTableF.js");
			const num = Math.floor(Math.random() * 100 + 1);
			rollNumbers.push(num);
			rollItems += tableA(num);
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D6 - **50 GP Gems**
1 D6 - **Magic Item Table F**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${gemRolls.join(", ")} (${gems})
${rollAmount} (${rollNumbers.join(", ")})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${gems} **50 GP Gems**
${rollItems}`, false);
		return message.channel.send({ embed });
	}
	// Magic Item Table G
	// 98-99
	if(roll <= 99){
		const artRolls = [];
		let art = 0;
		for(let i = 0; i < 2; i++){
			const num = d4();
			artRolls.push(num);
			art += num;
		}
		let rollItems = '';
		const rollAmount = d6();
		const rollNumbers = [];
		for(let i = 0; i < rollAmount; i++){
			const tableA = require("./itemTables/MagicItemTableG.js");
			const num = Math.floor(Math.random() * 100 + 1);
			rollNumbers.push(num);
			rollItems += tableA(num);
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D4 - **25 GP Art Objects**
1 D6 - **Magic Item Table G**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${artRolls.join(", ")} (${art})
${rollAmount} (${rollNumbers.join(", ")})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${art} **25 GP Art Objects**
${rollItems}`, false);
		return message.channel.send({ embed });
	}
	// Magic Item Table G
	// 100
	if(roll === 100){
		const gemRolls = [];
		let gems = 0;
		for(let i = 0; i < 2; i++){
			const num = d6();
			gemRolls.push(num);
			gems += num;
		}
		let rollItems = '';
		const rollAmount = d6();
		const rollNumbers = [];
		for(let i = 0; i < rollAmount; i++){
			const tableA = require("./itemTables/MagicItemTableG.js");
			const num = Math.floor(Math.random() * 100 + 1);
			rollNumbers.push(num);
			rollItems += tableA(num);
		}
		embed.addField("Loot Class:", `6 D6 x100 - **Copper Pieces**
3 D6 x100 - **Silver Pieces**
2 D6 x10 - **Gold Pieces**
2 D6 - **50 GP Gems**
1 D6 - **Magic Item Table G**`, true)
			.addField("Item Rolls:", `${cp.join(", ")} (${cpAmount})
${sp.join(", ")} (${spAmount})
${gp.join(", ")} (${gpAmount})
${gemRolls.join(", ")} (${gems})
${rollAmount} (${rollNumbers.join(", ")})`, true)
			.addBlankField(true)
			.addField("Final Loot:", `${cpAmount * 100} **Copper Pieces**
${spAmount * 100} **Silver Pieces**
${gpAmount * 10} **Gold Pieces**
${gems} **50 GP Gems**
${rollItems}`, false);
		return message.channel.send({ embed });
	}

};
