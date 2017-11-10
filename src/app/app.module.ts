import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { PriceService } from './price.service';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent ],
  providers: [ PriceService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
