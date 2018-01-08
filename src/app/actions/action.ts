
import { AppState } from './../store/store';
import { NgRedux } from '@angular-redux/store';
import { Injectable } from '@angular/core';

@Injectable()
export class Actions {

    static CREATE_CUSTOMER         = 'CREATE_CUSTOMER';
    static UPDATE_CUSTOMER         = 'UPDATE_CUSTOMER';
    static DELETE_CUSTOMER         = 'DELETE_CUSTOMER';

    static MEDICINE_GET_AVG_RATING = 'MEDICINE_GET_AVG_RATING';
    static CREATE_MEDICINE         = 'CREATE_MEDICINE';
    static UPDATE_MEDICINE         = 'UPDATE_MEDICINE';
    static DELETE_MEDICINE         = 'DELETE_MEDICINE';

    constructor(private ngRedux:     NgRedux<AppState>) {}

    createCustomer({
        customer_id                = '',
        customer_name              = '',
        customer_rating            = '',
        customer_review            = ''
    }                              = {}){
        this.ngRedux.dispatch({
            type:                    Actions.CREATE_CUSTOMER,
            customer:                {
                customer_id,
                customer_name,
                customer_rating,
                customer_review
            }
        });
    }

    updateCustomer({
        customer_id                = '',
        customer_name              = '',
        customer_rating            = '',
        customer_review            = ''
    }                              = {}, id     = ''){

        this.ngRedux.dispatch({
            type:                    Actions.UPDATE_CUSTOMER,
        id,
        customer:                    {
            customer_id,
            customer_name,
            customer_rating,
            customer_review
        }
    
        });
    }


    deleteCustomer(id              = ''){

        this.ngRedux.dispatch({
            type:                    Actions.DELETE_CUSTOMER ,
            id
        });

    }


    getAvgRating(rating:             string, id = ''){
        this.ngRedux.dispatch({
            type:                    Actions.MEDICINE_GET_AVG_RATING,
            id,
            rating
        })
    }


    createMedicine(
        {
        medi_id                    = 0,
        medi_img_url               = '',
        medi_description           = '',
        medi_avg_score             = '',
        customers                  = [{}]
    }                              = {}
    ){

        this.ngRedux.dispatch({
            type:                    Actions.CREATE_MEDICINE,
            medicine:                {
               
                medi_id,
                medi_img_url,
                medi_description,
                medi_avg_score,
                customers
            }
        });

    }
    updateMedicine(
        {medi_id                   = 0,
            medi_img_url           = '',
            medi_description       = '',
            medi_avg_score         = '',
            customers              = [{}]
        }                          = {}, id:      ''
    ){

        this.ngRedux.dispatch({
            type:                    Actions.UPDATE_MEDICINE,
            id,
            medicine:                {
                medi_id,
                medi_img_url,
                medi_description,
                medi_avg_score,
                customers

            }
        });
    }
    
    deleteMedicine(id              = ''){

        this.ngRedux.dispatch({
            type:                    Actions.DELETE_MEDICINE,
            id
        })
    }


}