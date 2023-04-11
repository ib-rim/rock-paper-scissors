import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'rock-paper-scissors';

    randomChoice = (): string => {
        let choice: string = "rock";
        let num: number = Math.floor(Math.random() * 3);
        if (num === 1) {
            choice = "paper";
        }
        else if (num === 2) {
            choice = "scissors";
        }
        return choice;
    }

    compareChoices = (playerChoice: string, cpuChoice: string) => {
        if (playerChoice === cpuChoice) {
            this.endGame(null, playerChoice, cpuChoice);
        }
        else if ((playerChoice === "rock" && cpuChoice === "scissors") ||
            (playerChoice === "paper" && cpuChoice === "rock") ||
            (playerChoice === "scissors" && cpuChoice === "paper")) {

            this.endGame("player", playerChoice, cpuChoice);
        }
        else if ((playerChoice === "rock" && cpuChoice === "paper") ||
            (playerChoice === "paper" && cpuChoice === "scissors") ||
            (playerChoice === "scissors" && cpuChoice === "rock")) {

            this.endGame("cpu", playerChoice, cpuChoice);
        }
    }

    endGame = (winner: string | null, playerChoice: string, cpuChoice: string) => {
        console.log(`Player: ${playerChoice} vs CPU: ${cpuChoice}`);
        if (winner === "player") {
            console.log("You win!");
        }
        else if (winner === "cpu") {
            console.log("You lose!")
        }
        else {
            console.log("Draw!")
        }
    }
}
