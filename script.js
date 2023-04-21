const startButton = document.getElementById("start")
const gridElement = document.querySelector(".grid")
const allTheCells = []
let playerPosition = 0
let target
startButton.addEventListener("click", startTheGame)

function startTheGame() {
	for (let i = 0; i < 100; i++) {
		createACell()
	}
	target = Math.floor(Math.random() * allTheCells.length - 1) + 1
	displayPlayer()
	displayTarget()
}

function displayTarget() {
	allTheCells[target].classList.add("target")
}

function displayPlayer() {
	allTheCells[playerPosition].classList.add("player")
}
// function startTheGame() {
// 	for (let row = 0; row < 10; row++) {
// 		for (let col = 0; col < 10; col++) {
// 			const div = document.createElement("div")
// 			div.classList.add("cell")
// 			div.setAttribute("row", row)
// 			div.setAttribute("col", col)
// 			gridElement.append(div)
// 		}
// 	}
// }

function createACell() {
	const div = document.createElement("div")
	div.classList.add("cell")
	gridElement.append(div)
	allTheCells.push(div)
}

function hidePlayer() {
	allTheCells[playerPosition].classList.remove("player")
}

function move(direction) {
	hidePlayer()
	if (direction === "right") {
		if ((playerPosition + 1) % 10 === 0) {
			return displayPlayer()
		}
		playerPosition += 1
	}

	if (direction === "left") {
		if (playerPosition % 10 === 0) {
			return displayPlayer()
		}
		playerPosition -= 1
	}
	if (direction === "up") {
		if (playerPosition < 10) {
			return displayPlayer()
		}
		playerPosition -= 10
	}
	if (direction === "down") {
		if (playerPosition >= 90) {
			return displayPlayer()
		}
		playerPosition += 10
	}
	displayPlayer()
	// console.log(allTheCells[playerPosition].classList.contains("target"))
	if (allTheCells[playerPosition].classList.contains("target")) {
		allTheCells[playerPosition].classList.remove("target")
	}
}

document.addEventListener("keydown", (event) => {
	console.log(event.key)
	switch (event.key) {
		case "ArrowRight":
			move("right")
			break
		case "ArrowLeft":
			move("left")
			break
		case "ArrowDown":
			move("down")
			break
		case "ArrowUp":
			move("up")
			break
	}
})

// setTimeout(() => {
// 	const w = Math.floor(Math.random() * 10),
// 		y = Math.floor(Math.random() * 10)
// 	document.querySelector(
// 		`.cell[row="${w}"][col="${y}"]`
// 	).style.backgroundColor = "blue"
// }, 5000)
