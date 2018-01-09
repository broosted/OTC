import {Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine} from '../store/medicines.interface';
import { Customer } from '../store/customers.interface';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable()
export class MedicineService{


    constructor(private http: HttpClient,
        private messageService: MessageService){

    }


    list(): Observable<Medicine[]> {
    
                return this.http.get<Medicine[]>('/api/medicines') 
                .pipe(
                    tap(medicines => this.log(`list fetched medicines`)),
                    catchError(this.handleError('list', []))
                  )
        
            }
    
    filter(searchText: string): Observable<Medicine[]> {
      
        return this.http.get<Medicine[]>('/api/medicines').map((val:Medicine[]) => { 
            const temp = val.filter( (item:Medicine) =>  item.medi_description.search(searchText) !== -1);
            return temp;
        });
    }

    getAvgRating(): Observable<Medicine[]> {

       return this.list().map((val:Medicine[]) => {
        val.forEach((item:Medicine) => {

            let sum = 0;
            item.customers.forEach((element:Customer) => {
            sum += element.customer_rating;
            });
            item.medi_avg_score = (Math.round(sum / item.customers.length)).toString();   
        
        })   
       
           return val;
        });
        
    }
    create( medicine: Medicine): Observable<Medicine> {       
        return this.http.post<Medicine>('/api/medicines',medicine);
    }
    
    update( medicine: Medicine): Observable<any> {
    
      return this.http.put<Medicine>('/api/medicines/'+medicine._id,medicine);
      
    }

    delete (medicine: Medicine): Observable<any>{
           return     this.http.delete<Medicine>('/api/medicines/'+medicine._id);
    }
             
    findById(id : string): Observable<any> { 
        return this.http.get<Medicine>('/api/medicines/'+id);
    }



  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

       // TODO: better job of transforming error for user consumption
       this.log(`${operation} failed: ${error.message}`);


      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }


}