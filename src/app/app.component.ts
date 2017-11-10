import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myService:MyserviceService = new MyserviceService();

  loginForm;
  ngOnInit(){
  	this.loginForm= new FormGroup({
  		userid:new FormControl(),
  		password:new FormControl()
  	});
  }
login(){
  console.log(this.myService.getData());
	console.log(this.loginForm.value);
}

}
