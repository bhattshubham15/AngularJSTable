import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { NewDirectiveDirective } from './new-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent,
    NewDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, NewComponentComponent]
})
export class AppModule { }
