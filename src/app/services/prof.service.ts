import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfService {

  public username: string;
  public apiKey: '85493ea390c295a8a5f18d4f337a163eabb0c17f';


  constructor(public http:HttpClient) {
    console.log("service ready for use!");
    this.username = 'Libb521';
   }
   getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?access_tokens=85493ea390c295a8a5f18d4f337a163eabb0c17f")
   }

   getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_tokens=85493ea390c295a8a5f18d4f337a163eabb0c17f")
   }
   updateProfile(username:string){
     this.username = username;
   }
}
