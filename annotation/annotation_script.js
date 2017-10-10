var video = document.getElementById("a_classic");
var stanza = document.getElementById("lyrics");
video.addEventListener("timeupdate", function() {
	stanza.innerHTML = "<br />";
	if (video.currentTime > 9 && video.currentTime < 25)
		stanza.innerHTML += "Children have You ever met the Bogeyman before" + "<br />" + "No, of course You haven't for You're much too good, I'm sure;" + "<br />" + "Don't You be afraid of him if he should visit You," + "<br />" + "He's a great big coward, so I'll tell You what to do";
	else if (video.currentTime > 25 && video.currentTime < 41)
		stanza.innerHTML += "Hush, hush, hush, here comes the Bogeyman," + "<br />" + "Don't let him come too close to You, he'll catch you if he can." + "<br />" + "Just pretend that you're a crocodile" + "<br />" + "And you will find that Bogeyman will run away a mile.";
	else if (video.currentTime > 41 && video.currentTime < 57)
		stanza.innerHTML += "Say Shoo shoo and stick him with a pin" + "<br />" + "Bogeyman will very nearly jump out of his skin" + "<br />" + "Say buzz buzz just like the wasps that sting" + "<br />" + "Bogeyman will think you are an elephant with wings";
	else if (video.currentTime > 57 && video.currentTime < 73)
		stanza.innerHTML += "Hush, hush, hush, here comes the Bogeyman" + "<br />" + "Tell him you've got soldiers in your bed" + "<br />" + "For he will never guess that they are only made of lead";
	else if (video.currentTime > 73 && video.currentTime < 80.5)
		stanza.innerHTML = "<h2>***trumpet***</h2>";
	else if (video.currentTime > 80.5 && video.currentTime < 96)
		stanza.innerHTML += "Say Hush hush, he'll think that you're asleep" + "<br />" + "If you make a lovely snore away he'll softly creep" + "<br />" + "Sing this tune you children one and all" + "<br />" + "Bogeyman will run away, he'll think it's Henry Hall!";
	else if (video.currentTime > 96 && video.currentTime < 111.5)
		stanza.innerHTML += "When the shadows of the evening creep across the sky" + "<br />" + "And your Mummy comes upstairs to sing a lullaby" + "<br />" + "Tell her that the bogeyman no longer frightens you" + "<br />" + "Uncle Henry's very kindly told you what to do";
	else if (video.currentTime > 111.5 && video.currentTime < 127)
		stanza.innerHTML += "Hush, hush, hush, here comes the Bogeyman" + "<br />" + "Don't let him come too close to you, He'll catch you if he can." + "<br />" + "Just pretend your teddy bear's a dog" + "<br />" + "Then shout out, 'Fetch him, Teddy!' and he'll hop off like a frog.";
	else if (video.currentTime > 127 && video.currentTime < 135)
		stanza.innerHTML = "<h2>***frog***</h2>";
	else if (video.currentTime > 135 && video.currentTime < 151)
		stanza.innerHTML += "Say Meoow, pretend that you're a cat" + "<br />" + "He'll think you may scratch him that make him fall down flat" + "<br />" + "Just pretend he isn't really there" + "<br />" + "You will find that Bogey man will vanish in thin air";
	else if (video.currentTime > 151 && video.currentTime < 158.5)
		stanza.innerHTML = "<h2>***doop woop***</h2>";		
	else if (video.currentTime > 158.5 && video.currentTime < 166.5)
		stanza.innerHTML += "Here's one way to catch him without fail" + "<br />" + "Just keep a little salt with you" + "<br />" + "and put it on his tail";
	else if (video.currentTime > 166.5 && video.currentTime < 168)
		stanza.innerHTML = "<h2>*fin*</h2>";
	}, false);