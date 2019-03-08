import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';
import { NewserviceService } from './newservice.service';

@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NewserviceService],
  bootstrap: [AppComponent, NewcomponentComponent]
})
export class AppModule { }
