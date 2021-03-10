$(document).ready(function () {
	function randomGenerator() {
		let choices = [
			"As I see it, yes.",
			"Ask again later.",
			"Better not tell you now.",
			"Cannot predict now.",
			" Concentrate and ask again.",
			"Don’t count on it.",
			"It is certain.",
			"It is decidedly so.",
			"Most likely.",
			"My reply is no.",
			"My sources say no.",
			"Outlook not so good.",
			"Outlook good.",
			"Reply hazy, try again.",
			"Signs point to yes",
			"Very doubtful.",
			"Without a doubt.",
			"Yes.",
			"Yes – definitely.",
			"You may rely on it.",
		];
		let randomString = choices[Math.floor(Math.random() * choices.length)];

		let newAnswer = $("#answerInput").val();

		console.log(newAnswer);

	



		if (newAnswer === "" || newAnswer === null || !newAnswer.includes("?")) {
			return alert("Please refresh and ask a valid question");
		} else {
			const element = document.querySelector(".animatebutton");
			element.classList.add("animated", "shake");
			setTimeout(function () {
				element.classList.remove("shake");
			}, 1000);
			return $("#answer").text(randomString);
		}
	}

	$("#animatebutton").click(randomGenerator);
});
