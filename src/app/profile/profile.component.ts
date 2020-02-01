import { Component, OnInit } from '@angular/core';
import { ProfService} from '../services/prof.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: any;
  repos: any;
  username: string;

  // profile = any;
  // { login: '',
  //   company: '',
  //   location: '',
  //   avatar_url: '',
  //   public_repos: '',
  //   public_gist: '',
  //   followers: '',
  //   following: '',
  //   email: '',
  //   bio: '',
  //   created_at: '',};
  // repos: any;
  // username: string;

  constructor(private service: ProfService) { 
    this.service.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.service.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    });
  }

  // findProfile(){
  //   this.service.updateProfile(this.username);

  //   this.service.getProfileInfo().subscribe(profile => {
  //     console.log(profile);
  //     this.profile = profile;
  //   });
  //   this.service.getProfileRepos().subscribe(repos =>{
  //     console.log(repos);
  //     this.repos = repos;
  //   });
  // }

  ngOnInit() {
    this.username = "Libb521"
    this.service.getProfileInfo().subscribe(profile => this.profile =profile);
    this.service.getProfileRepos().subscribe(repos => this.repos =repos);
  }

}
