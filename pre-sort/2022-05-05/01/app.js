// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

const rps = (p1, p2) => {
    if (p1.toLowerCase() !== "rock" && p1.toLowerCase() !== "paper" && p1.toLowerCase() !== "scissors" && p2.toLowerCase() !== "rock" && p2.toLowerCase() !== "paper" && p2.toLowerCase() !== "scissors") {
        return "Oops, invalid entry!";
    }
    if (p1.toLowerCase() === p2.toLowerCase()) {
        return "Draw!";
    } else if ((p1.toLowerCase() === "rock" && p2.toLowerCase() === "scissors") || (p1.toLowerCase() === "scissors" && p2.toLowerCase() === "paper") || (p1.toLowerCase() === "paper" && p2.toLowerCase() === "rock")) {
        return "Player 1 won!";
    } else if ((p2.toLowerCase() === "rock" && p1.toLowerCase() === "scissors") || (p2.toLowerCase() === "scissors" && p1.toLowerCase() === "paper") || (p2.toLowerCase() === "paper" && p1.toLowerCase() === "rock")) {
        return "Player 2 won!";
    }
};

console.log(rps("scissors", "paper")); // Player 1 won!
console.log(rps("scissors", "rock")); // Player 2 won!
console.log(rps("paper", "paper")); // Draw!
