import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Rock Paper Scissors';

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

    handleChoices = (playerChoice: string, cpuChoice: string) => {
        let winner: string | null = this.compareChoices(playerChoice, cpuChoice);
        this.endGame(winner, playerChoice, cpuChoice);
    }

    compareChoices = (playerChoice: string, cpuChoice: string): string | null => {
        let winner: string | null = null;
        if ((playerChoice === "rock" && cpuChoice === "scissors") ||
            (playerChoice === "paper" && cpuChoice === "rock") ||
            (playerChoice === "scissors" && cpuChoice === "paper")) {

            winner = "player";
        }
        else if ((playerChoice === "rock" && cpuChoice === "paper") ||
            (playerChoice === "paper" && cpuChoice === "scissors") ||
            (playerChoice === "scissors" && cpuChoice === "rock")) {

            winner = "cpu";
        }
        return winner;
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
