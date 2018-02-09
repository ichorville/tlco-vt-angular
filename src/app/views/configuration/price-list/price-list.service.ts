import { Injectable } from '@angular/core';

@Injectable()
export class PriceListService {

    priceLists = [
        {
            type: 'DPL',
            id: '123123',
            creationDate: '01/02/2018 11:57 AM',
            expiryDate: '01/02/2018 11:57 AM'
        },
        {
            type: 'RPL',
            id: 'WSP',
            creationDate: '23/09/2011 03:24 PM',
            expiryDate: '01/02/2018 11:57 AM'
        },
        {
            type: 'DPL',
            id: 'DP',
            creationDate: '23/09/2011 03:24 PM',
            expiryDate: '01/02/2018 11:57 AM'
        },
        {
            type: 'MRP',
            id: 'MRP',
            creationDate: '23/09/2011 03:24 PM',
            expiryDate: '01/02/2018 11:57 AM'
        }
    ]
}