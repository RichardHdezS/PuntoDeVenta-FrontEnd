import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommService {
  private identity = new BehaviorSubject(null);
  identity$ = this.identity.asObservable();

  constructor() { }

  changeIdentity(data: string) {
    this.identity.next(data)
  }
}
