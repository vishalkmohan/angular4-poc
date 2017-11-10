import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,ReactiveFormsModule,FormsModule],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
