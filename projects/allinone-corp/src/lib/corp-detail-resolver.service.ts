import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CorpService } from 'allinone-common';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CorpDetailResolverService implements Resolve<any> {

  constructor(private corp: CorpService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Observable<never> {
    const id = route.paramMap.get('corp');

    return this.corp.getCorp(id).pipe(
      take(1),
      mergeMap(corp => {
        if (corp) {
          return of(corp);
        } else {
          this.router.navigate(['']);
          return EMPTY;
        }
      })
    );
  }
}
