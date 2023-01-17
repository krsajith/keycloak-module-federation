import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloackService } from '../keycloack.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private keycloackService:KeycloackService){

  }
  ngOnInit(): void {
    this.keycloackService.authStatus.subscribe(status=>{
      console.log(status);
      if(status){
        this.router.navigateByUrl(`/dashboard`);
        console.log(this.keycloackService.keycloak.token);
        this.keycloackService.keycloak.loadUserProfile().then(profile=> console.log(profile))
      }

      
    })
    // if (this.keycloackService.keycloak.authenticated) {

    //    console.log('Logged in');
    // }
    // // 
    // // ;
    
    // // 
      
    // }
  }

 login() {
    this.keycloackService.keycloak.login();
  }

   logout() {
    this.keycloackService.keycloak.logout();
  }
}
