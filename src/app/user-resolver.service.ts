import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesService } from './services.service';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<any> {

  constructor(private service:ServicesService) { }
  resolve(): Observable<any> {
    debugger;
    return this.service.printWord();
  }
}
