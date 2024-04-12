import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CardModule,ButtonModule,InputTextModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  constructor() {
   
    
  }
  firstName: string | undefined;
  lastNmame: string | undefined;
  region: string | undefined;
  state: string |undefined;

  httpClient  = inject(HttpClient);




  addUser(){
    this.httpClient.post("https://localhost:7144/api/Users",
    {
      
      firstName: this.firstName,
      lastNmame: this.lastNmame,
      region: this.region,
      state: this.state
    }
    ).subscribe((response)=>{
      console.log(response);
      alert("user added sucessfully");
    },
    (error)=>{
      console.log(error);


    })


  }




}
