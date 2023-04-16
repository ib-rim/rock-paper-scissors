import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'Rock Paper Scissors';
    gameEnded: boolean = false;
    showResult: boolean = false;
    resultText: string = '';
    playerChoice: string = '';
    cpuChoice: string = '';

    restartGame = () => {
        this.gameEnded = false;
        this.showResult = false;
        this.resultText = '';
        this.playerChoice = '';
        this.cpuChoice = '';
    }

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
        this.gameEnded = true;
        this.playerChoice = playerChoice;
        setTimeout(() => {
            this.cpuChoice = cpuChoice;
            if (winner === "player") {
                this.resultText = "YOU WIN";
            }
            else if (winner === "cpu") {
                this.resultText = "YOU LOSE";
            }
            else {
                this.resultText = "DRAW";
            }
        }, 1000);
        setTimeout(() => {
            this.showResult = true;
        }, 2000);
    }
}
