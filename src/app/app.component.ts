import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  loginForm;
  ngOnInit(){
  	this.loginForm= new FormGroup({
  		userid:new FormControl(),
  		password:new FormControl()
  	});
  }
login(){

	console.log(this.loginForm.value);
}

}
