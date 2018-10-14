
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private http: Http, private tokenService: Angular2TokenService) { }

  list() {
    return this.tokenService.get('stages').map(response => response.json());
  }

  get(id) {
    return this.tokenService.get('stages/' + id).map(response => response.json());
  }

  create(params) {
    return this.tokenService.post('stages', params).map(response => response.json());
  }

  update(id, params) {
    return this.tokenService.put('stages/' + id, params).map(response => response.json());
  }

  destroy(id) {
    return this.tokenService.delete('stages/' + id).map(response => response.json());
  }
}