import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultBoxComponent } from './components/result-box/result-box.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ResultBoxComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
