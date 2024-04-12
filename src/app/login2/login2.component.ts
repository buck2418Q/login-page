import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { response } from 'express';

import Swal from 'sweetalert2';
import { register } from 'module';

@Component({
  selector: 'app-login2',
  standalone: true,
  imports: [CardModule,FormsModule,ButtonModule,InputTextModule],
  templateUrl: './login2.component.html',
  styleUrl: './login2.component.css'
})
export class Login2Component {
  
  /**
   *
   */
  constructor(private router : Router) {}
  email:string |undefined;
  password: string | undefined;

  httpClient = inject(HttpClient);

  handleLogin(){
    this.httpClient.post("https://localhost:7144/api/LoginModels/login",
    {Email:this.email,Password:this.password},{responseType:"text"})
    .subscribe((response)=>{console.log(response);
      Swal.fire("login sucess");
      this.router.navigate(['/register']);

    },(error)=>{console.log(error)});
    
  }
  

}
