import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

export function handleError(error: HttpErrorResponse) {
    let message = '';
    if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        // console.error('An error occurred:', error.error.message);
        message = 'An error occurred:' + error.error.message;

    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        // console.error(
        //     `Backend returned code ${error.status}, ` +
        //     `body was: ${error.error}`);

        message = `Backend returned code ${error.status}, ` + `body was: ${error.error}`;
        if (error.status === 404) {
            // console.log('Not Found Error');
            message = error.error || 'Not Found Error';
        } else if (error.status === 400) {
            // console.log('Bad Request Error');
            message = error.error || 'Bad Request Error';
        } else if (error.status === 401) {
            // console.log("Here....");
            // console.log('Un Authenticated');
            message = error.error || 'Un Authenticated';
        } else if (error.status === 409) {
            // console.log("Here....");
            // console.log('Conflict / Precondition Failed');
            message = error.error || 'Conflict / Precondition Failed';
        } else if (error.status === 412) {
            // console.log("Here....");
            // console.log('Conflict / Precondition Failed');
            message = error.error || 'Conflict / Precondition Failed';
        } else if (error.status === 500) {
            // console.log("Here....");
            // console.log('Internal Server Failed');
            message = 'Internal Server';
        } else if (error.status === 503) {
            // console.log("Here....");
            // console.log('Service Unavailable');
            message = error.error || 'Service Unavailable';
        } else {
            // console.error(
            //     `Backend returned code ${error.status}, ` +
            //     `body was: ${error.error}`);
            message = `Backend returned code ${error.status}, ` + `body was: ${error.error}`;
        }
    }

    return throwError(message);
}

export class ErrorHandlerService {

    constructor() {
    }

}
