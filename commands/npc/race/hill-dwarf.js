exports.run = async (character) => {
	character.race = "Hill Dwarf";
	character.speed = 25;
	return character;
};

exports.stats = async (character) => {
	character.stats.constitution += 2;
	character.stats.wisdom += 1;
	return character;
};

exports.info = {
	name: "hill-dwarf",
	aliases: ["hilldwarf"],
};