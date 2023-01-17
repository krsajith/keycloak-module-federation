import { Component } from '@angular/core';
import { KeycloackService } from '../keycloack.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private keycloackService:KeycloackService){

  }
  logout() {
    this.keycloackService.keycloak.logout();
  }
}
