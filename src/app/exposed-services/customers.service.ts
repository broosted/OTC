import { Injectable} from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../medi-list/medi-customer.model';


@Injectable()
export class CustomerService{

    constructor(private http: HttpClient){

    }

    list(): Observable<any> {
        
                return this.http.get<Customer[]>('api/customers');
        
            }

    create( customer: Customer): Observable<any> {
         this.http.post<Customer>('api/customers',customer).subscribe();
         return this.list();
    }
    
    update( customer: Customer): Observable<any> {
    
        let params = new HttpParams().set('customerId', customer.customer_id);
        this.http.put<Customer>('api/customers/:customerId',{body: customer},{ params: params});
        return this.list();
    }

    delete (customer: Customer): Observable<any>{
        
                let params = new HttpParams().set('customerId', customer.customer_id);
                 this.http.delete<Customer>('api/customers/:customerId',{ params: params});
                 return this.list();

    }
            
    
    findById(id : string): Observable<any> {
        let params = new HttpParams().set('customerId', id);
        return this.http.get<Customer>('api/customers/:customerId',{ params: params});

    }

   

}