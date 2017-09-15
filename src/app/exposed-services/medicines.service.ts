
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
        let params = new HttpParams().set('medicineId', id);
        return this.http.get<Medicines>('/api/medicines/:medicineId',{ params: params});

    }

}