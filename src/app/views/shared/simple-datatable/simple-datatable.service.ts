import { Injectable } from '@angular/core';

@Injectable()
export class SimpleDatatableService {
    getPageCount(arrLength: number): Promise<any> {
		return Promise.resolve(true).then(() => {
			// default page limit is 10
			let value = Math.ceil(arrLength/10);
			let pages = new Array(value).join().split(',').map(function (item, index) {
				return ++index;
			});
			return pages;
		});
	}

	paginate(n: number, list: any[]): Promise<any> {
		return Promise.resolve(true).then(() => {
			return this.divide(n, list).map(function (items, index) {
				var number = n * index;
				return {
					start: number + 1,
					end: number + items.length,
					items: items
				};
			});
		});
	}

	take(n: number, list: any[]) {	
		return list.slice(0, n);
	} 

	drop(n: number, list: any[]) {
		return list.slice(n);
	}

	concat(lists: any[]) {
		return Array.prototype.concat.apply(this, lists);
	}

	divide(n: number, list: any[]):any[] {
		if(list.length) {
			var head = this.take(n, list);
			var tail = this.drop(n, list);
			return this.concat.call([head], [this.divide(n, tail)]);
		} else return [];
	}
}