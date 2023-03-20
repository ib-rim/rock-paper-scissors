import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChoiceButtonComponent } from './choice-button/choice-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoiceButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
