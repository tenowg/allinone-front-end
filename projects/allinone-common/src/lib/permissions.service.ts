import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from './config.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {
  public perms: [];
  public groups: [];
  public corporations: [];
  private perm_sub;

  constructor(private http: HttpClient, private config: ConfigService) { }

  getCorps() {
    return this.http.get(this.config.config.api_server + '/corp/corps').pipe(
      catchError(this.handleError)
    );
  }

  getAlliances() {
    return this.http.get(this.config.config.api_server + '/alliance/alliances').pipe(
      catchError(this.handleError)
    );
  }

  getGroups() {
    return this.http.get(this.config.config.api_server + '/permissions/groups').pipe(
      catchError(this.handleError)
    );
  }
  getPerms() {
    return this.http.get(this.config.config.api_server + '/permissions/list-permissions').pipe(
      catchError(this.handleError)
    );
  }

  addPerm(name: string) {
    return this.http.post(this.config.config.api_server + '/permissions/create', {name: name}).pipe(
      catchError(this.handleError)
    );
  }

  saveUserPerms(user_id: number, groups: any) {
    return this.http.post(this.config.config.api_server + '/permissions/save-user/' + user_id, {permissions: groups}).pipe(
      catchError(this.handleError)
    );
  }

  savePerms(group: any) {
    return this.http.post(this.config.config.api_server + '/permissions/save', group).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
