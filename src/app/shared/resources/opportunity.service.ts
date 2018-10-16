import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  constructor(private http: Http, private tokenService: Angular2TokenService) { }

  list() {
    return this.tokenService.get('opportunities').map(response => response.json());
  }

  get(id) {
    return this.tokenService.get('opportunities/' + id).map(response => response.json());
  }

  create(params) {
    return this.tokenService.post('opportunities', params).map(response => response.json());
  }

  update(id, params) {
    return this.tokenService.put('opportunities/' + id, params).map(response => response.json());
  }

  destroy(id) {
    return this.tokenService.delete('opportunities/' + id).map(response => response.json());
  }
}