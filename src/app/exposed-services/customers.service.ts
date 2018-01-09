import { Customer } from './../store/customers.interface';
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { mergeMap } from 'rxjs/operators';


@Injectable()
export class CustomerService {



    constructor(private http: HttpClient,
        private messageService: MessageService) {

    }

    list(): Observable<Customer[]> {
        return this.http.get<Customer[]>('api/customers')
            .pipe(
            tap(customers => this.log(`fetched customers`)),
            catchError(this.handleError('list', []))
            );
    }

    custbelongtoMed(medid: string): Observable<Customer[]> {

        return this.http.get<Customer[]>('api/medicines/' + medid + '/customers')
            .pipe(
            tap(customers => this.log(`fetched customers for medicine medid = $ {medid}`)),
            catchError(this.handleError('custbelongtoMed', []))
            );
    }

    create(customer: Customer, medId: string): Observable<any> {

        let alpha = this.http.post<Customer>('api/customers/', customer)
            .pipe(
            tap((custo: Customer) => this.log(`added customer w/ id = $ {custo._id}`)),
            mergeMap((cust: Customer) => {
                return this.http.post<Customer>('api/medicines/' + medId + '/customers/' + cust._id, cust)
            }),

            catchError(this.handleError<Customer>('addCustomer'))
            );


        return alpha;
    }

    update(customer: Customer, id: string): Observable<Customer> {

        return this.http.put<Customer>('api/customers/' + id, customer).pipe(
            tap(_ => this.log(`updated hero id = $ {id}`)),
            catchError(this.handleError<Customer>('updateCustomer'))
        );
    }

    delete(id: string): Observable<Customer> {
        return this.http.delete<Customer>('api/customers/' + id).pipe(
            tap(_ => this.log(`deleted customer id = $ {id}`)),
            catchError(this.handleError<Customer>('deleteHero'))
        );
    }
    findById(id: string): Observable<any> {

        return this.http.get<Customer>('api/customers/' + id)
            .pipe(
            tap(_ => this.log(`findById fetched customer id = $ {id}`)),
            catchError(this.handleError<Customer>(`findById id = $ {id}`))
            ).publish().refCount();

    }


    /**
         * Handle Http operation that failed.
         * Let the app continue.
         * @param operation - name of the operation that failed
         * @param result - optional value to return as the observable result
         */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`$ {operation}failed:$ {error.message}`);


            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }


    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add('HeroService: ' + message);
    }


}
