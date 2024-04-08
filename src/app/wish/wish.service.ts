import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from './models/wishItem';
import { catchError, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class WishService {
    constructor(private http: HttpClient) {}

    private getStandardOptions(): any {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'applications/json',
            }),
        };
    }

    getWishes() {
        const options = this.getStandardOptions();
        options.params = new HttpParams({
            fromObject: {
                format: 'json',
            },
        });

        return this.http.get('assets/wishes.json', options).pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        if (error.status === 0) {
            console.error('There is an issue on the client side', error.error);
        } else {
            console.error('Server-side error:', error.error);
        }

        return throwError(() => new Error('Cannot retrieve wishes from the server'));
    }

    private addWish(wish: WishItem) {
        const options = this.getStandardOptions();
        options.headers = options.headers.set('Authorization', 'bearer-token');

        // this.http.post(url, body, options);
    }
}
