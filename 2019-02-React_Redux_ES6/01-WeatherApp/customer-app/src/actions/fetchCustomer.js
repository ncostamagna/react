import { createAction } from 'redux-actions'
import { FETCH_CUSTOMERS } from "./../constants";
import {apiGet} from './../api'
import {urlCustomers} from './../api/urls'

export const fetchCustomer = createAction(FETCH_CUSTOMERS, apiGet(urlCustomers));
