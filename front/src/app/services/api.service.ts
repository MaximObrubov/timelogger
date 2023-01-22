import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PreloaderService } from './preloader.service';
import { catchError, throwError,  Observable} from 'rxjs';
import { Timelog } from '../types/Timelog';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // TODO: use appropriabe backend address
  // apiUrl = "http://localhost:3000/timelogs"
  apiUrl = environment['API_HOST'] + "/timelogs";

  constructor(
    private http: HttpClient,
    private preloaderService: PreloaderService,
  ) {}

  create(timelog: Timelog): Observable<Timelog> {
    return this.http.post<Timelog>(this.apiUrl, timelog).pipe(
      catchError(this.handleError)
    )
  }

  list() {
    return this.http.get<[Timelog[], number]>(this.apiUrl).pipe(
      catchError(this.handleError)
    )
  }

  delete(id: number) {
    return this.http.delete(this.apiUrl + "/" + id).pipe(
      catchError(this.handleError)
    );
  }

  export() {
    return this.http.get<[Timelog[], number]>(this.apiUrl + "/export").pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
