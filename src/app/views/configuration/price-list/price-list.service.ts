import { Injectable } from '@angular/core';

@Injectable()
export class PriceListService {

    priceLists = [
        {
            type: 'DPL',
            id: '123123',
            creationDate: '01/02/2018 11:57 AM',
            expiryDate: '01/02/2018 11:57 AM',
            activated: true
        },
        {
            type: 'RPL',
            id: 'WSP',
            creationDate: '23/09/2011 03:24 PM',
            expiryDate: '01/02/2018 11:57 AM',
            activated: true
        },
        {
            type: 'DPL',
            id: 'DP',
            creationDate: '23/09/2011 03:24 PM',
            expiryDate: '01/02/2018 11:57 AM',
            activated: false
        },
        {
            type: 'MRP',
            id: 'MRP',
            creationDate: '23/09/2011 03:24 PM',
            expiryDate: '01/02/2018 11:57 AM',
            activated: true
        }
    ]

    all(): Promise<any[]> {
        return Promise.resolve(this.priceLists);
    }

    add(item): Promise<number> {
        return Promise.resolve(true).then(() => {
            this.priceLists.push(item);
            return 200;
        });
    }

    update(item): Promise<number> {
        return Promise.resolve(true).then(() => {
			let index = this.priceLists.findIndex((tsClass) => {
				return tsClass.id === item.id;
			});

			this.priceLists[index].type = item.type;
			this.priceLists[index].id = item.id;
            this.priceLists[index].creationDate = item.creationDate;
            this.priceLists[index].expiryDate = item.expiryDate;
            this.priceLists[index].activated = item.activated;

			return 200;
		});
    }

    remove(id): Promise<number> {
        return Promise.resolve(true).then(() => {
            let index;
            for (var i in this.priceLists) {
                if (this.priceLists[i].id == id) {
                    index = i;
                    this.priceLists.splice(index, 1);
                    return 200;
                }
            }
        });
    }
}