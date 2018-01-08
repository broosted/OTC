import { Actions } from './../actions/action';
import { Action } from 'redux';
import { Customer } from './customers.interface';
import { Medicine } from './medicines.interface';


let cust: Customer = {
    customer_id:'',
    customer_name: '',
    customer_rating : 0,
    customer_review: '',
    _id: ''
};

let med: Medicine = {
    
        medi_id : '',
        medi_img_url: '',
        medi_description: '',
        medi_avg_score: '',
        customers : [cust],
        _id: ''

    
}

export interface AppState {

    customers : Customer[],
    medicines: Medicine[]
}

export const INITIAL_STATE: AppState = {
    customers : [cust],
    medicines : [med]
}


export function rootReducer(state: AppState, action: {type: '',customer: Customer, medicine: Medicine, id: '', rating: ''}): AppState {
    switch (action.type) {

        case Actions.CREATE_CUSTOMER : 	return { 
            customers: [
            ...state.customers,
            Object.assign({}, action.customer )],
            medicines: state.medicines
    }
        case Actions.UPDATE_CUSTOMER :
        return {
            customers: 	state.customers.map(el => {
				if(el._id === action.id)
				return Object.assign({}, el, action.customer);
            }),
            medicines: state.medicines
        }

        case Actions.DELETE_CUSTOMER : return {
            customers: state.customers.filter(el => el._id !== action.id ),
            medicines: state.medicines
        }

        case Actions.MEDICINE_GET_AVG_RATING : return { 
            customers: state.customers, 
            medicines: state.medicines.map(el => {
			if(el._id === action.id)
			return Object.assign({}, el, {medi_avg_score: action.rating});
        })
        
    }
        case Actions.CREATE_MEDICINE : return {
            
            customers: state.customers,
            medicines: [
            ...state.medicines,
            Object.assign({},action.medicine )]
        }
        case Actions.UPDATE_MEDICINE : return {
            
            customers: state.customers,
            medicines: state.medicines.map(el => {
			if(el._id === action.id)
			return Object.assign({}, el, action.medicine);
        })
        }

    case Actions.DELETE_MEDICINE :
     return {
         customers: state.customers,
         medicines: state.medicines.filter(el => el._id !== action.id)       
     }

      default: return state;
    }
  }