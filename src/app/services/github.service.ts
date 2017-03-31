import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username:string;
  private client_id ="03855cce968af06b8c9f";
  private client_secret = "fcb0a9875fd77f505a9f5870b501c33308f1cff4";

  constructor(private _http:Http) { 
    console.log("I am in");
    this.username= 'mraul1';
  }

  getUser(){
      return this._http.get("http://api.github.com/users/"+this.username)
        .map(res =>res.json());
  }
}
