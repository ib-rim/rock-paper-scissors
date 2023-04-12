import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChoiceButtonComponent } from './choice-button/choice-button.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ChoiceButtonComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Rock Paper Scissors'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Rock Paper Scissors');
  });

  it(`should give return player as the winner when choosing rock against scissors`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.compareChoices('rock', 'scissors')).toEqual('player');
  });

  it(`should give return player as the winner when choosing paper against rock`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.compareChoices('paper', 'rock')).toEqual('player');
  });

  it(`should give return player as the winner when choosing scissors against paper`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.compareChoices('scissors', 'paper')).toEqual('player');
  });

  it(`should return CPU as the winner when choosing scissors against rock`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.compareChoices('scissors', 'rock')).toEqual('cpu');
  });

  it(`should return CPU as the winner when choosing rock against paper`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.compareChoices('rock', 'paper')).toEqual('cpu');
  });

  it(`should return CPU as the winner when choosing paper against scissors`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.compareChoices('paper', 'scissors')).toEqual('cpu');
  });
});
