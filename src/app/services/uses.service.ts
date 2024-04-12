import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsesService {
  private url = 'https://localhost:7144/api/Users';

  constructor(private httpClient:HttpClient) { }
  getPosts(){
    return this.httpClient.get(this.url);
  }
}
