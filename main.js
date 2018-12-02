const jokes = [
	'A guy walks up to a widow at her husband\'s funeral and says, "May I just say one word?"\r\n"Sure," she replies.\r\n"Plethora."\r\nThe widow says, "Thanks, that means a lot."',
	"What's red and bad for your teeth?\r\nA brick.",
	"What's the dumbest animal in the jungle?\r\nA polar bear.",
	"Why did Edward Woodward have so many 'd's in his name?\r\nBecause without them, he would've been called Ewar Woowar.",
	"What do you get when you cross a joke with a rhetorical question?",
	"What's brown and sticky?\r\nA stick.",
	"What's blue and not very heavy?\r\nLight blue.",
	"What's red and smells like blue paint?\r\nRed paint.",
	"What's black, white, and red all over?\r\nA badger in a blender.",
	'A priest, a rabbi, and a whale walk into a bar.\r\nThe priest walks up to the bartender and says, "Since I believe that our Lord and Savior has appeared on this Earth as Jesus Christ, I shall drink sacramental wine.\r\nThe rabbi walks up the bartender and says, "Since I do not believe our Lord and Savior has appeared on this Earth and am still waiting for him, I shall drink manishewitz wine."\r\nThe whale walks up the bartender and says, "EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE."',
	"Say what you want about deaf people.",
	"Why can't hedgehogs just share the hedge?",
	"A Spanish magician told his audience that he was going to vanish on the count of three. He counted, \"Uno, dos...\" and he disappeared without a tres.",
	"What do you call a pair of Mexican firefighters?\r\nJose and Hose B.",
	"A plateau is the highest form of flattery.",
	"What did one nut say to the other nut?\r\n\"I'm a cashew.\"",
	"I saw a nice stereo being sold for $1. The seller said that volume was stuck on 'high.'\r\nI couldn't turn it down.",
	"Two fish are in a tank. One looks at the other and says, \"You man the gun; I'll drive.\"",
	"Two soldiers are in a tank. One looks at the other says, \"BLUBLUBLUBLUBLUBLUBLUBLUBLUBLUB.\"",
	"I have many jokes about unemployed people. Sadly, none of them work.",
	"What do you call a magic dog? A labracadabrador.",
	"Steak jokes are a rare medium well done.",
	"Why do scuba divers jump backwards out of the boat?\r\nBecause if they jumped forwards, they'd still be in the boat.",
	'What do we want?\r\n"Airplane noises!"\r\nWhen do we want them?\r\n"Nyeow!"',
	"My fake plant did because I forgot to pretend to water it.",
	"Two men walked into a bar and the third guy ducked.",
	"Two cows are standing in a field. The first cow says to the second, \"Have you heard about this mad cow disease? It makes cows ago crazy and then they die.\" The second cow replies, \"Good thing I'm a helicopter.\"",
	"An Irishman walks out of a bar.",
	"What did the janitor say when he jumped out of the closet?\r\n\"Supplies!\"",
	"Where did Napoleon keep his armies?\r\nIn his sleevies!",
	
]

function nextJoke() {
	//Get the current jokes viewed
	var wordsUsed = document.cookie.substring(document.cookie.indexOf("jokesViewed")).substring(document.cookie.indexOf(";")).split(",");
	wordsUsed.shift();
	//Should return something like ["1","2","3"]
	
	var random = Math.floor(Math.random() * jokes.length)
	if (!wordsUsed.includes("" + random) || hasSeenAll(wordsUsed)){
		document.getElementById("joke").textContent = jokes[random];
		document.cookie = "jokesViewed=," + wordsUsed.toString() + "," + random;
	} else {
		nextJoke();
	}
}

function hasSeenAll(wordsUsed){
	for (var i = 0; i < jokes.length; i++){
		if (!wordsUsed.includes("" + i)){
			return false;
		}
	}
	return true;
}

window.onload = nextJoke;