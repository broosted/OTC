import { Injectable} from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../medi-list/medi-customer.model';
import { Medicines } from '../medi-list/medi-item.model';


@Injectable()
export class CustomerService {

    constructor(private http: HttpClient) {

    }

    list(): Observable<any> {
    return this.http.get<Customer[]>('api/customers');
    }

    custbelongtoMed(medid: string){
        return this.http.get<Customer[]>('api/medicines/'+medid+'/customers');
    }
    
    create( customer: Customer): Observable<any> {
         this.http.post<Customer>('api/customers', customer).subscribe();
        
         return this.list();
    }
    update( customer: Customer): Observable<any> {
        this.http.put<Customer>('api/customers/' + customer.customer_id, {body: customer}).subscribe();
       
        return this.list();
    }

    delete (customer_id: string): Observable<any>{
                 this.http.delete<Customer>('api/customers/'+customer_id).subscribe();
                 return this.list();

    }
    findById(id: string): Observable<any> {
       
        return this.http.get<Customer>('api/customers/'+id);

    }

}
