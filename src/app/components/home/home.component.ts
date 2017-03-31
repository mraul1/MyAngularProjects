import { Component, OnInit } from '@angular/core';
import {GithubService} from '../../services/github.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {
    user: any[];
  constructor(private _githubService: GithubService) {
    this._githubService.getUser().subscribe(user =>{
      this.user=user;
      console.log(user);
    });
   }

  ngOnInit() {
  }

}
