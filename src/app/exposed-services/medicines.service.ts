
import {Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicines} from '../medi-list/medi-item.model';


@Injectable()
export class MedicineService{


    constructor(private http: HttpClient){

    }


    list(): Observable<any> {
    
                return this.http.get<Medicines[]>('/api/medicines');
        
            }
    
    filter(searchText: string): Observable<any> {
      
        return this.list().map(val => { 
            const temp = val.filter( item =>  item.medi_description.search(searchText) !== -1);
            return temp;
        });
    }

    getAvgRating(): Observable<any> {

       return this.list().map(val => {
        val.forEach(item => {

            let sum = 0;
            item.customers.forEach(element => {
            sum += element.customer_rating;
            });
            item.medi_avg_score = (Math.round(sum / item.customers.length)).toString();   
        
        })   
       
           return val;
        });
        
    }
    create( medicines: Medicines): Observable<any> {
         this.http.post<Medicines>('/api/medicines',{medicines});
         return this.list();
    }
    
    update( medicines: Medicines): Observable<any> {
    
        let params = new HttpParams().set('medicineId', medicines.medi_id);
        this.http.put<Medicines>('/api/medicines/:medicineId',{body: medicines},{ params: params});
        return this.list();
    }

    delete (medicines: Medicines): Observable<any>{
        
                let params = new HttpParams().set('medicineId', medicines.medi_id);
                 this.http.delete<Medicines>('/api/medicines/:medicineId',{ params: params});
                 return this.list();

    }
             
    findById(id : string): Observable<any> {
   
        return this.http.get<Medicines>('/api/medicines/'+id);
    }

}