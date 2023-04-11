import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-choice-button',
    templateUrl: './choice-button.component.html',
    styleUrls: ['./choice-button.component.scss']
})
export class ChoiceButtonComponent {
    @Input() label = '';
    @Output() playerChoice = new EventEmitter<string>();

    makeChoice() {
        this.playerChoice.emit(this.label);
    }
}
