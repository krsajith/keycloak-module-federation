import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeycloackService {

  authStatus = new BehaviorSubject<boolean>(false);

  keycloak = new Keycloak({
    url: 'https://auth-dev.hyreo.com',
    realm: 'linkedin-dev',
    clientId: 'crm-linkedin'
  });

  constructor() {
    const self = this;
    this.keycloak.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri:
        window.location.origin + '/assets/silent-check-sso.html',
        redirectUri: window.location.origin,
        responseMode: 'query',
    }).then(function (authenticated) {
      console.log(authenticated ? 'authenticated' : 'not authenticated');
      self.authStatus.next(authenticated);

    }).catch(function () {
      alert('failed to initialize');
    });
  }
}
