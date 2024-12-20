import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeapiserviceService {

  private http = inject(HttpClient)

  get<T>(url: string): Observable<T>{
    return this.http.get<T>(url).pipe(catchError((err)=>{
      console.error("Unable to fetch data",err);
      return throwError(()=> new Error(err));
    }));
  }
}
