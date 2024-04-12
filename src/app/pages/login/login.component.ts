import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, InputTextModule, ReactiveFormsModule, FormsModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  /**
   *
   */
  constructor() { }

  username: string | undefined;
  password: string | undefined;

  Login(){
    console.log(this.username,this.password);
    this.fetchData();
  }
  
  httpClient = inject(HttpClient);
  ngOnInit(){ 
    this.fetchData();
  }
 
  

  fetchData(){
    this.httpClient.post('https://localhost:7144/api/LoginModels/login',{
      "email": this.username,
      "password": this.password
    },{responseType:'text'}).subscribe((data: any)=>{
      alert("login sucess")
     
      console.log("hellooo");
      
    },(error)=>{console.log("lol",error);})
  }



}
